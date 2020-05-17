## II.16.1.2 Field contract attributes

Field contract attributes are **initonly**, **literal**, **static** and **notserialized**. These attributes can be combined; however, only static fields shall be literal. The default is an instance field that can be serialized.

**static** specifies that the field is associated with the type itself rather than with an instance of the type. Static fields can be accessed without having an instance of a type, e.g., by static methods. As a consequence, within an application domain, a static field is shared between all instances of a type, and any modification of this field will affect all instances. If **static** is not specified, an instance field is created.

**initonly** marks fields which are constant after they are initialized. These fields shall only be mutated inside a constructor. If the field is a static field, then it shall be mutated only inside the type initializer of the type in which it was declared. If it is an instance field, then it shall be mutated only in one of the instance constructors of the type in which it was defined. It shall not be mutated in any other method or in any other constructor, including constructors of derived classes.

_[Note:_ The use of `ldflda` or `ldsflda` on an **initonly** field makes code unverifiable. In unverifiable code, the VES need not check whether initonly fields are mutated outside the constructors. The VES need not report any errors if a method changes the value of a constant. However, such code is not valid. _end note]_

**literal** specifies that this field represents a constant value; such fields shall be assigned a value. In contrast to **initonly** fields, **literal** fields do not exist at runtime. There is no memory allocated for them. **literal** fields become part of the metadata, but cannot be accessed by the code. **literal** fields are assigned a value by using the _FieldInit_ syntax (§[II.16.2](ii.16.2-field-init-metadata.md)).

_[Note:_ It is the responsibility of tools generating CIL to replace source code references to the literal with its actual value. Hence changing the value of a literal requires recompilation of any code that references the literal. Literal values are, thus, not version-resilient. _end note]_
