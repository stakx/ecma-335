## I.12.6.7 Volatile reads and writes

The `volatile.` prefix on certain instructions shall guarantee cross-thread memory ordering rules. They do not provide atomicity, other than that guaranteed by the specification of §[I.12.6.6](#todo-missing-hyperlink).

A volatile read has "acquire semantics" meaning that the read is guaranteed to occur prior to any references to memory that occur after the read instruction in the CIL instruction sequence. A volatile write has "release semantics" meaning that the write is guaranteed to happen after any memory references prior to the write instruction in the CIL instruction sequence.

A conforming implementation of the CLI shall guarantee this semantics of volatile operations. This ensures that all threads will observe volatile writes performed by any other thread in the 
order they were performed. But a conforming implementation is not required to provide a single total ordering of volatile writes as seen from all threads of execution.

An optimizing compiler that converts CIL to native code shall not remove any volatile operation, nor shall it coalesce multiple volatile operations into a single operation.

_[Rationale:_ One traditional use of volatile operations is to model hardware registers that are visible through direct memory access.  In these cases, removing or coalescing the operations might change the behavior of the program. _end rationale]_

_[Note:_ An optimizing compiler from CIL to native code is permitted to reorder code, provided that it guarantees both the single-thread semantics described in §[I.12.6](#todo-missing-hyperlink) and the cross-thread semantics of volatile operations. _end note]_

