## III.3.27 conv.\<to type\> &ndash; data conversion

 | Format | Assembly Format | Description
 | ---- | ---- | ----
 | 67 | `conv.i1` | Convert to `int8`, pushing `int32` on stack.
 | 68 | `conv.i2` | Convert to `int16`, pushing `int32` on stack.
 | 69 | `conv.i4` | Convert to `int32`, pushing `int32` on stack.
 | 6A | `conv.i8` | Convert to `int64`, pushing `int64` on stack.
 | 6B | `conv.r4` | Convert to `float32`, pushing `F` on stack.
 | 6C | `conv.r8` | Convert to `float64`, pushing `F` on stack.
 | D2 | `conv.u1` | Convert to `unsigned int8`, pushing `int32` on stack.
 | D1 | `conv.u2` | Convert to `unsigned int16`, pushing `int32` on stack.
 | 6D | `conv.u4` | Convert to `unsigned int32`, pushing `int32` on stack.
 | 6E | `conv.u8` | Convert to `unsigned int64`, pushing `int64` on stack.
 | D3 | `conv.i` | Convert to `native int`, pushing native `int` on stack.
 | E0 | `conv.u` | Convert to `native unsigned int`, pushing `native int` on stack.
 | 76 | `conv.r.un` | Convert unsigned integer to floating-point, pushing `F` on stack.

#### Stack Transition:

&hellip;, _value_ &rarr; &hellip;, _result_

#### Description:

Convert the value on top of the stack to the type specified in the opcode, and leave that converted value on the top of the stack. The verification type on the stack is as specified in §[III.1.8.1.2.1](iii.1.8.1.2.1-verification-types.md) for the target type. Note that integer values of less than 4 bytes are extended to `int32` (not `native int`) when they are loaded onto the evaluation stack, and floating-point values are converted to the `F` type.

Conversion from floating-point numbers to integral values truncates the number toward zero. When converting from a `float64` to a `float32`, precision might be lost. If value is too large to fit in a `float32`, the IEC 60559:1989 positive infinity (if value is positive) or IEC 60559:1989 negative infinity (if value is negative) is returned.

If overflow occurs when converting one integer type to another, the high-order bits are silently truncated. If the result is smaller than an `int32`, then the value is sign-extended to fill the slot. If overflow occurs converting a floating-point type to an integer, or if the floating-point value being converted to an integer is a **NaN**, the value returned is unspecified. The `conv.r.un` operation takes an integer off the stack, interprets it as unsigned, and replaces it with an `F` type floating-point number to represent the integer.

The acceptable operand types and their corresponding result data type is encapsulated in [Table 8: Conversion Operations](#todo-missing-hyperlink).

#### Exceptions:

No exceptions are ever thrown. See `conv.ovf` for instructions that will throw an exception when the result type cannot properly represent the result value.

#### Correctness:

Correct CIL has at least one value, of a type specified in [Table 8: Conversion Operations](#todo-missing-hyperlink), on the stack.

#### Verifiability:

The table [Table 8: Conversion Operations](#todo-missing-hyperlink) specifies a restricted set of types that are acceptable in verified code.
