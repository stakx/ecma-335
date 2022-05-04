## II.10.3.2 The .override directive

The **.override** directive specifies that a virtual method shall be implemented (overridden), in this type, by a virtual method with a different name, but with the same signature. This directive can be used to provide an implementation for a virtual method inherited from a base class, or a virtual method specified in an interface implemented by this type. The **.override** directive specifies a _Method Implementation_ (_MethodImpl_) in the metadata (§[II.15.1.4](ii.15.1.4-method-implementations.md)).

 | ClassMember ::= | Clause
 | ---- | ----
 | `.override` _TypeSpec_ `'::'` _MethodName_ `with` _CallConv_ _Type_ _TypeSpec_ `'::'` _MethodName_ `'('` _Parameters_ `')'`
 | `.override method` _CallConv_ _Type_ _TypeSpec_ `'::'` _MethodName_ _GenArity_ `'('` _Parameters_ `')'` `with method` _CallConv_ _Type_ _TypeSpec_ `'::'` _MethodName_ _GenArity_ `'('` _Parameters_ `')'`
 | \| &hellip; | §[II.10.2](ii.10.2-body-of-a-type-definition.md)

 | GenArity ::=
 | ----
 | [ `'<'` `'['` _Int32_ `']'` `'>'` ]
 
_Int32_ is the number of generic parameters. The first _TypeSpec_::_MethodName_ pair specifies the virtual method that is being overridden, and shall be either an inherited virtual method or a virtual method on an interface that the current type implements. The remaining information specifies the virtual method that provides the implementation.

While the syntax specified here (as well as the actual metadata format (§[II.22.27](ii.22.27-methodimpl-0x19.md))) allows any virtual method to be used to provide an implementation, a conforming program shall provide a virtual method actually implemented directly on the type containing the **.override** directive.

_[Rationale:_ The metadata is designed to be more expressive than can be expected of all implementations of the VES. _end rationale]_

_[Example:_ The following shows a typical use of the **.override** directive. A method implementation is provided for a method declared in an interface (see §[II.12](ii.12-semantics-of-interfaces.md)).

 ```ilasm
 .class interface I
 { .method public virtual abstract void M() cil managed {}
 }
.class C implements I
 { .method virtual public void M2()
   { // body of M2
   }
   .override I::M with instance void C::M2()
 }
 ```

The **.override** directive specifies that the `C::M2` body shall provide the implementation of be used to implement `I::M` on objects of class `C`. _end example]_
