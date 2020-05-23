## III.3.66 switch &ndash; table switch based on value

 | Format | Assembly Format | Description
 | ---- | ---- | ----
 | 45 _\<unsigned int32\>_ _\<int32\>_ &hellip; _\<int32\>_ | `switch` ( _t1_, _t2_ &hellip; _tN_ ) | Jump to one of _n_ values.

#### Stack Transition:

&hellip;, _value_ &rarr; &hellip;,

#### Description:

The `switch` instruction implements a jump table. The format of the instruction is an `unsigned int32` representing the number of targets _N_, followed by _N_ `int32` values specifying jump targets: these targets are represented as offsets (positive or negative) from the beginning of the instruction following this `switch` instruction.

The `switch` instruction pops value off the stack and compares it, as an unsigned integer, to _n_. If value is less than _n_, execution is transferred to the _value_'th target, where targets are numbered from 0 (i.e., a value of 0 takes the first target, a value of 1 takes the second target, and so on). If _value_ is not less than _n_, execution continues at the next instruction (fall through).

If the target instruction has one or more prefix codes, control can only be transferred to the first of these prefixes. Control transfers into and out of **try**, **catch**, **filter**, and **finally** blocks cannot be performed by this instruction. (Such transfers are severely restricted and shall use the `leave` instruction instead; see [Partition I](#todo-missing-hyperlink) for details).

#### Exceptions:

None.

#### Correctness:

Correct CIL obeys the control transfer constraints listed above.

#### Verifiability:

Verification requires the type-consistency of the stack, locals and arguments for every possible way of reaching all destination instructions. See §[III.1.8](iii.1.8-verifiability-and-correctness.md) for more details.
