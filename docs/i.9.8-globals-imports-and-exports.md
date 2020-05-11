## I.9.8 Globals, imports, and exports

The CTS does not have the notion of **global statics**: all statics are associated with a particular class. Nonetheless, the metadata is designed to support languages that rely on static data that is stored directly in a PE/COFF file and accessed by its relative virtual address. In addition, while access to managed data and managed functions is mediated entirely through the metadata itself, the metadata provides a mechanism for accessing unmanaged data and unmanaged code.

> #### CLS Rule 36:
>
> Global static fields and methods are not CLS-compliant.
>
> _[Note:_
>
> **CLS (consumer):** Need not support global static fields or methods.
>
> **CLS (extender):** Need not author global static fields or methods.
>
> **CLS (framework):** Shall not define global static fields or methods. _end note]_
