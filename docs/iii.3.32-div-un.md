## III.3.32 div.un &ndash; divide integer values, unsigned

 | Format | Assembly Format | Description
 | ---- | ---- | ----
 | 5C | `div.un` | Divide two values, unsigned, returning a quotient.

#### Stack Transition:

&hellip;, _value1_, _value2_ &rarr; &hellip;, _result_

#### Description:

The `div.un` instruction computes _value1_ divided by _value2_, both taken as unsigned integers, and pushes the result on the stack.

The acceptable operand types and their corresponding result data type are encapsulated in [Table 5: Integer Operations](#todo-missing-hyperlink).

#### Exceptions:

`System.DivideByZeroException` is thrown if _value2_ is zero.

#### Example:

 | &nbsp;
 | ----
 | +5 `div.un` +3 is 1
 | +5 `div.un` -3 is 0
 | -5 `div.un` +3 is 14316557630 or 0x55555553
 | -5 `div.un` -3 is 0

#### Correctness and Verifiability

See [Table 5: Integer Operations](#todo-missing-hyperlink).
