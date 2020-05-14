## III.4.13 ldobj &ndash; copy a value from an address to the stack

 | Format | Assembly Format | Description
 | ---- | ---- | ----
 | 71 _\<\T\>_ | `ldobj` _typeTok_ | Copy the value stored at_address _src_ to the stack.

#### Stack Transition:

&hellip;, _src_ &rarr; &hellip;, _val_

#### Description:

The `ldobj` instruction copies a value to the evaluation stack. _typeTok_ is a metadata token (a `typedef`, `typeref`, or `typespec`). _src_ is an unmanaged pointer (`native int`), or a managed pointer (`&`).  If _typeTok_ is not a generic parameter and either a reference type or a built-in value class, then the `ldind` instruction provides a shorthand for the `ldobj` instruction.

_[Rationale:_ The `ldobj` instruction can be used to pass a value type as an argument. _end rationale]_

If required values are converted to the representation of the *intermediate type* (§[I.8.7](i.8.7-assignment-compatibility.md)) of _typeTok_ when loaded onto the stack (§[III.1.1.1](iii.1.1.1-numeric-data-types.md)).

_[Note:_ That is integer values of less than 4 bytes, a boolean or a character are converted to 4 bytes by sign or zero-extension as appropriate. Floating-point values are converted to `F` type. _end note]_

The operation of the `ldobj` instruction can be altered by an immediately preceding `volatile.` or `unaligned.` prefix instruction.

#### Exceptions:

`System.NullReferenceException` can be thrown if an invalid address is detected.

`System.TypeLoadException` is thrown if _typeTok_ cannot be found. This is typically detected when CIL is converted to native code rather than at runtime.

#### Correctness:

_typeTok_ shall be a valid `typedef`, `typeref`, or `typespec` metadata token.

_[Note:_ Unlike the `ldind` instruction a `ldobj` instruction can be used with a generic parameter type. _end note]_

#### Verifiability:

The tracked type of the source value on top of the stack shall be a managed pointer to some type _srcType_, and _srcType_ shall be *assignable-to* the type _typeTok_.

Verification tracks the type of the result _val_ as the *intermediate type* of _typeTok_.
