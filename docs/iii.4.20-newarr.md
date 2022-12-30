## III.4.20 newarr &ndash; create a zero-based, one-dimensional array

 | Format | Assembly Format | Description
 | ---- | ---- | ----
 | 8D _\<T\>_ _newarr_ _etype_ | Create a new array with elements of type _etype_.

#### Stack Transition:

&hellip;, _numElems_ &rarr; &hellip;, _array_

#### Description:

The `newarr` instruction pushes a reference to a new zero-based, one-dimensional array whose elements are of type _etype_, a metadata token (a `typeref`, `typedef` or `typespec`; see [Partition II](ii.22-metadata-logical-format-tables.md)). _numElems_ (of type `native int` or `int32`) specifies the number of elements in the array. Valid array indexes are 0 &le; index < _numElems_. The elements of an array can be any type, including value types.

Zero-based, one-dimensional arrays of numbers are created using a metadata token referencing the appropriate value type (`System.Int32`, etc.). Elements of the array are initialized to 0 of the appropriate type.

One-dimensional arrays that aren't zero-based and multidimensional arrays are created using `newobj` rather than `newarr`. More commonly, they are created using the methods of `System.Array` class in the Base Framework.

#### Exceptions:

`System.OutOfMemoryException` is thrown if there is insufficient memory to satisfy the request.

`System.OverflowException` is thrown if _numElems_ is < 0

#### Correctness:

Correct CIL ensures that _etype_ is a valid `typeref`, `typedef` or `typespec` token.

#### Verifiability:

_numElems_ shall be of type `native int` or `int32`.
