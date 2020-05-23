## II.10.1 Type header (ClassHeader)

A type header consists of

 * any number of type attributes,

 * optional generic parameters

 * a name (an _Id_),

 * a base type (or base class type), which defaults to `[mscorlib]System.Object`, and

 * an optional list of interfaces whose contract this type and all its descendent types shall satisfy.

 | _ClassHeader_ ::=
 | ----
 | _ClassAttr_* _Id_ [ `'<'` _GenPars_ `'>'` ] [ `extends` _TypeSpec_ [ `implements` _TypeSpec_ ] [ `','` _TypeSpec_ ]* ]

The optional generic parameters are used when defining a generic type (§[II.10.1.7](ii.10.1.7-generic-parameters-genpars.md)).

The **extends** keyword specifies the *base type* of a type. A type shall extend from exactly one other type. If no type is specified, *ilasm* will add an **extends** clause to make the type inherit from `System.Object`.

The **implements** keyword specifies the *interfaces* of a type. By listing an interface here, a type declares that all of its concrete implementations will support the contract of that interface, including providing implementations of any virtual methods the interface declares. See also §[II.11](ii.11-semantics-of-classes.md) and §[II.12](ii.12-semantics-of-interfaces.md).

The left-to-right order of the _TypeSpec_ after the **implements** keyword is preserved as a top-to-bottom ordering in the _InterfaceImpl_ table (§[22.23](#todo-missing-hyperlink)). This is required to support variance resolution in interface dispatch (§[12.2](#todo-missing-hyperlink)).

_[Example:_ This code declares the class `CounterTextBox`, which extends the class `System.Windows.Forms.TextBox` in the assembly `System.Windows.Forms`, and implements the interface `CountDisplay` in the module `Counter` of the current assembly. The attributes **private**, **auto** and **autochar** are described in the following subclauses.

 ```ilasm
 .class private auto autochar CounterTextBox
    extends [System.Windows.Forms]System.Windows.Forms.TextBox
    implements [.module Counter]CountDisplay
 { // body of the class }
 ```

_end example]_

A type can have any number of custom attributes attached. Custom attributes are attached as described in §[II.21](ii.21-custom-attributes.md). The other (predefined) attributes of a type can be grouped into attributes that specify visibility, type layout information, type semantics information, inheritance rules, interoperation information, and information on special handling. The following subclauses provide additional information on each group of predefined attributes.

 | _ClassAttr_ ::= | Description | Clause
 | ---- | ---- | ----
 | `abstract` | Type is abstract. | §[II.10.1.4](ii.10.1.4-inheritance-attributes.md)
 | \| `ansi` | Marshal strings to platform as ANSI. | §[II.10.1.5](ii.10.1.5-interoperation-attributes.md)
 | \| `auto` | Layout of fields is provided automatically. | §[II.10.1.2](ii.10.1.2-type-layout-attributes.md)
 | \| `autochar` | Marshal strings to platform as ANSI or Unicode (platform-specific). | §[II.10.1.5](ii.10.1.5-interoperation-attributes.md)
 | \| `beforefieldinit` | Need not initialize the type before a static method is called. | §[II.10.1.6](ii.10.1.6-special-handling-attributes.md)
 | \| `explicit` | Layout of fields is provided explicitly. | §[II.10.1.2](ii.10.1.2-type-layout-attributes.md)
 | \| `interface` | Declares an interface. | §[II.10.1.3](ii.10.1.3-type-semantics-attributes.md)
 | \| `nested assembly` | Assembly accessibility for nested type. | §[II.10.1.1](ii.10.1.1-visibility-and-accessibility-attributes.md)
 | \| `nested famandassem` | Family and assembly accessibility for nested type. | §[II.10.1.1](ii.10.1.1-visibility-and-accessibility-attributes.md)
 | \| `nested family` | Family accessibility for nested type. | §[II.10.1.1](ii.10.1.1-visibility-and-accessibility-attributes.md)
 | \| `nested famorassem` | Family or assembly accessibility for nested type. | §[II.10.1.1](ii.10.1.1-visibility-and-accessibility-attributes.md)
 | \| `nested private` | Private accessibility for nested type. | §[II.10.1.1](ii.10.1.1-visibility-and-accessibility-attributes.md)
 | \| `nested public` | Public accessibility for nested type. | §[II.10.1.1](ii.10.1.1-visibility-and-accessibility-attributes.md)
 | \| `private` | Private visibility of top-level type. | §[II.10.1.1](ii.10.1.1-visibility-and-accessibility-attributes.md)
 | \| `public` | Public visibility of top-level type. | §[II.10.1.1](ii.10.1.1-visibility-and-accessibility-attributes.md)
 | \| `rtspecialname` | Special treatment by runtime. | §[II.10.1.6](ii.10.1.6-special-handling-attributes.md)
 | \| `sealed` | The type cannot be derived from. | §[II.10.1.4](ii.10.1.4-inheritance-attributes.md)
 | \| `sequential` | Layout of fields is sequential. | §[II.10.1.2](ii.10.1.2-type-layout-attributes.md)
 | \| `serializable` | Reserved (to indicate this type can be serialized). | §[II.10.1.6](ii.10.1.6-special-handling-attributes.md)
 | \| `specialname` | Might get special treatment by tools. | §[II.10.1.6](ii.10.1.6-special-handling-attributes.md)
 | \| `unicode` | Marshal strings to platform as Unicode. | §[II.10.1.5](ii.10.1.5-interoperation-attributes.md)
