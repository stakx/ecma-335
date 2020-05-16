## I.8.9.4 Interface type definition

An **interface definition** defines an interface type. An interface type is a named group of methods, locations, and other contracts that shall be implemented by any object type that supports the interface contract of the same name. An interface definition is always an incomplete description of a value, and, as such, can never define a class type or an exact type, nor can it be an object type.

Zero or more object types can support an interface type, and only object types can support an interface type. An interface type can require that objects that support it shall also support other (specified) interface types. An object type that supports the named interface contract shall provide a complete implementation of the methods, locations, and other contracts specified (but not implemented by) the interface type. Hence, a value of an object type is also a value of all of the interface types the object type supports. Support for an interface contract is declared, never inferred; i.e., the existence of implementations of the methods, locations, and other contracts required by the interface type does not imply support of the interface contract.

> #### CLS Rule 18:
>
> CLS-compliant interfaces shall not require the definition of non-CLS compliant methods in order to implement them.
>
> _[Note:_
>
> **CLS (consumer):** There is no need to deal with such interfaces.
>
> **CLS (extender):** Need not provide a mechanism for defining such interfaces.
>
> **CLS (framework):** Shall not expose any non-CLS compliant methods on interfaces it defines for external use. _end note]_

Interface types are necessarily incomplete since they say nothing about the representation of the values of the interface type. For this reason, an interface type definition shall not provide field definitions for values of the interface type (i.e., instance fields), although it can declare static fields (see §[I.8.4.3](i.8.4.3-static-fields-and-static-methods.md)).

Similarly, an interface type definition shall not provide implementations for any methods on the values of its type. However, an interface type definition can&mdash;and usually does&mdash;define method contracts (method name and method signature) that shall be implemented by supporting types. An interface type definition can define and implement static methods (see §[I.8.4.3](i.8.4.3-static-fields-and-static-methods.md)) since static methods are associated with the interface type itself rather than with any value of the type.

Interfaces can have static or virtual methods, but shall not have instance methods.

> #### CLS Rule 19:
>
> CLS-compliant interfaces shall not define static methods, nor shall they define fields.
>
> _[Note:_
>
> **CLS-compliant interfaces** can define properties, events, and virtual methods.
>
> **CLS (consumer):** Need not accept interfaces that violate these rules.
>
> **CLS (extender):** Need not provide syntax to author interfaces that violate these rules.
>
> **CLS (framework):** Shall not externally expose interfaces that violate these rules. Where static methods, instance methods, or fields are required, a separate class can be defined that provides them. _end note]_

Interface types can also define event and property contracts that shall be implemented by object types that support the interface. Since event and property contracts reduce to sets of method contracts (§[I.8.6](i.8.6-contracts.md)), the above rules for method definitions apply. For more information, see §[I.8.11.4](i.8.11.4-event-definitions.md) and §[I.8.11.3](i.8.11.3-property-definitions.md).

Interface type definitions can specify other interface contracts that implementations of the interface type are required to support. See §[I.8.9.11](i.8.9.11-interface-type-derivation.md) for specifics.

An interface type is given a visibility attribute, as described in §[I.8.5.3](i.8.5.3-visibility-accessibility-and-security.md), that controls from where the interface type can be referenced. An interface type definition is separate from any object type definition that supports the interface type. Hence, it is possible, and often desirable, to have a different visibility for the interface type and the implementing object type. However, since accessibility attributes are relative to the implementing type rather than the interface itself, all members of an interface shall have public accessibility, and no security permissions can be attached to members or to the interface itself.
