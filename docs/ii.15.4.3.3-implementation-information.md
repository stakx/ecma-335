## II.15.4.3.3 Implementation information

 | _ImplAttr_ ::= &hellip;
 | ----
 | \| `forwardref`
 | \| `internalcall`
 | \| `noinlining` 
 | \| `nooptimization`
 | \| `synchronized`

These attributes can be combined.

**forwardref** specifies that the body of the method is provided elsewhere. This attribute shall not be present when an assembly is loaded by the VES. It is used for tools (like a static linker) that will combine separately compiled modules and resolve the forward reference.

**internalcall** specifies that the method body is provided by this CLI (and is typically used by low-level methods in a system library). It shall not be applied to methods that are intended for use across implementations of the CLI.

**noinlining** specifies that the body of this method should not be included into the code of any caller methods, by a CIL-to-native-code compiler; it shall be kept as a separate routine.

**nooptimization** specifies that a CIL-to-native-code compiler should not perform code optimizations.

_[Rationale:_ specifying that a method not be inlined ensures that it remains 'visible' for debugging (e.g., displaying stack traces) and profiling. It also provides a mechanism for the programmer to override the default heuristics a CIL-to-native-code compiler uses for inlining. _end rationale]_

**synchronized** specifies that the whole body of the method shall be single-threaded. If this method is an instance or virtual method, a lock on the object shall be obtained before the method is entered. If this method is a static method, a lock on the closed type shall be obtained before the method is entered. If a lock cannot be obtained, the requesting thread shall not proceed until it is granted the lock. This can cause deadlocks. The lock is released when the method exits, either through a normal return or an exception. Exiting a synchronized method using a `tail.` call shall be implemented as though the `tail.` had not been specified.

**noinlining** specifies that the runtime shall not inline this method. Inlining refers to the process of replacing the call instruction with the body of the called method. This can be done by the runtime for optimization purposes.
