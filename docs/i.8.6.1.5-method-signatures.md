## I.8.6.1.5 Method signatures

A **method signature** is composed of

 * a calling convention,
 * the number of generic parameters, if the method is generic,
 * if the calling convention specifies this is an instance method and the owning method definition belongs to a type T then the type of the `this` pointer is:
     * given by the first parameter signature, if the calling convention is `instance explicit` (§[II.15.3](ii.15.3-calling-convention.md)),
     * inferred as &T, if T is a value type and the method definition is non-virtual (§[I.8.9.7](i.8.9.7-value-type-definition.md)),
     * inferred as "boxed" T, if T is a value type and the method definition is virtual (this includes method definitions from an interface implemented by T) (§[I.8.9.7](i.8.9.7-value-type-definition.md)),
     * inferred as T, otherwise
 * a list of zero or more parameter signatures—one for each parameter of the method— and,
 * a type signature for the result value, if one is produced.

Method signatures are declared by method definitions. Only one constraint can be added to a method signature in addition to those of parameter signatures:

 * The **vararg** constraint can be included to indicate that all arguments past this point are optional. When it appears, the calling convention shall be one that supports variable argument lists.

Method signatures are used in two different ways: as part of a method definition and as a description of a calling site when calling through a function pointer. In the latter case, the method signature indicates

 * the calling convention (which can include platform-specific calling conventions),
 * the types of all the argument values that are being passed, and
 * if needed, a vararg marker indicating where the fixed parameter list ends and the variable parameter list begins.

When used as part of a method definition, the vararg constraint is represented by the choice of calling convention. 

_[Note:_ a single _method implementation_ may be used both to satisfy a _method definition_ of a type and to satisfy a _method definition_ of an interface the type implements. If the type is a value type, T, then the `this` pointer in the method signature for the type's own _method definition_ is a managed pointer &T, while it is "boxed" T in the method signature associated with the interface's _method definition._ _end note]_

_[Note:_ the presence of a `this` pointer affects parameter signature/argument number pairing in CIL. If the parameter signature for the `this` pointer is inferred then the first parameter signature in the metadata is for argument number one. If there is no `this` pointer, as with static methods, or this is an `instance explicit` method, then the first parameter signature is for argument number zero. See the descriptions of the call and load function instructions in Partition III. _end note]_

> #### CLS Rule 15:
>
> The vararg constraint is not part of the CLS, and the only calling convention supported by the CLS is the standard managed calling convention.
>
> _[Note:_
>
> **CLS (consumer):** There is no need to accept methods with variable argument lists or unmanaged calling convention.
>
> **CLS (extender):** There is no need to provide syntax to declare vararg methods or unmanaged calling conventions.
>
> **CLS (framework):** Neither vararg methods nor methods with unmanaged calling conventions shall be exported externally. _end note]_
