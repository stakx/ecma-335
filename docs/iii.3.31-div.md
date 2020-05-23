## III.3.31 div &ndash; divide values

 | Format | Assembly Format | Description
 | ---- | ---- | ----
 | 5B | `div` | Divide two values to return a quotient or floating-point result.

#### Stack Transition:

&hellip;, _value1_, _value2_ &rarr; &hellip;, _result_

#### Description

_result_ = _value1_ `div` _value2_ satisfies the following conditions:

 * \|_result_\| = \|_value1_\| / \|_value2_\|, and

 * sign(_result_) = +, if sign(_value1_) = sign(_value2_), or  
   –, if sign(_value1_) ~= sign(_value2_)

The `div` instruction computes _result_ and pushes it on the stack. Integer division truncates towards zero.

Floating-point division is per IEC 60559:1989. In particular, division of a finite number by 0 produces the correctly signed infinite value and

 * 0 / 0 = NaN

 * infinity / infinity = **NaN**

 * X / infinity = 0

The acceptable operand types and their corresponding result data type are encapsulated in [Table 2: Binary Numeric Operations](#todo-missing-hyperlink).

#### Exceptions:

Integral operations throw `System.ArithmeticException` if the result cannot be represented in the result type. (This can happen if _value1_ is the smallest representable integer value, and _value2_ is -1.)

Integral operations throw `DivideByZeroException` if _value2_ is zero.

Floating-point operations never throw an exception (they produce **NaN**s or infinities instead, see [Partition I](#todo-missing-hyperlink)).

#### Example:

 | &nbsp;
 | ----
 | +14 div +3 is 4
 | +14 div -3 is -4
 | -14 div +3 is -4
 | -14 div -3 is 4

#### Correctness and Verifiability

See [Table 2: Binary Numeric Operations](#todo-missing-hyperlink).
