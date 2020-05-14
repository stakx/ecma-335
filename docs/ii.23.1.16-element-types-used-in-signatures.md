## II.23.1.16 Element types used in signatures

The following table lists the values for `ELEMENT_TYPE` constants. These are used extensively in metadata signature blobs &ndash; see §[II.23.2](ii.23.2-blobs-and-signatures.md).

 Name | Value | Remarks
 ---- | ---- | ----
 `ELEMENT_TYPE_END` | 0x00 | Marks end of a list
 `ELEMENT_TYPE_VOID` | 0x01 | &nbsp;
 `ELEMENT_TYPE_BOOLEAN` | 0x02 | &nbsp;
 `ELEMENT_TYPE_CHAR` | 0x03 | &nbsp;
 `ELEMENT_TYPE_I1` | 0x04 | &nbsp;
 `ELEMENT_TYPE_U1` | 0x05 | &nbsp;
 `ELEMENT_TYPE_I2` | 0x06 | &nbsp;
 `ELEMENT_TYPE_U2` | 0x07 | &nbsp;
 `ELEMENT_TYPE_I4` | 0x08 | &nbsp;
 `ELEMENT_TYPE_U4` | 0x09 | &nbsp;
 `ELEMENT_TYPE_I8` | 0x0a | &nbsp;
 `ELEMENT_TYPE_U8` | 0x0b | &nbsp;
 `ELEMENT_TYPE_R4` | 0x0c | &nbsp;
 `ELEMENT_TYPE_R8` | 0x0d | &nbsp;
 `ELEMENT_TYPE_STRING` | 0x0e | &nbsp;
 `ELEMENT_TYPE_PTR` | 0x0f | Followed by *type*
 `ELEMENT_TYPE_BYREF` | 0x10 | Followed by *type*
 `ELEMENT_TYPE_VALUETYPE` | 0x11 | Followed by _TypeDef_ or _TypeRef_ token
 `ELEMENT_TYPE_CLASS` | 0x12 | Followed by_ TypeDef_ or _TypeRef_ token
 `ELEMENT_TYPE_VAR` | 0x13 | Generic parameter in a generic type definition, represented as _number_ (compressed unsigned integer)
 `ELEMENT_TYPE_ARRAY` | 0x14 | *type* *rank* *boundsCount* *bound1* &hellip; *loCount* *lo1* &hellip;
 `ELEMENT_TYPE_GENERICINST` | 0x15 | Generic type instantiation. Followed by *type* *type-arg-count* *type-1* &hellip; *type-n*
 `ELEMENT_TYPE_TYPEDBYREF` | 0x16 | &nbsp;
 `ELEMENT_TYPE_I` | 0x18 | `System.IntPtr`
 `ELEMENT_TYPE_U` | 0x19 | `System.UIntPtr`
 `ELEMENT_TYPE_FNPTR` | 0x1b | Followed by full method signature
 `ELEMENT_TYPE_OBJECT` | 0x1c | `System.Object`
 `ELEMENT_TYPE_SZARRAY` | 0x1d | Single-dim array with 0 lower bound
 `ELEMENT_TYPE_MVAR` | 0x1e | Generic parameter in a generic method definition, represented as *number* (compressed unsigned integer)
 `ELEMENT_TYPE_CMOD_REQD` | 0x1f | Required modifier: followed by a _TypeDef_ or _TypeRef_ token
 `ELEMENT_TYPE_CMOD_OPT` | 0x20 | Optional modifier: followed by a _TypeDef_ or _TypeRef_ token
 `ELEMENT_TYPE_INTERNAL` | 0x21 | Implemented within the CLI
 `ELEMENT_TYPE_MODIFIER` | 0x40 | Or'd with following element types
 `ELEMENT_TYPE_SENTINEL` | 0x41 | Sentinel for vararg method signature
 `ELEMENT_TYPE_PINNED` | 0x45 | Denotes a local variable that points at a pinned object
 &nbsp; | 0x50 | Indicates an argument of type `System.Type`.
 &nbsp; | 0x51 | Used in custom attributes to specify a boxed object (§[II.23.3](#todo-missing-hyperlink)).
 &nbsp; | 0x52 | Reserved
 &nbsp; | 0x53 | Used in custom attributes to indicate a `FIELD` (§[II.22.10](ii.22.10-customattribute-0x0c.md), [II.23.3](#todo-missing-hyperlink)).
 &nbsp; | 0x54 | Used in custom attributes to indicate a `PROPERTY` (§[II.22.10](ii.22.10-customattribute-0x0c.md), [II.23.3](#todo-missing-hyperlink)).
 &nbsp; | 0x55 | Used in custom attributes to specify an enum (§[II.23.3](#todo-missing-hyperlink)).
