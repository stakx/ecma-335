## I.8.5.3.2 Accessibility of members and nested types

A type scopes all of its members, and it also specifies the accessibility rules for its members. Except where noted, accessibility is decided based only on the statically visible type of the member being referenced and the type and assembly that is making the reference. The CTS supports seven different rules for accessibility:

 * **compiler-controlled** &ndash; accessible only through the use of a definition, not a reference, hence only accessible from within a single compilation unit and under the control of the compiler.

 * **private** &ndash; accessible only to referents in the implementation of the exact type that defines the member.

 * **family** &ndash; accessible to referents that support the same type (i.e., an exact type and all of the types that inherit from it). For verifiable code (see §[I.8.8](i.8.8-type-safety-and-verification.md)), there is an additional requirement that can require a runtime check: the reference shall be made through an item whose exact type supports the exact type of the referent. That is, the item whose member is being accessed shall inherit from the type performing the access.

 * **assembly** &ndash; accessible only to referents in the same assembly that contains the implementation of the type.

 * **family-and-assembly** &ndash; accessible only to referents that qualify for both family and assembly access.

 * **family-or-assembly** &ndash; accessible only to referents that qualify for either family or assembly access.

 * **public** &ndash; accessible to all referents.

A member or nested type is exported if and only if it has public, family-or-assembly, or family accessibility, and its defining type (in the case of members) or its enclosing type (in the case of nested types) is exported.

The accessibility of a type definer is the same as that for the type from which it was generated.

In general, a member of a type can have any one of the accessibility rules assigned to it. There are three exceptions, however:

 1. Members (other than nested types) defined by an interface shall be public.

 2. When a type defines a virtual method that overrides an inherited definition, the accessibility shall either be identical in the two definitions or the overriding definition shall permit more access than the original definition. For example, it is possible to override an **assembly virtual** method with a new implementation that is **public virtual**, but not with one that is **family virtual**. In the case of overriding a definition derived from another assembly, it is not considered restricting access if the base definition has **family-or-assembly** access and the override has only **family** access.

 3. A member defined by a nested type, or a nested type enclosed by a nested type, shall not have greater accessibility than the nested type that defines it (in the case of a member) or the nested type that encloses it (in the case of a nested type).

_[Rationale:_ Languages including C++ allow this "widening" of access. Restricting access would provide an incorrect illusion of security since simply casting an object to the base class (which occurs implicitly on method call) would allow the method to be called despite the restricted accessibility. To prevent overriding a virtual method use **final** (see §[I.8.10.2](i.8.10.2-method-inheritance.md)) rather than relying on limited accessibility. _end rationale]_
 
> #### CLS Rule 10:
>
> Accessibility shall not be changed when overriding inherited methods, except when overriding a method inherited from a different assembly with accessibility **family-or-assembly**. In this case, the override shall have accessibility **family**.
>
> _[Note:_
>
> **CLS (consumer):** Need not accept types that widen access to inherited virtual methods.
>
> **CLS (extender):** Need not provide syntax to widen access to inherited virtual methods.
>
> **CLS (frameworks):** Shall not rely on the ability to widen access to a virtual method, either in the exported portion of the framework or by users of the framework. _end note]_
