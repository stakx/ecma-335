## VI.E.3 Programmer-controllable behavior

The following aspects of program behavior can be controlled directly by the programmer.

 1. Code that is not thread-safe might operate differently even on a single implementation. In particular, the atomicity guarantees around 64-bit must be adhered to and testing on 64-bit implementations might not be sufficient to find all such problems. The key is never to use both normal read/write and interlocked access to the same 64-bit datum.

 2. Calls to unmanaged code or calls to non-standardized extensions to libraries

 3. Do not depend on the relative order of finalization of objects.

 4. Do not use explicit layout of data.

 5. Do not rely on the relative order of exceptions within a single CIL instruction or a given library method call.
