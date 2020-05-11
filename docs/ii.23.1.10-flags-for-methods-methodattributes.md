## II.23.1.10 Flags for methods [MethodAttributes]

 Flag | Value | Description
 ---- | ---- | ----
 **`MemberAccessMask`** | 0x0007 | These 3 bits contain one of the following values:
 &emsp;`CompilerControlled` | 0x0000 | Member not referenceable
 &emsp;`Private` | 0x0001 | Accessible only by the parent type
 &emsp;`FamANDAssem` | 0x0002 | Accessible by sub-types only in this Assembly
 &emsp;`Assem` | 0x0003 | Accessibly by anyone in the Assembly
 &emsp;`Family` | 0x0004 | Accessible only by type and sub-types
 &emsp;`FamORAssem` | 0x0005 | Accessibly by sub-types anywhere, plus anyone in assembly
 &emsp;`Public` | 0x0006 | Accessibly by anyone who has visibility to this scope
 `Static` | 0x0010 | Defined on type, else per instance
 `Final` | 0x0020 | Method cannot be overridden
 `Virtual` | 0x0040 | Method is virtual
 `HideBySig` | 0x0080 | Method hides by name+sig, else just by name
 **`VtableLayoutMask`** | 0x0100 | Use this mask to retrieve vtable attributes. This bit contains one of the following values:
 &emsp;`ReuseSlot` | 0x0000 | Method reuses existing slot in vtable
 &emsp;`NewSlot` | 0x0100 | Method always gets a new slot in the vtable
 `Strict` | 0x0200 | Method can only be overriden if also accessible
 `Abstract` | 0x0400 | Method does not provide an implementation
 `SpecialName` | 0x0800 | Method is special
 **Interop attributes** | &nbsp; | &nbsp;
 `PInvokeImpl` | 0x2000 | Implementation is forwarded through PInvoke
 `UnmanagedExport` | 0x0008 | Reserved: shall be zero for conforming implementations
 **Additional flags** | &nbsp; | &nbsp;
 `RTSpecialName` | 0x1000 | CLI provides 'special' behavior, depending upon the name of the method
 `HasSecurity` | 0x4000 | Method has security associate with it
 `RequireSecObject` | 0x8000 | Method calls another method containing security code.
