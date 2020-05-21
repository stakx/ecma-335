## II.19 Exception handling

In the CLI, a method can define a range of CIL instructions that are said to be _protected_. This is called a _try block_. It can then associate one or more _handlers_ with that try block. If an exception occurs during execution anywhere within the try block, an exception object is created that describes the problem. The CLI then takes over, transferring control from the point at which the exception was thrown, to the block of code that is willing to handle that exception. See [Partition I](#todo-missing-hyperlink).

No two handlers (fault, filter, catch, or finally) can have the same starting address. When an exception occurs it is necessary to convert the execution address to the correct most lexically nested try block in which the exception occurred.

 | _SEHBlock_ ::=
 | ----
 | _TryBlock_ _SEHClause_ [ _SEHClause_* ]

The next few subclauses expand upon this simple description, by describing the five kinds of code block that take part in exception processing: **try**, **catch**, **filter**, **finally**, and **fault**. (Note that there are restrictions upon how many, and what kinds of _SEHClause_ a given _TryBlock_ can have; see [Partition I](#todo-missing-hyperlink) for details.)

The remaining syntax items are described in detail below; they are collected here for reference.

 | _TryBlock_ ::= | Description
 | ---- | ----
 | `.try` _Label_ `to` _Label_ | Protect region from first label to prior to second
 | \| `.try` _ScopeBlock_ | _ScopeBlock_ is protected 

 | _SEHClause_ ::= | Description
 | ---- | ----
 | `catch` _TypeReference_ _HandlerBlock_ | Catch all objects of the specified type
 | \| `fault` _HandlerBlock_ | Handle all exceptions but not normal exit
 | \| `filter` _Label_ _HandlerBlock_ | Enter handler only if filter succeeds
 | \| `finally` _HandlerBlock_ | Handle all exceptions and normal exit

 | _HandlerBlock_ ::= | Description
 | ---- | ----
 | `handler` _Label_ `to` _Label_ | Handler range is from first label to prior to second
 | \| _ScopeBlock_ | _ScopeBlock_ is the handler block
