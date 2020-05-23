## III.4.33 unbox.any &ndash; convert boxed type to value

 | Format | Assembly Format | Description
 | ---- | ---- | ----
 | A5 _\<T\>_ | `unbox.any` _typeTok_ | Extract a value-type from _obj_, its boxed representation

#### Stack Transition:

&hellip;, _obj_ &rarr; &hellip;, _value_ or _obj_

#### Description:

When applied to the boxed form of a value type, the `unbox.any` instruction extracts the value contained within _obj_ (of type `O`). (It is equivalent to `unbox` followed by `ldobj`.) When applied to a reference type, the `unbox.any` instruction has the same effect as `castclass` _typeTok_.

If _typeTok_ is a _GenericParam_, the runtime behavior is determined by the actual instantiation of that parameter.

#### Exceptions:

`System.InvalidCastException` is thrown if _obj_ is not a boxed value type or a reference type, _typeTok_ is `Nullable<T>` and _obj_ is not a boxed `T`, or if the type of the value contained in _obj_ is not *verifier-assignable-to* (§[III.1.8.1.2.3](iii.1.8.1.2.3-verification-type-compatibility.md)) _typeTok_.

`System.NullReferenceException` is thrown if _obj_ is null and _typeTok_ is a non-nullable value type (Partition [I.8.2.4](i.8.2.4-boxing-and-unboxing-of-values.md)).

#### Correctness:

_obj_ shall be of reference type and _typeTok_ shall be a boxable type.

#### Verifiability:

Verification tracks the type of _value_ or _obj_ as the intermediate type of _typeTok_.

#### Rationale:

There are two reasons for having both `unbox.any` and `unbox` instructions:

 1. Unlike the `unbox` instruction, for value types, `unbox.any` leaves a value, not an address of a value, on the stack.

 2. The type operand to `unbox` has a restriction: it can only represent value types and instantiations of generic value types.
