## II.23.1.11 Flags for methods [MethodImplAttributes]

 Flag | Value | Description
 ---- | ---- | ----
 **`CodeTypeMask`** | 0x0003 | These 2 bits contain one of the following values:
 &emsp;`IL` | 0x0000 | Method impl is CIL
 &emsp;`Native` | 0x0001 | Method impl is native
 &emsp;`OPTIL` | 0x0002 | Reserved: shall be zero in conforming implementations
 &emsp;`Runtime` | 0x0003 | Method impl is provided by the runtime
 **`ManagedMask`** | 0x0004 | Flags specifying whether the code is managed or unmanaged. This bit contains one of the following values:
 &emsp;`Unmanaged` | 0x0004 | Method impl is unmanaged, otherwise managed
 &emsp;`Managed` | 0x0000 | Method impl is managed
 **Implementation info and interop** | &nbsp; | &nbsp;
 `ForwardRef` | 0x0010 | Indicates method is defined; used primarily in merge scenarios
 `PreserveSig` | 0x0080 | Reserved: conforming implementations can ignore
 `InternalCall` | 0x1000 | Reserved: shall be zero in conforming implementations
 `Synchronized` | 0x0020 | Method is single threaded through the body
 `NoInlining` | 0x0008 | Method cannot be inlined
 `MaxMethodImplVal` | 0xffff | Range check value
 `NoOptimization` | 0x0040 | Method will not be optimized when generating native code
