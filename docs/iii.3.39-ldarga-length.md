## III.3.39 ldarga.\<length\> &ndash; load an argument address

 | Format | Assembly Format | Description
 | ---- | ---- | ----
 | FE 0A _\<unsigned int16\>_ | `ldarga` _argNum_ | Fetch the address of argument _argNum_.
 | 0F _\<unsigned int8\>_ | `ldarga.s` _argNum_ | Fetch the address of argument _argNum_, short form.

#### Stack Transition:

&hellip;, &rarr; &hellip;, address of argument number _argNum_

#### Description:

The `ldarga` instruction fetches the address (of type `&`, i.e., managed pointer) of the _argNum_'th argument, where arguments are numbered 0 onwards. The address will always be aligned to a natural boundary on the target machine (cf. `cpblk` and `initblk`). The short form (`ldarga.s`) should be used for argument numbers 0–255. The result is a managed pointer (type `&`).

For procedures that take a variable-length argument list, the `ldarga` instructions can be used only for the initial fixed arguments, not those in the variable part of the signature.

_[Rationale:_ `ldarga` is used for byref parameter passing (see [Partition I](#todo-missing-hyperlink)). In other cases, `ldarg` and `starg` should be used. _end rationale]_

#### Exceptions:

None.

#### Correctness:

Correct CIL ensures that _argNum_ is a valid argument index.

#### Verifiability:

Verification (§[III.1.8](iii.1.8-verifiability-and-correctness.md)) tracks the type of the value loaded onto the stack as a managed pointer to the *verification type* (§[I.8.7](i.8.7-assignment-compatibility.md)) of the method's declared argument type.
