## II.25.3 Section headers

Immediately following the optional header is the Section Table, which contains a number of section headers. This positioning is required because the file header does not contain a direct pointer to the section table; the location of the section table is determined by calculating the location of the first byte after the headers.

Each section header has the following format, for a total of 40 bytes per entry:

 Offset | Size | Field | Description
 ---- | ---- | ---- | ----
 0 | 8 | Name | An 8-byte, null-padded ASCII string. There is no terminating null if the string is exactly eight characters long.
 8 | 4 | VirtualSize | Total size of the section in bytes. If this value is greater than SizeOfRawData, the section is zero-padded.
 12 | 4 | VirtualAddress | For executable images this is the address of the first byte of the section, when loaded into memory, relative to the image base.
 16 | 4 | SizeOfRawData | Size of the initialized data on disk in bytes, shall be a multiple of FileAlignment from the PE header. If this is less than VirtualSize the remainder of the section is zero filled. Because this field is rounded while the VirtualSize field is not it is possible for this to be greater than VirtualSize as well. When a section contains only uninitialized data, this field should be 0.
 20 | 4 | PointerToRawData | Offset of section's first page within the PE file. This shall be a multiple of FileAlignment from the optional header. When a section contains only uninitialized data, this field should be 0.
 24 | 4 | PointerToRelocations | Should be 0 (§[II.24.1](ii.24.1-fixed-fields.md)).
 28 | 4 | PointerToLinenumbers | Should be 0 (§[II.24.1](ii.24.1-fixed-fields.md)).
 32 | 2 | NumberOfRelocations | Should be 0 (§[II.24.1](ii.24.1-fixed-fields.md)).
 34 | 2 | NumberOfLinenumbers | Should be 0 (§[II.24.1](ii.24.1-fixed-fields.md)).
 36 | 4 | Characteristics | Flags describing section's characteristics; see below.

The following table defines the possible characteristics of the section.

 Flag | Value | Description
 ---- | ---- | ----
 `IMAGE_SCN_CNT_CODE` | 0x00000020 | Section contains code.
 `IMAGE_SCN_CNT_INITIALIZED_DATA` | 0x00000040 | Section contains initialized data.
 `IMAGE_SCN_CNT_UNINITIALIZED_DATA` | 0x00000080 | Section contains uninitialized data.
 `IMAGE_SCN_MEM_EXECUTE` | 0x20000000 | Section can be executed as code.
 `IMAGE_SCN_MEM_READ` | 0x40000000 | Section can be read.
 `IMAGE_SCN_MEM_WRITE` | 0x80000000 | Section can be written to.
