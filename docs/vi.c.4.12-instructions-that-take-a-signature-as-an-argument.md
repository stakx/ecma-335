## VI.C.4.12 Instructions that take a signature as an argument

These instructions take a stand-alone signature as an argument.

 | _\<instr\>_ ::=
 | ----
 | _\<instr_sig\>_ _\<callConv\>_ _\<type\>_ `(` _\<parameters\>_ `)`

 | _\<instr_sig\>_ ::= | Derived from [`opcode.def`](vi.c.2-cil-opcode-descriptions.md#opcode-def)
 | ---- | ----
 | `calli`

#### Examples:

 ```ilasm
 calli class A.B(wchar *)
 calli vararg bool(int32[,] X, ...)
 // Returns a boolean, takes at least one argument. The first
 // argument, named X, must be a two-dimensional array of
 // 32-bit ints
 ```
