## III.3.53 or &ndash; bitwise OR

 | Format | Instruction | Description
 | ---- | ---- | ----
 | 60 | `or` | Bitwise OR of two integer values, returns an integer.

#### Stack Transition:

&hellip;, _value1_, _value2_ &rarr; &hellip;, _result_

#### Description:

The `or` instruction computes the bitwise OR of the top two values on the stack and leaves the result on the stack.

The acceptable operand types and their corresponding result data type are encapsulated in [Table 5: Integer Operations](#todo-missing-hyperlink).

#### Exceptions:

None.

#### Correctness and Verifiability:

See [Table 5: Integer Operations](#todo-missing-hyperlink).
