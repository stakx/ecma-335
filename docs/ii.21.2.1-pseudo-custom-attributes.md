## II.21.2.1 Pseudo custom attributes

The following table lists the CLI pseudo custom attributes. (Not all of these attributes are specified in this Standard, but all of their names are reserved and shall not be used for other purposes.  For details on these attributes, see the documentation for the corresponding class in [Partition IV](#todo-missing-hyperlink).) They are defined in the namespaces `System.Reflection`, `System.Runtime.CompilerServices`, and `System.Runtime.InteropServices` namespaces.

 | Attribute | Description
 | ---- | ----
 | `AssemblyAlgorithmIDAttribute` | Records the ID of the hash algorithm used (reserved only)
 | `AssemblyFlagsAttribute` | Records the flags for this assembly (reserved only)
 | `DllImportAttribute` | Provides information about code implemented within an unmanaged library
 | `FieldOffsetAttribute` | Specifies the byte offset of fields within their enclosing class or value type
 | `InAttribute` | Indicates that a method parameter is an `[in]` argument
 | `MarshalAsAttribute` | Specifies how a data item should be marshalled between managed and unmanaged code (see §[II.23.4](ii.23.4-marshalling-descriptors.md)).
 | `MethodImplAttribute` | Specifies details of how a method is implemented
 | `OutAttribute` | Indicates that a method parameter is an `[out]` argument
 | `StructLayoutAttribute` | Allows the caller to control how the fields of a class or value type are laid out in managed memory

These attributes affect bits and fields in metadata, as follows:

 * `AssemblyAlgorithmIDAttribute`: sets the _Assembly_._HashAlgId_ field.

 * `AssemblyFlagsAttribute`: sets the _Assembly_._Flags_ field.

 * `DllImportAttribute`: sets the _Method_._Flags_.`PinvokeImpl` bit for the attributed method; also, adds a new row into the _ImplMap_ table (setting _MappingFlags_, _MemberForwarded_, _ImportName_ and _ImportScope_ columns).

 * `FieldOffsetAttribute`: sets the _FieldLayout_._Offset_ value for the attributed field.

 * `InAttribute`: sets the _Param_._Flags_.`In` bit for the attributed parameter.

 * `MarshalAsAttribute`: sets the _Field_._Flags_.`HasFieldMarshal` bit for the attributed field (or the _Param_._Flags_.`HasFieldMarshal` bit for the attributed parameter); also enters a new row into the _FieldMarshal_ table for both _Parent_ and _NativeType_ columns.

 * `MethodImplAttribute`: sets the _Method_._ImplFlags_ field of the attributed method.

 * `OutAttribute`: sets the _Param_._Flags_.`Out` bit for the attributed parameter.

 * `StructLayoutAttribute`: sets the _TypeDef_._Flags_.`LayoutMask` sub-field for the attributed type, and, optionally, the _TypeDef_._Flags_.`StringFormatMask` sub-field, the _ClassLayout_._PackingSize_, and _ClassLayout_._ClassSize_ fields for that type.
