## III.3.35 endfinally &ndash; end the finally or fault clause of an exception block

 | Format | Assembly Format | Description
 | ---- | ---- | ----
 | DC | `endfault` | End **fault** clause of an exception block.
 | DC | `endfinally` | End **finally** clause of an exception block.

#### Stack Transition:

&hellip; &rarr; &hellip;

#### Description:

Return from the **finally** or **fault** clause of an exception block (see the Exception Handling subclause of [Partition I](#todo-missing-hyperlink) for details).

Signals the end of the **finally** or **fault** clause so that stack unwinding can continue until the exception handler is invoked. The `endfinally` or `endfault` instruction transfers control back to the CLI exception mechanism. This then searches for the next **finally** clause in the chain, if the protected block was exited with a `leave` instruction. If the protected block was exited with an exception, the CLI will search for the next **finally** or **fault**, or enter the exception handler chosen during the first pass of exception handling.

An `endfinally` instruction can only appear lexically within a **finally** block. Unlike the `endfilter` instruction, there is no requirement that the block end with an `endfinally` instruction, and there can be as many `endfinally` instructions within the block as required. These same restrictions apply to the `endfault` instruction and the **fault** block, *mutatis mutandis*.

Control cannot be transferred into a **finally** (or **fault**) block except through the exception mechanism. Control cannot be transferred out of a **finally** (or **fault**) block except through the use of a `throw` instruction or executing the `endfinally` (or `endfault`) instruction. In particular, it is not valid to "fall out" of a **finally** (or **fault**) block or to execute a `ret` or `leave` instruction within a **finally** (or **fault**) block.

Note that the `endfault` and `endfinally` instructions are aliases&mdash;they correspond to the same opcode.

`endfinally` empties the evaluation stack as a side-effect.

#### Exceptions:

None.

#### Correctness:

Correct CIL guarantees the control transfer restrictions specified above.

#### Verifiability:

There are no additional verification requirements.
