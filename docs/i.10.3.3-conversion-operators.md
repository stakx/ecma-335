## I.10.3.3 Conversion operators

Conversion operators are unary operations that allow conversion from one type to another. The operator method shall be defined as a static method on either the operand or return type. There are two types of conversions:

 * An implicit (**widening**) coercion shall not lose any magnitude or precision.  These should be provided using a method named `op_Implicit`.

 * An explicit (**narrowing**) coercion can lose magnitude or precision. These should be provided using a method named `op_Explicit`.

_[Note:_ Conversions provide functionality that can’t be generated in other ways, and many languages do not support the use of the conversion operators through special syntax.  Therefore, CLS rules require that the same functionality be made available through an alternate mechanism. It is recommended that the more common `ToXxx` (where `Xxx` is the target type) and `FromYyy` (where `Yyy` is the name of the source type) naming pattern be used. _end note]_

Because these operations can exist on the class of their operand type (so-called "from" conversions) and would therefore differ on their return type only, the CLS specifically allows that these two operators be overloaded based on their return type. The CLS, however, also requires that if this form of overloading is used then the language shall provide an alternate means for providing the same functionality since not all CLS languages will implement operators with special syntax.

> #### CLS Rule 39:
>
> If either `op_Implicit` or `op_Explicit` is provided, an alternate means of providing the coercion shall be provided.
>
> _[Note:_
>
> **CLS (consumer):** Where appropriate to the language design, use the existence of `op_Implicit` and/or `op_Explicit` in choosing method overloads and generating automatic coercions.
>
> **CLS (extender):** Where appropriate to the language design, implement user-defined implicit or explicit coercion operators using the corresponding `op_Implicit`, `op_Explicit`, `ToXxx`, and/or `FromXxx` methods.
>
> **CLS (framework):** If coercion operations are supported, they shall be provided as `FromXxx` and `ToXxx`, and optionally `op_Implicit` and `op_Explicit` as well. CLS frameworks are encouraged to provide such coercion operations. _end note]_
