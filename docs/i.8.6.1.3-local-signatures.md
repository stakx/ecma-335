## I.8.6.1.3 Local signatures

A **local signature** specifies the contract on a local variable allocated during the running of a method. A local signature contains a full location signature, plus it can specify one additional constraint:

The **byref** constraint states that the content of the corresponding location is a **managed pointer**. A managed pointer can point to a local variable, parameter, field of a compound type, or element of an array. However, when a call crosses a remoting boundary (see §[I.12.5](i.12.5-proxies-and-remoting.md)) a conforming implementation can use a copy-in/copy-out mechanism instead of a managed pointer. Thus programs shall not rely on the aliasing behavior of true pointers.

In addition, there is one special local signature. The **typed reference** local variable signature states that the local will contain both a managed pointer to a location and a runtime representation of the type that can be stored at that location. A typed reference signature is similar to a byref constraint, but while the byref specifies the type as part of the byref constraint (and hence statically as part of the type description), a typed reference provides the type information dynamically. A typed reference is a full signature in itself and cannot be combined with other constraints. In particular, it is not possible to specify a **byref** whose type is **typed reference**.

The typed reference signature is actually represented as a built-in value type, like the integer and floating-point types. In the Base Class Library (see [Partition IV Library](iv.5.3-base-class-library-bcl.md)) the type is known as `System.TypedReference` and in the assembly language used in [Partition II](ii.22-metadata-logical-format-tables.md) it is designated by the keyword **typedref**. This type shall only be used for parameters and local variables. It shall not be boxed, nor shall it be used as the type of a field, element of an array, or return value.

> #### CLS Rule 14:
>
> Typed references are not CLS-compliant.
>
> _[Note:_
>
> **CLS (consumer):** There is no need to accept this type.
>
> **CLS (extender):** There is no need to provide syntax to define this type or to extend interfaces or classes that use this type.
>
> **CLS (framework):** This type shall not appear in exported members. _end note]_
