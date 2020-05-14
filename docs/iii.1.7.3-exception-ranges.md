## III.1.7.3 Exception ranges

Exception tables describe ranges of instructions that are protected by catch, fault, or finally handlers (see [Partition I](#todo-missing-hyperlink) and [Partition II](#todo-missing-hyperlink)). The starting address of a protected block, filter clause, or handler shall be a valid branch target as specified in §[III.1.7.2](iii.1.7.2-valid-branch-targets.md). It is invalid for a protected block, filter clause, or handler to end without forming a complete last instruction.
