## II.22.38 TypeRef: 0x01

The _TypeRef_ table has the following columns:

 * _ResolutionScope_ (an index into a _Module_, _ModuleRef_, _AssemblyRef_ or _TypeRef_ table, or null; more precisely, a _ResolutionScope_ (§[II.24.2.6](ii.24.2.6-metadata-stream.md)) coded index)

 * _TypeName_ (an index into the String heap)

 * _TypeNamespace_ (an index into the String heap) 

> _This contains informative text only._

 1. _ResolutionScope_ shall be exactly one of:

    1. null &ndash; in this case, there shall be a row in the _ExportedType_ table for this Type &ndash; its _Implementation_ field shall contain a _File_ token or an _AssemblyRef_ token that says where the type is defined \[ERROR\]

    2. a _TypeRef_ token, if this is a nested type (which can be determined by, for example, inspecting the _Flags_ column in its _TypeDef_ table &ndash; the accessibility subfield is one of the `tdNestedXXX` set) \[ERROR\]

    3. a _ModuleRef_ token, if the target type is defined in another module within the same Assembly as this one \[ERROR\]

    4. a _Module_ token, if the target type is defined in the current module &ndash; this should not occur in a CLI ("compressed metadata") module \[WARNING\]

    5. an _AssemblyRef_ token, if the target type is defined in a different Assembly from the current module \[ERROR\]

 2. _TypeName_ shall index a non-empty string in the String heap \[ERROR\]

 3. _TypeNamespace_ can be null, or non-null

 4. If non-null, _TypeNamespace_ shall index a non-empty string in the String heap \[ERROR\]

 5. The _TypeName_ string shall be a valid CLS identifier \[CLS\]

 6. There shall be no duplicate rows, where a duplicate has the same _ResolutionScope_, _TypeName_ and _TypeNamespace_ \[ERROR\]

 7. There shall be no duplicate rows, where _TypeName_ and _TypeNamespace_ fields are compared using CLS conflicting-identifier-rules \[CLS\]

> _End informative text._
