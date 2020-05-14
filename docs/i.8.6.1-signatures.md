## I.8.6.1 Signatures

**Signatures** are the part of a contract that can be checked and automatically enforced. Signatures are formed by adding constraints to types and other signatures. A constraint is a limitation on the use of or allowed operations on a value or location. Example constraints would be whether a location can be overwritten with a different value or whether a value can ever be changed. All locations have signatures, as do all values. Assignment compatibility requires that the signature of the value, including constraints, be compatible with the signature of the location, including constraints. There are four fundamental kinds of signatures: type signatures (see §[I.8.6.1.1](#todo-missing-hyperlink)), location signatures (see §[I.8.6.1.2](#todo-missing-hyperlink)), parameter signatures (see §[I.8.6.1.4](#todo-missing-hyperlink)), and method signatures (see §[I.8.6.1.5](#todo-missing-hyperlink)). (A fifth kind, a local signature (see §[I.8.6.1.3](#todo-missing-hyperlink)) is really a version of a location signature.)

> #### CLS Rule 11:
>
> All types appearing in a signature shall be CLS-compliant. All types composing an instantiated generic type shall be CLS-compliant.
>
> #### CLS Rule 12:
>
> The visibility and accessibility of types and members shall be such that types in the signature of any member shall be visible and accessible whenever the member itself is visible and accessible. For example, a public method that is visible outside its assembly shall not have an argument whose type is visible only within the assembly. The visibility and accessibility of types composing an instantiated generic type used in the signature of any member shall be visible and accessible whenever the member itself is visible and accessible. For example, an instantiated generic type present in the signature of a member that is visible outside its assembly shall not have a generic argument whose type is visible only within the assembly.
>
> _[Note:_
>
> **CLS (consumer):** Need not accept types whose members violate these rules. CLS (extender): Need not provide syntax to violate these rules.
>
> **CLS (framework):** Shall not violate this rule in its exported types and their members. _end note]_

The following subclauses describe the various kinds of signatures. These descriptions are cumulative: the simplest signature is a type signature; a location signature is a type signature plus (optionally) some additional attributes; and so forth.
