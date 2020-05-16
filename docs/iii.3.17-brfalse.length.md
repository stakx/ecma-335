## III.3.17 brfalse.\<length\> &ndash; branch on false, null, or zero

 | Format | Assembly Format | Description
 | ---- | ---- | ----
 | 39 _\<int32\>_ | `brfalse` _target_ | Branch to _target_ if _value_ is zero (false).
 | 2C _\<int8\>_ | `brfalse.s` _target_ | Branch to _target_ if _value_ is zero (false), short form.
 | 39 _\<int32\>_ | `brnull` _target_ | Branch to _target_ if value is null (alias for `brfalse`).
 | 2C _\<int8\>_ | `brnull.s` _target_ | Branch to _target_ if value is null (alias for `brfalse.s`), short form.
 | 39 _\<int32\>_ | `brzero` _target_ | Branch to _target_ if _value_ is zero (alias for `brfalse`).
 | 2C _\<int8\>_ | `brzero.s` _target_ | Branch to _target_ if value is zero (alias for `brfalse.s`), short form.

#### Stack Transition:

&hellip;, _value_ &rarr; &hellip;

#### Description:

The `brfalse` instruction transfers control to _target_ if _value_ (of type `int32`, `int64`, object reference, managed pointer, unmanaged pointer or `native int`) is zero (false). If _value_ is nonzero (true), execution continues at the next instruction.

_target_ is represented as a signed offset (4 bytes for `brfalse`, 1 byte for `brfalse.s`) from the beginning of the instruction following the current instruction.

If the target instruction has one or more prefix codes, control can only be transferred to the first of these prefixes.

Control transfers into and out of **try**, **catch**, **filter**, and **finally** blocks cannot be performed by this instruction. (Such transfers are severely restricted and shall use the `leave` instruction instead; see [Partition I](#todo-missing-hyperlink) for details).

#### Exceptions:

None.

#### Correctness:

Correct CIL shall observe all of the control transfer rules specified above and shall guarantee there is a minimum of one item on the stack.

#### Verifiability:

Verifiable code requires the type-consistency of the stack, locals and arguments for every possible path to the destination instruction. See §[III.1.8](iii.1.8-verifiability-and-correctness.md) for more details.
