## III.3.57 ret &ndash; return from method

 | Format | Assembly Format | Description
 | ---- | ---- | ----
 | 2A | `ret` | Return from method, possibly with a value.

#### Stack Transition:

_retVal_ on callee evaluation stack (not always present) &rarr; &hellip;, _retVal_ on caller evaluation stack (not always present)

#### Description:

Return from the current method. The return type, if any, of the current method determines the type of value to be fetched from the top of the stack and copied onto the stack of the method that called the current method. The evaluation stack for the current method shall be empty except for the value to be returned.

The `ret` instruction cannot be used to transfer control out of a **try**, **filter**, **catch**, or **finally** block. From within a **try** or **catch**, use the `leave` instruction with a destination of a `ret` instruction that is outside all enclosing exception blocks. Because the **filter** and **finally** blocks are logically part of exception handling, not the method in which their code is embedded, correctly generated CIL does not perform a method return from within a **filter** or **finally**. See [Partition I](#todo-missing-hyperlink).

#### Exceptions:

None.

#### Correctness:

Correct CIL obeys the control constraints describe above.

#### Verifiability:

Verification requires that the type of _retVal_ is *verifier-assignable-to* the declared return type of the current method. _[Note:_ as the operation is stack-to-stack no representation changes occur. _end note]_
