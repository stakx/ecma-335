## III.4.30 stsfld &ndash; store a static field of a class

 | Format | Assembly Format | Description
 | ---- | ---- | ----
 | 80 _\<T\>_ | `stsfld` _field_ | Replace the value of _field_ with _val_.

#### Stack Transition:

&hellip;, _val_ &rarr; &hellip;,

#### Description:

The `stsfld` instruction replaces the value of a static field with a value from the stack. _field_ is a metadata token (a `fieldref` or `fielddef`; see [Partition II](ii.22-metadata-logical-format-tables.md)) that shall refer to a static field member. `stsfld` pops the value off the stack and updates the static field with that value.

Storing into fields that hold a value smaller than 4 bytes truncates the value as it moves from the stack to the local variable. Floating-point values are rounded from their native size (type `F`) to the size associated with the argument. (See §[III.1.1.1](iii.1.1.1-numeric-data-types.md), _Numeric data types_.)

The `stsfld` instruction can have a `volatile.` prefix.

#### Exceptions:

`System.FieldAccessException` is thrown if _field_ is not accessible.

`System.MissingFieldException` is thrown if _field_ is not found in the metadata. This is typically checked when CIL is converted to native code, not at runtime.

#### Correctness:

Correct CIL ensures that _field_ is a valid token referring to a static field, and that _value_ will always have a type appropriate for the assignment being performed, subject to implicit conversion as specified in §[III.1.6](iii.1.6-implicit-argument-coercion.md).

#### Verifiability:

Verification checks that the type of _val_ is *verifier-assignable-to* the type of the field.

_[Note:_ Using `stsfld` to change the value of a static, init-only field outside the body of the class initializer can lead to unpredictable behavior. It cannot, however, compromise memory integrity or type safety so it is not tested by verification. _end note]_
