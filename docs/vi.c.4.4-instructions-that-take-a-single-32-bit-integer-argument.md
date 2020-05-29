## VI.C.4.4 Instructions that take a single 32-bit integer argument

These instructions take one operand, which must be a 32-bit integer.

 | _\<instr\>_ ::=
 | ----
 | _\<instr_i\>_ _\<int32\>_

 | _\<instr_i\>_ ::= | Derived from [`opcode.def`](vi.c.2-cil-opcode-descriptions.md#opcode-def)
 | ---- | ----
 | `ldc.i4`
 | \| `ldc.i4.s`
 | \| `unaligned.`

#### Examples:

 ```ilasm
 ldc.i4 123456    // Load the number 123456
 ldc.i4.s 10      // Load the number 10
 ```
