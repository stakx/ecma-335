## I.8.9 Type definers

Type definers construct a new type from existing types. **Implicit types** (e.g., built-in types, arrays, and pointers including function pointers) are defined when they are used. The mention of an implicit type in a signature is in and of itself a complete definition of the type. Implicit types allow the VES to manufacture instances with a standard set of members, interfaces, etc. Implicit types need not have user-supplied names.

All other types shall be explicitly defined using an explicit type definition. The explicit type definers are:

 * interface definitions &ndash; used to define interface types

 * class definitions &ndash; used to define class types, which can be either of the following:

     * object types (including delegates)

     * value types and their associated boxed types

_[Note:_ While class definitions always define class types, not all class types require a class definition.  Array types and pointer types, which are implicitly defined, are also class types. See §[I.8.2.3](i.8.2.3-classes-interfaces-and-objects.md).

Similarly, not all types defined by a class definition are object types. Array types, explicitly defined object types, and boxed types are object types. Pointer types, function pointer types, and value types are not object types. See §[I.8.2.3](i.8.2.3-classes-interfaces-and-objects.md). _end note]_

Class, interface, and value type definitions can be parameterized, a feature known as *generic type definitions*. That is, the definition of a class, interface, or value type can include generic parameters. When used, a specific instantiation of the generic class, interface, or value type is made, at which point the generic parameters are bound to specific generic arguments. The generic parameters can be constrained, so that only generic arguments that match these constraints can be used for instantiations.
