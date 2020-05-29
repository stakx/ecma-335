## VI.C.4.7 Branch instructions

The assembler does not optimize branches. The branch must be specified explicitly as using either the short or long form of the instruction. If the displacement is too large for the short form, then the assembler will display an error.

 | _\<instr\>_ ::=
 | ----
 | _\<instr_brtarget\>_ _\<int32\>_
 | \| _\<instr_brtarget\>_ _\<label\>_

 | _\<instr_brtarget\>_ ::= | Derived from [`opcode.def`](vi.c.2-cil-opcode-descriptions.md#opcode-def)
 | ---- | ----
 | beq
 | \| `beq.s`
 | \| `bge`
 | \| `bge.s`
 | \| `bge.un`
 | \| `bge.un.s`
 | \| `bgt`
 | \| `bgt.s`
 | \| `bgt.un`
 | \| `bgt.un.s`
 | \| `ble`
 | \| `ble.s`
 | \| `ble.un`
 | \| `ble.un.s`
 | \| `blt`
 | \| `blt.s`
 | \| `blt.un`
 | \| `blt.un.s`
 | \| `bne.un`
 | \| `bne.un.s`
 | \| `br`
 | \| `br.s`
 | \| `brfalse`
 | \| `brfalse.s`
 | \| `brtrue`
 | \| `brtrue.s`
 | \| `leave`
 | \| `leave.`

#### Example:

 ```ilasm
 br.s 22
 br foo
 ```
