## III.3.3 and &ndash; bitwise AND

 Format | Instruction | Description
 ---- | ---- | ----
 5F | `and` | Bitwise AND of two integral values, returns an integral value.
 
#### Stack Transition:

&hellip;, _value1_, _value2_ &rarr; &hellip;, _result_

#### Description:

The `and` instruction computes the bitwise AND of _value1_ and _value2_ and pushes the result on the stack. The acceptable operand types and their corresponding result data type are encapsulated in [Table 5: Integer Operations](#todo-missing-hyperlink).

#### Exceptions:

None.

#### Correctness and Verifiability:

See [Table 5: Integer Operations](#todo-missing-hyperlink).
