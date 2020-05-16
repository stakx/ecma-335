## III.3.10 ble.\<length\> &ndash; branch on less than or equal to

 | Format | Assembly Format | Description
 | ---- | ---- | ----
 | 3E _\<int32\>_ | `ble` _target_ | Branch to _target_ if less than or equal to.
 | 31 _\<int8\>_ | `ble.s` _target_ | Branch to _target_ if less than or equal to, short form.

#### Stack Transition:

&hellip;, _value1_, _value2_ &rarr; &hellip;

#### Description:

The `ble` instruction transfers control to _target_ if _value1_ is less than or equal to _value2_. `target` is represented as a signed offset (4 bytes for `ble`, 1 byte for `ble.s`) from the beginning of the instruction following the current instruction.

The effect of a `ble` _target_ instruction is identical to:

 * If stack operands are integers, then: `cgt` followed by a `brfalse` _target_

 * If stack operands are floating-point, then: `cgt.un` followed by a `brfalse` _target_

The acceptable operand types are encapsulated in [Table 4: Binary Comparison or Branch Operations](#todo-missing-hyperlink).

If the target instruction has one or more prefix codes, control can only be transferred to the first of these prefixes.

Control transfers into and out of **try**, **catch**, **filter**, and **finally** blocks cannot be performed by this instruction. (Such transfers are severely restricted and shall use the `leave` instruction instead; see [Partition I](#todo-missing-hyperlink) for details).

#### Exceptions:

None.

#### Correctness:

Correct CIL shall observe all of the control transfer rules specified above and shall guarantee that the top two items on the stack correspond to the types shown in [Table 4: Binary Comparison or Branch Operations](#todo-missing-hyperlink).

#### Verifiability:

Verifiable code requires the type-consistency of the stack, locals and arguments for every possible path to the destination instruction. See §[III.1.8](iii.1.8-verifiability-and-correctness.md) for more details.
