## VI.C.4.8 Instructions that take a method as an argument

These instructions reference a method, either in another class (first instruction format) or in the current class (second instruction format).

 | _\<instr\>_ ::=
 | ----
 | _\<instr_method\>_ _\<callConv\>_ _\<type\>_ [ _\<typeSpec\>_ `::` ] _\<methodName\>_ `(` <parameters> `)`

 | _\<instr_method\>_ ::= | Derived from [`opcode.def`](vi.c.2-cil-opcode-descriptions.md#opcode-def)
 | ---- | ----
 | `call`
 | \| `callvirt`
 | \| `jmp`
 | \| `ldftn`
 | \| `ldvirtftn`
 | \| `newobj`

#### Examples:

 ```ilasm
 call instance int32 C.D.E::X(class W, native int)
 ldftn vararg char F(...)    // Global Function F
 ```
