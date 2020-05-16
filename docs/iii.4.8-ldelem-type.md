## III.4.8 ldelem.\<type\> &ndash; load an element of an array

 | Format | Assembly Format | Description
 | ---- | ---- | ----
 | 90 | `ldelem.i1` | Load the element with type `int8` at _index_ onto the top of the stack as an `int32`.
 | 92 | `ldelem.i2` | Load the element with type `int16` at _index_ onto the top of the stack as an `int32`.
 | 94 | `ldelem.i4` | Load the element with type `int32` at _index_ onto the top of the stack as an `int32`.
 | 96 | `ldelem.i8` | Load the element with type `int64` at _index_ onto the top of the stack as an `int64`.
 | 91 | `ldelem.u1` | Load the element with type `unsigned int8` at _index_ onto the top of the stack as an `int32`.
 | 93 | `ldelem.u2` | Load the element with type `unsigned int16` at _index_ onto the top of the stack as an `int32`.
 | 95 | `ldelem.u4` | Load the element with type `unsigned int32` at _index_ onto the top of the stack as an `int32`.
 | 96 | `ldelem.u8` | Load the element with type `unsigned int64` at _index_ onto the top of the stack as an `int64` (alias for `ldelem.i8`).
 | 98 | `ldelem.r4` | Load the element with type `float32` at _index_ onto the top of the stack as an `F`
 | 99 | `ldelem.r8` | Load the element with type `float64` at _index_ onto the top of the stack as an `F`.
 | 97 | `ldelem.i` | Load the element with type `native int` at _index_ onto the top of the stack as a `native int`.
 | 9A | `ldelem.ref` | Load the element at _index_ onto the top of the stack as an `O`. The type of the `O` is the same as the element type of the array pushed on the CIL stack.

#### Stack Transition:

&hellip;, _array_, _index_ &rarr; &hellip;, _value_

#### Description:

The `ldelem.<type>` instruction loads the value of the element with index _index_ (of type `int32` or `native int`) in the zero-based one-dimensional array _array_ and places it on the top of the stack. For `ldelem.ref` the type of the return _value_ is the element type of _array_, for the other instruction variants it is the _\<type\>_ indicated by the instruction.

All variants are equivalent to the `ldelem` instruction (§[III.4.7](iii.4.7-ldelem.md)) with an appropriate _typeTok_.

_[Note:_ For one-dimensional arrays that aren't zero-based and for multidimensional arrays, the array class provides a `Get` method. _end note]_

If required elements are converted to the representation of their intermediate type (§[I.8.7](i.8.7-assignment-compatibility.md)) when loaded onto the stack (§[III.1.1.1](iii.1.1.1-numeric-data-types.md)).

_[Note:_ that is elements that are smaller than 4 bytes, a boolean or a character are converted to 4 bytes by sign or zero-extension as appropriate. Floating-point values are converted to their native size (type `F`). _end note]_

#### Exceptions:

`System.NullReferenceException` is thrown if _array_ is null.

`System.IndexOutOfRangeException` is thrown if _index_ is negative, or larger than the bound of _array_.

#### Correctness:

Correct CIL code requires that _array_ is either null or a zero-based, one-dimensional array whose declared element type is *array-element-compatible-with* (§[I.8.7.1](i.8.7.1-assignment-compatibility-for-signature-types.md)) the type for this particular instruction suffix.

#### Verifiability:

Verification requires that:

 * the tracked type of _array_ is `T[]`, for some `T`;

 * for `ldelem.ref` `T` is a reference type, for other instruction variants `T` is *array-element-compatible-with* the type in the instruction; and

 * the type of _index_ is `int32` or `native int`.

Verification tracks the type of the result _value_ as `T` for `ldelem.ref`, or as the _\<type\>_ in the instruction for the other variants.
