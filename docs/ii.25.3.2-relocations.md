## II.25.3.2 Relocations

In a pure CIL image, a single fixup of type `IMAGE_REL_BASED_HIGHLOW` (0x3) is required for the x86 startup stub which access the IAT to load the runtime engine on down level loaders. When building a mixed CIL/native image or when the image contains embedded RVAs in user data, the relocation section contains relocations for these as well.

The relocations shall be in their own section, named "`.reloc`", which shall be the final section in the PE file. The relocation section contains a Fixup Table. The fixup table is broken into blocks of fixups. Each block represents the fixups for a 4K page, and each block shall start on a 32-bit boundary.

Each fixup block starts with the following structure:

 Offset | Size | Field | Description
 ---- | ---- | ---- | ----
 0 | 4 | PageRVA | The RVA of the block in which the fixup needs to be applied. The low 12 bits shall be zero.
 4 | 4 | Block Size | Total number of bytes in the fixup block, including the Page RVA and Block Size fields, as well as the Type/Offset fields that follow, rounded up to the next multiple of 4.

The Block Size field is then followed by (BlockSize - 8)/2 Type/Offset. Each entry is a word (2 bytes) and has the following structure (if necessary, insert 2 bytes of 0 to pad to a multiple of 4 bytes in length):

 Offset | Size | Field | Description
 ---- | ---- | ---- | ----
 0 | 4 bits | Type | Stored in high 4 bits of word. Value indicating which type of fixup is to be applied (described above)
 0 | 12 bits | Offset | Stored in remaining 12 bits of word. Offset from starting address specified in the Page RVA field for the block. This offset specifies where the fixup is to be applied.

