## III.3.9 bgt.un.\<length\> &ndash; branch on greater than, unsigned or unordered

 | Format | Assembly Format | Description
 | ---- | ---- | ----
 | 42 _\<int32\>_ | `bgt.un` _target_ | Branch to _target_ if greater than (unsigned or unordered).
 | 35 _\<int8\>_ | `bgt.un.s` _target_ | Branch to _target_ if greater than (unsigned or unordered), short form.

#### Stack Transition:

&hellip;, _value1_, _value2_ &rarr; &hellip;

#### Description:

The `bgt.un` instruction transfers control to _target_ if _value1_ is greater than _value2_, when compared unsigned (for integer values) or unordered (for floating-point values). The effect is identical to performing a `cgt.un` instruction followed by a `brtrue` target. _target_ is represented as a signed offset (4 bytes for `bgt.un`, 1 byte for `bgt.un.s`) from the beginning of the instruction following the current instruction.

The acceptable operand types are encapsulated in [Table 4: Binary Comparison or Branch Operations](#todo-missing-hyperlink).

If the target instruction has one or more prefix codes, control can only be transferred to the first of these prefixes.

Control transfers into and out of **try**, **catch**, **filter**, and **finally** blocks cannot be performed by this instruction. (Such transfers are severely restricted and shall use the `leave` instruction instead; see [Partition I](#todo-missing-hyperlink) for details).

#### Exceptions:

None.

#### Correctness:

Correct CIL shall observe all of the control transfer rules specified above and shall guarantee that the top two items on the stack correspond to the types shown in [Table 4: Binary Comparison or Branch Operations](#todo-missing-hyperlink).

#### Verifiability:

Verifiable code requires the type-consistency of the stack, locals and arguments for every possible path to the destination instruction. See §[III.1.8](iii.1.8-verifiability-and-correctness.md) for more details.
