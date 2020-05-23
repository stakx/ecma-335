## III.3.22 cgt &ndash; compare greater than

 | Format | Assembly Format | Description
 | ---- | ---- | ----
 | FE 02 | `cgt` | Push 1 (of type `int32`) if _value1_ > _value2_, else push 0.

#### Stack Transition:

&hellip;, _value1_, _value2_ &rarr; &hellip;, _result_

#### Description:

The `cgt` instruction compares _value1_ and _value2_. If _value1_ is strictly greater than _value2_, then 1 (of type `int32`) is pushed on the stack. Otherwise, 0 (of type `int32`) is pushed on the stack.

For floating-point numbers, `cgt` returns 0 if the numbers are unordered (that is, if one or both of the arguments are **NaN**). As with IEC 60559:1989, infinite values are ordered with respect to normal numbers (e.g., +infinity > 5.0 > -infinity).

The acceptable operand types are encapsulated in [Table 4: Binary Comparison or Branch Operations](#todo-missing-hyperlink).

#### Exceptions:

None.

#### Correctness:

Correct CIL provides two values on the stack whose types match those specified in [Table 4: Binary Comparison or Branch Operations](#todo-missing-hyperlink)

#### Verifiability:

There are no additional verification requirements.
