## III.3.30 cpblk &ndash; copy data from memory to memory

 | Format | Instruction | Description
 | ---- | ---- | ----
 | FE 17 | `cpblk` | Copy data from memory to memory.

#### Stack Transition:

&hellip;, _destaddr_, _srcaddr_, _size_ &rarr; &hellip;

#### Description:

The `cpblk` instruction copies size (of type `unsigned int32`) bytes from address _srcaddr_ (of type `native int`, or `&`) to address _destaddr_ (of type `native int`, or `&`). The behavior of `cpblk` is unspecified if the source and destination areas overlap.

`cpblk` assumes that both _destaddr_ and _srcaddr_ are aligned to the natural size of the machine (but see the `unaligned.` prefix instruction). The operation of the `cpblk` instruction can be altered by an immediately preceding `volatile.` or `unaligned.` prefix instruction.

_[Rationale:_ `cpblk` is intended for copying structures (rather than arbitrary byte-runs). All such structures, allocated by the CLI, are naturally aligned for the current platform. Therefore, there is no need for the compiler that generates `cpblk` instructions to be aware of whether the code will eventually execute on a 32-bit or 64-bit platform. _end rationale]_

#### Exceptions:

`System.NullReferenceException` can be thrown if an invalid address is detected.

#### Correctness:

CIL ensures the conditions specified above.

#### Verifiability:

The `cpblk` instruction is never verifiable.
