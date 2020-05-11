## II.25.2.3.2 PE header Windows NT-specific fields

These fields are Windows NT specific:

 Offset | Size | Field | Description
 ---- | ---- | ---- | ----
 28 | 4 | Image Base | Shall be a multiple of 0x10000.
 32 | 4 | Section Alignment | Shall be greater than File Alignment.
 36 | 4 | File Alignment | Should be 0x200 (§[II.24.1](#todo-missing-hyperlink)).
 40 | 2 | OS Major | Should be 5 (§[II.24.1](#todo-missing-hyperlink)).
 42 | 2 | OS Minor | Should be 0 (§[II.24.1](#todo-missing-hyperlink)).
 44 | 2 | User Major | Should be 0 (§[II.24.1](#todo-missing-hyperlink)).
 46 | 2 | User Minor | Should be 0 (§[II.24.1](#todo-missing-hyperlink)).
 48 | 2 | SubSys Major | Should be 5 (§[II.24.1](#todo-missing-hyperlink)).
 50 | 2 | SubSys Minor | Should be 0 (§[II.24.1](#todo-missing-hyperlink)).
 52 | 4 | Reserved | Shall be zero
 56 | 4 | Image Size | Size, in bytes, of image, including all headers and padding; shall be a multiple of Section Alignment.
 60 | 4 | Header Size | Combined size of MS-DOS Header, PE Header, PE Optional Header and padding; shall be a multiple of the file alignment.
 64 | 4 | File Checksum | Should be 0 (§[II.24.1](#todo-missing-hyperlink)).
 68 | 2 | SubSystem | Subsystem required to run this image. Shall be either `IMAGE_SUBSYSTEM_WINDOWS_CUI` (0x3) or `IMAGE_SUBSYSTEM_WINDOWS_GUI` (0x2).
 70 | 2 | DLL Flags | Bits 0x100f shall be zero.
 72 | 4 | Stack Reserve Size | Should be 0x100000 (1Mb) (§[II.24.1](#todo-missing-hyperlink)).
 76 | 4 | Stack Commit Size | Should be 0x1000 (4Kb) (§[II.24.1](#todo-missing-hyperlink)).
 80 | 4 | Heap Reserve Size | Should be 0x100000 (1Mb) (§[II.24.1](#todo-missing-hyperlink)).
 84 | 4 | Heap Commit Size | Should be 0x1000 (4Kb) (§[II.24.1](#todo-missing-hyperlink)).
 88 | 4 | Loader Flags | Shall be 0
 92 | 4 | Number of Data Directories | Shall be 0x10
