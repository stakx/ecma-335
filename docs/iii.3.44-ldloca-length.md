## III.3.44 ldloca.\<length\> &ndash; load local variable address

 | Format | Assembly Format | Description
 | ---- | ---- | ----
 | FE 0D _\<unsigned int16\>_ | `ldloca` _indx_ | Load address of local variable with index _indx_.
 | 12 _\<unsigned int8\>_ | `ldloca.s` _indx_ | Load address of local variable with index _indx_, short form.

#### Stack Transition:

&hellip; &rarr; &hellip;, _address_

#### Description:

The `ldloca` instruction pushes the address of the local variable number _indx_ onto the stack, where local variables are numbered 0 onwards. The value pushed on the stack is already aligned correctly for use with instructions like `ldind` and `stind`. The result is a managed pointer (type `&`). The `ldloca.s` instruction provides an efficient encoding for use with the local variables 0&ndash;255. (Local variables that are the subject of `ldloca` shall be aligned as described in the `ldind` instruction, since the address obtained by `ldloca` can be used as an argument to `ldind`.)

#### Exceptions:

`System.VerificationException` is thrown if the **localsinit** bit for this method has not been set, and the assembly containing this method has not been granted `System.Security.Permissions.SecurityPermission.SkipVerification` (and the CIL does not perform automatic definite-assignment analysis)

#### Correctness:

Correct CIL ensures that _indx_ is a valid local index.

For the `ldloca` _indx_ instruction, _indx_ shall lie in the range 0&ndash;65534 inclusive (specifically, 65535 is not valid).

_[Rationale:_ The reason for excluding 65535 is pragmatic: likely implementations will use a 2-byte integer to track both a local's index, as well as the total number of locals for a given method. If an index of 65535 had been made valid, it would require a wider integer to track the number of locals in such a method. _end rationale]_

#### Verifiability:

Verification (§[III.1.8](iii.1.8-verifiability-and-correctness.md)) tracks the type of the value loaded onto the stack as a managed pointer to the verification type (§[I.8.7](i.8.7-assignment-compatibility.md)) of the local variable. For verifiable code, this instruction shall guarantee that it is not loading the address of an uninitialized value &ndash; whether that initialization is done explicitly by having set the **localsinit** bit for the method, or by previous instructions (where the CLI performs definite-assignment analysis)
