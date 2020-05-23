## III.3.62 stind.\<type\> &ndash; store value indirect from stack

 | Format | Assembly Format | Description
 | ---- | ---- | ----
 | 52 | `stind.i1` | Store value of type `int8` into memory at _address_
 | 53 | `stind.i2` | Store value of type `int16` into memory at _address_
 | 54 | `stind.i4` | Store value of type `int32` into memory at _address_
 | 55 | `stind.i8` | Store value of type `int64` into memory at _address_
 | 56 | `stind.r4` | Store value of type `float32` into memory at _address_
 | 57 | `stind.r8` | Store value of type `float64` into memory at _address_
 | DF | `stind.i` | Store value of type `native int` into memory at _address_
 | 51 | `stind.ref` | Store value of type object ref (type `O`) into memory at _address_

#### Stack Transition:

&hellip;, _addr_, _val_ &rarr; &hellip;

#### Description:

The `stind` instruction stores value val at address _addr_ (an unmanaged pointer, type `native int`, or managed pointer, type `&`). The address specified by _addr_ shall be aligned to the natural size of _val_ or a `NullReferenceException` can occur (but see the `unaligned.` prefix instruction). The results of all CIL instructions that return addresses (e.g., `ldloca` and `ldarga`) are safely aligned. For data types larger than 1 byte, the byte ordering is dependent on the target CPU. Code that depends on byte ordering might not run on all platforms.

Storing into locations smaller than 4 bytes truncates the value as it moves from the stack to memory. Floating-point values are rounded from their native size (type `F`) to the size associated with the instruction. (See §[III.1.1.1](iii.1.1.1-numeric-data-types.md), _Numeric data types_.)

The `stind.ref` instruction is a shortcut for a `stobj` instruction that specifies the type pointed at by _addr_, all of the other `stind` instructions are shortcuts for a `stobj` instruction that specifies the corresponding built-in value class.

Type-safe operation requires that the `stind` instruction be used in a manner consistent with the type of the pointer. The operation of the `stind` instruction can be altered by an immediately preceding `volatile.` or `unaligned.` prefix instruction.

#### Exceptions:

`System.NullReferenceException` is thrown if _addr_ is not naturally aligned for the argument type implied by the instruction suffix.

#### Correctness:

Correct CIL ensures that _addr_ is a pointer to `T` and the type of _val_ is *verifier-assignable-to* `T`. For `stind.ref` the type pointer at by _addr_ cannot be a generic parameter. _[Note:_ A `stobj` instruction can be used with generic parameter types. _end note]_

#### Verifiability:

For verifiable code, _addr_ shall be a managed pointer, `T&`, and the type of _val_ shall be *verifier-assignable-to* `T`.
