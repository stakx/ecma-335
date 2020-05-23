## II.10.5.3.1 Type initialization guarantees

The CLI shall provide the following guarantees regarding type initialization (but see also §[II.10.5.3.2](ii.10.5.3.2-relaxed-guarantees.md) and §[II.10.5.3.3](ii.10.5.3.3-races-and-deadlocks.md)):

 1. As to when type initializers are executed is specified in [Partition I](#todo-missing-hyperlink).
 3. A type initializer shall be executed exactly once for any given type, unless explicitly called by user code.
 4. No methods other than those called directly or indirectly from the type initializer are able to access members of a type before its initializer completes execution.
