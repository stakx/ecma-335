## III.3.50 neg &ndash; negate

 | Format | Assembly Format | Description
 | ---- | ---- | ----
 | 65 | `neg` | Negate value.

#### Stack Transition:

&hellip;, _value_ &rarr; &hellip;, _result_

#### Description:

The `neg` instruction negates _value_ and pushes the result on top of the stack. The return type is the same as the operand type.

Negation of integral values is standard twos-complement negation. In particular, negating the most negative number (which does not have a positive counterpart) yields the most negative number. To detect this overflow use the `sub.ovf` instruction instead (i.e., subtract from 0).

Negating a floating-point number cannot overflow; negating **NaN** returns **NaN**. The acceptable operand types and their corresponding result data types are encapsulated in [Table 3: Unary Numeric Operations](#todo-missing-hyperlink).

#### Exceptions:

None.

#### Correctness and Verifiability:

See [Table 3: Unary Numeric Operations](#todo-missing-hyperlink).
