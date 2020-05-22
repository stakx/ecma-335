## II.7.1.2 pinned

The signature encoding for **pinned** shall appear only in signatures that describe local variables (§[II.15.4.1.3](ii.15.4.1.3-the-locals-directive.md)). While a method with a pinned local variable is executing, the VES shall not relocate the object to which the local refers. That is, if the implementation of the CLI uses a garbage collector that moves objects, the collector shall not move objects that are referenced by an active pinned local variable.

_[Rationale:_ If unmanaged pointers are used to dereference managed objects, these objects shall be pinned. This happens, for example, when a managed object is passed to a method designed to operate with unmanaged data. _end rationale]_
