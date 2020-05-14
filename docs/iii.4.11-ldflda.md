## III.4.11 ldflda &ndash; load field address

 | Format | Assembly Format | Description
 | ---- | ---- | ----
 | 7C _\<T\>_ | `ldflda` _field_ | Push the address of _field_ of object _obj_ on the stack.

#### Stack Transition:

&hellip;, _obj_ &rarr; &hellip;, _address_

#### Description:

The `ldflda` instruction pushes the address of a field of _obj_. _obj_ is either an object, type `O`, a managed pointer, type `&`, or an unmanaged pointer, type `native int`. The use of an unmanaged pointer is not allowed in verifiable code. The value returned by `ldflda` is a managed pointer (type `&`) unless _obj_ is an unmanaged pointer, in which case it is an unmanaged pointer (type `native int`).

_field_ is a metadata token (a `fieldref` or `fielddef`; see [Partition II](#todo-missing-hyperlink)) that shall refer to a field member. The field can be either an instance field (in which case _obj_ shall not be null) or a static field.

#### Exceptions:

`System.FieldAccessException` is thrown if _field_ is not accessible.

`System.InvalidOperationException` is thrown if the _obj_ is not within the application domain from which it is being accessed. The address of a field that is not inside the accessing application domain cannot be loaded.

`System.MissingFieldException` is thrown if _field_ is not found in the metadata. This is typically checked when CIL is converted to native code, not at runtime.

`System.NullReferenceException` is thrown if _obj_ is null and the field isn't static.

#### Correctness:

Correct CIL ensures that _field_ is a valid `fieldref` token and that the type of _obj_ is *compatible-with* the Class of _field_.

#### Verifiability:

For verifiable code, _obj_ shall not be an unmanaged pointer.

The tracked type of _obj_ shall have, or be a managed pointer to a type which has, a static or instance field.

For verifiable code, _field_ cannot be init-only.

It is not verifiable to access an overlapped object reference _field_.

A field is accessible only if every field that overlaps it is also accessible.

Verification (§[III.1.8](iii.1.8-verifiability-and-correctness.md)) tracks the type of the value loaded onto the stack as a managed pointer to the *verification type* (§[I.8.7](i.8.7-assignment-compatibility.md)) of _field_.

#### Remark:

Using `ldflda` to compute the address of a static, init-only field and then using the resulting pointer to modify that value outside the body of the class initializer might lead to unpredictable behavior.
