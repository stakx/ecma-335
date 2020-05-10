## II.22.17 FieldMarshal : 0x0D

The _FieldMarshal_ table has two columns. It 'links' an existing row in the _Field_ or _Param_ table, to information in the Blob heap that defines how that field or parameter (which, as usual, covers the method return, as parameter number 0) shall be marshalled when calling to or from unmanaged code via PInvoke dispatch.

Note that _FieldMarshal_ information is used only by code paths that arbitrate operation with unmanaged code. In order to execute such paths, the caller, on most platforms, would be installed with elevated security permission.  Once it invokes unmanaged code, it lies outside the regime that the CLI can check&mdash;it is simply trusted not to violate the type system.

The _FieldMarshal_ table has the following columns:

 * _Parent_ (an index into _Field_ or _Param_ table; more precisely, a _HasFieldMarshal_ (§[II.24.2.6](#todo-missing-hyperlink)) coded index)

 * _NativeType_ (an index into the Blob heap)

For the detailed format of the 'blob', see §[II.23.4](#todo-missing-hyperlink)

A row in the _FieldMarshal_ table is created if the **.field** directive for the parent field has specified a **marshal** attribute (§[II.16.1](#todo-missing-hyperlink)).

> _This contains informative text only._

 1. A _FieldMarshal_ table can contain zero or more rows

 2. _Parent_ shall index a valid row in the _Field_ or _Param_ table (_Parent_ values are encoded to say which of these two tables each refers to) \[ERROR\]

 3. _NativeType_ shall index a non-null 'blob' in the Blob heap \[ERROR\]

 4. No two rows shall point to the same parent. In other words, after the _Parent_ values have been decoded to determine whether they refer to the _Field_ or the _Param_ table, no two rows can point to the same row in the _Field_ table or in the _Param_ table \[ERROR\]

 5. The following checks apply to the _MarshalSpec_ 'blob' (§[II.23.4](#todo-missing-hyperlink)):

     * _NativeIntrinsic_ shall be exactly one of the constant values in its production (§[II.23.4](#todo-missing-hyperlink)) \[ERROR\]

     * If `ARRAY`, then ArrayElemType shall be exactly one of the constant values in its production  [ERROR]

     * If `ARRAY`, then _ParamNum_ can be zero

     * If `ARRAY`, then _ParamNum_ cannot be < 0 \[ERROR\]

     * If `ARRAY`, and _ParamNum_ > 0, then _Parent_ shall point to a row in the _Param_ table, not in the _Field_ table \[ERROR\]

     * If `ARRAY`, and _ParamNum_ > 0, then _ParamNum_ cannot exceed the number of parameters supplied to the _MethodDef_ (or _MethodRef_ if a `VARARG` call) of which the parent _Param_ is a member \[ERROR\]

     * If `ARRAY`, then _ElemMult_ shall be &ge; 1 \[ERROR\]

     * If `ARRAY` and _ElemMult_ &ne; 1 issue a warning, because it is probably a mistake  \[WARNING\]

     * If `ARRAY` and _ParamNum_ = 0, then _NumElem_ shall be &ge; 1 \[ERROR\]

     * If `ARRAY` and _ParamNum_ &ne; 0 and _NumElem_ &ne; 0 then issue a warning, because it is probably a mistake \[WARNING\]

> _End informative text._
