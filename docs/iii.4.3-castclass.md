## III.4.3 castclass &ndash; cast an object to a class

 Format | Assembly Format | Description
 ---- | ---- | ----
 74 _\<T\>_ | `castclass` _typeTok_ | Cast _obj_ to _typeTok_.

#### Stack Transition:

&hellip;, _obj_ &rarr; &hellip;, _obj2_

#### Description:

_typeTok_ is a metadata token (a `typeref`, `typedef` or `typespec`), indicating the desired class. If _typeTok_ is a non-nullable value type or a generic parameter type it is interpreted as "boxed" _typeTok_. If _typeTok_ is a nullable type, `Nullable<T>`, it is interpreted as "boxed" `T`.

The `castclass` instruction determines if _obj_ (of type `O`) is an instance of the type _typeTok_, termed "casting". If the actual type (not the verifier tracked type) of _obj_ is *verifier-assignable-to* the type _typeTok_ the cast succeeds and _obj_ (as _obj2_) is returned unchanged while verification tracks its type as _typeTok_.

Unlike coercions (§[III.1.6](#todo-missing-hyperlink)) and conversions (§[III.3.27](#todo-missing-hyperlink)), a cast never changes the actual type of an object and preserves object identity (see [Partition I](#todo-missing-hyperlink)).

If the cast fails then an `InvalidCastException` is thrown. If _obj_ is null, `castclass` succeeds and returns null. This behavior differs semantically from `isinst` where if _obj_ is null, `isinst` fails and returns null. 

#### Exceptions:

`System.InvalidCastException` is thrown if _obj_ cannot be cast to _typeTok_.

`System.TypeLoadException` is thrown if _typeTok_ cannot be found. This is typically detected when CIL is converted to native code rather than at runtime.

#### Correctness:

Correct CIL ensures that _typeTok_ is a valid `typeRef`, `typeDef` or `typeSpec` token, and that _obj_ is always either null or an object reference.

#### Verifiability:

Verification tracks the type of _obj2_ as _typeTok_.
