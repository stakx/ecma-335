## I.10.3.1 Unary operators

Unary operators take one operand, perform some operation on it, and return the result. They are represented as static methods on the class that defines the type of their one operand. [Table I.4: Unary Operator Names](#todo-missing-hyperlink) shows the names that are defined.

#### Table I.4: Unary Operator Names

 Name | ISO/IEC 14882:2003 C++ Operator Symbol<br>(This column is informative.)
 ---- | ----
 `op_Decrement` | Similar to `--` <sup>1</sup>
 `op_Increment` | Similar to `++` <sup>1</sup>
 `op_UnaryNegation` | `-` (unary)
 `op_UnaryPlus` | `+` (unary)
 `op_LogicalNot` | `!`
 `op_True` <sup>2</sup> | Not defined
 `op_False` <sup>2</sup> | Not defined
 `op_AddressOf` | `&` (unary)
 `op_OnesComplement` | `~`
 `op_PointerDereference` | `*` (unary)

 <sup>1</sup> From a pure C++ point of view, the way one must write these functions for the CLI differs in one very important aspect. In C++, these methods must increment or decrement their operand directly, whereas, in CLI, they must not; instead, they simply return the value of their operand +/- 1, as appropriate, without modifying their operand. The operand must be incremented or decremented by the compiler that generates the code for the `++`/`--` operator, separate from the call to these methods.

 <sup>2</sup> The `op_True` and `op_False` operators do not exist in C++. They are provided to support tristate Boolean types, such as those used in database languages.
