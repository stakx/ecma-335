## VI.C.4.3 Instructions that refer to parameters or local variables

These instructions take one operand, which references a parameter or local variable of the current method. The variable can be referenced by its number (starting with variable 0) or by name (if the names are supplied as part of a signature using the form that supplies both a type and a name).

 | _\<instr\>_ ::=
 | ----
 | _\<instr_var\>_ _\<int32\>_
 | \| _\<instr_var\>_ _\<localname\>_

 | _\<instr_var\>_ ::= | Derived from [`opcode.def`](vi.c.2-cil-opcode-descriptions.md#opcode-def)
 | ---- | ----
 | \| `ldarg`
 | \| `ldarg.s`
 | \| `ldarga`
 | \| `ldarga.s`
 | \| `ldloc`
 | \| `ldloc.s`
 | \| `ldloca`
 | \| `ldloca.s`
 | \| `starg`
 | \| `starg.s`
 | \| `stloc`
 | \| `stloc.s`

#### Examples:

 ```ilasm
 stloc 0     // store into 0th local
 ldarg X3    // load from argument named X3
 ```
