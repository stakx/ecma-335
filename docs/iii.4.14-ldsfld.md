## III.4.14 ldsfld &ndash; load static field of a class

 | Format | Assembly Format | Description
 | ---- | ---- | ----
 | 7E _\<T\>_ | `ldsfld` _field_ | Push the value of _field_ on the stack.
 
#### Stack Transition:

&hellip;, &rarr; &hellip;, _value_

#### Description:

The `ldsfld` instruction pushes the value of a static (shared among all instances of a class) field on the stack. _field_ is a metadata token (a `fieldref` or `fielddef`; see [Partition II](#todo-missing-hyperlink)) referring to a static field member. The return type is that associated with _field_.

The `ldsfld` instruction can have a `volatile.` prefix. If required field values are converted to the representation of their *intermediate type* (§[I.8.7](i.8.7-assignment-compatibility.md)) when loaded onto the stack (§[III.1.1.1](iii.1.1.1-numeric-data-types.md)).

_[Note:_ That is field values that are smaller than 4 bytes, a boolean or a character are converted to 4 bytes by sign or zero-extension as appropriate. Floating-point values are converted to their native size (type `F`). _end note]_

#### Exceptions:

`System.FieldAccessException` is thrown if _field_ is not accessible.

`System.MissingFieldException` is thrown if _field_ is not found in the metadata. This is typically checked when CIL is converted to native code, not at runtime.

#### Correctness:

Correct CIL ensures that _field_ is a valid metadata token referring to a static field member.

#### Verifiability:

Verification tracks the type of the value on the stack as the *intermediate type* (§[I.8.7](i.8.7-assignment-compatibility.md)) of the field type.
