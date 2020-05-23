## III.3.43 ldloc &ndash; load local variable onto the stack

 | Format | Assembly Format | Description
 | ---- | ---- | ----
 | FE 0C _\<unsigned int16\>_ | `ldloc` _indx_ | Load local variable of index _indx_ onto stack.
 | 11 _\<unsigned int8\>_ | `ldloc.s` _indx_ | Load local variable of index _indx_ onto stack, short form.
 | 06 | `ldloc.0` | Load local variable 0 onto stack.
 | 07 | `ldloc.1` | Load local variable 1 onto stack.
 | 08 | `ldloc.2` | Load local variable 2 onto stack.
 | 09 | `ldloc.3` | Load local variable 3 onto stack.

#### Stack Transition:

&hellip; &rarr; &hellip;, _value_

#### Description:

The `ldloc` _indx_ instruction pushes the contents of the local variable number _indx_ onto the evaluation stack, where local variables are numbered 0 onwards. Local variables are initialized to 0 before entering the method only if the **localsinit** on the method is true (see [Partition I](#todo-missing-hyperlink)). The `ldloc.0`, `ldloc.1`, `ldloc.2`, and `ldloc.3` instructions provide an efficient encoding for accessing the first 4 local variables. The `ldloc.s` instruction provides an efficient encoding for accessing local variables 4&ndash;255.

The type of the value on the stack is tracked by verification as the intermediate type (§[I.8.7](i.8.7-assignment-compatibility.md)) of the local variable type, which is specified in the method header. See [Partition I](#todo-missing-hyperlink).

If required, local variables are converted to the representation of their intermediate type (§[I.8.7](i.8.7-assignment-compatibility.md)) when loaded onto the stack (§[III.1.1.1](iii.1.1.1-numeric-data-types.md))

_[Note:_ that is local variables smaller than 4 bytes, a boolean or a character are converted to 4 bytes by sign or zero-extension as appropriate. Floating-point values are converted to their native size (type `F`). _end note]_

#### Exceptions:

`System.VerificationException` is thrown if the the **localsinit** bit for this method has not been set, and the assembly containing this method has not been granted `System.Security.Permissions.SecurityPermission.SkipVerification` (and the CIL does not perform automatic definite-assignment analysis)

#### Correctness:

Correct CIL ensures that _indx_ is a valid local index. For the `ldloc` _indx_ instruction, _indx_ shall lie in the range 0&ndash;65534 inclusive (specifically, 65535 is not valid).

_[Rationale:_ The reason for excluding 65535 is pragmatic: likely implementations will use a 2-byte integer to track both a local's index, as well as the total number of locals for a given method. If an index of 65535 had been made valid, it would require a wider integer to track the number of locals in such a method. _end rationale]_

#### Verifiability:

For verifiable code, this instruction shall guarantee that it is not loading an uninitialized value &ndash; whether that initialization is done explicitly by having set the **localsinit** bit for the method, or by previous instructions (where the CLI performs definite-assignment analysis).

Verification (§[III.1.8](iii.1.8-verifiability-and-correctness.md)) tracks the type of the value loaded onto the stack as the intermediate type (§[I.8.7](i.8.7-assignment-compatibility.md)) of the local variable.
