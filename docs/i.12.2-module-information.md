## I.12.2 Module information

[Partition II](ii.25-file-format-extensions-to-pe.md) provides details of the CLI PE file format. The CLI relies on the following information about each method defined in a PE file:

 * The _instructions_ composing the method body, including all exception handlers.

 * The _signature_ of the method, which specifies the return type and the number, order, parameter passing convention, and built-in data type of each of the arguments. It also specifies the native calling convention (this does not affect the CIL virtual calling convention, just the native code).

 * The _exception handling array_. This array holds information delineating the ranges over which exceptions are filtered and caught. See [Partition II](i.12.4.2-exception-handling.md) and §[I.12.4.2](i.12.4.2-exception-handling.md).

 * The size of the evaluation stack that the method will require.

 * The size of the locals array that the method will require.

 * A "localsinit flag" that indicates whether the local variables and memory pool (§[I.12.3.2.4](i.12.3.2.4-local-memory-pool.md)) should be initialized by the CLI (see also `localloc` §[III.3.47](iii.3.47-localloc.md)).

 * Type of each local variable in the form of a signature of the local variable array (called the "locals signature").

In addition, the file format is capable of indicating the degree of portability of the file. There is one kind of restriction that can be described:

 * Restriction to a specific 32-bit size for integers.

By stating which restrictions are placed on executing the code, the CLI class loader can prevent non-portable code from running on an architecture that it cannot support.
