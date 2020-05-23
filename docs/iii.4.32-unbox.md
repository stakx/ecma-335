## III.4.32 unbox &ndash; convert boxed value type to its raw form

 | Format | Assembly Format | Description
 | ---- | ---- | ----
 | 79 _\<T\>_ | `unbox` _valuetype_ | Extract a value-type from _obj_, its boxed representation.

#### Stack Transition:

&hellip;, _obj_ &rarr; &hellip;, _valueTypePtr_

#### Description:

A value type has two separate representations (see [Partition I](#todo-missing-hyperlink)) within the CLI:

 * A 'raw' form used when a value type is embedded within another object.

 * A 'boxed' form, where the data in the value type is wrapped (boxed) into an object, so it can exist as an independent entity.

The `unbox` instruction converts _obj_ (of type `O`), the boxed representation of a value type, to _valueTypePtr_ (a controlled-mutability managed pointer (§[III.1.8.1.2.2](iii.1.8.1.2.2-controlled-mutability-managed-pointers.md)), type `&`), its unboxed form. _valuetype_ is a metadata token (a `typeref`, `typedef` or `typespec`). The type of _valuetype_ contained within _obj_ must be *verifier-assignable-to* _valuetype_.

Unlike `box`,  which is required to make a copy of a value type for use in the object, `unbox` is not required to copy the value type from the object. Typically it simply computes the address of the value type that is already present inside of the boxed object.

_[Note:_ Typically, `unbox` simply computes the address of the value type that is already present inside of the boxed object. This approach is not possible when unboxing nullable value types. Because `Nullable<T>` values are converted to boxed `T`s during the `box` operation, an implementation often must manufacture a new `Nullable<T>` on the heap and compute the address to the newly allocated object. _end note]_

#### Exceptions:

`System.InvalidCastException` is thrown if _obj_ is not a boxed value type, _valuetype_ is a `Nullable<T>` and _obj_ is not a boxed `T`, or if the type of the value contained in _obj_ is not *verifier-assignable-to* (§[III.1.8.1.2.3](iii.1.8.1.2.3-verification-type-compatibility.md)) _valuetype_.

`System.NullReferenceException` is thrown if _obj_ is null and _valuetype_ is a non-nullable value type (Partition [I.8.2.4](i.8.2.4-boxing-and-unboxing-of-values.md)).

`System.TypeLoadException` is thrown if the class cannot be found. (This is typically detected when CIL is converted to native code rather than at runtime.)

#### Correctness:

Correct CIL ensures that _valueType_ is a `typeref`, `typedef` or `typespec` metadata token for some boxable value type, and that _obj_ is always an object reference (i.e., of type `O`). If _valuetype_ is the type `Nullable<T>`, the boxed instance shall be of type `T`.

#### Verifiability:

Verification requires that the type of _valuetype_ contained within _obj_ must be *verifier-assignable-to* _valuetype_
