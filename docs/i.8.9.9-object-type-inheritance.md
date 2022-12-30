## I.8.9.9 Object type inheritance

With the sole exception of `System.Object`, which does not inherit from any other object type, all object types shall either explicitly or implicitly declare support for (i.e., inherit from) exactly one other object type. The graph of the inherits-relation shall form a singly rooted tree with `System.Object` at the base; i.e., all object types eventually inherit from the type `System.Object`. The introduction of generic types makes it more difficult to give a precise definition; see [Partition II Metadata - Security](ii.20-declarative-security.md).

An object type declares that it shall not be used as a base type (be inherited from) by declaring that it is a **sealed** type.

> #### CLS Rule 23:
>
> `System.Object` is CLS-compliant. Any other CLS-compliant class shall inherit from a CLS-compliant class.

Arrays are object types and, as such, inherit from other object types. Since array object types are manufactured by the VES, the inheritance of arrays is fixed. See §[I.8.9.1](i.8.9.1-array-types.md).
