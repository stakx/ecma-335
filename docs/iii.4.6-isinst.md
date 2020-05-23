## III.4.6 isinst &ndash; test if an object is an instance of a class or interface

 Format | Assembly Format | Description
 ---- | ---- | ----
 75 _\<T\>_ | `isinst` _typeTok_ | Test if _obj_ is an instance of _typeTok_, returning null or an instance of that class or interface.

#### Stack Transition:

&hellip;, _obj_ &rarr; &hellip;, _result_

#### Description:

_typeTok_ is a metadata token (a `typeref`, `typedef` or `typespec`), indicating the desired class. If _typeTok_ is a non-nullable value type or a generic parameter type it is interpreted as "boxed" _typeTok_. If _typeTok_ is a nullable type, `Nullable<T>`, it is interpreted as "boxed" `T`.

The `isinst` instruction tests whether _obj_ (type `O`) is an instance of the type _typeTok_. If the actual type (not the verifier tracked type) of _obj_ is *verifier-assignable-to* the type _typeTok_ then `isinst` succeeds and _obj_ (as _result_) is returned unchanged while verification tracks its type as _typeTok_. Unlike coercions (§[III.1.6](iii.1.6-implicit-argument-coercion.md)) and conversions (§[III.3.27](iii.3.27-conv-to-type.md)), `isinst` never changes the actual type of an object and preserves object identity (see [Partition I](#todo-missing-hyperlink)).

If _obj_ is null, or _obj_ is not *verifier-assignable-to* the type _typeTok_, `isinst` fails and returns null.

#### Exceptions:

`System.TypeLoadException` is thrown if _typeTok_ cannot be found. This is typically detected when CIL is converted to native code rather than at runtime.

#### Correctness:

Correct CIL ensures that _typeTok_ is a valid `typeref` or `typedef` or `typespec` token, and that _obj_ is always either null or an object reference.

#### Verifiability:

Verification tracks the type of _result_ as _typeTok_.
