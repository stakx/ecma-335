## III.3.6 bge.\<length\> &ndash; branch on greater than or equal to

 Format | Assembly Format | Description
 ---- | ---- | ----
 3C _\<int32\>_ | `bge` _target_ | Branch to target if greater than or equal to.
 2F _\<int8\_> | `bge.s` _target_ | Branch to target if greater than or equal to, short form.

#### Stack Transition:

&hellip;, _value1_, _value2_ &rarr; &hellip;

#### Description:

The `bge` instruction transfers control to target if _value1_ is greater than or equal to _value2_. The effect is identical to performing a `clt.un` instruction followed by a `brfalse` target. _target_ is represented as a signed offset (4 bytes for `bge`, 1 byte for `bge.s`) from the beginning of the instruction following the current instruction.

The effect of a "`bge` _target_" instruction is identical to:

 * If stack operands are integers, then `clt` followed by a `brfalse` target

 * If stack operands are floating-point, then `clt.un` followed by a `brfalse` target

The acceptable operand types are encapsulated in [Table 4: Binary Comparison or Branch Operations](#todo-missing-hyperlink).

If the target instruction has one or more prefix codes, control can only be transferred to the first of these prefixes.

Control transfers into and out of **try**, **catch**, **filter**, and **finally** blocks cannot be performed by this instruction. (Such transfers are severely restricted and shall use the `leave` instruction instead; see [Partition I](#todo-missing-hyperlink) for details).

#### Exceptions:

None.

#### Correctness:

Correct CIL shall observe all of the control transfer rules specified above and shall guarantee that the top two items on the stack correspond to the types shown in [Table 4: Binary Comparison or Branch Operations](#todo-missing-hyperlink).

#### Verifiability:

Verifiable code requires the type-consistency of the stack, locals and arguments for every possible path to the destination instruction. See §[III.1.8](#todo-missing-hyperlink) for more details.
