## I.12.4 Control flow

The CIL instruction set provides a rich set of instructions to alter the normal flow of control from one CIL instruction to the next.

 * **Conditional and Unconditional Branch** instructions for use within a method, provided the transfer doesn't cross a protected region boundary (see §[I.12.4.2](#todo-missing-hyperlink)).

 * **Method call** instructions to compute new arguments, transfer them and control to a known or computed destination method (see §[I.12.4.1](#todo-missing-hyperlink)).

 * **Tail call** prefix to indicate that a method should relinquish its stack frame before executing a method call (see §[I.12.4.1](#todo-missing-hyperlink)).

 * **Return** from a method, returning a value if necessary.

 * **Method jump** instructions to transfer the current method's arguments to a known or computed destination method (see §[I.12.4.1](#todo-missing-hyperlink)).

 * **Exception-related** instructions (see §[I.12.4.2](#todo-missing-hyperlink)). These include instructions to initiate an exception, transfer control out of a protected region, and end a filter, catch clause, or finally clause.

While the CLI supports control transfers within a method, there are several restrictions that shall be observed:

 1. Control transfer is never permitted to enter a catch handler or finally clause (see §[I.12.4.2](#todo-missing-hyperlink)) except through the exception handling mechanism.

 2. Control transfer out of a protected region is covered in §[I.12.4.2.3](#todo-missing-hyperlink).

 3. The evaluation stack shall be empty after the return value is popped by a `ret` instruction.

 4. Regardless of the control flow that allows execution to arrive there, each slot on the stack shall have the same data type at any given point within the method body.

 5. In order for the JIT compilers to efficiently track the data types stored on the stack, the stack shall normally be empty at the instruction following an unconditional control transfer instruction (`br`, `br.s`, `ret`, `jmp`, `throw`, `endfilter`, `endfault`, or `endfinally`). The stack shall be non-empty at such an instruction only if at some earlier location within the method there has been a forward branch to that instruction.

 6. Control is not permitted to simply "fall through" the end of a method. All paths shall terminate with one of these instructions: `ret`, `throw`, `jmp`, or (`tail.` followed by `call`, `calli`, or `callvirt`).
