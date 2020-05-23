## III.3.28 conv.ovf.\<to type\> &ndash; data conversion with overflow detection

 | Format | Assembly Format | Description
 | ---- | ---- | ----
 | B3 | `conv.ovf.i1` | Convert to an `int8` (on the stack as `int32`) and throw an exception on overflow.
 | B5 | `conv.ovf.i2` | Convert to an `int16` (on the stack as `int32`) and throw an exception on overflow.
 | B7 | `conv.ovf.i4` | Convert to an `int32` (on the stack as `int32`) and throw an exception on overflow.
 | B9 | `conv.ovf.i8` | Convert to an `int64` (on the stack as `int64`) and throw an exception on overflow.
 | B4 | `conv.ovf.u1` | Convert to an `unsigned int8` (on the stack as `int32`) and throw an exception on overflow.
 | B6 | `conv.ovf.u2` | Convert to an `unsigned int16` (on the stack as `int32`) and throw an exception on overflow.
 | B8 | `conv.ovf.u4` | Convert to an `unsigned int32` (on the stack as `int32`) and throw an exception on overflow
 | BA | `conv.ovf.u8` | Convert to an `unsigned int64` (on the stack as `int64`) and throw an exception on overflow.
 | D4 | `conv.ovf.i` | Convert to a `native int` (on the stack as `native int`) and throw an exception on overflow.
 | D5 | `conv.ovf.u` | Convert to a `native unsigned int` (on the stack as `native int`) and throw an exception on overflow.

#### Stack Transition:

&hellip;, _value_ &rarr; &hellip;, _result_

#### Description:

Convert the value on top of the stack to the type specified in the opcode, and leave that converted value on the top of the stack. If the result cannot be represented in the target type, an exception is thrown.

Conversions from floating-point numbers to integral values truncate the number toward zero. Note that integer values of less than 4 bytes are extended to `int32` (not `native int`) on the evaluation stack.

The acceptable operand types and their corresponding result data type is encapsulated in [Table 8: Conversion Operations](#todo-missing-hyperlink).

#### Exceptions:

`System.OverflowException` is thrown if the result cannot be represented in the result type.

#### Correctness:

Correct CIL has at least one value, of a type specified in [Table 8: Conversion Operations](#todo-missing-hyperlink), on the stack.

#### Verifiability:

The table [Table 8: Conversion Operations](#todo-missing-hyperlink) specifies a restricted set of types that are acceptable in verified code.
