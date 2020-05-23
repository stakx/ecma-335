## III.3.67 xor &ndash; bitwise XOR

 | Format | Assembly Format | Description
 | ---- | ---- | ----
 | 61 | `xor` | Bitwise XOR of integer values, returns an integer.

#### Stack Transition:

&hellip;, _value1_, _value2_ &rarr; &hellip;, _result_

#### Description:

The `xor` instruction computes the bitwise XOR of _value1_ and _value2_ and leaves the result on the stack. The acceptable operand types and their corresponding result data type is encapsulated in [Table III.5: Integer Operations](#todo-missing-hyperlink).

#### Exceptions:

None.

#### Correctness and Verifiability:

See [Table III.5: Integer Operations](#todo-missing-hyperlink).
