## III.3.65 sub.ovf.\<type\> &ndash; subtract integer values, checking for overflow

 | Format | Assembly Format | Description
 | ---- | ---- | ----
 | DA | `sub.ovf` | Subtract native int from a native int. Signed result shall fit in same size.
 | DB | `sub.ovf.un` | Subtract native unsigned int from a native unsigned int. Unsigned result shall fit in same size.

#### Stack Transition:

&hellip;, _value1_, _value2_ &rarr; &hellip;, _result_

#### Description:

The `sub.ovf` instruction subtracts _value2_ from _value1_ and pushes the result on the stack. The type of the values and the return type are specified by the instruction. An exception is thrown if the result does not fit in the result type.

The acceptable operand types and their corresponding result data type is encapsulated in [Table 7: Overflow Arithmetic Operations](#todo-missing-hyperlink).

#### Exceptions:

`System.OverflowException` is thrown if the result can not be represented in the result type.

#### Correctness and Verifiability:

See [Table 7: Overflow Arithmetic Operations](#todo-missing-hyperlink).
