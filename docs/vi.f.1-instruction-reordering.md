## VI.F.1 Instruction reordering

Programs that always perform explicit checks and explicit throws, instead of relying on implicit run-time checks, are never visibly affected by relaxation, except for variations already permitted by the existing CLI standard (e.g., non-determinism of cross-thread non-volatile reads and writes). Furthermore, only control dependences induced by implicit run-time checks are relaxed. Nonetheless, *data* dependences must be respected.

Authors of strict methods can reason about their behavior without knowing details about whether their callers or callees are relaxed, because strict instructions act as a fence. On the other hand, we want calls from E-relaxed methods to E-relaxed methods to be inlinable "as if" they were inlined by hand at the source level. That is why an E-relaxed sequence is allowed to span between methods.
