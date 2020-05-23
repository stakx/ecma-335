## III.4.25 sizeof &ndash; load the size, in bytes, of a type

 | Format | Assembly Format | Description
 | ---- | ---- | ----
 | FE 1C _\<T\>_ | `sizeof` _typeTok_ | Push the size, in bytes, of a type as an `unsigned int32`.

#### Stack Transition:

&hellip;, &rarr; &hellip;, _size_ (4 bytes, unsigned)

#### Description:

Returns the size, in bytes, of a type. _typeTok_ can be a generic parameter, a reference type or a value type.

For a reference type, the size returned is the size of a reference value of the corresponding type, not the size of the data stored in objects referred to by a reference value.

_[Rationale:_ The definition of a value type can change between the time the CIL is generated and the time that it is loaded for execution. Thus, the size of the type is not always known when the CIL is generated. The `sizeof` instruction allows CIL code to determine the size at runtime without the need to call into the Framework class library. The computation can occur entirely at runtime or at CIL-to-native-code compilation time. `sizeof` returns the total size that would be occupied by each element in an array of this type &ndash; including any padding the implementation chooses to add. Specifically, array elements lie `sizeof` bytes apart. _end rationale]_

#### Exceptions:

None.

#### Correctness:

_typeTok_ shall be a `typedef`, `typeref`, or `typespec` metadata token.

#### Verifiability:

It is always verifiable.
