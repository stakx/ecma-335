## III.4.10 ldfld &ndash; load field of an object

 | Format | Assembly Format | Description
 | ---- | ---- | ----
 | 7B _\<T\>_ | `ldfld` _field_ | Push the value of _field_ of object (or value type) _obj_, onto the stack.

#### Stack Transition:

&hellip;, _obj_ &rarr; &hellip;, _value_

#### Description:

The `ldfld` instruction pushes onto the stack the value of a field of _obj_. _obj_ shall be an object (type `O`), a managed pointer (type `&`), an unmanaged pointer (type `native int`), or an instance of a value type. The use of an unmanaged pointer is not permitted in verifiable code. _field_ is a metadata token (a `fieldref` or `fielddef` see [Partition II](ii.22-metadata-logical-format-tables.md)) that shall refer to a field member. The return type is that associated with _field_. `ldfld` pops the object reference off the stack and pushes the value for the field in its place. The field can be either an instance field (in which case _obj_ shall not be null) or a static field.

The `ldfld` instruction can be preceded by either or both of the `unaligned.` and `volatile.` prefixes. If required field values are converted to the representation of their *intermediate type* (§[I.8.7](i.8.7-assignment-compatibility.md)) when loaded onto the stack (§[III.1.1.1](iii.1.1.1-numeric-data-types.md)).

_[Note:_ That is field values that are smaller than 4 bytes, a boolean or a character are converted to 4 bytes by sign or zero-extension as appropriate. Floating-point values are converted to their native size (type `F`). _end note]_

#### Exceptions:

`System.FieldAccessException` is thrown if _field_ is not accessible.

`System.MissingFieldException` is thrown if _field_ is not found in the metadata. This is typically checked when CIL is converted to native code, not at runtime.

`System.NullReferenceException` is thrown if _obj_ is null and the field is not static.

#### Correctness:

Correct CIL ensures that _field_ is a valid token referring to a field, and that the type of _obj_ is *compatible-with* the Class of _field_.

#### Verifiability:

For verifiable code, _obj_ shall not be an unmanaged pointer. The tracked type of _obj_ shall have, or be a managed pointer to a type which has, a static or instance field.

It is not verifiable to access an overlapped object reference field.

A field is accessible only if every field that overlaps it is also accessible.

Verification tracks the type of the _value_ on the stack as the *intermediate type* (§[I.8.7](i.8.7-assignment-compatibility.md)) of the _field_ type.
