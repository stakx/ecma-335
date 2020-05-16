## III.4.9 ldelema &ndash; load address of an element of an array

 | Format | Assembly Format | Description
 | ---- | ---- | ----
 | 8F _\<T\>_ | `ldelema` _typeTok_ | Load the address of element at _index_ onto the top of the stack.

#### Stack Transition:

&hellip;, _array_, _index_ &rarr; &hellip;, _address_

#### Description:

The `ldelema` instruction loads the address of the element with index _index_ (of type `int32` or `native int`) in the zero-based one-dimensional array _array_ (of element type *verifier-assignable-to* _typeTok_) and places it on the top of the stack. Arrays are objects and hence represented by a value of type `O`. The return address is a managed pointer (type `&`).

_[Note:_ For one-dimensional arrays that aren't zero-based and for multidimensional arrays, the array class provides an `Address` method. _end note]_

If this instruction is prefixed by the `readonly.` prefix, it produces a controlled-mutability managed pointer (§[III.1.8.1.2.2](iii.1.8.1.2.2-controlled-mutability-managed-pointers.md)).

#### Exceptions:

`System.NullReferenceException` is thrown if _array_ is null.

`System.IndexOutOfRangeException` is thrown if _index_ is negative, or larger than the bound of _array_.

`System.ArrayTypeMismatchException` is thrown if _array_ doesn't hold elements of the required type.

#### Correctness:

Correct CIL ensures that class is a `typeref` or `typedef` or `typespec` token to a class, and that _array_ is indeed always either null or a zero-based, one-dimensional array whose declared element type is *verifier-assignable-to* _typeTok_.

#### Verifiability:

Verification requires that:

 * the tracked type of _array_ is `T[]`, for some `T`, or the `Null` type (§[III.1.8.1.2](iii.1.8.1.2-verification-type-system.md));

 * a managed pointer to `T` is *pointer-element-compatible-with* (§[I.8.7.1](i.8.7.1-assignment-compatibility-for-signature-types.md)) a managed pointer to _typeTok_; and

 * the type of _index_ is `int32` or `native int`.

Verification tracks the type of the result _address_ as a managed pointer to the verification type of _typeTok_.
