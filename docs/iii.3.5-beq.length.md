## III.3.5 beq.\<length\> &ndash; branch on equal

 Format | Assembly Format | Description
 ---- | ---- | ----
 3B _\<int32\>_ | `beq` _target_ | Branch to target if equal.
 2E _\<int8\>_ | `beq.s` _target_ | Branch to target if equal, short form.

#### Stack Transition:

&hellip;, _value1_, _value2_ &rarr; &hellip;

#### Description:

The `beq` instruction transfers control to target if _value1_ is equal to _value2_. The effect is identical to performing a `ceq` instruction followed by a `brtrue` target. _target_ is represented as a signed offset (4 bytes for `beq`, 1 byte for `beq.s`) from the beginning of the instruction following the current instruction.

The acceptable operand types are encapsulated in [Table 4: Binary Comparison or Branch Operations](#todo-missing-hyperlink).

If the target instruction has one or more prefix codes, control can only be transferred to the first of these prefixes.

Control transfers into and out of **try**, **catch**, **filter**, and **finally** blocks cannot be performed by this instruction. (Such transfers are severely restricted and shall use the `leave` instruction instead; see [Partition I](#todo-missing-hyperlink) for details).

#### Exceptions:

None.

#### Correctness:

Correct CIL shall observe all of the control transfer rules specified above and shall guarantee that the top two items on the stack correspond to the types shown in [Table 4: Binary Comparison or Branch Operations](#todo-missing-hyperlink).

#### Verifiability:

Verifiable code requires the type-consistency of the stack, locals and arguments for every possible path to the destination instruction. See §[III.1.8](#todo-missing-hyperlink) for more details.
