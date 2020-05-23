## II.10.2 Body of a type definition

A type can contain any number of further declarations. The directives **.event**, **.field**, **.method**, and **.property** are used to declare members of a type. The directive **.class** inside a type declaration is used to create a nested type, which is discussed in further detail in §[II.10.6](ii.10.6-nested-types.md).

 | _ClassMember_ ::= | Description | Clause
 | ---- | ---- | ----
 | `.class` _ClassHeader_ `'{'` _ClassMember_* `'}'` | Defines a nested type. | §[II.10.6](ii.10.6-nested-types.md)
 | \| `.custom` _CustomDecl_ | Custom attribute. | §[II.21](ii.21-custom-attributes.md)
 | \| `.data` _DataDecl_ | Defines static data associated with the type. | §[II.16.3](ii.16.3-embedding-data-in-a-pe-file.md)
 | \| `.event` _EventHeader_ `'{'` _EventMember_* `'}'` | Declares an event. | §[II.18](ii.18-defining-events.md)
 | \| `.field` _FieldDecl_ | Declares a field belonging to the type. | §[II.16](ii.16-defining-and-referencing-fields.md)
 | \| `.method` _MethodHeader_ `'{'` _MethodBodyItem_* `'}'` | Declares a method of the type. | §[II.15](ii.15-defining-referencing-and-calling-methods.md)
 | \| `.override` _TypeSpec_ `'::'` _MethodName_ `with` _CallConv_ _Type_ _TypeSpec_ `'::'` _MethodName_ `'('` _Parameters_ `')'` | Specifies that the first method is overridden by the definition of the second method. | §[II.10.3.2](ii.10.3.2-the-override-directive.md)
 | \| `.pack` _Int32_ | Used for explicit layout of fields. | §[II.10.7](ii.10.7-controlling-instance-layout.md)
 | \| `.param type` `'['` _Int32_ `']'` | Specifies a type parameter for a generic type; for use in associating a custom attribute with that type parameter. | §[II.15.4.1.5](ii.15.4.1.5-the-param-type_directive.md)
 | \| `.property` _PropHeader_ `'{'` _PropMember_* `'}'` | Declares a property of the type. | §[II.17](ii.17-defining-properties.md)
 | \| `.size` _Int32_ | Used for explicit layout of fields. | §[II.10.7](ii.10.7-controlling-instance-layout.md)
 | \| _ExternSourceDecl_ | Source line information. | §[II.5.7](ii.5.7-source-line-information.md)
 | \| _SecurityDecl_ | Declarative security permissions. | §[II.20](ii.20-declarative-security.md)

The top-to-bottom order of the **.method** definitions within a **.class** declaration (§[II.10](ii.10-defining-types.md)) is preserved in the _MethodDef_ table (§[22.26](#todo-missing-hyperlink)). This is required to support variance resolution in interface dispatch (§[12.2](#todo-missing-hyperlink)).
