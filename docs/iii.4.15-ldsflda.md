## III.4.15 ldsflda &ndash; load static field address

 | Format | Assembly Format | Description
 | ---- | ---- | ----
 | 7F _\<T\>_ | `ldsflda` _field_ | Push the address of the static field _field_ on the stack.

#### Stack Transition:

&hellip;, &rarr; &hellip;, _address_

#### Description:

The `ldsflda` instruction pushes the address (a managed pointer, type `&`, if _field_ refers to a type whose memory is managed; otherwise an unmanaged pointer, type `native int`) of a static field on the stack. `field` is a metadata token (a `fieldref` or `fielddef`; see [Partition II](#todo-missing-hyperlink)) referring to a static field member. (Note that _field_ can be a static global with assigned RVA, in which case its memory is unmanaged; where RVA stands for Relative Virtual Address, the offset of the field from the base address at which its containing PE file is loaded into memory)

#### Exceptions:

`System.FieldAccessException` is thrown if _field_ is not accessible.

`System.MissingFieldException` is thrown if _field_ is not found in the metadata. This is typically checked when CIL is converted to native code, not at runtime.

#### Correctness:

Correct CIL ensures that _field_ is a valid metadata token referring to a static field member if _field_ refers to a type whose memory is managed.

#### Verifiability:

For verifiable code, _field_ cannot be init-only.

If _field_ refers to a type whose memory is managed, verification (§[III.1.8](iii.1.8-verifiability-and-correctness.md)) tracks the type of the value loaded onto the stack as a managed pointer to the *verification type* (§[I.8.7](i.8.7-assignment-compatibility.md)) of _field_. If _field_ refers to a type whose memory is unmanaged, verification (§[III.1.8](iii.1.8-verifiability-and-correctness.md)) tracks the type of the value loaded onto the stack as an unmanaged pointer.

#### Remark:

Using `ldsflda` to compute the address of a static, init-only field and then using the resulting pointer to modify that value outside the body of the class initializer can lead to unpredictable behavior.
