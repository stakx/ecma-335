## I.10.7.3 Type constraint re-declaration

CLS Frameworks shall ensure that a generic type explicitly re-declares any constraints present on generic parameters in its base class and all implemented interfaces. Put another way, CLS Extenders and Consumers should be able to examine just the specific type in question, to determine the set of constraints that need to be satisfied.

> #### CLS Rule 44:
>
> A generic type shall redeclare sufficient constraints to guarantee that any constraints on the base type, or interfaces would be satisfied by the generic type constraints.
>
> _[Note:_
>
> **CLS (consumer):** Need not consume types that violate this rule. Consumers who check constraints need only look at the type being instantiated to determine the applicable constraints.
>
> **CLS (extender):** Same as consumers. Extenders choosing to support definition of generic types shall follow this rule.
>
> **CLS (framework):** Shall not expose types that violate this rule. _end note]_
