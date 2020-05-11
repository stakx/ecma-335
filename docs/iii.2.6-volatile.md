## III.2.6 volatile. (prefix) &ndash; pointer reference is volatile

 Format | Assembly Format | Description
 ---- | ---- | ----
 FE 13 | `volatile.` | Subsequent pointer reference is volatile.
 
#### Stack Transition:

&hellip;, *addr* &rarr; &hellip;, *addr*

#### Description:

The `volatile.` prefix specifies that *addr* is a volatile address (i.e., it can be referenced externally to the current thread of execution) and the results of reading that location cannot be cached or that multiple stores to that location cannot be suppressed. Marking an access as `volatile.` affects only that single access; other accesses to the same location shall be marked separately. Access to volatile locations need not be performed atomically. (See [Partition I, "Memory Model and Optimizations"](#todo-missing-hyperlink))

The `unaligned.` and `volatile.` prefixes can be combined in either order. They shall immediately precede a `ldind`, `stind`, `ldfld`, `stfld`, `ldobj`, `stobj`, `initblk`, or `cpblk` instruction. Only the `volatile.` prefix is allowed with the `ldsfld` and `stsfld` instructions.

#### Exceptions:

None.

#### Correctness and Verifiability:

A `volatile.` prefix should be followed immediately by one of the instructions listed above.
