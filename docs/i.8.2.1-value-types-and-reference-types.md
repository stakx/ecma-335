## I.8.2.1 Value types and reference types

There are two kinds of types: **value types** and **reference types**.

 * Value types &ndash; The values described by a value type are self-contained (each can be understood without reference to other values).

 * Reference types &ndash; A value described by a reference type denotes the location of another value. There are four kinds of reference type:

     * An object type is a reference type of a self-describing value (see §[I.8.2.3](i.8.2.3-classes-interfaces-and-objects.md)). Some object types (e.g., abstract classes) are only a partial description of a value.

     * An interface type is always a partial description of a value, potentially supported by many object types.

     * A pointer type is a compile-time description of a value whose representation is a machine address of a location. Pointers are divided into managed (§[I.8.2.1.1](i.8.2.1.1-managed-pointers-and-related-types.md), §[I.12.1.1.2](i.12.1.1.2-object-reference-and-managed-pointer-types-o-and-ref.md)) and unmanaged (§I.8.9.2).

     * Built-in reference types.
