## III.1 Introduction

This partition is a detailed description of the Common Intermediate Language (CIL) instruction set, part of the specification of the CLI. [Partition I](#todo-missing-hyperlink) describes the architecture of the CLI and provides an overview of a large number of issues relating to the CIL instruction set. That overview is essential to an understanding of the instruction set as described here.

In this partition, each instruction is described in its own subclause, one per page. Related CLI machine instructions are described together. Each instruction description consists of the following parts:

 * A table describing the binary format, assembly language notation, and description of each variant of the instruction. See §[III.1.2](#todo-missing-hyperlink).

 * A stack transition diagram, that describes the state of the evaluation stack before and after the instruction is executed. (See §[III.1.3](#todo-missing-hyperlink).)

 * An English description of the instruction. See §[III.1.4]((#todo-missing-hyperlink)).

 * A list of exceptions that might be thrown by the instruction. (See [Partition I](#todo-missing-hyperlink) for details.) There are three exceptions which can be thrown by any instruction and are *not* listed with the instruction:

   * `System.ExecutionEngineException`: indicates that the internal state of the Execution Engine is corrupted and execution cannot continue. In a system that executes only verifiable code this exception is not thrown.

   * `System.StackOverflowException`: indicates that the hardware stack size has been exceeded. The precise timing of this exception and the conditions under which it occurs are implementation-specific. _[Note:_ this exception is unrelated to the maximum stack size described in §[III.1.7.4](#todo-missing-hyperlink). That size relates to the depth of the evaluation stack that is part of the method state described in [Partition I](#todo-missing-hyperlink), while this exception has to do with the implementation of that method state on physical hardware._]_

   * `System.OutOfMemoryException`: indicates that the available memory space has been exhausted, either because the instruction inherently allocates memory (`newobj`, `newarr`) or for an implementation-specific reason (e.g., an implementation based on JIT compilation to native code can run out of space to store the translated method while executing the first call or callvirt to a given method).

 * A section describing the verifiability conditions associated with the instruction. See §[III.1.8]((#todo-missing-hyperlink)).

In addition, operations that have a numeric operand also specify an operand type table that describes how they operate based on the type of the operand. See §[III.1.5](#todo-missing-hyperlink).

Note that not all instructions are included in all CLI Profiles. See [Partition IV](#todo-missing-hyperlink) for details.
