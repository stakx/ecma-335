## III.4.26 stelem &ndash; store element to array

 | Format | Assembly Format | Description
 | ---- | ---- | ----
 | A4 _\<T\>_ | `stelem` _typeTok_ | Replace array element at _index_ with the value on the stack

#### Stack Transition:

&hellip;, _array_, _index_, _value_, &rarr; &hellip;

#### Description:

The `stelem` instruction replaces the value of the element with zero-based index _index_ (of type `native int` or `int32`) in the one-dimensional array _array_, with _value_. Arrays are objects and hence are represented by a value of type `O`. The type of value must be *array-element-compatible-with* _typeTok_ in the instruction.

Storing into arrays that hold values smaller than 4 bytes whose intermediate type is `int32` truncates the value as it moves from the stack to the array. Floating-point values are rounded from their native size (type `F`) to the size associated with the array. (See §[III.1.1.1](iii.1.1.1-numeric-data-types.md), _Numeric data types_.)

_[Note:_ For one-dimensional arrays that aren't zero-based and for multidimensional arrays, the array class provides a `StoreElement` method. _end note]_

#### Exceptions:

`System.NullReferenceException` is thrown if _array_ is null.

`System.IndexOutOfRangeException` is thrown if _index_ is larger than the bound of _array_.

`System.ArrayTypeMismatchException` is thrown if _array_ doesn't hold elements of the required type.

#### Correctness:

_typeTok_ shall be a valid `typedef`, `typeref`, or `typespec` metadata token.

_array_ shall be null or a single dimensional array.

#### Verifiability:

Verification requires that:

 * the tracked type of _array_ is `T[]`, for some `T`;

 * the tracked type of _value_ is *array-element-compatible-with* (§[I.8.7.1](i.8.7.1-assignment-compatibility-for-signature-types.md)) _typeTok_;

 * _typeTok_ is *array-element-compatible-with* `T`; and

 * the type of _index_ is `int32` or `native int`.
