## III.3.4 arglist &ndash; get argument list

 Format | Assembly Format | Description
 ---- | ---- | ----
 FE 00 | `arglist` | Return argument list handle for the current method.

#### Stack Transition:

&hellip; &rarr; &hellip;, _argListHandle_

#### Description:

The `arglist` instruction returns an opaque handle (having type `System.RuntimeArgumentHandle`) representing the argument list of the current method. This handle is valid only during the lifetime of the current method. The handle can, however, be passed to other methods as long as the current method is on the thread of control. The `arglist` instruction can only be executed within a method that takes a variable number of arguments.

_[Rationale:_ This instruction is needed to implement the C `va_*` macros used to implement procedures like `printf`. It is intended for use with the class library implementation of `System.ArgIterator`. _end rationale]_

#### Exceptions:

None.

#### Correctness:

It is incorrect CIL generation to emit this instruction except in the body of a method whose signature indicates it accepts a variable number of arguments.

#### Verifiability:

Its use is verifiable within the body of a method whose signature indicates it accepts a variable number of arguments, but verification requires that the result be an instance of the `System.RuntimeArgumentHandle` class.
