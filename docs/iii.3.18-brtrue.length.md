## III.3.18 brtrue.\<length\> &ndash; branch on non-false or non-null

 | Format | Assembly Format | Description
 | ---- | ---- | ----
 | 3A _\<int32>_ | `brtrue` _target_ | Branch to _target_ if _value_ is non-zero (true).
 | 2D _\<int8>_ | `brtrue.s` _target_ | Branch to _target_ if _value_ is non-zero (true), short form.
 | 3A _\<int32>_ | `brinst` _target_ | Branch to _target_ if _value_ is a non-null object reference (alias for `brtrue`).
 | 2D _\<int8>_ | `brinst.s` _target_ | Branch to _target_ if _value_ is a non-null object reference, short form (alias for `brtrue.s`).

#### Stack Transition:

&hellip;, _value_ &rarr; &hellip;

#### Description:

The `brtrue` instruction transfers control to _target_ if _value_ (of type `native int`) is nonzero (true). If value is zero (false) execution continues at the next instruction.

If the _value_ is an object reference (type `O`) then `brinst` (an alias for `brtrue`) transfers control if it represents an instance of an object (i.e., isn't the null object reference, see `ldnull`).

_target_ is represented as a signed offset (4 bytes for `brtrue`, 1 byte for `brtrue.s`) from the beginning of the instruction following the current instruction.

If the target instruction has one or more prefix codes, control can only be transferred to the first of these prefixes.

Control transfers into and out of **try**, **catch**, **filter**, and **finally** blocks cannot be performed by this instruction. (Such transfers are severely restricted and shall use the `leave` instruction instead; see [Partition I](#todo-missing-hyperlink) for details).

#### Exceptions:

None.

#### Correctness:

Correct CIL shall observe all of the control transfer rules specified above and shall guarantee there is a minimum of one item on the stack.

#### Verifiability:

Verifiable code requires the type-consistency of the stack, locals and arguments for every possible path to the destination instruction. See §[III.1.8](iii.1.8-verifiability-and-correctness.md) for more details.
