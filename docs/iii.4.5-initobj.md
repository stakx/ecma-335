## III.4.5 initobj &ndash; initialize the value at an address

 Format | Assembly Format | Description
 ---- | ---- | ----
 FE 15 _\<T\>_ | `initobj` _typeTok_ | Initialize the value at address _dest_.

#### Stack Transition:

&hellip;, _dest_ &rarr; &hellip;,

#### Description:

The `initobj` instruction initializes an address with a default value. _typeTok_ is a metadata token (a `typedef`, `typeref`, or `typespec`). _dest_ is an unmanaged pointer (`native int`), or a managed pointer (`&`). If _typeTok_ is a value type, the `initobj` instruction initializes each field of _dest_ to null or a zero of the appropriate built-in type. If _typeTok_ is a value type, then after this instruction is executed, the instance is ready for a constructor method to be called. If _typeTok_ is a reference type, the `initobj` instruction has the same effect as `ldnull` followed by `stind.ref`.

Unlike `newobj`, the `initobj` instruction does not call any constructor method.

#### Exceptions:

None.

#### Correctness:

_typeTok_ shall be a valid `typedef`, `typeref`, or `typespec` metadata token.

#### Verifiability:

The type of the destination value on top of the stack shall be a managed pointer to some type _destType_, and _typeTok_ shall be *assignable-to* _destType_. If _typeTok_ is a non-reference type, the definition of subtyping implies that _destType_ and _typeTok_ shall be equal.
