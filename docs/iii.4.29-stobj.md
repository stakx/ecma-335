## III.4.29 stobj &ndash; store a value at an address

 | Format | Assembly Format | Description
 | ---- | ---- | ----
 | 81 _\<T\>_ | `stobj` _typeTok_ | Store a value of type _typeTok_ at an address.

#### Stack Transition:

&hellip;, _dest_, _src_ &rarr; &hellip;,

#### Description:

The `stobj` instruction copies the value _src_ to the address _dest_. If _typeTok_ is not a generic parameter and either a reference type or a built-in value class, then the `stind` instruction provides a shorthand for the `stobj` instruction.

Storing values smaller than 4 bytes truncates the value as it moves from the stack to memory. Floating-point values are rounded from their native size (type `F`) to the size associated with _typeTok_. (See §[III.1.1.1](iii.1.1.1-numeric-data-types.md), _Numeric data types_.)

The operation of the `stobj` instruction can be altered by an immediately preceding `volatile.` or `unaligned.` prefix instruction.

#### Exceptions:

`System.NullReferenceException` can be thrown if an invalid address is detected.

`System.TypeLoadException` is thrown if _typeTok_ cannot be found. This is typically detected when CIL is converted to native code rather than at runtime.

#### Correctness:

Correct CIL ensures that _dest_ is a pointer to `T` and the type of _src_ is *verifier-assignable-to* `T`.

_typeTok_ shall be a valid `typedef`, `typeref`, or `typespec` metadata token.

_[Note:_ Unlike the `stind` instruction a `stobj` instruction can be used with a generic parameter type. _end note]_

#### Verifiability:

Let the tracked type of the value on top of the stack be some type _srcType_. The value shall be initialized (when _srcType_ is a reference type). The tracked type of the destination address _dest_ on the preceding stack slot shall be a managed pointer (of type _destType_&) to some type _destType_. Finally, _srcType_ shall be *verifier-assignable-to* _typeTok_.
