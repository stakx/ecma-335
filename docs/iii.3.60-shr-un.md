## III.3.60 shr.un &ndash; shift integer right, unsigned

 | Format | Assembly Format | Description
 | ---- | ---- | ----
 | 64 | `shr.un` | Shift an integer right (shift in zero), return an integer.

#### Stack Transition:

&hellip;, _value_, _shiftAmount_ &rarr; &hellip;, _result_

#### Description:

The `shr.un` instruction shifts _value_ (`int32`, `int64` or `native int`) right by the number of bits specified by _shiftAmount_. _shiftAmount_ is of type `int32` or `native int`. The return value is unspecified if _shiftAmount_ is greater than or equal to the width of _value_. `shr.un` inserts a zero bit on each shift. See [Table III.6: Shift Operations](#todo-missing-hyperlink) for details of which operand types are allowed, and their corresponding result type.

#### Exceptions:

None.

#### Correctness and Verifiability:

See [Table 5: Integer Operations](#todo-missing-hyperlink).
