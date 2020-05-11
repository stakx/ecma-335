## I.10.7.4 Constraint type restrictions

> #### CLS Rule 45:
>
> Types used as constraints on generic parameters shall themselves be CLS-compliant.
>
> _[Note:_
>
> **CLS (consumer):** Need not consume types that violate this rule.
>
> **CLS (extender):** Same as consumers. Extenders choosing to support definition of generic types shall follow this rule when checking for CLS compliance, and need not provide syntax to violate this rule.
>
> **CLS (framework):** Shall not expose types that violate this rule. _end note]_
