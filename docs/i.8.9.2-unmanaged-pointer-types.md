## I.8.9.2 Unmanaged pointer types

An **unmanaged pointer type** (also known simply as a "pointer type") is defined by specifying a location signature for the location the pointer references. Any signature of a pointer type includes this location signature. Hence, no separate definition of the pointer type is needed.

While pointer types are reference types, values of a pointer type are not objects (see §[I.8.2.3](#todo-missing-hyperlink)), and hence it is not possible, given a value of a pointer type, to determine its exact type. The CTS provides two type-safe operations on pointer types: one to load the value from the location referenced by the pointer and the other to store a value whose type is *assignable-to* (§[I.8.7.3](#todo-missing-hyperlink)) the type referenced by the pointer into that location. The CTS also provides three operations on pointer types (byte-based address arithmetic): adding to and subtracting integers from pointers, and subtracting one pointer from another. The results of the first two operations are pointers to the same type signature as the original pointer. See [Partition III &ndash; Base Instructions](#todo-missing-hyperlink) for details.

> #### CLS Rule 17:
>
> Unmanaged pointer types are not CLS-compliant.
>
> _[Note:_
>
> **CLS (consumer):** There is no need to support unmanaged pointer types.
>
> **CLS (extender):** There is no need to provide syntax to define or access unmanaged pointer types.
>
> **CLS (framework):** Unmanaged pointer types shall not be externally exported. _end note]_
