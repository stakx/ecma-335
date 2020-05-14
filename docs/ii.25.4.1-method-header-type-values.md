## II.25.4.1 Method header type values

The two least significant bits of the first byte of the method header indicate what type of header is present. These 2 bits will be one and only one of the following:

 Value | Value | Description
 ---- | ---- | ----
 `CorILMethod_TinyFormat` | 0x2 | The method header is tiny (§[II.25.4.2](ii.25.4.2-tiny-format.md)).
 `CorILMethod_FatFormat` | 0x3 | The method header is fat (§[II.25.4.3](ii.25.4.3-fat-format.md)).
