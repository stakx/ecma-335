## I.11 Collected Common Language Specification rules

The complete set of CLS rules are collected here for reference. Recall that these rules apply only to "externally visible" items&mdash;types that are visible outside of their own assembly and members of those types that have `public`, `family`, or `family-or-assembly` accessibility. Furthermore, items can be explicitly marked as CLS-compliant or not using the `System.CLSCompliantAttribute`. The CLS rules apply only to items that are marked as CLS-compliant.

**CLS Rule 1:** CLS rules apply only to those parts of a type that are accessible or visible outside of the defining assembly. (§[I.7.3](i.7.3-cls-compliance.md))

**CLS Rule 2:** Members of non-CLS compliant types shall not be marked CLS-compliant. (§[I.7.3.1](i.7.3.1-marking-items-as-cls-compliant.md))

**CLS Rule 3:** Boxed value types are not CLS-compliant. (§[I.8.2.4](i.8.2.4-boxing-and-unboxing-of-values.md).)

**CLS Rule 4:** Assemblies shall follow Annex 7 of Technical Report 15 of the Unicode Standard 3.0 governing the set of characters permitted to start and be included in identifiers, available on-line at http://www.unicode.org/unicode/reports/tr15/tr15-18.html. Identifiers shall be in the canonical format defined by Unicode Normalization Form C. For CLS purposes, two identifiers are the same if their lowercase mappings (as specified by the Unicode locale-insensitive, one-to-one lowercase mappings) are the same. That is, for two identifiers to be considered different under the CLS they shall differ in more than simply their case. However, in order to override an inherited definition the CLI requires the precise encoding of the original declaration be used. (§[I.8.5.1](i.8.5.1-valid-names.md))

**CLS Rule 5:** All names introduced in a CLS-compliant scope shall be distinct independent of kind, except where the names are identical and resolved via overloading. That is, while the CTS allows a single type to use the same name for a method and a field, the CLS does not. (§[I.8.5.2](i.8.5.2-assemblies-and-scoping.md))

**CLS Rule 6:** Fields and nested types shall be distinct by identifier comparison alone, even though the CTS allows distinct signatures to be distinguished.  Methods, properties, and events that have the same name (by identifier comparison) shall differ by more than just the return type, except as specified in CLS Rule 39. (§[I.8.5.2](i.8.5.2-assemblies-and-scoping.md))

**CLS Rule 7:** The underlying type of an enum shall be a built-in CLS integer type, the name of the field shall be "value__", and that field shall be marked RTSpecialName. (§[I.8.5.2](i.8.5.2-assemblies-and-scoping.md))

**CLS Rule 8:** There are two distinct kinds of enums, indicated by the presence or absence of the `System.FlagsAttribute` (see [Partition IV Library](#todo-missing-hyperlink)) custom attribute. One represents named integer values; the other represents named bit flags that can be combined to generate an unnamed value.  The value of an enum is not limited to the specified values. (§[I.8.5.2](i.8.5.2-assemblies-and-scoping.md))

**CLS Rule 9:** Literal static fields (see §[I.8.6.1](#todo-missing-hyperlink)) of an enum shall have the type of the enum itself. (§[I.8.5.2](#todo-missing-hyperlink))

**CLS Rule 10:** Accessibility shall not be changed when overriding inherited methods, except when overriding a method inherited from a different assembly with accessibility family-or-assembly.  In this case, the override shall have accessibility family. (§[I.8.5.3.2](#todo-missing-hyperlink))

**CLS Rule 11:** All types appearing in a signature shall be CLS-compliant. All types composing an instantiated generic type shall be CLS-compliant. (§[I.8.6.1](#todo-missing-hyperlink))

**CLS Rule 12:** The visibility and accessibility of types and members shall be such that types in the signature of any member shall be visible and accessible whenever the member itself is visible and accessible. For example, a public method that is visible outside its assembly shall not have an argument whose type is visible only within the assembly. The visibility and accessibility of types composing an instantiated generic type used in the signature of any member shall be visible and accessible whenever the member itself is visible and accessible. For example, an instantiated generic type present in the signature of a member that is visible outside its assembly shall not have a generic argument whose type is visible only within the assembly. (§[I.8.6.1](i.8.6.1-signatures.md))

**CLS Rule 13:** The value of a literal static is specified through the use of field initialization metadata (see Partition II Metadata). A CLS-compliant literal must have a value specified in field initialization metadata that is of exactly the same type as the literal (or of the underlying type, if that literal is an enum). (§[I.8.6.1.2](#todo-missing-hyperlink))

**CLS Rule 14:** Typed references are not CLS-compliant. (§[I.8.6.1.3](#todo-missing-hyperlink))

**CLS Rule 15:** The vararg constraint is not part of the CLS, and the only calling convention supported by the CLS is the standard managed calling convention. (§[I.8.6.1.5](#todo-missing-hyperlink))

**CLS Rule 16:** Arrays shall have elements with a CLS-compliant type, and all dimensions of the array shall have lower bounds of zero. Only the fact that an item is an array and the element type of the array shall be required to distinguish between overloads.  When overloading is based on two or more array types the element types shall be named types. (§[I.8.9.1](i.8.9.1-array-types.md))

**CLS Rule 17:** Unmanaged pointer types are not CLS-compliant. (§[I.8.9.2](i.8.9.2-unmanaged-pointer-types.md))

**CLS Rule 18:** CLS-compliant interfaces shall not require the definition of non-CLS compliant methods in order to implement them. (§[I.8.9.4](i.8.9.4-interface-type-definition.md))

**CLS Rule 19:** CLS-compliant interfaces shall not define static methods, nor shall they define fields. (§[I.8.9.4](i.8.9.4-interface-type-definition.md))

**CLS Rule 20:** CLS-compliant classes, value types, and interfaces shall not require the implementation of non-CLS-compliant members. (§[I.8.9.6.4]](#todo-missing-hyperlink))

**CLS Rule 21:** An object constructor shall call some instance constructor of its base class before any access occurs to inherited instance data. (This does not apply to value types, which need not have constructors.) (§[I.8.9.6.6]](#todo-missing-hyperlink))

**CLS Rule 22:** An object constructor shall not be called except as part of the creation of an object, and an object shall not be initialized twice. (§[I.8.9.6.6]](#todo-missing-hyperlink))

**CLS Rule 23:** `System.Object` is CLS-compliant. Any other CLS-compliant class shall inherit from a CLS-compliant class. (§[I.8.9.9]](#todo-missing-hyperlink))

**CLS Rule 24:** The methods that implement the getter and setter methods of a property shall be marked SpecialName in the metadata. (§[I.8.11.3]](#todo-missing-hyperlink))

**CLS Rule 25:** No longer used. _[Note:_ In an earlier version of this standard, this rule stated "The accessibility of a property and of its accessors shall be identical." The removal of this rule allows, for example, public access to a getter while restricting access to the setter. _end note]_ (§[I.8.11.3](i.8.11.3-property-definitions.md))

**CLS Rule 26:** A property’s accessors shall all be static, all be virtual, or all be instance. (§[I.8.11.3](i.8.11.3-property-definitions.md))

**CLS Rule 27:** The type of a property shall be the return type of the getter and the type of the last argument of the setter.  The types of the parameters of the property shall be the types of the parameters to the getter and the types of all but the final parameter of the setter.  All of these types shall be CLS-compliant, and shall not be managed pointers (i.e., shall not be passed by reference). (§[I.8.11.3](i.8.11.3-property-definitions.md))

**CLS Rule 28:** Properties shall adhere to a specific naming pattern. See §[I.10.4](i.10.4-naming-patterns.md). The SpecialName attribute referred to in CLS rule 24 shall be ignored in appropriate name comparisons and shall adhere to identifier rules. A property shall have a getter method, a setter method, or both. (§[I.8.11.3](i.8.11.3-property-definitions.md))

**CLS Rule 29:** The methods that implement an event shall be marked SpecialName in the metadata. (§[I.8.11.4](i.8.11.4-event-definitions.md))

**CLS Rule 30:** The accessibility of an event and of its accessors shall be identical. (§[I.8.11.4](i.8.11.4-event-definitions.md))

**CLS Rule 31:** The add and remove methods for an event shall both either be present or absent. (§[I.8.11.4](i.8.11.4-event-definitions.md))

**CLS Rule 32:** The add and remove methods for an event shall each take one parameter whose type defines the type of the event and that shall be derived from `System.Delegate`. (§[I.8.11.4](i.8.11.4-event-definitions.md))

**CLS Rule 33:** Events shall adhere to a specific naming pattern. See §[I.10.4](i.10.4-naming-patterns.md). The SpecialName attribute referred to in CLS rule 29 shall be ignored in appropriate name comparisons and shall adhere to identifier rules. (§[I.8.11.4](i.8.11.4-event-definitions.md))

**CLS Rule 34:** The CLS only allows a subset of the encodings of custom attributes.  The only types that shall appear in these encodings are (see Partition IV): `System.Type`, `System.String`, `System.Char`, `System.Boolean`, `System.Byte`, `System.Int16`, `System.Int32`, `System.Int64`, `System.Single`, `System.Double`, and any enumeration type based on a CLS-compliant base integer type. (§[I.9.7](i.9.7-metadata-extensibility.md))

**CLS Rule 35:** The CLS does not allow publicly visible required modifiers (modreq, see [Partition II](#todo-missing-hyperlink)), but does allow optional modifiers (modopt, see [Partition II](#todo-missing-hyperlink)) it does not understand. (§[I.9.7](i.9.7-metadata-extensibility.md))

**CLS Rule 36:** Global static fields and methods are not CLS-compliant. (§[I.9.8](i.9.8-globals-imports-and-exports.md))

**CLS Rule 37:** Only properties and methods can be overloaded. (§[I.10.2](i.10.2-overloading.md))

**CLS Rule 38:** Properties and methods can be overloaded based only on the number and types of their parameters, except the conversion operators named `op_Implicit` and `op_Explicit`, which can also be overloaded based on their return type. (§[I.10.2](i.10.2-overloading.md))

**CLS Rule 39:** If either `op_Implicit` or `op_Explicit` is provided, an alternate means of providing the coercion shall be provided. (§[I.10.3.3](i.10.3.3-conversion-operators.md))

**CLS Rule 40:** Objects that are thrown shall be of type `System.Exception` or a type inheriting from it. Nonetheless, CLS-compliant methods are not required to block the propagation of other types of exceptions. (§[I.10.5](i.10.5-exceptions.md))

**CLS Rule 41:** Attributes shall be of type `System.Attribute`, or a type inheriting from it. (§[I.10.6](i.10.6-custom-attributes.md))

**CLS Rule 42:** Nested types shall have at least as many generic parameters as the enclosing type. Generic parameters in a nested type correspond by position to the generic parameters in its enclosing type. (§[I.10.7.1](i.10.7.1-nested-type-parameter-re-declaration.md))

**CLS Rule 43:** The name of a generic type shall encode the number of type parameters declared on the non-nested type, or newly introduced to the type if nested, according to the rules defined above. (§[I.10.7.2](i.10.7.2-type-names-and-arity-encoding.md))

**CLS Rule 44:** A generic type shall redeclare sufficient constraints to guarantee that any constraints on the base type, or interfaces would be satisfied by the generic type constraints. (§[I.10.7.3](i.10.7.3-type-constraint-re-declaration.md))

**CLS Rule 45:** Types used as constraints on generic parameters shall themselves be CLS-compliant. (§[I.10.7.4](i.10.7.4-constraint-type-restrictions.md))

**CLS Rule 46:** The visibility and accessibility of members (including nested types) in an instantiated generic type shall be considered to be scoped to the specific instantiation rather than the generic type declaration as a whole. Assuming this, the visibility and accessibility rules of CLS rule 12 still apply. (§[I.10.7.5](i.10.7.5-frameworks-and-accessibility-of-nested-types.md))

**CLS Rule 47:** For each abstract or virtual generic method, there shall be a default concrete (non-abstract) implementation. (§[I.10.7.6](i.10.7.6-frameworks-and-abstract-or-virtual-methods.md))

**CLS Rule 48:** If two or more CLS-compliant methods declared in a type have the same name and, for a specific set of type instantiations, they have the same parameter and return types, then all these methods shall be semantically equivalent at those type instantiations. (§[I.7.2.1](i.7.2.1-cls-framework.md))
