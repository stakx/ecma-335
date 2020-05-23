## III.3.63 stloc &ndash; pop value from stack to local variable

 | Format | Assembly Format | Description
 | ---- | ---- | ----
 | FE 0E _\<unsigned int16\>_ | `stloc` _indx_ | Pop a value from stack into local variable _indx_.
 | 13 _\<unsigned int8\>_ | `stloc.s` _indx_ | Pop a value from stack into local variable _indx_, short form.
 | 0A | `stloc.0` | Pop a value from stack into local variable 0.
 | 0B | `stloc.1` | Pop a value from stack into local variable 1.
 | 0C | `stloc.2` | Pop a value from stack into local variable 2.
 | 0D | `stloc.3` | Pop a value from stack into local variable 3.

#### Stack Transition:

&hellip;, _value_ &rarr; &hellip;

#### Description:

The `stloc` _indx_ instruction pops the top value off the evaluation stack and moves it into local variable number _indx_ (see [Partition I](#todo-missing-hyperlink)), where local variables are numbered 0 onwards. The type of value shall match the type of the local variable as specified in the current method's locals signature. The `stloc.0`, `stloc.1`, `stloc.2`, and `stloc.3` instructions provide an efficient encoding for the first 4 local variables; the `stloc.s` instruction provides an efficient encoding for local variables 4&ndash;255.

Storing into locals that hold a value smaller than 4 bytes long truncates the value as it moves from the stack to the local variable. Floating-point values are rounded from their native size (type `F`) to the size associated with the argument. (See §[III.1.1.1](iii.1.1.1-numeric-data-types.md), _Numeric data types_.)

#### Exceptions:

None.

#### Correctness:

Correct CIL requires that _indx_ be a valid local index. For the `stloc` _indx_ instruction, _indx_ shall lie in the range 0&ndash;65534 inclusive (specifically, 65535 is not valid).

_[Rationale:_ The reason for excluding 65535 is pragmatic: likely implementations will use a 2-byte integer to track both a local's index, as well as the total number of locals for a given method. If an index of 65535 had been made valid, it would require a wider integer to track the number of locals in such a method. _end rationale]_

#### Verifiability:

Verification also checks that the type of value is *verifier-assignable-to* the type of the local, as specified in the current method’s locals signature.

