## III.3.34 endfilter &ndash; end exception handling filter clause

 | Format | Assembly Format | Description
 | ---- | ---- | ----
 | FE 11 | `endfilter | End an exception handling filter clause.

#### Stack Transition:

&hellip;, _value_ &rarr; &hellip;

#### Description:

Used to return from the **filter** clause of an exception (see the _Exception Handling_ subclause of [Partition I](#todo-missing-hyperlink) for a discussion of exceptions). _value_ (which shall be of type `int32` and one of a specific set of values) is returned from the **filter** clause. It should be one of:

 * `exception_continue_search` (0) to continue searching for an exception handler

 * `exception_execute_handler` (1) to start the second phase of exception handling where **finally** blocks are run until the handler associated with this **filter** clause is located. Then the handler is executed.

The result of using any other integer value is unspecified.

The entry point of a filter, as shown in the method's exception table, shall be the (lexically) first instruction in the **filter**'s code block. The `endfilter` shall be the (lexically) last instruction in the filter's code block (hence there can only be one `endfilter` for any single filter block). After executing the `endfilter` instruction, control logically flows back to the CLI exception handling mechanism.

Control cannot be transferred into a **filter** block except through the exception mechanism. Control cannot be transferred out of a **filter** block except through the use of a `throw` instruction or executing the final `endfilter` instruction. In particular, it is not valid to execute a `ret` or `leave` instruction within a **filter** block. It is not valid to embed a **try** block within a **filter** block. If an exception is thrown inside the **filter** block, it is intercepted and a value of `exception_continue_search` is returned.

#### Exceptions:

None.

#### Correctness:

Correct CIL guarantees the control transfer restrictions specified above.

#### Verifiability:

The stack shall contain exactly one item (of type `int32`).
