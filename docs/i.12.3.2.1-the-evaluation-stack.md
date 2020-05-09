## I.12.3.2.1 The evaluation stack

Associated with each method state is an evaluation stack. Most CLI instructions retrieve their arguments from the evaluation stack and place their return values on the stack. Arguments to other methods and their return values are also placed on the evaluation stack. When a procedure call is made the arguments to the called methods become the incoming arguments array (see §[I.12.3.2.2](#todo-missing-hyperlink)) to the method. This can require a memory copy, or simply a sharing of these two areas by the two methods.

The evaluation stack is made up of slots that can hold any data type, including an unboxed instance of a value type. The type state of the stack (the stack depth and types of each element on the stack) at any given point in a program shall be identical for all possible control flow paths. For example, a program that loops an unknown number of times and pushes a new element on the stack at each iteration would be prohibited.

While the CLI, in general, supports the full set of types described in §[I.12.1](#todo-missing-hyperlink), the CLI treats the evaluation stack in a special way. While some JIT compilers might track the types on the stack in more detail, the CLI only requires that values be one of:

 * `int64`, an 8-byte signed integer

 * `int32`, a 4-byte signed integer

 * `native int`, a signed integer of either 4 or 8 bytes, whichever is more convenient for the target architecture

 * `F`, a floating point value (`float32`, `float64`, or other representation supported by the underlying hardware)

 * `&`, a managed pointer

 * `O`, an object reference

 * `*`, a "transient pointer," which can be used only within the body of a single method, that points to a value known to be in unmanaged memory (see the CIL Instruction Set specification for more details. `*` types are generated internally within the CLI; they are not created by the user).

 * A user-defined value type

The other types are synthesized through a combination of techniques:

 * Shorter integer types in other memory locations are zero-extended or sign-extended when loaded onto the evaluation stack; these values are truncated when stored back to their home location.

 * Special instructions perform numeric conversions, with or without overflow detection, between different sizes and between signed and unsigned integers.

 * Special instructions treat an integer on the stack as though it were unsigned.

 * Instructions that create pointers which are guaranteed not to point into the memory manager’s heaps (e.g., `ldloca`, `ldarga`, and `ldsflda`) produce transient pointers (type `*`) that can be used wherever a managed pointer (type `&`) or unmanaged pointer (type `native unsigned int`) is expected.

 * When a method is called, an unmanaged pointer (type `native unsigned int` or `*`) is permitted to match a parameter that requires a managed pointer (type `&`). The reverse, however, is not permitted since it would allow a managed pointer to be "lost" by the memory manager.

 * A managed pointer (type `&`) can be explicitly converted to an unmanaged pointer (type `native unsigned int`), although this is not verifiable and might produce a runtime exception.
