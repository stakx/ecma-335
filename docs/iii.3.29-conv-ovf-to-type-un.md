## III.3.29 conv.ovf.\<to type\>.un &ndash; unsigned data conversion with overflow detection

 | Format | Assembly Format | Description
 | ---- | ---- | ----
 | 82 | `conv.ovf.i1.un` | Convert unsigned to an `int8` (on the stack as `int32`) and throw an exception on overflow.
 | 83 | `conv.ovf.i2.un` | Convert unsigned to an `int16` (on the stack as `int32`) and throw an exception on overflow.
 | 84 | `conv.ovf.i4.un` | Convert unsigned to an `int32` (on the stack as `int32`) and throw an exception on overflow.
 | 85 | `conv.ovf.i8.un` | Convert unsigned to an `int64` (on the stack as `int64`) and throw an exception on overflow.
 | 86 | `conv.ovf.u1.un` | Convert unsigned to an `unsigned int8` (on the stack as `int32`) and throw an exception on overflow.
 | 87 | `conv.ovf.u2.un` | Convert unsigned to an `unsigned int16` (on the stack as `int32`) and throw an exception on overflow.
 | 88 | `conv.ovf.u4.un` | Convert unsigned to an `unsigned int32` (on the stack as `int32`) and throw an exception on overflow.
 | 89 | `conv.ovf.u8.un` | Convert unsigned to an `unsigned int64` (on the stack as `int64`) and throw an exception on overflow.
 | 8A | `conv.ovf.i.un` | Convert unsigned to a `native int` (on the stack as `native int`) and throw an exception on overflow.
 | 8B | `conv.ovf.u.un` | Convert unsigned to a `native unsigned int` (on the stack as `native int`) and throw an exception on overflow.

#### Stack Transition:

&hellip;, _value_ &rarr; &hellip;, _result_

#### Description:

Convert the value on top of the stack to the type specified in the opcode, and leave that converted value on the top of the stack. If the value cannot be represented, an exception is thrown. The item on the top of the stack is treated as an unsigned value before the conversion.

Conversions from floating-point numbers to integral values truncate the number toward zero. Note that integer values of less than 4 bytes are extended to `int32` (not `native int`) on the evaluation stack.

The acceptable operand types and their corresponding result data type are encapsulated in [Table 8: Conversion Operations](#todo-missing-hyperlink).

#### Exceptions:

`System.OverflowException` is thrown if the result cannot be represented in the result type.

#### Correctness:

Correct CIL has at least one value, of a type specified in [Table 8: Conversion Operations](#todo-missing-hyperlink), on the stack.

#### Verifiability:

The table [Table 8: Conversion Operations](#todo-missing-hyperlink) specifies a restricted set of types that are acceptable in verified code.
