## I.9.7 Metadata extensibility

CLI metadata is extensible. There are three reasons this is important:

 * The CLS is a specification for conventions that languages and tools agree to support in a uniform way for better language integration. The CLS constrains parts of the CTS model, and the CLS introduces higher-level abstractions that are layered over the CTS. It is important that the metadata be able to capture these sorts of developmenttime abstractions that are used by tools even though they are not recognized or supported explicitly by the CLI.

 * It should be possible to represent language-specific abstractions in metadata that are neither CLI nor CLS language abstractions. For example, it should be possible, over time, to enable languages like C++ to not require separate headers or IDL files in order to use types, methods, and data members exported by compiled modules.

 * It should be possible, in member signatures, to encode types and type modifiers that are used in language-specific overloading. For example, to allow C++ to distinguish `int` from `long` even on 32-bit machines where both map to the underlying type `int32`.

This extensibility comes in the following forms:

 * Every metadata object can carry custom attributes, and the metadata APIs provide a way to declare, enumerate, and retrieve custom attributes. Custom attributes can be identified by a simple name, where the value encoding is opaque and known only to the specific tool, language, or service that defined it. Or, custom attributes can be identified by a type reference, where the structure of the attribute is self-describing (via data members declared on the type) and any tool including the CLI reflection services can browse the value encoding.

   > #### CLS Rule 34:
   >
   > The CLS only allows a subset of the encodings of custom attributes. The only types that shall appear in these encodings are (see [Partition IV](#todo-missing-hyperlink)): `System.Type`, `System.String`, `System.Char`, `System.Boolean`, `System.Byte`, `System.Int16`, `System.Int32`, `System.Int64`, `System.Single`, `System.Double`, and any enumeration type based on a CLS-compliant base integer type.
   >
   > _[Note:_
   >
   > **CLS (consumer):** Shall be able to read attributes encoded using the restricted scheme.
   >
   > **CLS (extender):** Must meet all requirements for CLS consumer and be able to author new classes and new attributes. Shall be able to attach attributes based on existing attribute classes to any metadata that is emitted. Shall implement the rules for the `System.AttributeUsageAttribute` (see [Partition IV](#todo-missing-hyperlink)).
   >
   > **CLS (framework):** Shall externally expose only attributes that are encoded within the CLS rules and following the conventions specified for `System.AttributeUsageAttribute` _end note]_

* In addition to CTS type extensibility, it is possible to emit custom modifiers into member signatures (see Types in [Partition II](#todo-missing-hyperlink)). The CLI will honor these modifiers for purposes of method overloading and hiding, as well as for binding, but will not enforce any of the language-specific semantics. These modifiers can reference the return type or any parameter of a method, or the type of a field. They come in two kinds: **required modifiers** that anyone using the member must understand in order to correctly use it, and **optional modifiers** that can be ignored if the modifier is not understood.

   > #### CLS Rule 35:
   >
   > The CLS does not allow publicly visible required modifiers (**modreq**, see [Partition II](#todo-missing-hyperlink)), but does allow optional modifiers (**modopt**, see [Partition II](#todo-missing-hyperlink)) it does not understand.
   >
   > _[Note:_
   >
   > **CLS (consumer):** Shall be able to read metadata containing optional modifiers and correctly copy signatures that include them. Can ignore these modifiers in type matching and overload resolution. Can ignore types that become ambiguous when the optional modifiers are ignored, or that use required modifiers.
   >
   > **CLS (extender):** Shall be able to author overrides for inherited methods with signatures that include optional modifiers. Consequently, an extender must be able to copy such modifiers from metadata that it imports. There is no requirement to support required modifiers, nor to author new methods that have any kind of modifier in their signature.
   >
   > **CLS (framework):** Shall not use required modifiers in externally visible signatures unless they are marked as not CLS-compliant. Shall not expose two members on a class that differ only by the use of optional modifiers in their signature, unless only one is marked CLS-compliant. _end note]_
