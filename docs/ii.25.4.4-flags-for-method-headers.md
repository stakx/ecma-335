## II.25.4.4 Flags for method headers

The first byte of a method header can also contain the following flags, valid only for the Fat format, that indicate how the method is to be executed:

 Flag | Value | Description
 ---- | ---- | ----
 `CorILMethod_FatFormat` | 0x3 | Method header is fat.
 `CorILMethod_TinyFormat` | 0x2 | Method header is tiny.
 `CorILMethod_MoreSects` | 0x8 | More sections follow after this header (§[II.25.4.5](ii.25.4.5-method-data-section.md)).
 `CorILMethod_InitLocals` | 0x10 | Call default constructor on all local variables.
