## III.3.21 ceq &ndash; compare equal

 | Format | Assembly Format | Description
 | ---- | ---- | ----
 | FE 01 | `ceq` | Push 1 (of type `int32`) if _value1_ equals _value2_, else push 0.

#### Stack Transition:

&hellip;, _value1_, _value2_ &rarr; &hellip;, _result_

#### Description:

The `ceq` instruction compares _value1_ and _value2_. If _value1_ is equal to _value2_, then 1 (of type `int32`) is pushed on the stack. Otherwise, 0 (of type `int32`) is pushed on the stack.

For floating-point numbers, `ceq` will return 0 if the numbers are unordered (either or both are **NaN**). The infinite values are equal to themselves.

The acceptable operand types are encapsulated in [Table 4: Binary Comparison or Branch Operations](#todo-missing-hyperlink).

#### Exceptions:

None.

#### Correctness:

Correct CIL provides two values on the stack whose types match those specified in [Table 4: Binary Comparison or Branch Operations](#todo-missing-hyperlink)

#### Verifiability:

There are no additional verification requirements.
