## I.12.1.1.3 Portability: storing pointers in memory

Several instructions, including `calli`, `cpblk`, `initblk`, `ldind.*`, and `stind.*`, expect an address on the top of the stack. If this address is derived from a pointer stored in memory, there is an important portability consideration.

 1. Code that stores pointers in a native-sized integer or pointer location (types `native int`, `O`, `native unsigned int`, or `&)` is always fully portable.

 2. Code that stores pointers in an 8-byte integer (type `int64` or `unsigned int64`) can be portable. But this requires that a `conv.ovf.un` instruction be used to convert the pointer from its memory format before its use as a pointer. This might cause a runtime exception if run on a 32-bit machine.

 3. Code that uses any smaller integer type to store a pointer in memory (`int8`, `unsigned int8`, `int16`, `unsigned int16`, `int32`, `unsigned int32`) is never portable, even though the use of an `unsigned int32` or `int32` will work correctly on a 32-bit machine.
