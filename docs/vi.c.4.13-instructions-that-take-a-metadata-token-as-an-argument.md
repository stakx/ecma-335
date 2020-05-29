## VI.C.4.13 Instructions that take a metadata token as an argument

This instruction takes a metadata token as an argument. The token can reference a type, a method, or a field of a class.

 | _\<instr\>_ ::=
 | ----
 | _\<instr_tok\>_ _\<typeSpec\>_
 | \| _\<instr_tok\>_ `method` _\<callConv\>_ _\<type\>_ _\<typeSpec\>_ `::` _\<methodName\>_ `(` _\<parameters\>_ `)`
 | \| _\<instr_tok\>_ `method` _\<callConv\>_ _\<type\>_ _\<methodName\>_ `(` _\<parameters\>_ `)`
 | \| _\<instr_tok\>_ `field` _\<type\>_ _\<typeSpec\>_ `::` _\<id\>_

 | _\<instr_tok\>_ ::= | Derived from [`opcode.def`](vi.c.2-cil-opcode-descriptions.md#opcode-def)
 | ---- | ----
 | `ldtoken`

#### Examples:

 ```ilasm
 ldtoken class [mscorlib]System.Console
 ldtoken method int32 X::Fn()
 ldtoken method bool GlobalFn(int32 &)
 ldtoken field class X.Y Class::Field
 ```
