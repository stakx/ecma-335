## III.3.55 rem &ndash; compute remainder

 | Format | Assembly Format | Description
 | 5D | `rem` | Remainder when dividing one value by another.

#### Stack Transition:

&hellip;, _value1_, _value2_ &rarr; &hellip;, _result_

#### Description:

The `rem` instruction divides _value1_ by _value2_ and pushes the remainder _result_ on the stack.

The acceptable operand types and their corresponding result data type are encapsulated in [Table 2: Binary Numeric Operations](#todo-missing-hyperlink).

##### For integer operands

_result_ = _value1_ `rem` _value2_ satisfies the following conditions:

 * _result_ = _value1_ - _value2_ &times; (_value1_ `div` _value2_), and

 * 0 &le; \|_result_\| < \|_value2_\|, and

 * sign(_result_) = sign(_value1_),

where `div` is the division instruction, which truncates towards zero.

##### For floating-point operands

`rem` is defined similarly as for integer operands, except that, if _value2_ is zero or _value1_ is infinity, result is **NaN**. If _value2_ is infinity, _result_ is _value1_. This definition is different from the one for floating-point remainder in the IEC 60559:1989 Standard. That Standard specifies that _value1_ `div` _value2_ is the nearest integer instead of truncating towards zero. `System.Math.IEEERemainder` (see [Partition IV](#todo-missing-hyperlink)) provides the IEC 60559:1989 behavior.

#### Exceptions:

Integral operations throw `System.DivideByZeroException` if _value2_ is zero.

Integral operations can throw `System.ArithmeticException` if _value1_ is the smallest representable integer value and _value2_ is -1.

#### Example:

 | &nbsp; | &nbsp;
 | ---- | ----
 | +10 `rem` +6 is 4 | (+10 `div` +6 = 1)
 | +10 `rem` -6 is 4 | (+10 `div` -6 = -1)
 | -10 `rem` +6 is -4 | (-10 `div` +6 = -1)
 | -10 `rem` -6 is -4 | (-10 `div` -6 = 1)

For the various floating-point values of 10.0 and 6.0, `rem` gives the same values; `System.Math.IEEERemainder`, however, gives the following values.

 | &nbsp; | &nbsp;
 | ---- | ----
 | `System.Math.IEEERemainder`(+10.0, +6.0) is -2 | (+10.0 `div` +6.0 =  1.666&hellip;7)
 | `System.Math.IEEERemainder`(+10.0, -6.0) is -2 | (+10.0 `div` -6.0 = -1.666&hellip;7)
 | `System.Math.IEEERemainder`(-10.0, +6.0) is  2 | (-10.0 `div` +6.0 = -1.666&hellip;7)
 | `System.Math.IEEERemainder`(-10.0, -6.0) is  2 | (-10.0 `div` -6.0 = 1.666&hellip;7)

#### Correctness and Verifiability:

See [Table 2: Binary Numeric Operations](#todo-missing-hyperlink).
