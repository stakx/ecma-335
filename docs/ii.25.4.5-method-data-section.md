## II.25.4.5 Method data section

At the next 4-byte boundary following the method body can be extra method data sections. These method data sections start with a two byte header (1 byte for flags, 1 byte for the length of the actual data) or a 4-byte header (1 byte for flags, and 3 bytes for length of the actual data). The first byte determines the kind of the header, and what data is in the actual section:

 Flag | Value | Description
 ---- | ---- | ----
 `CorILMethod_Sect_EHTable` | 0x1 | Exception handling data.
 `CorILMethod_Sect_OptILTable` | 0x2 | Reserved, shall be 0.
 `CorILMethod_Sect_FatFormat` | 0x40 | Data format is of the fat variety, meaning there is a 3-byte length least-significant byte first format. If not set, the header is small with a 1-byte length
 `CorILMethod_Sect_MoreSects` | 0x80 | Another data section occurs after this current section

Currently, the method data sections are only used for exception tables (§[II.19](#todo-missing-hyperlink)). The layout of a small exception header structure as is a follows: 

 Offset | Size | Field | Description
 ---- | ---- | ---- | ---- 
 0 | 1 | **Kind** | Flags as described above.
 1 | 1 | **DataSize** | Size of the data for the block, including the header, say *n*\*12+4.
 2 | 2 | **Reserved** | Padding, always 0.
 4 | *n* | **Clauses** | *n* small exception clauses (§[II.25.4.6](#todo-missing-hyperlink)).

The layout of a fat exception header structure is as follows: 

 Offset | Size | Field | Description
 ---- | ---- | ---- | ---- 
0 | 1 | **Kind** | Which type of exception block is being used
1 | 3 | **DataSize** | Size of the data for the block, including the header, say *n*\*24+4.
4 | *n* | **Clauses** | *n* fat exception clauses (§[II.25.4.6](#todo-missing-hyperlink)).
