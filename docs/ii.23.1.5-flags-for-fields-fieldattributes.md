## II.23.1.5 Flags for fields [FieldAttributes]

 Flag | Value | Description
 ---- | ---- | ----
 **FieldAccessMask** | 0x0007 | These 3 bits contain one of the following values:
 &emsp;`CompilerControlled` | 0x0000 | Member not referenceable
 &emsp;`Private` | 0x0001 | Accessible only by the parent type
 &emsp;`FamANDAssem` | 0x0002 | Accessible by sub-types only in this Assembly
 &emsp;`Assembly` | 0x0003 | Accessibly by anyone in the Assembly
 &emsp;`Family` | 0x0004 | Accessible only by type and sub-types
 &emsp;`FamORAssem` | 0x0005  | Accessibly by sub-types anywhere, plus anyone in assembly
 &emsp;`Public` | 0x0006 | Accessibly by anyone who has visibility to this scope field contract attributes
 `Static` | 0x0010 | Defined on type, else per instance
 `InitOnly` | 0x0020 | Field can only be initialized, not written to after init
 `Literal` | 0x0040 | Value is compile time constant
 `NotSerialized` | 0x0080 | Reserved (to indicate this field should not be serialized when type is remoted)
 `SpecialName` | 0x0200 | Field is special
 **Interop Attributes** | &nbsp; | &nbsp;
 `PInvokeImpl` | 0x2000 | Implementation is forwarded through PInvoke.
 **Additional flags** | &nbsp; | &nbsp;
 `RTSpecialName` | 0x0400 | CLI provides 'special' behavior, depending upon the name of the field
 `HasFieldMarshal` | 0x1000 | Field has marshalling information
 `HasDefault` | 0x8000 | Field has default
 `HasFieldRVA` | 0x0100 | Field has RVA
