## III.2.2 no. – (prefix) possibly skip a fault check

 Format | Assembly Format | Description
 ---- | ---- | ----
 FE 19 _\<unsigned int8\>_ | `no.` \{ `typecheck` \| `rangecheck` \| `nullcheck` \} | The specified fault check(s) normally performed as part of the execution of the subsequent instruction can/shall be skipped.

#### Description:

This prefix indicates that the subsequent instruction need not perform the specified fault check when it is executed.  The byte that follows the instruction code indicates which checks can optionally be skipped. This instruction is not verifiable.

The prefix can be used in the following circumstances:

 * 0x01: `typecheck` (`castclass`, `unbox`, `ldelema`, `stelem`, `stelem`). The CLI can optionally skip any type checks normally performed as part of the execution of the subsequent instruction. `InvalidCastException` can optionally still be thrown if the check would fail.

 * 0x02: `rangecheck` (`ldelem.*`, `ldelema`, `stelem.*`). The CLI can optionally skip any array range checks normally performed as part of the execution of the subsequent instruction. `IndexOutOfRangeException` can optionally still be thrown if the check would fail.
 
  * 0x04: `nullcheck` (`ldfld`, `stfld`, `callvirt`, `ldvirtftn`, `ldelem.*`, `stelem.*`, `ldelema`). The CLI can optionally skip any null-reference checks normally performed as part of the execution of the subsequent instruction. `NullReferenceException` can optionally still be thrown if the check would fail.

The byte values can be OR-ed; e.g.; a value of 0x05 indicates that both `typecheck` and `nullcheck` can optionally be omitted.

#### Exceptions:

None.

#### Correctness:

Correct IL permits the prefix only on the instructions specified above.

#### Verifiability:

Verifiable IL does not permit the use of `no.`
