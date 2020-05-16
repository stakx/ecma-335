## III.3.15 br.\<length\> &ndash; unconditional branch

 | Format | Assembly Format | Description
 | ---- | ---- | ----
 | 38 _\<int32\>_ | `br` _target_ | Branch to _target_.
 | 2B _\<int8\>_ | `br.s` _target_ | Branch to _target_, short form.

#### Stack Transition:

&hellip;, &rarr; &hellip;

#### Description:

The `br` instruction unconditionally transfers control to _target_. _target_ is represented as a signed offset (4 bytes for `br`, 1 byte for `br.s`) from the beginning of the instruction following the current instruction.

If the target instruction has one or more prefix codes, control can only be transferred to the first of these prefixes.

Control transfers into and out of **try**, **catch**, **filter**, and **finally** blocks cannot be performed by this instruction. (Such transfers are severely restricted and shall use the `leave` instruction instead; see [Partition I](#todo-missing-hyperlink) for details).

_[Rationale:_ While a `leave` instruction can be used instead of a `br` instruction when the evaluation stack is empty, doing so might increase the resources required to compile from CIL to native code and/or lead to inferior native code. Therefore CIL generators should use a `br` instruction in preference to a `leave` instruction when both are valid. _end rationale]_

#### Exceptions:

None.

#### Correctness:

Correct CIL shall observe all of the control transfer rules specified above.

#### Verifiability:

Verifiable code requires the type-consistency of the stack, locals and arguments for every possible path to the destination instruction. See §[III.1.8](iii.1.8-verifiability-and-correctness.md) for more details.
