## I.12.1 Supported data types

The CLI directly supports the data types shown in [Table I.6: Data Types Directly Supported by the CLI](#todo-missing-hyperlink). That is, these data types can be manipulated using the CIL instruction set (see [Partition III](#todo-missing-hyperlink)).

#### Table I.6: Data Types Directly Supported by the CLI

 Data Type | Description
 ---- | ----
 `int8` | 8-bit two’s-complement signed value
 `unsigned int8` | 8-bit unsigned binary value
 `int16` | 16-bit two’s-complement signed value
 `unsigned int16` | 16-bit unsigned binary value
 `int32` | 32-bit two’s-complement signed value
 `unsigned int32` | 32-bit unsigned binary value
 `int64` | 64-bit two’s-complement signed value
 `unsigned int64` | 64-bit unsigned binary value
 `float32` | 32-bit IEC 60559:1989 floating-point value
 `float64` | 64-bit IEC 60559:1989 floating-point value
 `native int` | native size two’s-complement signed value
 `native unsigned int` | native size unsigned binary value, also unmanaged pointer
 `F` | native size floating-point number (internal to VES, not user visible)
 `O` | native size object reference to managed memory
 `&` | native size managed pointer (can point into managed memory)

The CLI model uses an evaluation stack. Instructions that copy values from memory to the evaluation stack are "loads"; instructions that copy values from the stack back to memory are "stores". The full set of data types in [Table I.6: Data Types Directly Supported by the CLI](#todo-missing-hyperlink) can be represented in memory. However, the CLI supports only a subset of these types in its operations upon values stored on its evaluation stack&mdash;`int32`, `int64`, and `native int`. In addition, the CLI supports an internal data type to represent floating-point values on the internal evaluation stack. The size of the internal data type is implementation-dependent. For further information on the treatment of floating-point values on the evaluation stack, see §[I.12.1.3](i.12.1.3-handling-of-floating-point-data-types.md) and [Partition III](#todo-missing-hyperlink). Short numeric values (`int8`, `int16`, `unsigned int8`, and `unsigned int16`) are widened when loaded and narrowed when stored. This reflects a computer model that assumes, for numeric and object references, memory cells are 1, 2, 4, or 8 bytes wide, but stack locations are either 4 or 8 bytes wide. User-defined value types can appear in memory locations or on the stack and have no size limitation; the only built-in operations on them are those that compute their address and copy them between the stack and memory.

The only CIL instructions with special support for short numeric values (rather than support for simply the 4- or 8-byte integral values) are:

 * Load and store instructions to/from memory: `ldelem`, `ldind`, `stelem`, `stind`

 * Data conversion: `conv`, `conv.ovf`

 * Array creation: `newarr`

The signed integer types (`int8`, `int16`, `int32`, `int64`, and `native int`) and their corresponding unsigned integer types (`unsigned int8`, `unsigned int16`, `unsigned int32`, `unsigned int64`, and `native unsigned int`) differ only in how the bits of the integer are interpreted. For those operations in which an unsigned integer is treated differently from a signed integer (e.g., in comparisons or arithmetic with overflow) there are separate instructions for treating an integer as unsigned (e.g., `cgt.un` and `add.ovf.un`).

This instruction set design simplifies CIL-to-native code (e.g., JIT) compilers and interpreters of CIL by allowing them to internally track a smaller number of data types. See §[I.12.3.2.1](i.12.3.2.1-the-evaluation-stack.md).

As described below, CIL instructions do not specify their operand types. Instead, the CLI keeps track of operand types based on data flow and aided by a stack consistency requirement described below. For example, the single add instruction will add two integers or two floats from the stack.
