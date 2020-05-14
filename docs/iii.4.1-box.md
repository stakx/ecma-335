## III.4.1 box &ndash; convert a boxable value to its boxed form

 Format | Assembly Format | Description
 ---- | ---- | ----
 8C _\<T\>_ | `box` _typeTok_ | Convert a boxable value to its boxed form

#### Stack Transition:

&hellip;, _val_ &rarr; &hellip;, _obj_

#### Description:

If _typeTok_ is a value type, the `box` instruction converts val to its boxed form. When _typeTok_ is a non-nullable type (§[I.8.2.4](i.8.2.4-boxing-and-unboxing-of-values.md)), this is done by creating a new object and copying the data from _val_ into the newly allocated object. If it is a nullable type, this is done by inspecting _val_'s `HasValue` property; if it is `false`, a null reference is pushed onto the stack; otherwise, the result of boxing _val_'s `Value` property is pushed onto the stack.

If _typeTok_ is a reference type, the `box` instruction does returns _val_ unchanged as _obj_.

If _typeTok_ is a generic parameter, the behavior of `box` instruction depends on the actual type at runtime. If this type is a value type it is boxed as above, if it is a reference type then _val_ is not changed. However the type tracked by verification is always "boxed" _typeTok_ for generic parameters, regardless of whether the actual type at runtime is a value or reference type.

_typeTok_ is a metadata token (a `typedef`, `typeref`, or `typespec`) indicating the type of _val_. _typeTok_ can represent a value type, a reference type, or a generic parameter.

#### Exceptions:

`System.OutOfMemoryException` is thrown if there is insufficient memory to satisfy the request.

`System.TypeLoadException` is thrown if _typeTok_ cannot be found. (This is typically detected when CIL is converted to native code rather than at runtime.)

#### Correctness:

_typeTok_ shall be a valid `typedef`, `typeref`, or `typespec` metadata token. The type operand _typeTok_ shall represent a boxable type (§[I.8.2.4](i.8.2.4-boxing-and-unboxing-of-values.md)).

#### Verifiability:

The top-of-stack shall be *verifier-assignable-to* the type represented by _typeTok_. When _typeTok_ represents a non-nullable value type or a generic parameter, the resulting type is "boxed" _typeTok_; when _typeTok_ is `Nullable<T>`, the resulting type is "boxed" `T`. When _typeTok_ is a reference type, the resulting type is _typeTok_. The type operand _typeTok_ shall not be a byref-like type.
