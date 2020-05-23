## III.4.27 stelem.\<type\> &ndash; store an element of an array

 | Format | Assembly Format | Description
 | ---- | ---- | ----
 | 9C | `stelem.i1` | Replace array element at _index_ with the `int8` _value_ on the stack.
 | 9D | `stelem.i2` | Replace array element at _index_ with the `int16` _value_ on the stack.
 | 9E | `stelem.i4` | Replace array element at _index_ with the `int32` _value_ on the stack.
 | 9F | `stelem.i8` | Replace array element at _index_ with the `int64` _value_ on the stack.
 | A0 | `stelem.r4` | Replace array element at _index_ with the `float32` _value_ on the stack.
 | A1 | `stelem.r8` | Replace array element at _index_ with the `float64` _value_ on the stack.
 | 9B | `stelem.i` | Replace array element at _index_ with the `native int` _value_ on the stack.
 | A2 | `stelem.ref` | Replace array element at _index_ with the ref _value_ on the stack.

#### Stack Transition:

&hellip;, _array_, _index_, _value_ &rarr; &hellip;,

#### Description:

The `stelem.`_\<type\>_ instruction replaces the value of the element with zero-based index _index_ (of type `int32` or `native int`) in the one-dimensional array _array_ with _value_. Arrays are objects and hence represented by a value of type `O`.

Storing into arrays that hold values smaller than 4 bytes whose intermediate type is `int32` truncates the value as it moves from the stack to the array. Floating-point values are rounded from their native size (type `F`) to the size associated with the array. (See §[III.1.1.1](iii.1.1.1-numeric-data-types.md), _Numeric data types_.)

All variants, except `stelem.ref`, are equivalent to the `stelem` instruction (§[III.4.26](iii.4.26-stelem.md)) with an appropriate _typeTok_.

Note that `stelem.ref` implicitly casts value to the element type of _array_ before assigning the value to the array element. This cast can fail, even for verified code. Thus the `stelem.ref` instruction can throw the `ArrayTypeMismatchException`. This behavior differs from `stelem`.

_[Note:_ for one-dimensional arrays that aren't zero-based and for multidimensional arrays, the array class provides a `StoreElement` method. _end note]_

#### Exceptions:

`System.NullReferenceException` is thrown if _array_ is null.

`System.IndexOutOfRangeException` is thrown if _index_ is negative, or larger than the bound of _array_.

`System.ArrayTypeMismatchException` is thrown if _array_ doesn't hold elements of the required type.

#### Correctness:

Correct CIL requires that _array_ be a zero-based, one-dimensional array, and that the type in the instruction is *array-element-compatible-with* its declared element type.

#### Verifiability:

Verification requires that:

 * the tracked type of _array_ is `T[]`, for some `T`;

 * for `stelem.ref` the tracked type of value is a reference type and is *(array-element)compatible-with* `T`;

 * for other instruction variants the tracked type of value is *array-element-compatible-with* (§[I.8.7.1](i.8.7.1-assignment-compatibility-for-signature-types.md)) the type in the instruction, and the type in the instruction is *array-element-compatible-with* `T`; and

 * the type of _index_ is `int32` or `native int`.
