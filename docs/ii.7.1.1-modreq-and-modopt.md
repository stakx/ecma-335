## II.7.1.1 modreq and modopt

Custom modifiers, defined using **modreq** ("required modifier") and **modopt** ("optional modifier"), are similar to custom attributes (§[II.21](#todo-missing-hyperlink)) except that modifiers are part of a signature rather than being attached to a declaration. Each modifer associates a type reference with an item in the signature.

The CLI itself shall treat required and optional modifiers in the same manner. Two signatures that differ only by the addition of a custom modifier (required or optional) shall not be considered to match. Custom modifiers have no other effect on the operation of the VES.

_[Rationale:_ The distinction between required and optional modifiers is important to tools other than the CLI that deal with the metadata, typically compilers and program analysers. A required modifier indicates that there is a special semantics to the modified item that should not be ignored, while an optional modifier can simply be ignored. For example, the `const` qualifier in the C programming language can be modelled with an optional modifier since the caller of a method that has a `const`-qualified parameter need not treat it in any special way. On the other hand, a parameter that shall be copy-constructed in C++ shall be marked with a required custom attribute since it is the caller who makes the copy. _end rationale]_
