## III.4.24 rethrow &ndash; rethrow the current exception

 | Format | Assembly Format | Description
 | ---- | ---- | ----
 | FE 1A | `rethrow` | Rethrow the current exception.

#### Stack Transition:

&hellip;, &rarr; &hellip;,

#### Description:

The `rethrow` instruction is only permitted within the body of a **catch** handler (see [Partition I](#todo-missing-hyperlink)). It throws the same exception that was caught by this handler. A rethrow does not change the stack trace in the object.

#### Exceptions:

The original exception is thrown.

#### Correctness:

Correct CIL uses this instruction only within the body of a **catch** handler (not of any exception handlers embedded within that **catch** handler). If a rethrow occurs elsewhere, an exception will be thrown, but precisely which exception, is undefined

#### Verifiability:

There are no additional verification requirements.
