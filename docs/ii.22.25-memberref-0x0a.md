## II.22.25 MemberRef: 0x0A

The _MemberRef_ table combines two sorts of references, to Methods and to Fields of a class, known as 'MethodRef' and ‘FieldRef’, respectively.

The _MemberRef_ table has the following columns:

 * _Class_ (an index into the _MethodDef_, _ModuleRef_, _TypeDef_, _TypeRef_, or _TypeSpec_ tables; more precisely, a _MemberRefParent_ (§[II.24.2.6](#todo-missing-hyperlink)) coded index)

 * _Name_ (an index into the String heap)

 * _Signature_ (an index into the Blob heap)

An entry is made into the _MemberRef_ table whenever a reference is made in the CIL code to a method or field which is defined in another module or assembly. (Also, an entry is made for a call to a method with a `VARARG` signature, even when it is defined in the same module as the call site.)

> _This contains informative text only._

 1. _Class_ shall be one of the following: \[ERROR\]

     1. a _TypeRef_ token, if the class that defines the member is defined in another module. (Note that it is unusual, but valid, to use a _TypeRef_ token when the member is defined in this same module, in which case, its _TypeDef_ token can be used instead.)

     2. a _ModuleRef_ token, if the member is defined, in another module of the same assembly, as a global function or variable.

     3. a _MethodDef_ token, when used to supply a call-site signature for a vararg method that is defined in this module. The _Name_ shall match the _Name_ in the corresponding _MethodDef_ row. The _Signature_ shall match the _Signature_ in the target method definition \[ERROR\]

     4. a _TypeSpec_ token, if the member is a member of a generic type

 2. _Class_ shall not be null (as this would indicate an unresolved reference to a global function or variable) \[ERROR\]

 3. _Name_ shall index a non-empty string in the String heap \[ERROR\]

 4. The _Name_ string shall be a valid CLS identifier \[CLS\]

 5. _Signature_ shall index a valid field or method signature in the Blob heap. In particular, it shall embed exactly one of the following 'calling conventions': \[ERROR\]
 
      1. `DEFAULT` (0x0)
      2. `VARARG` (0x5)
      3. `FIELD` (0x6)
      4. `GENERIC` (0x10)

 6. The _MemberRef_ table shall contain no duplicates, where duplicate rows have the same _Class_, _Name_, and _Signature_ \[WARNING\]

 7. _Signature_ shall not have the `VARARG` (0x5) calling convention \[CLS\]

 8. There shall be no duplicate rows, where _Name_ fields are compared using CLS conflicting-identifier-rules.  (In particular, note that the return type and whether parameters are marked `ELEMENT_TYPE_BYREF` (§[II.23.1.16](#todo-missing-hyperlink)) are ignored in the CLS. For example, `.method int32 M()`and `.method float64 M()` result in duplicate rows by CLS rules. Similarly, `.method void N(int32 i)` and `.method void N(int32& i)` also result in duplicate rows by CLS rules.) \[CLS\]

 9. If _Class_ and _Name_ resolve to a field, then that field shall not have a value of `CompilerControlled` (§[II.23.1.5](#todo-missing-hyperlink)) in its _Flags_.`FieldAccessMask` subfield \[ERROR\]

 10. If _Class_ and _Name_ resolve to a method, then that method shall not have a value of `CompilerControlled` in its _Flags_.`MemberAccessMask` (§[II.23.1.10](#todo-missing-hyperlink)) subfield \[ERROR\]

 11. The type containing the definition of a _MemberRef_ shall be a _TypeSpec_ representing an instantiated type.

> _End informative text._
