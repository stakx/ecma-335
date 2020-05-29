## VI.C.4.11 Instructions that take a string as an argument

These instructions take a string as an argument.

 | _\<instr\>_ ::=
 | ----
 | _\<instr_string\>_ _\<QSTRING\>_

 | _\<instr_string\>_ ::= | Derived from [`opcode.def`](vi.c.2-cil-opcode-descriptions.md#opcode-def)
 | ---- | ----
 | `ldstr`

#### Examples:

 ```ilasm
 ldstr "This is a string"
 ldstr "This has a\nnewline in it"
 ```
