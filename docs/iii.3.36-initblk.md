## III.3.36 initblk &ndash; initialize a block of memory to a value

 | Format | Assembly Format | Description
 | ---- | ---- | ----
 | FE 18 | `initblk` | Set all bytes in a block of memory to a given byte value.

#### Stack Transition:

&hellip;, _addr_, _value_, _size_ &rarr; &hellip;

#### Description:

The `initblk` instruction sets _size_ (of type `unsigned int32`) bytes starting at _addr_ (of type `native int`, or `&`) to _value_ (of type `unsigned int8`). `initblk` assumes that _addr_ is aligned to the natural size of the machine (but see the `unaligned.` prefix instruction).

_[Rationale:_ `initblk` is intended for initializing structures (rather than arbitrary byte-runs). All such structures, allocated by the CLI, are naturally aligned for the current platform. Therefore, there is no need for the compiler that generates `initblk` instructions to be aware of whether the code will eventually execute on a 32-bit or 64-bit platform. _end rationale]_

The operation of the `initblk` instructions can be altered by an immediately preceding `volatile.` or `unaligned.` prefix instruction.

#### Exceptions:

`System.NullReferenceException` can be thrown if an invalid address is detected.

#### Correctness:

Correct CIL code ensures the restrictions specified above.

#### Verifiability:

The `initblk` instruction is never verifiable.
