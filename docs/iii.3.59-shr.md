## III.3.59 shr &ndash; shift integer right

 | Format | Assembly Format | Description
 | ---- | ---- | ----
 | 63 | `shr` | Shift an integer right (shift in sign), return an integer.

#### Stack Transition:

&hellip;, _value_, _shiftAmount_ &rarr; &hellip;, _result_

#### Description:

The `shr` instruction shifts _value_ (`int32`, `int64` or `native int`) right by the number of bits specified by _shiftAmount_. _shiftAmount_ is of type `int32` or `native int`. The return value is unspecified if _shiftAmount_ is greater than or equal to the width of _value_. `shr` replicates the high order bit on each shift, preserving the sign of the original value in result. See [Table III.6: Shift Operations](#todo-missing-hyperlink) for details of which operand types are allowed, and their corresponding result type.

#### Exceptions:

None.

#### Correctness and Verifiability:

See [Table 5: Integer Operations](#todo-missing-hyperlink).
