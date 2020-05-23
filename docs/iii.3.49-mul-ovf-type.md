## III.3.49 mul.ovf.\<type\> &ndash; multiply integer values with overflow check

 | Format | Assembly Format | Description
 | ---- | ---- | ----
 | D8 | `mul.ovf` | Multiply signed integer values. Signed result shall fit in same size.
 | D9 | `mul.ovf.un` | Multiply unsigned integer values. Unsigned result shall fit in same size.

#### Stack Transition:

&hellip;, _value1_, _value2_ &rarr; &hellip;, _result_

#### Description:

The `mul.ovf` instruction multiplies integers, _value1_ and _value2_, and pushes the result on the stack. An exception is thrown if the result will not fit in the result type.

The acceptable operand types and their corresponding result data types are encapsulated in [Table 7: Overflow Arithmetic Operations](#todo-missing-hyperlink).

#### Exceptions:

`System.OverflowException` is thrown if the result can not be represented in the result type.

#### Correctness and Verifiability:

See [Table 8: Conversion Operations](#todo-missing-hyperlink).
