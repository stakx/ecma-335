## II.23.1.15 Flags for types [TypeAttributes]

 Flag | Value | Description
 ---- | ---- | ----
 **Visibility attributes** | &nbsp; | &nbsp;
 **`VisibilityMask`** | 0x00000007 | Use this mask to retrieve visibility information. These 3 bits contain one of the following values:
 &emsp;`NotPublic` | 0x00000000 | Class has no public scope
 &emsp;`Public` | 0x00000001 | Class has public scope
 &emsp;`NestedPublic` | 0x00000002 | Class is nested with public visibility
 &emsp;`NestedPrivate` | 0x00000003 | Class is nested with private visibility
 &emsp;`NestedFamily` | 0x00000004 | Class is nested with family visibility
 &emsp;`NestedAssembly` | 0x00000005 | Class is nested with assembly visibility
 &emsp;`NestedFamANDAssem` | 0x00000006 | Class is nested with family and assembly visibility
 &emsp;`NestedFamORAssem` | 0x00000007 | Class is nested with family or assembly visibility
 **Class layout attributes** | &nbsp; | &nbsp;
 **`LayoutMask`** | 0x00000018 | Use this mask to retrieve class layout information. These 2 bits contain one of the following values:
 &emsp;`AutoLayout` | 0x00000000 | Class fields are auto-laid out
 &emsp;`SequentialLayout` | 0x00000008 | Class fields are laid out sequentially
 &emsp;`ExplicitLayout` | 0x00000010 | Layout is supplied explicitly
 **Class semantics attributes** | &nbsp; | &nbsp;
 **`ClassSemanticsMask`** | 0x00000020 | Use this mask to retrive class semantics information. This bit contains one of the following values:
 &emsp;`Class` | 0x00000000 | Type is a class
 &emsp;`Interface` | 0x00000020 | Type is an interface
 **Special semantics in addition to class semantics** | &nbsp; | &nbsp;
 `Abstract` | 0x00000080 | Class is abstract
 `Sealed` | 0x00000100 | Class cannot be extended
 `SpecialName` | 0x00000400 | Class name is special
 **Implementation Attributes** | &nbsp; | &nbsp;
 `Import` | 0x00001000 | Class/Interface is imported
 `Serializable` | 0x00002000 | Reserved (Class is serializable)
 **String formatting Attributes** | &nbsp; | &nbsp;
 **`StringFormatMask`** | 0x00030000 | Use this mask to retrieve string information for native interop. These 2 bits contain one of the following values:
 &emsp;`AnsiClass` | 0x00000000 | `LPSTR` is interpreted as ANSI
 &emsp;`UnicodeClass` | 0x00010000 | `LPSTR` is interpreted as Unicode
 &emsp;`AutoClass` | 0x00020000 | `LPSTR` is interpreted automatically
 &emsp;`CustomFormatClass` | 0x00030000 | A non-standard encoding specified by `CustomStringFormatMask`
 `CustomStringFormatMask` | 0x00C00000 | Use this mask to retrieve non-standard encoding information for native interop. The meaning of the values of these 2 bits is unspecified.
 **Class Initialization Attributes** | &nbsp; | &nbsp;
 `BeforeFieldInit` | 0x00100000 | Initialize the class before first static field access
 **Additional Flags** | &nbsp; | &nbsp;
 `RTSpecialName` | 0x00000800 | CLI provides 'special' behavior, depending upon the name of the Type
 `HasSecurity` | 0x00040000 | Type has security associate with it
 `IsTypeForwarder` | 0x00200000 | This _ExportedType_ entry is a type forwarder
