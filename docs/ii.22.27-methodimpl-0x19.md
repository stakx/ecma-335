## II.22.27 MethodImpl: 0x19

_MethodImpl_ tables let a compiler override the default inheritance rules provided by the CLI. Their original use was to allow a class `C`, that inherited method `M` from both interfaces `I` and `J`, to provide implementations for both methods (rather than have only one slot for `M` in its vtable). However, _MethodImpls_ can be used for other reasons too, limited only by the compiler writer's ingenuity within the constraints defined in the Validation rules below.

In the example above, _Class_ specifies `C`, _MethodDeclaration_ specifies `I::M`, _MethodBody_ specifies the method which provides the implementation for `I::M` (either a method body within `C`, or a method body implemented by a base class of `C`).

The _MethodImpl_ table has the following columns: 

 * _Class_ (an index into the _TypeDef_ table)

 * _MethodBody_ (an index into the _MethodDef_ or _MemberRef_ table; more precisely, a _MethodDefOrRef_ (§[II.24.2.6](ii.24.2.6-metadata-stream.md)) coded index)

 * _MethodDeclaration_ (an index into the _MethodDef_ or _MemberRef_ table; more precisely, a _MethodDefOrRef_ (§[II.24.2.6](ii.24.2.6-metadata-stream.md)) coded index)

ILAsm uses the **.override** directive to specify the rows of the _MethodImpl_ table (§[II.10.3.2](ii.10.3.2-the-override-directive.md) and §[II.15.4.1](ii.15.4.1-method-body.md)).

> _This contains informative text only._

 1. The _MethodImpl_ table can contain zero or more rows

 2. _Class_ shall index a valid row in the _TypeDef_ table \[ERROR\]

 3. _MethodBody_ shall index a valid row in the _MethodDef_ or _MemberRef_ table \[ERROR\]

 4. The method indexed by _MethodDeclaration_ shall have _Flags_.`Virtual` set \[ERROR\]

 5. The owner Type of the method indexed by _MethodDeclaration_ shall not have _Flags_.`Sealed` = 0 \[ERROR\]

 6. The method indexed by _MethodBody_ shall be a member of _Class_ or some base class of _Class_ (*MethodImpl*s do not allow compilers to 'hook' arbitrary method bodies) \[ERROR\]

 7. The method indexed by _MethodBody_ shall be virtual \[ERROR\]

 8. The method indexed by _MethodBody_ shall have its _Method_._RVA_ &ne; 0  (cannot be an unmanaged method reached via PInvoke, for example) \[ERROR\]

 9. _MethodDeclaration_ shall index a method in the ancestor chain of _Class_ (reached via its _Extends_ chain) or in the interface tree of _Class_ (reached via its _InterfaceImpl_ entries) \[ERROR\]

 10. The method indexed by _MethodDeclaration_ shall not be final (its _Flags_.`Final` shall be 0) \[ERROR\]

 11. If _MethodDeclaration_ has the `Strict` flag set, the method indexed by _MethodDeclaration_ shall be accessible to _Class_. \[ERROR\]

 12. The method signature defined by _MethodBody_ shall match those defined by _MethodDeclaration_ \[ERROR\]

 13. There shall be no duplicate rows, based upon _Class_+_MethodDeclaration_ \[ERROR\]

> _End informative text._
