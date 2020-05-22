## II.8.3 Hiding

Hiding is a compile-time concept that applies to individual methods of a type. The CTS specifies two mechanisms for hiding, specified by a single bit:

 * *hide-by-name*, meaning that the introduction of a name in a given type hides all inherited members of the same kind with the same name.

 * *hide-by-name-and-sig*, meaning that the introduction of a name in a given type hides any inherited member of the same kind, but with precisely the same type (in the case of nested types and fields) or signature (in the case of methods, properties, and events).

There is no runtime support for hiding. A conforming implementation of the CLI treats all references as though the names were marked hide-by-name-and-sig. Compilers that desire the effect of hide-by-name can do so by marking method definitions with the **newslot** attribute (§[II.15.4.2.3](ii.15.4.2.3-overriding-behavior.md)) and correctly choosing the type used to resolve a method reference (§[II.15.1.3](ii.15.1.3-method-references.md)).
