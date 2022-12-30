## III.4.28 stfld &ndash; store into a field of an object

 | Format | Assembly Format | Description
 | ---- | ---- | ----
 | 7D _\<T\>_ | `stfld` _field_ | Replace the value of _field_ of the object _obj_ with _value_.

#### Stack Transition:

&hellip;, _obj_, _value_ &rarr; &hellip;,

#### Description:

The `stfld` instruction replaces the value of a _field_ of an _obj_ (an `O`) or via a pointer (type `native int`, or `&`) with _value_. _field_ is a metadata token (a `fieldref` or `fielddef`; see [Partition II](ii.22-metadata-logical-format-tables.md)) that refers to a field member reference. `stfld` pops the value and the object reference off the stack and updates the object.

Storing into fields that hold a value smaller than 4 bytes truncates the value as it moves from the stack to the local variable. Floating-point values are rounded from their native size (type `F`) to the size associated with the argument. (See §[III.1.1.1](iii.1.1.1-numeric-data-types.md), _Numeric data types_.)

The `stfld` instruction can have a prefix of either or both of `unaligned.` and `volatile.`.

#### Exceptions:

`System.FieldAccessException` is thrown if _field_ is not accessible.

`System.NullReferenceException` is thrown if _obj_ is null and the field isn't static.

`System.MissingFieldException` is thrown if _field_ is not found in the metadata. This is typically checked when CIL is converted to native code, not at runtime.

#### Correctness:

Correct CIL ensures that _field_ is a valid token referring to a field, and that _obj_ and _value_ will always have types appropriate for the assignment being performed, subject to implicit conversion as specified in §[III.1.6](iii.1.6-implicit-argument-coercion.md).

#### Verifiability:

For verifiable code, _obj_ shall not be an unmanaged pointer.

_[Note:_ Using `stfld` to change the value of a static, init-only field outside the body of the class initializer can lead to unpredictable behavior. It cannot, however, compromise memory integrity or type safety so it is not tested by verification. _end note]_

The tracked type of _obj_ shall have, or be a managed pointer to a type which has, a static or instance _field_.

It is not verifiable to access an overlapped object reference field.

A field is accessible only if every field that overlaps it is also accessible.

Verification also checks that the type of _value_ is *verifier-assignable-to* the type of the field.
