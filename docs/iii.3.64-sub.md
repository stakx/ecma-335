## III.3.64 sub &ndash; subtract numeric values

 | Format | Assembly Format | Description
 | ---- | ---- | ----
 | 59 | `sub` | Subtract _value2_ from _value1_, returning a new value.

#### Stack Transition:

&hellip;, _value1_, _value2_ &rarr; &hellip;, _result_

#### Description:

The `sub` instruction subtracts _value2_ from _value1_ and pushes the result on the stack. Overflow is not detected for the integral operations (see `sub.ovf`); for floating-point operands, `sub` returns `+inf` on positive overflow, `-inf` on negative overflow, and zero on floating-point underflow.

The acceptable operand types and their corresponding result data type are encapsulated in [Table III.2: Binary Numeric Operations](#todo-missing-hyperlink).

#### Exceptions:

None.

#### Correctness and Verifiability:

See [Table 2: Binary Numeric Operations](#todo-missing-hyperlink).
