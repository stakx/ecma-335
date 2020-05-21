## II.22.10 CustomAttribute: 0x0C

The _CustomAttribute_ table has the following columns:

 * _Parent_ (an index into a metadata table that has an associated _HasCustomAttribute_ (§[II.24.2.6](ii.24.2.6-metadata-stream.md)) coded index).

 * _Type_ (an index into the _MethodDef_ or _MemberRef_ table; more precisely, a _CustomAttributeType_ (§[II.24.2.6](ii.24.2.6-metadata-stream.md)) coded index).

 * _Value_ (an index into the Blob heap).

The _CustomAttribute_ table stores data that can be used to instantiate a Custom Attribute (more precisely, an object of the specified Custom Attribute class) at runtime. The column called _Type_ is slightly misleading&mdash;it actually indexes a constructor method&mdash;the owner of that constructor method is the Type of the Custom Attribute. 
A row in the _CustomAttribute_ table for a parent is created by the **.custom** attribute, which gives the value of the _Type_ column and optionally that of the _Value_ column (§[II.21](ii.21-custom-attributes.md)). 

> _This contains informative text only._

All binary values are stored in little-endian format (except for _PackedLen_ items, which are used only as a count for the number of bytes to follow in a UTF8 string).

 1. No _CustomAttribute_ is required; that is, _Value_ is permitted to be null.

 2. _Parent_ can be an index into any metadata table, except the _CustomAttribute_ table itself \[ERROR\]

 3. _Type_ shall index a valid row in the _Method_ or _MemberRef_ table. That row shall be a constructor method (for the class of which this information forms an instance) \[ERROR\]

 4. _Value_ can be null or non-null.

 5. If _Value_ is non-null, it shall index a 'blob' in the Blob heap \[ERROR\]

 6. The following rules apply to the overall structure of the _Value_ 'blob' (§[II.23.3](#todo-missing-hyperlink)):

     * _Prolog_ shall be 0x0001 \[ERROR\]

     * There shall be as many occurrences of _FixedArg_ as are declared in the _Constructor_ method \[ERROR\]

    * _NumNamed_ can be zero or more

    * There shall be exactly _NumNamed_ occurrences of _NamedArg_ \[ERROR\]

    * Each _NamedArg_ shall be accessible by the caller \[ERROR\]

    * If _NumNamed_ = 0 then there shall be no further items in the _CustomAttrib_ \[ERROR\]

 7. The following rules apply to the structure of _FixedArg_ (§[II.23.3](#todo-missing-hyperlink)):

    * If this item is not for a vector (a single-dimension array with lower bound of 0), then there shall be exactly one _Elem_ \[ERROR\]

    * If this item is for a vector, then:

    * _NumElem_ shall be 1 or more \[ERROR\]

    * This shall be followed by _NumElem_ occurrences of _Elem_ \[ERROR\]

 8. The following rules apply to the structure of _Elem_ (§[II.23.3](#todo-missing-hyperlink)):

    * If this is a simple type or an enum (see §[II.23.3](#todo-missing-hyperlink) for how this is defined), then _Elem_ consists simply of its value \[ERROR\]

    * If this is a string or a Type, then _Elem_ consists of a _SerString_ &mdash; _PackedLen_ count of bytes, followed by the UTF8 characters \[ERROR\]

    * If this is a boxed simple value type (`bool`, `char`, `float32`, `float64`, `int8`, `int16`, `int32`, `int64`, `unsigned int8`, `unsigned int16`, `unsigned int32`, or `unsigned int64`), then Elem consists of the corresponding type denoter (`ELEMENT_TYPE_BOOLEAN`, `ELEMENT_TYPE_CHAR`, `ELEMENT_TYPE_I1`, `ELEMENT_TYPE_U1`, `ELEMENT_TYPE_I2`, `ELEMENT_TYPE_U2`, `ELEMENT_TYPE_I4`, `ELEMENT_TYPE_U4`, `ELEMENT_TYPE_I8`, `ELEMENT_TYPE_U8`, `ELEMENT_TYPE_R4`, or `ELEMENT_TYPE_R8`), followed by its value. \[ERROR\]

 9. The following rules apply to the structure of NamedArg (§[II.23.3](#todo-missing-hyperlink)):

    * A _NamedArg_ shall begin with the single byte `FIELD` (0x53) or `PROPERTY` (0x54) for identification \[ERROR\]

    * If the parameter kind is a boxed simple value type, then the type of the Field or Property is one of `ELEMENT_TYPE_BOOLEAN`, `ELEMENT_TYPE_CHAR`, `ELEMENT_TYPE_I1`, `ELEMENT_TYPE_U1`, `ELEMENT_TYPE_I2`, `ELEMENT_TYPE_U2`, `ELEMENT_TYPE_I4`, `ELEMENT_TYPE_U4`, `ELEMENT_TYPE_I8`, `ELEMENT_TYPE_U8`, `ELEMENT_TYPE_R4`, `ELEMENT_TYPE_R8`, `ELEMENT_TYPE_STRING`, or the constant 0x50 (for an argument of type `System.Type`) \[ERROR\]

    * The name of the Field or Property, respectively with the previous item, is stored as a _SerString_ &mdash; _PackedLen_ count of bytes, followed by the UTF8 characters of the name \[ERROR\]

    * A _NamedArg_ is a _FixedArg_ (see above) \[ERROR\]

> _End informative text._
