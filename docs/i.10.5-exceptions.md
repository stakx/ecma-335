## I.10.5 Exceptions

The CLI supports an exception handling model, which is introduced in §[I.12.4.2](#todo-missing-hyperlink). CLS-compliant frameworks can define and throw externally visible exceptions, but there are restrictions on the type of objects thrown:

> #### CLS Rule 40:
>
> Objects that are thrown shall be of type `System.Exception` or a type inheriting from it. Nonetheless, CLS-compliant methods are not required to block the propagation of other types of exceptions.
>
> _[Note:_
>
> **CLS (consumer):** Need not support throwing or catching of objects that are not of the specified type.
>
> **CLS (extender):** Must support throwing of objects of type `System.Exception` or a type inheriting from it. Need not support the throwing of objects having other types.
>
> **CLS (framework):** Shall not publicly expose thrown objects that are not of type `System.Exception` or a type inheriting from it. _end note]_
