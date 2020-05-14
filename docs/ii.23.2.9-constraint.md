## II.23.2.9 Constraint

The _Constraint_ item in Signatures currently has only one possible value, `ELEMENT_TYPE_PINNED` (§[II.23.1.16](ii.23.1.16-element-types-used-in-signatures.md)), which specifies that the target type is pinned in the runtime heap, and will not be moved by the actions of garbage collection.

A _Constraint_ can only be applied within a _LocalVarSig_ (not a _FieldSig_).  The Type of the local variable shall either be a reference type (in other words, it *points* to the actual variable &ndash; for example, an Object, or a String); or it shall include the `BYREF` item. The reason is that local variables are allocated on the runtime stack &ndash; they are never allocated from the runtime heap; so unless the local variable *points* at an object allocated in the GC heap, pinning makes no sense.
