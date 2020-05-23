## III.3.23 cgt.un &ndash; compare greater than, unsigned or unordered

 | Format | Assembly Format | Description
 | ---- | ---- | ----
 | FE 03 | `cgt.un` | Push 1 (of type `int32`) if _value1_ > _value2_, unsigned or unordered, else push 0.

#### Stack Transition:

&hellip;, _value1_, _value2_ &rarr; &hellip;, _result_

#### Description:

The `cgt.un` instruction compares _value1_ and _value2_. A value of 1 (of type `int32`) is pushed on the stack if

 * for floating-point numbers, either _value1_ is strictly greater than _value2_, or _value1_ is not ordered with respect to _value2_.

 * for integer values, _value1_ is strictly greater than _value2_ when considered as unsigned numbers.

Otherwise, 0 (of type `int32`) is pushed on the stack.

As per IEC 60559:1989, infinite values are ordered with respect to normal numbers (e.g., +infinity > 5.0 > -infinity). The acceptable operand types are encapsulated in [Table 4: Binary Comparison or Branch Operations](#todo-missing-hyperlink).

#### Exceptions:

None.

#### Correctness:

Correct CIL provides two values on the stack whose types match those specified in [Table 4: Binary Comparison or Branch Operations](#todo-missing-hyperlink)

#### Verifiability:

There are no additional verification requirements.
