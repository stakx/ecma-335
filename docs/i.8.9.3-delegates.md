## I.8.9.3 Delegates

**Delegates** are the object-oriented equivalent of function pointers. Unlike function pointers, delegates are object-oriented, type-safe, and secure. Delegates are created by defining a class that derives from the base type `System.Delegate` (see [Partition IV](#todo-missing-hyperlink)). Each delegate type shall provide a method named `Invoke` with appropriate parameters, and each instance of a delegate forwards calls to its `Invoke` method to one or more static or instance methods on particular objects that are *delegate-assignable-to* (§[II.14.6.1](#todo-missing-hyperlink)) the signature of the delegate. The objects and methods to which it delegates are chosen when the delegate instance is created.

In addition to an instance constructor and an `Invoke` method, delegates can optionally have two additional methods: `BeginInvoke` and `EndInvoke`. These are used for asynchronous calls.

While, for the most part, delegates appear to be simply another kind of user-defined class, they are tightly controlled. The implementations of the methods are provided by the VES, not user code. The only additional members that can be defined on delegate types are static or instance methods.
