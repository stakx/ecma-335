## III.3.16 break &ndash; breakpoint instruction

 | Format | Assembly Format | Description
 | ---- | ---- | ----
 | 01 | `break` | Inform a debugger that a breakpoint has been reached.

#### Stack Transition:

&hellip;, &rarr; &hellip;

#### Description:

The `break` instruction is for debugging support. It signals the CLI to inform the debugger that a break point has been tripped. It has no other effect on the interpreter state.

The `break` instruction has the smallest possible instruction size so that code can be patched with a breakpoint with minimal disturbance to the surrounding code.

The `break` instruction might trap to a debugger, do nothing, or raise a security exception: the exact behavior is implementation-defined.

#### Exceptions:

None.

#### Correctness:

#### Verifiability:

The `break` instruction is always verifiable.
