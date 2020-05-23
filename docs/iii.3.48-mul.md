## III.3.48 mul &ndash; multiply values

 | Format | Assembly Format | Description
 | ---- | ---- | ----
 | 5A | `mul` | Multiply values.

#### Stack Transition:

&hellip;, _value1_, _value2_ &rarr; &hellip;, _result_

#### Description:

The `mul` instruction multiplies _value1_ by _value2_ and pushes the result on the stack. Integral operations silently truncate the upper bits on overflow (see `mul.ovf`).

For floating-point types, 0 &times; infinity = **NaN**.

The acceptable operand types and their corresponding result data types are encapsulated in [Table 2: Binary Numeric Operations](#todo-missing-hyperlink).

#### Exceptions:

None.

#### Correctness and Verifiability:

See [Table 2: Binary Numeric Operations](#todo-missing-hyperlink).
