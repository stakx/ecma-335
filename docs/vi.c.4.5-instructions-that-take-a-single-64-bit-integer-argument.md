## VI.C.4.5 Instructions that take a single 64-bit integer argument

These instructions take one operand, which must be a 64-bit integer.

 | _\<instr\>_ ::=
 | ----
 | _\<instr_i8\>_ _\<int64\>_

 | _\<instr_i8\>_ ::= | Derived from [`opcode.def`](vi.c.2-cil-opcode-descriptions.md#opcode-def)
 | ---- | ----
 | `ldc.i8`

#### Examples:

 ```ilasm
 ldc.i8 0x123456789AB
 ldc.i8 12
 ```
