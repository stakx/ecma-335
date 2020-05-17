## II.22.9 Constant: 0x0B

The _Constant_ table is used to store compile-time, constant values for fields, parameters, and properties. 

The _Constant_ table has the following columns:

 * _Type_ (a 1-byte constant, followed by a 1-byte padding zero); see §[II.23.1.16](ii.23.1.16-element-types-used-in-signatures.md). The encoding of _Type_ for the **nullref** value for _FieldInit_ in _ilasm_ (§[II.16.2](ii.16.2-field-init-metadata.md)) is `ELEMENT_TYPE_CLASS` with a _Value_ of a 4-byte zero. Unlike uses of `ELEMENT_TYPE_CLASS` in signatures, this one is not followed by a type token.

 * _Parent_ (an index into the _Param_, _Field_, or _Property_ table; more precisely, a _HasConstant_ (§[II.24.2.6](ii.24.2.6-metadata-stream.md)) coded index)

 * _Value_ (an index into the Blob heap)

Note that _Constant_ information does not directly influence runtime behavior, although it is visible via Reflection (and hence can be used to implement functionality such as that provided by `System.Enum.ToString`). Compilers inspect this information, at compile time, when importing metadata, but the value of the constant itself, if used, becomes embedded into the CIL stream the compiler emits. There are no CIL instructions to access the _Constant_ table at runtime.

A row in the _Constant_ table for a parent is created whenever a compile-time value is specified for that parent. (For an example, see §[II.16.2.](#todo-missing-hyperlink))

> _This contains informative text only._

 1. _Type_ shall be exactly one of: `ELEMENT_TYPE_BOOLEAN`, `ELEMENT_TYPE_CHAR`, `ELEMENT_TYPE_I1`, `ELEMENT_TYPE_U1`, `ELEMENT_TYPE_I2`, `ELEMENT_TYPE_U2`, `ELEMENT_TYPE_I4`, `ELEMENT_TYPE_U4`, `ELEMENT_TYPE_I8`, `ELEMENT_TYPE_U8`, `ELEMENT_TYPE_R4`, `ELEMENT_TYPE_R8`, or `ELEMENT_TYPE_STRING`; or `ELEMENT_TYPE_CLASS` with a _Value_ of zero (§II.23.1.16) \[ERROR\]

 2. _Type_ shall not be any of: `ELEMENT_TYPE_I1`, `ELEMENT_TYPE_U2`, `ELEMENT_TYPE_U4`, or `ELEMENT_TYPE_U8` (§[II.23.1.16](ii.23.1.16-element-types-used-in-signatures.md)) \[CLS\]

 3. _Parent_ shall index a valid row in the _Field_, _Property_, or _Param_ table. \[ERROR\]

 4. There shall be no duplicate rows, based upon _Parent_ \[ERROR\]

 5. _Type_ shall match exactly the declared type of the _Param_, _Field_, or _Property_ identified by _Parent_ (in the case where the parent is an enum, it shall match exactly the underlying type of that enum). \[CLS\]

> _End informative text._
