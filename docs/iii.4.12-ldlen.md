## III.4.12 ldlen &ndash; load the length of an array

 | Format | Assembly Format | Description
 | ---- | ---- | ----
 | 8E | `ldlen` | Push the length (of type `native unsigned int`) of array on the stack.

#### Stack Transition:

&hellip;, _array_ &rarr; &hellip;, length

#### Description:

The `ldlen` instruction pushes the number of elements of _array_ (a zero-based, one-dimensional array) on the stack. Arrays are objects and hence represented by a value of type `O`. The return value is a `native unsigned int`.

#### Exceptions:

`System.NullReferenceException` is thrown if _array_ is null.

#### Correctness:

Correct CIL ensures that `array` is indeed always null or a zero-based, one dimensional array.
