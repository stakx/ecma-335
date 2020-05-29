## VI.C.4.2 Instructions with no operand

These instructions require no operands, so they simply appear by themselves.

 | _\<instr\>_ ::= _\<instr_none\>_
 | ----

 | _\<instr_none\>_ ::= | Derived from [`opcode.def`](vi.c.2-cil-opcode-descriptions.md#opcode-def)
 | ---- | ----
 | `add`
 | \| `add.ovf`
 | \| `add.ovf.un`
 | \| `and`
 | \| `arglist`
 | \| `break`
 | \| `ceq`
 | \| `cgt`
 | \| `cgt.un`
 | \| `ckfinite`
 | \| `clt`
 | \| `clt.un`
 | \| `conv.i`
 | \| `conv.i1`
 | \| `conv.i2`
 | \| `conv.i4`
 | \| `conv.i8`
 | \| `conv.ovf.i`
 | \| `conv.ovf.i.un`
 | \| `conv.ovf.i1`
 | \| `conv.ovf.i1.un`
 | \| `conv.ovf.i2`
 | \| `conv.ovf.i2.un`
 | \| `conv.ovf.i4`
 | \| `conv.ovf.i4.un`
 | \| `conv.ovf.i8`
 | \| `conv.ovf.i8.un`
 | \| `conv.ovf.u`
 | \| `conv.ovf.u.un`
 | \| `conv.ovf.u1`
 | \| `conv.ovf.u1.un`
 | \| `conv.ovf.u2`
 | \| `conv.ovf.u2.un`
 | \| `conv.ovf.u4`
 | \| `conv.ovf.u4.un`
 | \| `conv.ovf.u8`
 | \| `conv.ovf.u8.un`
 | \| `conv.r.un`
 | \| `conv.r4`
 | \| `conv.r8`
 | \| `conv.u`
 | \| `conv.u1`
 | \| `conv.u2`
 | \| `conv.u4`
 | \| `conv.u8`
 | \| `cpblk`
 | \| `div`
 | \| `div.un`
 | \| `dup`
 | \| `endfault`
 | \| `endfilter`
 | \| `endfinally`
 | \| `initblk`
 | \| `ldarg.0`
 | \| `ldarg.1`
 | \| `ldarg.2`
 | \| `ldarg.3`
 | \| `ldc.i4.0`
 | \| `ldc.i4.1`
 | \| `ldc.i4.2`
 | \| `ldc.i4.3`
 | \| `ldc.i4.4`
 | \| `ldc.i4.5`
 | \| `ldc.i4.6`
 | \| `ldc.i4.7`
 | \| `ldc.i4.8`
 | \| `ldc.i4.M1`
 | \| `ldelem.i`
 | \| `ldelem.i1`
 | \| `ldelem.i2`
 | \| `ldelem.i4`
 | \| `ldelem.i8`
 | \| `ldelem.r4`
 | \| `ldelem.r8`
 | \| `ldelem.ref`
 | \| `ldelem.u1`
 | \| `ldelem.u2`
 | \| `ldelem.u4`
 | \| `ldind.i`
 | \| `ldind.i1`
 | \| `ldind.i2`
 | \| `ldind.i4`
 | \| `ldind.i8`
 | \| `ldind.r4`
 | \| `ldind.r8`
 | \| `ldind.ref`
 | \| `ldind.u1`
 | \| `ldind.u2`
 | \| `ldind.u4`
 | \| `ldlen`
 | \| `ldloc.0`
 | \| `ldloc.1`
 | \| `ldloc.2`
 | \| `ldloc.3`
 | \| `ldnull`
 | \| `localloc`
 | \| `mul`
 | \| `mul.ovf`
 | \| `mul.ovf.un`
 | \| `neg`
 | \| `nop`
 | \| `not`
 | \| `or`
 | \| `pop`
 | \| `refanytype`
 | \| `rem`
 | \| `rem.un`
 | \| `ret`
 | \| `rethrow`
 | \| `shl`
 | \| `shr`
 | \| `shr.un`
 | \| `stelem.i`
 | \| `stelem.i1`
 | \| `stelem.i2`
 | \| `stelem.i4`
 | \| `stelem.i8`
 | \| `stelem.r4`
 | \| `stelem.r8`
 | \| `stelem.ref`
 | \| `stind.i`
 | \| `stind.i1`
 | \| `stind.i2`
 | \| `stind.i4`
 | \| `stind.i8`
 | \| `stind.r4`
 | \| `stind.r8`
 | \| `stind.ref`
 | \| `stloc.0`
 | \| `stloc.1`
 | \| `stloc.2`
 | \| `stloc.3`
 | \| `sub`
 | \| `sub.ovf`
 | \| `sub.ovf.un`
 | \| `tail.`
 | \| `throw`
 | \| `volatile.`
 | \| `xor`

#### Examples:

 ```ilasm
 ldlen
 not
 ```
