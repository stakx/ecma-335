## III.3.38 ldarg.\<length\> &ndash; load argument onto the stack

 | Format | Assembly Format | Description
 | ---- | ---- | ----
 | FE 09 _\<unsigned int16\>_ | `ldarg` _num_ | Load argument numbered _num_ onto the stack.
 | 0E _\<unsigned int8\>_ | `ldarg.s` _num_ | Load argument numbered _num_ onto the stack, short form.
 | 02 | `ldarg.0` | Load argument 0 onto the stack.
 | 03 | `ldarg.1` | Load argument 1 onto the stack.
 | 04 | `ldarg.2` | Load argument 2 onto the stack.
 | 05 | `ldarg.3` | Load argument 3 onto the stack.

#### Stack Transition:

&hellip; &rarr; &hellip;, _value_

#### Description:

The `ldarg` _num_ instruction pushes onto the evaluation stack, the _num_'th incoming argument, where arguments are numbered 0 onwards (see [Partition I](#todo-missing-hyperlink)). The type of the value on the stack is tracked by verification as the *intermediate type* (§[I.8.7](i.8.7-assignment-compatibility.md)) of the argument type, as specified by the current method's signature.

The `ldarg.0`, `ldarg.1`, `ldarg.2`, and `ldarg.3` instructions are efficient encodings for loading any one of the first 4 arguments. The `ldarg.s` instruction is an efficient encoding for loading argument numbers 4&ndash;255.

For procedures that take a variable-length argument list, the `ldarg` instructions can be used only for the initial fixed arguments, not those in the variable part of the signature. (See the `arglist` instruction.)

If required, arguments are converted to the representation of their intermediate type (§I.8.7) when loaded onto the stack (§[III.1.1.1](iii.1.1.1-numeric-data-types.md)).

_[Note:_ that is arguments that hold an integer value smaller than 4 bytes, a boolean, or a character are converted to 4 bytes by sign or zero-extension as appropriate. Floating-point values are converted to their native size (type `F`). _end note]_

#### Exceptions:

None.

#### Correctness:

Correct CIL guarantees that _num_ is a valid argument index.

#### Verifiability:

Verification (§[III.1.8](iii.1.8-verifiability-and-correctness.md)) tracks the type of the value loaded onto the stack as the *intermediate type* (§[I.8.7](i.8.7-assignment-compatibility.md)) of the method's declared argument type.
