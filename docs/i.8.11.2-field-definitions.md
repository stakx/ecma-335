## I.8.11.2 Field definitions

Field definitions are composed of a name and a location signature. The location signature defines the type of the field and the accessing constraints, see §[I.8.6.1](i.8.6.1-signatures.md). A value type or object type shall define only one field of a given name and type. However, a derived object type can have fields that are of the same name and type as its base object type. See §[I.8.10.1](i.8.10.1-field-inheritance.md) and §[I.8.10.4](i.8.10.4-hiding-overriding-and-layout.md).

The name of the field is scoped to the type (see §[I.8.5.2](i.8.5.2-assemblies-and-scoping.md)). Fields can be given accessibility attributes, see §[I.8.5.3](i.8.5.3-visibility-accessibility-and-security.md). Fields shall only store values whose types are *assignable-to* (§[I.8.7.3](i.8.7.3-general-assignment-compatibility.md)) the type of the field (see §[I.8.3.1](i.8.3.1-assignment-compatible-locations.md)).

Fields can be marked as **static**, indicating that the field is not part of values of the type but rather a location associated with the type as a whole. Locations for the static fields are created when the type is loaded and initialized when the type is initialized.

Fields not marked as static define the representation of a value of a type by defining the substructure of the value (see §[I.8.4.1](i.8.4.1-fields-array-elements-and-values.md)). Locations for such fields are created within every value of the type whenever a new value is constructed. They are initialized during construction of the new value. A non-static field of a given name is always located at the same place within every value of the type.

A field that is marked **serializable** is to be serialized as part of the persistent state of a value of the type. This standard does not require that a conforming implementation provide support for serialization (or its counterpart, deserialization), not does it specify the mechanism by which these operations might be accomplished.
