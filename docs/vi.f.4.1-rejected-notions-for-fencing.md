## VI.F.4.1 Rejected notions for fencing

This subclause explains why some alternative ideas for "check fence" rules that were rejected.

Volatile operations were a candidate, since they already prevent some kinds of reordering. Treating volatile memory operations as check fences would prevent interference in critical sections. However, there are two arguments against this. First, not all situations that need check fences have anything to do with volatile operations. Second, it would penalize volatile references, which exist for sake of fast cross-thread communication.
