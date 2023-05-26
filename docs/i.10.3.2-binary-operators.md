## I.10.3.2 Binary operators

Binary operators take two operands, perform some operation on them, and return a value. They are represented as static methods on the class that defines the type of one of their two operands. [Table I.5: Binary Operator Names](#todo-missing-hyperlink) shows the names that are defined.

#### Table I.5: Binary Operator Names

 Name | ISO/IEC 14882:2003 C++ Operator Symbol<br>(This column is informative.)
 ---- | ----
 `op_Addition` | `+` (binary)
 `op_Subtraction` | `-` (binary)
 `op_Multiply` | `*` (binary)
 `op_Division` | `/`
 `op_Modulus` | `%`
 `op_ExclusiveOr` | `^`
 `op_BitwiseAnd` | `&` (binary)
 `op_BitwiseOr` | `\|`
 `op_LogicalAnd` | `&&`
 `op_LogicalOr` | `\|\|`
 `op_Assign` | Not defined (`=` is not the same)
 `op_LeftShift` | `<<`
 `op_RightShift` | `>>`
 `op_SignedRightShift` | Not defined
 `op_UnsignedRightShift` | Not defined
 `op_Equality` | `==`
 `op_GreaterThan` | `>`
 `op_LessThan` | `<`
 `op_Inequality` | `!=`
 `op_GreaterThanOrEqual` | `>=`
 `op_LessThanOrEqual` | `<=`
 `op_UnsignedRightShiftAssignment` | Not defined
 `op_MemberSelection` | `->`
 `op_RightShiftAssignment` | `>>=`
 `op_MultiplicationAssignment` | `*=`
 `op_PointerToMemberSelection` | `->*`
 `op_SubtractionAssignment` | `-=`
 `op_ExclusiveOrAssignment` | `^=`
 `op_LeftShiftAssignment` | `<<=`
 `op_ModulusAssignment` | `%=`
 `op_AdditionAssignment` | `+=`
 `op_BitwiseAndAssignment` | `&=`
 `op_BitwiseOrAssignment` | `\|=`
 `op_Comma` | `,`
 `op_DivisionAssignment` | `/=`
