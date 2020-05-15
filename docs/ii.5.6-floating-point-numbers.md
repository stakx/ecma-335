## II.5.6 Floating-point numbers

There are two different ways to specify a floating-point number:

 1. As a _RealNumber_.

 2. By using the keyword **float32** or **float64**, followed by an integer in parentheses, where the integer value is the binary representation of the desired floating-point number. For example, `float32(1)` results in the 4-byte value 1.401298E-45, while `float64(1)`results in the 8-byte value 4.94065645841247E-324.

 | _Float32_ ::=
 | ----
 | _RealNumber_
 | \| `float32` `'('` _Int32_ `')'`

 | _Float64_ ::=
 | ----
 | _RealNumber_
 | \| `float64` `'('` _Int64_ `')'`
 
_[Example:_

    5.5
    1.1e10
    float64(128) // note: this results in an 8-byte value whose bits are the same
                 // as those for the integer value 128.

_end example]_
