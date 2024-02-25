## I.8.5.2 Assemblies and scoping

Generally, names are not unique. Names are collected into groupings called **scopes**. Within a scope, a name can refer to multiple entities as long as they are of different **kinds** (methods, fields, nested types, properties, and events) or have different signatures.

> #### CLS Rule 5:
>
> All names introduced in a CLS-compliant scope shall be distinct independent of kind, except where the names are identical and resolved via overloading. That is, while the CTS allows a single type to use the same name for a method and a field, the CLS does not.
>
> #### CLS Rule 6:
>
> Fields and nested types shall be distinct by identifier comparison alone, even though the CTS allows distinct signatures to be distinguished. Methods, properties, and events that have the same name (by identifier comparison) shall differ by more than just the return type, except as specified in CLS Rule 39.
>
> _[Note:_ CLS (consumer): Need not consume types that violate these rules after ignoring any members that are marked as not CLS-compliant.
>
> **CLS (extender):** Need not provide syntax for defining types that violate these rules.
>
> **CLS (framework):** Shall not mark types as CLS-compliant if they violate these rules unless they mark sufficient offending items within the type as not CLS-compliant so that the remaining members do not conflict with one another. _end note]_

A named entity has its name in exactly one scope. Hence, to identify a named entity, both a scope and a name need to be supplied. The scope is said to **qualify** the name. Types provide a scope for the names in the type; hence types qualify the names in the type. For example, consider a compound type `Point` that has a field named `x`. The name "field `x`" by itself does not uniquely identify the named field, but the qualified name "field `x` in type `Point`" does.

Since types are named, the names of types are also grouped into scopes. To fully identify a type, the type name shall be qualified by the scope that includes the type name. A type name is scoped by the **assembly** that contains the implementation of the type. An assembly is a configured set of loadable code modules and other resources that together implement a unit of functionality. The type name is said to be in the **assembly scope** of the assembly that implements the type. Assemblies themselves have names that form the basis of the [CTS naming hierarchy](#todo-missing-hyperlink).

The **type definition**:

 * Defines a name for the type being defined (i.e., the **type name**) and specifies a scope in which that name will be found.

 * Defines a **member scope** in which the names of the different kinds of members (fields, methods, events, and properties) are bound. The tuple of (member name, member kind, and member signature) is unique within a member scope of a type.

 * Implicitly assigns the type to the assembly scope of the assembly that contains the type definition.

The CTS supports an **enum** (also known as an **enumeration type**), an alternate name for an existing type. For the purposes of matching signatures, an enum shall not be the same as the underlying type. Instances of an enum, however, shall be *assignable-to* the underlying type, and vice versa. That is, no cast (see §[I.8.3.3](i.8.3.3-casting.md)) or coercion (see §[I.8.3.2](i.8.3.2-coercion.md)) is required to convert from the enum to the underlying type, nor are they required from the underlying type to the enum. An enum is considerably more restricted than a true type, as follows:

 * It shall have exactly one instance field, and the type of that field defines the underlying type of the enumeration.

 * It shall not have any methods of its own.

 * It shall derive from `System.Enum` (see [Partition IV Library – Kernel Profile](#todo-missing-hyperlink)).

 * It shall not implement any interfaces of its own.

 * It shall not have any properties or events of its own. 

 * It shall not have any static fields unless they are literal. (see §[I.8.6.1.2](i.8.6.1.2-location-signatures.md))

The underlying type shall be a built-in integer type. Enums shall derive from `System.Enum`, hence they are value types. Like all value types, they shall be sealed (see §[I.8.9.9](i.8.9.9-object-type-inheritance.md)).

> #### CLS Rule 7:
>
> The underlying type of an enum shall be a built-in CLS integer type, the name of the field shall be "`value__`", and that field shall be marked `RTSpecialName`.
>
> #### CLS Rule 8:
>
> There are two distinct kinds of enums, indicated by the presence or absence of the `System.FlagsAttribute` (see [Partition IV Library](#todo-missing-hyperlink)) custom attribute. One represents named integer values; the other represents named bit flags that can be combined to generate an unnamed value. The value of an enum is not limited to the specified values.
>
> #### CLS Rule 9:
>
> Literal static fields (see §[I.8.6.1](i.8.6.1-signatures.md)) of an enum shall have the type of the enum itself.
>
> _[Note:_
>
> **CLS (consumer):** Shall accept the definition of enums that follow these rules, but need not distinguish flags from named values.
>
> **CLS (extender):** Same as consumer. Extender languages are encouraged to allow the authoring of enums, but need not do so.
>
> **CLS (framework):** Shall not expose enums that violate these rules, and shall not assume that enums have only the specified values (even for enums that are named values). _end note]_
