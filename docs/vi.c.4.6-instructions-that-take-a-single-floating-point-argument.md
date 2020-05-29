## VI.C.4.6 Instructions that take a single floating-point argument

These instructions take one operand, which must be a floating point number.

 | _\<instr\>_ ::= |
 | ---- | ----
 | _\<instr_r\>_ _\<float64\>_
 | \| _\<instr_r\>_ _\<int64\>_
 | \| _\<instr_r\>_ `(` _\<bytes\>_ `)` | _\<bytes\>_ is binary image

 | _\<instr_r\>_ ::= | Derived from [`opcode.def`](vi.c.2-cil-opcode-descriptions.md#opcode-def)
 | ---- | ----
 | `ldc.r4`
 | \| `ldc.r8`

#### Examples:

 ```ilasm
 ldc.r4 10.2
 ldc.r4 10
 ldc.r4 0x123456789ABCDEF
 ldc.r8 (00 00 00 00 00 00 F8 FF)
 ```
