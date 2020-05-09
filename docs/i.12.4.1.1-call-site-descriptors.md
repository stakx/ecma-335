## I.12.4.1.1 Call site descriptors

Call sites specify additional information that enables an interpreter or JIT compiler to synthesize any native calling convention. All CIL calling instructions (`call`, `calli`, and `callvirt`) include a description of the call site. This description can take one of two forms. The simpler form, used with the `calli` instruction, is a "call site description" (represented as a metadata token for a standalone call signature) that provides:

 * The number of arguments being passed.

 * The data type of each argument.

 * The order in which they have been placed on the call stack.

 * The native calling convention to be used

The more complicated form, used for the `call` and `callvirt` instructions, is a "method reference" (a metadata **methodref** token) that augments the call site description with an identifier for the target of the call instruction.
