## I.12.4.2 Exception handling

Exception handling is supported in the CLI through exception objects and protected blocks of code. When an exception occurs, an object is created to represent the exception. All exception objects are instances of some class (i.e., they can be boxed value types, but not pointers, unboxed value types, etc.). Users can create their own exception classes, typically by deriving from `System.Exception` (see [Partition IV](#todo-missing-hyperlink)).

There are four kinds of handlers for protected blocks. A single protected block shall have exactly one handler associated with it:

 * A **finally handler** that shall be executed whenever the block exits, regardless of whether that occurs by normal control flow or by an unhandled exception.

 * A **fault handler** that shall be executed if an exception occurs, but not on completion of normal control flow.

 * A **catch handler** that handles any exception of a specified class or any of its subclasses.

 * A **filter handler** that runs a user-specified set of CIL instructions to determine if the exception should be handled by the associated handler, or passed on to the next protected block.

Protected regions, the type of the associated handler, and the location of the associated handler and (if needed) user-supplied filter code are described through an Exception Handler Table associated with each method. The exact format of the Exception Handler Table is specified in detail in [Partition II](#todo-missing-hyperlink). Details of the exception handling mechanism are also specified in [Partition II](#todo-missing-hyperlink).
