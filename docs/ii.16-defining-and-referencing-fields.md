## II.16 Defining and referencing fields

Fields are typed memory locations that store the data of a program. The CLI allows the declaration of both instance and static fields. While static fields are associated with a type, and are shared across all instances of that type, instance fields are associated with a particular instance of that type. Once instantiated, an instance has its own copy of each instance field. The CLI also supports global fields, which are fields declared outside of any type definition. Global fields shall be static.

A field is defined by the **.field** directive: (§[II.22.15](#todo-missing-hyperlink))

 | _Field_ ::=
 | ----
 | `.field` _FieldDecl_

 | _FieldDecl_ ::=
 | ----
 | [ `'['` _Int32_ `']'` ] _FieldAttr_* _Type_ _Id_ [ `'='` _FieldInit_ | `at` _DataLabel_ ]

The _FieldDecl_ has the following parts:

 * An optional integer specifying the byte offset of the field within an instance (§[II.10.7](ii.10.7-controlling-instance-layout.md)). If present, the type containing this field shall have the explicit layout attribute. An offset shall not be supplied for global or static fields.

 * Any number of field attributes (§[II.16.2](ii.16.2-field-init-metadata.md)).

 * Type.

 * Name.

 * Optionally, either a _FieldInit_ clause (§[II.16.2](ii.16.2-field-init-metadata.md)) or a _DataLabel_ (§[II.5.4](ii.5.4-labels-and-lists-of-labels.md)) clause.

Global fields shall have a data label associated with them. This specifies where, in the PE file, the data for that field is located. Static fields of a type can, but need not, be assigned a data label.

_[Example:_

 ```ilasm
 .field private class [.module Counter.dll]Counter counter
 .field public static initonly int32 pointCount
 .field private int32 xOrigin
 .field public static int32 count at D_0001B040
 ```

_end example]_
