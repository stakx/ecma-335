## III.3.2 add.ovf.\<signed\> &ndash; add integer values with overflow check

 Format | Assembly Format | Description
 ---- | ---- | ----
 D6 | `add.ovf` | Add signed integer values with overflow check.
 D7 | `add.ovf.un` | Add unsigned integer values with overflow check. 

#### Stack Transition:

&hellip;, _value1_, _value2_ &rarr; &hellip;, _result_

#### Description:

The `add.ovf` instruction adds _value1_ and _value2_ and pushes the result on the stack. The acceptable operand types and their corresponding result data type are encapsulated in [Table 7: Overflow Arithmetic Operations](#todo-missing-hyperlink).

#### Exceptions:

`System.OverflowException` is thrown if the result cannot be represented in the result type.

#### Correctness and Verifiability:

See [Table 7: Overflow Arithmetic Operations](#todo-missing-hyperlink).