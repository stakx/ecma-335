## III.4.4 cpobj &ndash; copy a value from one address to another

 Format | Assembly Format | Description
 ---- | ---- | ----
 70 _\<T\>_ | `cpobj` _typeTok_ | Copy a value type from _src_ to _dest_. 

#### Stack Transition:

&hellip;, _dest_, _src_ &rarr; &hellip;,

#### Description:

The `cpobj` instruction copies the value at the address specified by _src_ (an unmanaged pointer, `native int`, or a managed pointer, `&`) to the address specified by _dest_ (also a pointer). _typeTok_ can be a `typedef`, `typeref`, or `typespec`. The behavior is unspecified if the type of the location referenced by _src_ is not *assignable-to* (§[I.8.7.3](i.8.7.3-general-assignment-compatibility.md)) the type of the location referenced by _dest_. If _typeTok_ is a reference type, the `cpobj` instruction has the same effect as `ldind.ref` followed by `stind.ref`.

#### Exceptions:

`System.NullReferenceException` can be thrown if an invalid address is detected.

`System.TypeLoadException` is thrown if _typeTok_ cannot be found. This is typically detected when CIL is converted to native code rather than at runtime.

#### Correctness:

_typeTok_ shall be a valid `typedef`, `typeref`, or `typespec` metadata token.

#### Verifiability:

The tracked types of the destination (_dest_) and source (_src_) values shall both be managed pointers (`&)` to values whose types we denote _destType_ and _srcType_, respectively. Finally, _srcType_ shall be *assignable-to* (§[I.8.7.3](i.8.7.3-general-assignment-compatibility.md)) _typeTok_, and _typeTok_ shall be *assignable-to* (§[I.8.7.3](i.8.7.3-general-assignment-compatibility.md)) _destType_. In the case of an Enum, its type is that of the underlying, or base, type of the Enum.
