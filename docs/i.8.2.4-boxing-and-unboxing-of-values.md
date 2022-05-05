## I.8.2.4 Boxing and unboxing of values

For every value type, the CTS defines a corresponding reference type called the **boxed type**. The reverse is not true: In general, reference types do not have a corresponding value type. The representation of a value of a boxed type (a **boxed value**) is a location where a value of the value type can be stored. A boxed type is an object type and a boxed value is an object.

A boxed type cannot be directly referred to by name, therefore no field or local variable can be given a boxed type. The closest named base class to a boxed enumerated value type is `System.Enum`; for all other value types it is `System.ValueType`. Fields typed `System.ValueType` can only contain the null value or an instance of a boxed value type. Locals typed `System.Enum` can only contain the null value or an instance of a boxed enumeration type.

All value types have an operation called `box`. Boxing a value of any value type produces its boxed value; i.e., a value of the corresponding boxed type containing a bitwise copy of the original value. If the value type is a nullable type&mdash;defined as an instantiation of the value type `System.Nullable<T>`&mdash;the result is a null reference or bitwise copy of its `Value` property of type `T`, depending on its `HasValue` property (false and true, respectively). All boxed types have an operation called `unbox`, which results in a managed pointer to the bit representation of the value.

The `box` instruction can be applied to more than just value types; such types are called *boxable types*. A type is boxable if it is one of the following:

 * A value type (including instantiations of generic value types) excluding typed references (§[I.8.2.1.1](i.8.2.1.1-managed-pointers-and-related-types.md)). Boxing a byref-like type is not verifiable (§[I.8.2.1.1](i.8.2.1.1-managed-pointers-and-related-types.md)).

   _[Rationale:_ Typed references are excluded so that objects in the GC heap cannot contain references to the interior of other GC objects (§[I.8.2.1.1](i.8.2.1.1-managed-pointers-and-related-types.md)). Byref-like types contain embedded pointers to entries in the VES stack. If byref-like types are boxed these embedded pointers could outlive the entries to which they point, so this operation is unverifiable. _end rationale]_

 * A reference type (including classes, arrays, delegates, and instantiations of generic classes) excluding managed pointers/byrefs (§[I.8.2.1.1](i.8.2.1.1-managed-pointers-and-related-types.md))

 * A generic parameter (to a generic type definition, or a generic method definition) _[Note:_ Boxing and unboxing of generic arguments adds performance overhead to a CLI implementation. The `constrained.` prefix can improve performance during virtual dispatch to a method defined by a value type, by avoiding boxing the value type. _end note]_

The type `System.Void` is never boxable.

Interfaces and inheritance are defined only on reference types. Thus, while a value type definition (§[I.8.9.7](i.8.9.7-value-type-definition.md)) can specify both interfaces that shall be implemented by the value type and the class (`System.ValueType` or `System.Enum`) from which it inherits, these apply only to boxed values. 

> #### CLS Rule 3:
>
> Boxed value types are not CLS-compliant.
>
> _[Note:_ In lieu of boxed types, use `System.Object`, `System.ValueType`, or `System.Enum`, as appropriate.
>
> **CLS (consumer):** Need not import boxed value types.
>
> **CLS (extender):** Need not provide syntax for defining or using boxed value types.
>
> **CLS (framework):** Shall not use boxed value types in its publicly exported aspects. _end note]_
