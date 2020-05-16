## I.7.2.3 CLS extender

A CLS extender is a language or tool that is designed to allow programmers to both use and extend CLS-compliant frameworks. CLS extenders support a superset of the behavior supported by a CLS consumer (i.e., everything that applies to a CLS consumer also applies to CLS extenders). In addition to the requirements of a consumer, extenders are expected to be able to:

 * Define new CLS-compliant types that extend any (non-sealed) CLS-compliant base class.

 * Have some mechanism for defining types whose names are keywords in the language.

 * Provide independent implementations for all methods of all interfaces supported by a type. That is, it is not sufficient for an extender to require a single code body to implement all interface methods of the same name and signature.

 * Implement any CLS-compliant interface.

 * Place any CLS-compliant custom attribute on all appropriate elements of metadata.

 * Define new CLS-compliant (non-generic) types that extend any (non-sealed) CLScompliant base type. Valid base types include normal (non-generic) types and also fully constructed generic types.

_[Note:_ Extenders should consider supporting:

 * Type inferencing over generic methods with language-defined rules for matching.

 * Casting syntax to clarify ambiguous casts to a common supertype. _end note]_

Extenders need not support the following:

 * Definition of new CLS-compliant interfaces.

 * Definition of nested types.

 * Definition of generic types and methods.

 * Overriding existing virtual generic methods. The CLS is designed to be large enough that it is properly expressive yet small enough that all languages can reasonably accommodate it.

> _End informative text._

> #### CLS Rule 48:
>
> If two or more CLS-compliant methods declared in a type have the same name and, for a specific set of type instantiations, they have the same parameter and return types, then all these methods shall be semantically equivalent at those type instantiations.
>
> _[Note:_
>
> **CLS (consumer):** May select any one of the methods.
>
> **CLS (extender):** Same as consumer.
>
> **CLS (framework):** Shall not expose methods that violate this rule. _end note]_

_[Note:_ To avoid confusion, the CLS rules follow historical numbering from the previous version of this Standard, despite removal/addition of rules in this version. As such, the first rule shown in this partition is Rule 48. _end note]_
