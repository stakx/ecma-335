## III.4.7 ldelem &ndash; load element from array

 | Format | Assembly Format | Description
 | ---- | ---- | ----
 | A3 _\<T\>_ | `ldelem` _typeTok_ | Load the element at index onto the top of the stack.

#### Stack Transition:

&hellip;, _array_, _index_ &rarr; &hellip;, _value_

#### Description:

The `ldelem` instruction loads the value of the element with index _index_ (of type `native int` or `int32`) in the zero-based one-dimensional array _array_, and places it on the top of the stack. The type of the return value is indicated by the type token _typeTok_ in the instruction. If required elements are converted to the representation of their *intermediate type* (§[I.8.7](i.8.7-assignment-compatibility.md)) when loaded onto the stack (§[III.1.1.1](iii.1.1.1-numeric-data-types.md)).

_[Note:_ that is elements that are smaller than 4 bytes, a boolean or a character are converted to 4 bytes by sign or zero-extension as appropriate. Floating-point values are converted to their native size (type `F`). _end note]_

#### Exceptions:

`System.IndexOutOfRangeException` is thrown if _index_ is larger than the bound of array.

`System.NullReferenceException` is thrown if _array_ is null.

#### Correctness:

_typeTok_ shall be a valid `typedef`, `typeref`, or `typespec` metadata token.

_array_ shall be either null or a single dimensional, zero-based array.

#### Verifiability:

Verification requires that:

 * the tracked type of _array_ is `T[]`, for some `T`;

 * `T` is *array-element-compatible-with* (§[I.8.7.1](i.8.7.1-assignment-compatibility-for-signature-types.md)) _typeTok_; and

 * the type of _index_ is `int32` or `native int`.

Verification tracks the type of the result _value_ as _typeTok_.
