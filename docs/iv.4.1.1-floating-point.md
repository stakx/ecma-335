## IV.4.1.1 Floating point

The **floating point feature set** consists of the user-visible floating-point data types `float32` and `float64`, and support for an internal representation of floating-point numbers.

**If omitted:** The CIL instructions that deal specifically with these data types throw the `System.NotImplementedException` exception. These instructions are: `ckfinite`, `conv.r.un`, `conv.r4`, `conv.r8`, `ldc.r4`, `ldc.r8`, `ldelem.r4`, `ldelem.r8`, `ldind.r4`, `ldind.r8`, `stelem.r4`, `stelem.r8`, `stind.r4`, `stind.r8`. Any attempt to reference a signature including the floating-point data types shall throw the `System.NotImplementedException` exception. The precise timing of the exception is not specified.

_[Note:_ These restrictions guarantee that the VES will not encounter any floating-point data. Hence the implementation of the arithmetic instructions (such as `add`) need not handle those types. _end note]_

**Part of Library:** Extended Numerics (§[IV.5.7](#todo-missing-hyperlink))
