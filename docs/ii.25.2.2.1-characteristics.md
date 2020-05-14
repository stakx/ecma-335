## II.25.2.2.1 Characteristics

A CIL-only DLL sets flag 0x2000 to 1, while a CIL-only `.exe` has flag 0x2000 set to zero:

 Flag | Value | Description
 ---- | ---- | ----
 `IMAGE_FILE_RELOCS_STRIPPED` | 0x0001 | Shall be zero
 `IMAGE_FILE_EXECUTABLE_IMAGE` | 0x0002 | Shall be one
 `IMAGE_FILE_32BIT_MACHINE` | 0x0100 | Shall be one if and only if `COMIMAGE_FLAGS_32BITREQUIRED` is one (§[25.3.3.1](#todo-missing-hyperlink))
 `IMAGE_FILE_DLL` | 0x2000 | The image file is a dynamic-link library (DLL).

For the flags not mentioned above, flags 0x0010, 0x0020, 0x0400 and 0x0800 are implementationspecific, and all others should be zero (§[II.24.1](ii.24.1-fixed-fields.md)).
