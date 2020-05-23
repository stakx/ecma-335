## III.3.40 ldc.\<type\> &ndash; load numeric constant

 | Format | Assembly Format | Description
 | ---- | ---- | ----
 | 20 _\<int32\>_ | `ldc.i4` _num_ | Push _num_ of type `int32` onto the stack as `int32`.
 | 21 _\<int64\>_ | `ldc.i8` _num_ | Push _num_ of type `int64` onto the stack as `int64`.
 | 22 _\<float32\>_ | `ldc.r4` _num_ | Push _num_ of type `float32` onto the stack as `F`.
 | 23 _\<float64\>_ | `ldc.r8` _num_ | Push _num_ of type `float64` onto the stack as `F`.
 | 16 | `ldc.i4.0` | Push 0 onto the stack as `int32`.
 | 17 | `ldc.i4.1` | Push 1 onto the stack as `int32`.
 | 18 | `ldc.i4.2` | Push 2 onto the stack as `int32`.
 | 19 | `ldc.i4.3` | Push 3 onto the stack as `int32`.
 | 1A | `ldc.i4.4` | Push 4 onto the stack as `int32`.
 | 1B | `ldc.i4.5` | Push 5 onto the stack as `int32`.
 | 1C | `ldc.i4.6` | Push 6 onto the stack as `int32`.
 | 1D | `ldc.i4.7` | Push 7 onto the stack as `int32`.
 | 1E | `ldc.i4.8` | Push 8 onto the stack as `int32`.
 | 15 | `ldc.i4.m1` | Push -1 onto the stack as `int32`.
 | 15 | `ldc.i4.M1` | Push -1 of type `int32` onto the stack as `int32` (alias for `ldc.i4.m1`).
 | 1F _\<int8\>_ | `ldc.i4.s` _num_ | Push _num_ onto the stack as `int32`, short form.

#### Stack Transition:

&hellip; &rarr; &hellip;, _num_

#### Description:

The `ldc` _num_ instruction pushes number _num_ or some constant onto the stack. There are special short encodings for the integers -128 through 127 (with especially short encodings for -1 through 8). All short encodings push 4-byte integers on the stack. Longer encodings are used for 8-byte integers and 4- and 8-byte floating-point numbers, as well as 4-byte values that do not fit in the short forms.

There are three ways to push an 8-byte integer constant onto the stack

 4. For constants that shall be expressed in more than 32 bits, use the `ldc.i8` instruction.

 5. For constants that require 9-32 bits, use the `ldc.i4` instruction followed by a `conv.i8`.

 6. For constants that can be expressed in 8 or fewer bits, use a short form instruction followed by a `conv.i8`.

There is no way to express a floating-point constant that has a larger range or greater precision than a 64-bit IEC 60559:1989 number, since these representations are not portable across architectures.

#### Exceptions:

None.

#### Verifiability:

The `ldc` instruction is always verifiable.
