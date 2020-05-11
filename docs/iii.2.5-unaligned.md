## III.2.5 unaligned. (prefix) &ndash; pointer instruction might be unaligned

 Format | Assembly Format | Description
 ---- | ---- | ----
 FE 12 _\<unsigned int8\>_ | `unaligned.` *alignment* | Subsequent pointer instruction might be unaligned.
 
#### Stack Transition:

&hellip;, *addr* &rarr; &hellip;, *addr*

#### Description:

The `unaligned.` prefix specifies that *addr* (an unmanaged pointer (`&`), or `native int`) on the stack might not be aligned to the natural size of the immediately following `ldind`, `stind`, `ldfld`, `stfld`, `ldobj`, `stobj`, `initblk`, or `cpblk` instruction. That is, for a `ldind.i4` instruction the alignment of *addr* might not be to a 4-byte boundary. For `initblk` and `cpblk` the default alignment is architecture-dependent (4-byte on 32-bit CPUs, 8-byte on 64-bit CPUs). Code generators that do not restrict their output to a 32-bit word size (see [Partition I](#todo-missing-hyperlink) and [Partition II](#todo-missing-hyperlink)) shall use `unaligned.` if the alignment is not known at compile time to be 8-byte.

The value of *alignment* shall be 1, 2, or 4 and means that the generated code should assume that *addr* is byte, double-byte, or quad-byte-aligned, respectively.

_[Rationale:_ While the alignment for a `cpblk` instruction would logically require two numbers (one for the source and one for the destination), there is no noticeable impact on performance if only the lower number is specified. _end rationale]_

The `unaligned.` and `volatile.` prefixes can be combined in either order. They shall immediately precede a `ldind`, `stind`, `ldfld`, `stfld`, `ldobj`, `stobj`, `initblk`, or `cpblk` instruction.

_[Note:_ See [Partition I, 12.7](#todo-missing-hyperlink) for information about atomicity and data alignment. _end note]_

#### Exceptions:

None.

#### Correctness and Verifiability:

An `unaligned.` prefix shall be followed immediately by one of the instructions listed above.
