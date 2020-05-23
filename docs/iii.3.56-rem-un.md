## III.3.56 rem.un &ndash; compute integer remainder, unsigned

 | Format | Assembly Format | Description
 | ---- | ---- | ----
 | 5E | `rem.un` | Remainder when dividing one unsigned value by another.

#### Stack Transition:

&hellip;, _value1_, _value2_ &rarr; &hellip;, _result_

#### Description:

The `rem.un` instruction divides _value1_ by _value2_ and pushes the remainder _result_ on the stack. (`rem.un` treats its arguments as unsigned integers, while `rem` treats them as signed integers.)

_result_ = _value1_ `rem.un` _value2_ satisfies the following conditions:

 * _result_ = _value1_ &ndash; _value2_ &times; (_value1_ `div.un` _value2_), and

 * 0 &le; _result_ < _value2_,

where `div.un` is the unsigned division instruction. `rem.un` is unspecified for floating-point numbers. The acceptable operand types and their corresponding result data type are encapsulated in [Table 5: Integer Operations](#todo-missing-hyperlink).

#### Exceptions:

Integral operations throw `System.DivideByZeroException` if _value2_ is zero.

#### Example:

 | &nbsp; | &nbsp;
 | ---- | ----
 | +5 `rem.un` +3 is 2 | (+5 `div.un` +3 = 1)
 | +5 `rem.un` -3 is 5 | (+5 `div.un` -3 = 0)
 | -5 `rem.un` +3 is 2 | ( -5 `div.un` +3 = 1431655763 or 0x55555553)
 | -5 `rem.un` -3 is -5 or 0xfffffffb | ( -5 `div.un` -3 = 0)

#### Correctness and Verifiability:

See [Table 5: Integer Operations](#todo-missing-hyperlink).
