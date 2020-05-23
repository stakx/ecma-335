## III.3.52 not &ndash; bitwise complement

 | Format | Assembly Format | Description
 | ---- | ---- | ----
 | 66 | `not` | Bitwise complement.

#### Stack Transition:

&hellip;, _value_ &rarr; &hellip;, _result_

#### Description:

The `not` instruction computes the bitwise complement of the integer value on top of the stack and leaves the result on top of the stack. The return type is the same as the operand type.

The acceptable operand types and their corresponding result data type are encapsulated in [Table 5: Integer Operations](#todo-missing-hyperlink).

#### Exceptions:

None.

#### Correctness and Verifiability:

See [Table 5: Integer Operations](#todo-missing-hyperlink).
