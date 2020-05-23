## III.3.46 leave.\<length\> &ndash; exit a protected region of code

 | Format | Assembly Format | Description
 | ---- | ---- | ----
 | DD _\<int32\>_ | `leave` _target_ | Exit a protected region of code.
 | DE _\<int8\>_ | `leave.s` _target_ | Exit a protected region of code, short form.

#### Stack Transition:

&hellip;, &rarr;

#### Description:

The `leave` instruction unconditionally transfers control to _target_. _target_ is represented as a signed offset (4 bytes for `leave`, 1 byte for `leave.s`) from the beginning of the instruction following the current instruction.

The `leave` instruction is similar to the `br` instruction, but the former can be used to exit a **try**, **filter**, or **catch** block whereas the ordinary branch instructions can only be used in such a block to transfer control within it. The `leave` instruction empties the evaluation stack and ensures that the appropriate surrounding **finally** blocks are executed.

It is not valid to use a `leave` instruction to exit a **finally** block. To ease code generation for exception handlers it is valid from within a **catch** block to use a `leave` instruction to transfer control to any instruction within the associated **try** block.

The `leave` instruction can be used to exit multiple nested blocks (see [Partition I](#todo-missing-hyperlink)).

If an instruction has one or more prefix codes, control can only be transferred to the first of these prefixes.

#### Exceptions:

None.

#### Correctness:

Correct CIL requires the computed destination lie within the current method.

#### Verifiability:

See §[III.1.8](iii.1.8-verifiability-and-correctness.md) for details.
