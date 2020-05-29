## VI.C.4.14 Switch instruction

The `switch` instruction takes a set of labels or decimal relative values.

 | _\<instr\>_ ::=
 | ----
 | _\<instr_switch\>_ `(` _\<labels\>_ `)`

 | _\<instr_switch\>_ ::= | Derived from [`opcode.def`](vi.c.2-cil-opcode-descriptions.md#opcode-def)
 | ---- | ----
 | `switch`

#### Examples:

 ```ilasm
 switch (0x3, -14, Label1)
 switch (5, Label2)
 ```
