## III.3.42 ldind.\<type\> &ndash; load value indirect onto the stack

 | Format | Assembly Format | Description
 | ---- | ---- | ----
 | 46 | `ldind.i1` |  Indirect load value of type `int8` as `int32` on the stack.
 | 48 | `ldind.i2` | Indirect load value of type `int16` as `int32` on the stack.
 | 4A | `ldind.i4` | Indirect load value of type `int32` as `int32` on the stack.
 | 4C | `ldind.i8` | Indirect load value of type `int64` as `int64` on the stack.
 | 47 | `ldind.u1` | Indirect load value of type `unsigned int8` as `int32` on the stack.
 | 49 | `ldind.u2` | Indirect load value of type `unsigned int16` as `int32` on the stack.
 | 4B | `ldind.u4` | Indirect load value of type `unsigned int32` as `int32` on the stack.
 | 4E | `ldind.r4` | Indirect load value of type `float32` as `F` on the stack.
 | 4C | `ldind.u8` | Indirect load value of type `unsigned int64` as `int64` on the stack (alias for `ldind.i8`).
 | 4F | `ldind.r8` |  Indirect load value of type `float64` as `F` on the stack.
 | 4D | `ldind.i` | Indirect load value of type `native int` as `native int` on the stack
 | 50 | `ldind.ref` | Indirect load value of type object ref as `O` on the stack.

#### Stack Transition:

&hellip;, _addr_ &rarr; &hellip;, _value_

#### Description:

The `ldind.<type>` instruction indirectly loads a value from address _addr_ (an unmanaged pointer, `native int`, or managed pointer, `&`) onto the stack. The source value is indicated by the instruction suffix. The `ldind.ref` instruction is a shortcut for a `ldobj` instruction that specifies the type pointed at by _addr_, all of the other `ldind` instructions are shortcuts for a `l`dobj instruction that specifies the corresponding built-in value class.

If required, values are converted to the representation of the *intermediate type* (§[I.8.7](i.8.7-assignment-compatibility.md)) of the _\<type\>_ in the instruction when loaded onto the stack (§[III.1.1.1](iii.1.1.1-numeric-data-types.md)).

_[Note:_ that is integer values smaller than 4 bytes, a boolean, or a character converted to 4 bytes by sign or zero-extension as appropriate. Floating-point values are converted to `F` type. _end note]_

Correct CIL ensures that the `ldind` instructions are used in a manner consistent with the type of the pointer.

The address specified by _addr_ shall be to a location with the natural alignment of _\<type\>_ or a `NullReferenceException` might occur (but see the `unaligned.` prefix instruction). (Alignment is discussed in [Partition I](#todo-missing-hyperlink).) The results of all CIL instructions that return addresses (e.g., `ldloca` and `ldarga`) are safely aligned. For data types larger than 1 byte, the byte ordering is dependent on the target CPU. Code that depends on byte ordering might not run on all platforms.

The operation of the `ldind` instructions can be altered by an immediately preceding `volatile.` or `unaligned.` prefix instruction.

_[Rationale:_ Signed and unsigned forms for the small integer types are needed so that the CLI can know whether to sign extend or zero extend. The `ldind.u8` and `ldind.u4` variants are provided for convenience; `ldind.u8` is an alias for `ldind.i8`; `ldind.u4` and `ldind.i4` have different opcodes, but their effect is identical. _end rationale]_

#### Exceptions:

`System.NullReferenceException` can be thrown if an invalid address is detected.

#### Correctness:

Correct CIL only uses an `ldind` instruction in a manner consistent with the type of the pointer. For `ldind.ref` the type pointer at by _addr_ cannot be a generic parameter.

_[Note:_ A `ldobj` instruction can be used with generic parameter types. _end note]_

#### Verifiability:

For `ldind.ref` _addr_ shall be a managed pointer, `T&`, `T` shall be a reference type, and verification tracks the type of the result value as the *verification type* of `T`.

For the other instruction variants, _addr_ shall be a managed pointer, `T&`, and `T` shall be *assignable-to* (§[I.8.7.3](i.8.7.3-general-assignment-compatibility.md)) the _\<type\>_ in the instruction. Verification tracks the type of the result value as the *intermediate type* of _\<type\>_.
