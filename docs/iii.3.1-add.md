## III.3.1 add &ndash; add numeric values

 Format | Assembly Format | Description
 ---- | ---- | ----
 58 | `add` | Add two values, returning a new value.

#### Stack Transition:

&hellip;, _value1_, _value2_ &rarr; &hellip;, _result_

#### Description:

The `add` instruction adds _value2_ to _value1_ and pushes the result on the stack. Overflow is not detected for integral operations (but see `add.ovf`); floating-point overflow returns `+inf` or `-inf`.

The acceptable operand types and their corresponding result data type are encapsulated in [Table 2: Binary Numeric Operations](#todo-missing-hyperlink).

#### Exceptions:

None.

#### Correctness and Verifiability:

See [Table 2: Binary Numeric Operations](#todo-missing-hyperlink).
