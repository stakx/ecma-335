## VI.Annex F Imprecise faults

> _This clause contains only informative text_

Some CIL instructions perform implicit run-time checks that ensure memory and type safety. Originally, the CLI guaranteed that exceptions were precise, meaning that program state was preserved when an exception was thrown. However, enforcing precise exceptions for implicit checks makes some important optimizations practically impossible to apply. Programmers can now declare, via a custom attribute, that a method is "relaxed", which says that exceptions arising from implicit run-time checks need not be precise. Relaxed checks preserve verifiability (by preserving memory and type safety) while permitting optimizations that reorder instructions. In particular, it enables the following optimizations:

 * Hoisting implicit run-time checks out of loops.

 * Reordering loop iterations (e.g., vectorization and automatic multithreading)

 * Interchanging loops

 * Inlining that makes an inlined method as least as fast as the equivalent macro
