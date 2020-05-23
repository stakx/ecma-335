## III.1.7.5 Backward branch constraints

It shall be possible, with a single forward-pass through the CIL instruction stream for any method, to infer the exact state of the evaluation stack at every instruction (where by "state" we mean the number and type of each item on the evaluation stack).

In particular, if that single-pass analysis arrives at an instruction, call it location X, that immediately follows an unconditional branch, and where X is not the target of an earlier branch instruction, then the state of the evaluation stack at X, clearly, cannot be derived from existing information. In this case, the CLI demands that the evaluation stack at X be empty.

Following on from this rule, it would clearly be invalid CIL if a later branch instruction to X were to have a non-empty evaluation stack.

_[Rationale:_ This constraint ensures that CIL code can be processed by a simple CIL-to-nativecode compiler. It ensures that the state of the evaluation stack at the beginning of each CIL can be inferred from a single, forward-pass analysis of the instruction stream. _end rationale]_

_[Note:_ the stack state at location X in the above can be inferred by various means: from a previous forward branch to X; because X marks the start of an exception handler, etc. _end note]_

See the following for further information:

 * Exceptions: [Partition I](#todo-missing-hyperlink)
 * Verification conditions for branch instructions: §[III.3](iii.3-base-instructions.md)
 * The `tail.` prefix: §[III.3.19](iii.3.19-call.md)
