## II.23.1.8 Flags for ImplMap [PInvokeAttributes]

 Flag | Value | Description
 ---- | ---- | ----
 `NoMangle` | 0x0001 | PInvoke is to use the member name as specified
 **Character set** | &nbsp; | &nbsp;
 **`CharSetMask`** | 0x0006 | This is a resource file or other non-metadata-containing file. These 2 bits contain one of the following values:
 &emsp;`CharSetNotSpec` | 0x0000 | &nbsp;
 &emsp;`CharSetAnsi` | 0x0002 | &nbsp;
 &emsp;`CharSetUnicode` | 0x0004 | &nbsp;
 &emsp;`CharSetAuto` | 0x0006 | &nbsp;
 `SupportsLastError` | 0x0040 | Information about target function. Not relevant for fields
 **Calling convention** | &nbsp; | &nbsp;
 `CallConvMask` | 0x0700 | These 3 bits contain one of the following values:
 &emsp;`CallConvPlatformapi` | 0x0100 | &nbsp;
 &emsp;`CallConvCdecl` | 0x0200 | &nbsp;
 &emsp;`CallConvStdcall` | 0x0300 | &nbsp;
 &emsp;`CallConvThiscall` | 0x0400 | &nbsp;
 &emsp;`CallConvFastcall` | 0x0500 | &nbsp;
