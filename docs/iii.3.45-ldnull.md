## III.3.45 ldnull &ndash; load a null pointer

 | Format | Assembly Format | Description
 | ---- | ---- | ----
 | 14 | `ldnull` | Push a null reference on the stack.

#### Stack Transition:

&hellip; &rarr; &hellip;, null value

#### Description:

The `ldnull` pushes a null reference (type `O`) on the stack. This is used to initialize locations before they become live or when they become dead.

_[Rationale:_ It might be thought that `ldnull` is redundant: why not use `ldc.i4.0` or `ldc.i8.0` instead? The answer is that `ldnull` provides a size-agnostic null &ndash; analogous to an `ldc.i` instruction, which does not exist. However, even if CIL were to include an `ldc.i` instruction it would still benefit verification algorithms to retain the `ldnull` instruction because it makes type tracking easier. _end rationale]_

#### Exceptions:

None.

#### Correctness:

#### Verifiability:

The `ldnull` instruction is always verifiable, and produces a value of the null type (§[III.1.8.1.2](iii.1.8.1.2-verification-type-system.md)) that is *assignable-to* (§[I.8.7.3](i.8.7.3-general-assignment-compatibility.md)) any other reference type.
