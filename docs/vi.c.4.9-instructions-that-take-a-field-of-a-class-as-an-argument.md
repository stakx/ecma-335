## VI.C.4.9 Instructions that take a field of a class as an argument

These instructions reference a field of a class.

 | _\<instr\>_ ::=
 | ----
 | _\<instr_field\>_ _\<type\>_ _\<typeSpec\>_ `::` _\<id\>_

 | _\<instr_field\>_ ::= | Derived from [`opcode.def`](vi.c.2-cil-opcode-descriptions.md#opcode-def)
 | ---- | ----
 | `ldfld`
 | \| `ldflda`
 | \| `ldsfld`
 | \| `ldsflda`
 | \| `stfld`
 | \| `stsfld`

#### Examples:

 ```ilasm
 ldfld native int X::IntField
 stsfld int32 Y::AnotherField
 ```