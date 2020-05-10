## II.23.1.7 Flags for Generic Parameters [GenericParamAttributes]

 Flag | Value | Description
 ---- | ---- | ----
 **`VarianceMask`** | 0x0003 | These 2 bits contain one of the following values:
 &emsp;`None` | 0x0000 | The generic parameter is non-variant and has no special constraints
 &emsp;`Covariant` | 0x0001 | The generic parameter is covariant
 &emsp;`Contravariant` | 0x0002 | The generic parameter is contravariant
 **`SpecialConstraintMask`** | 0x001C | These 3 bits contain one of the following values:
 &emsp;`ReferenceTypeConstraint` | 0x0004 | The generic parameter has the class special constraint
 &emsp;`NotNullableValueTypeConstraint` | 0x0008 | The generic parameter has the valuetype special constraint
 &emsp;`DefaultConstructorConstraint` | 0x0010 | The generic parameter has the `.ctor` special constraint
