## VI.C.4.10 Instructions that take a type as an argument

These instructions reference a type.

 | _\<instr\>_ ::=
 | ----
 | _\<instr_type\>_ _\<typeSpec\>_

 | _\<instr_type\>_ ::= | Derived from [`opcode.def`](vi.c.2-cil-opcode-descriptions.md#opcode-def)
 | ---- | ----
 | `box`
 | \| `castclass`
 | \| `cpobj`
 | \| `initobj`
 | \| `isinst`
 | \| `ldelema`
| \| `ldobj`
| \| `mkrefany`
| \| `newarr`
| \| `refanyval`
| \| `sizeof`
| \| `stobj`
| \| `unbox`

#### Examples:

 ```ilasm
 initobj [mscorlib]System.Console
 sizeof class X
 ```
