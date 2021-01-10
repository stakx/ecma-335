## III.1.8.1.1 Verification algorithm

The verification algorithm shall attempt to associate a valid stack state with every CIL instruction. The stack state specifies the number of slots on the CIL stack at that point in the code and for each slot a required type that shall be present in that slot. The initial stack state is empty (there are no items on the stack).

Verification assumes that the CLI zeroes all memory other than the evaluation stack before it is made visible to programs. A conforming implementation of the CLI shall provide this observable behavior. Furthermore, verifiable methods shall have the localsinit bit set, see [Partition II (Flags for Method Headers)](#todo-missing-hyperlink). If this bit is not set, then a CLI might throw a _Verification_ exception at any point where a local variable is accessed, and where the assembly containing that method has not been granted _SecurityPermission_._SkipVerification_.

_[Rationale:_ This requirement strongly enhances program portability, and a well-known technique (definite assignment analysis) allows a CIL-to-native-code compiler to minimize its performance impact. Note that a CLI might optionally choose to perform definite-assignment analysis&mdash;in such a case, it might confirm that a method, even without the `localsinit` bit set, might in fact be verifiable (and therefore not throw a Verification exception) _end rationale]_

_[Note:_ Definite assignment analysis can be used by the CLI to determine which locations are written before they are read. Such locations needn't be zeroed, since it isn't possible to observe the contents of the memory as it was provided by the VES.

Performance measurements on C++ implementations (which do not require definite-assignment analysis) indicate that adding this requirement has almost no impact, even in highly optimized code. Furthermore, customers incorrectly attribute bugs to the compiler when this zeroing is not performed, since such code often fails when small, unrelated changes are made to the program. _end note]_

The verification algorithm shall simulate all possible control flow paths through the code and ensure that a valid stack state exists for every reachable CIL instruction. The verification algorithm does not take advantage of any data values during its simulation (e.g., it does not perform constant propagation), but uses only type assignments. Details of the type system used for verification and the algorithm used to merge stack states are provided in §[III.1.8.1.3](iii.1.8.1.3-merging-stack-states.md). The verification algorithm terminates as follows:

 1. Successfully, when all control paths have been simulated.

 2. Unsuccessfully when it is not possible to compute a valid stack state for a particular CIL instruction.

 3. Unsuccessfully when additional tests specified in this clause fail.

With the exception of the unconditional branch instructions, `throw`, `rethrow`, and `ret`, there is a control flow path from every instruction to the subsequent instruction. There is also a control flow path from each branch instruction (conditional or unconditional) to the branch target (or targets, in the case of the `switch` instruction).

Verification simulates the operation of each CIL instruction to compute the new stack state, and any type mismatch between the specified conditions on the stack state (see §[III.3](iii.3-base-instructions.md)) and the simulated stack state shall cause the verification algorithm to fail. (Note that verification simulates only the effect on the stack state: it does not perform the actual computation). The algorithm shall also fail if there is an existing stack state at the next instruction address (for conditional branches or instructions within a **try** block there might be more than one such address) that cannot be merged with the stack state just computed. For rules of this merge operation, see §[III.1.8.1.3](iii.1.8.1.3-merging-stack-states.md).

The CLI supports the notion of a *controlled-mutability* managed pointer. (See §[III.1.8.1.2.2](iii.1.8.1.2.2-controlled-mutability-managed-pointers.md), the merging rules in §[III.1.8.1.3](iii.1.8.1.3-merging-stack-states.md), the `readonly.` instruction prefix in §[III.2.3](iii.2.3-readonly.md), the `ldfld` instruction in §[III.4.10](iii.4.10-ldfld.md), the `stfld` instruction in §[III.4.28](iii.4.28-stfld.md), and the `unbox` instruction in §[III.4.32](iii.4.32-unbox.md).)

The VES ensures that both special constraints and type constraints are satisfied. The constraints can be checked as early as when a closed type is constructed, or as late as when a method on the constrained generic type is invoked, a constrained generic method is invoked, a field in a constrained generic type is accessed, or an instance of a constrained generic type is created.

To accommodate generics, the type compatibility relation is extended to deal with:

 * generic parameters: a generic parameter is only *assignable-to* (§[I.8.7.3](#todo-missing-hyperlink)) itself.

 * boxed generic parameters: a boxed generic parameter is *assignable-to* (§[I.8.7.3](i.8.7.3-general-assignment-compatibility.md)) the constraint types declared on the generic parameter.

In the verification semantics, boxing a value of primitive or value type on the stack introduces a value of type "boxed" type; if the value type is `Nullable<T>` ([Partition I.8.2.4](#todo-missing-hyperlink)), a value of type "boxed" `T` is introduced. This notion of boxed type is extended to generic parameters. Boxing a value whose type is a generic parameter (`!0`, for example) introduces a value of the boxed parameter type on the stack ("boxed" `!0`, for example). The boxed forms of value types, and now generic parameters, are used to support efficient instance and virtual method calls on boxed values. Because the "boxed" type statically records the exact type of the underlying value, there is no need to perform a checked cast on the instance from some less informative, but syntactically expressible, reference type.

Just like the boxed forms of primitive and non-primitive value types, the boxed forms of generic parameters only occur on the verification stack (after being introduced by a `box` instruction). They cannot be explicitly specified using metadata signatures.
