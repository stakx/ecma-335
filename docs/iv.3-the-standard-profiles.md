## IV.3 The Standard Profiles

There are two Standard Profiles. The smallest conforming implementation of the CLI is the _Kernel Profile_,  while the _Compact Profile_ contains additional features useful for applications targeting a more resource-rich set of devices.

A conforming implementation of the CLI shall throw an appropriate exception (e.g., `System.NotImplementedException`, `System.MissingMethodException`, or `System.ExecutionEngineException`) when it encounters a feature specified in this Standard but not supported by the particular Profile (see [Partition III](#todo-missing-hyperlink)).

_[Note:_ Implementers should consider providing tools that statically detect features they do not support so users have an option of checking programs for the presence of such features before running them. _end note]_

_[Note:_ Vendors of compliant CLI implementations should specify exactly which configurations of Standard Libraries and Standard Profiles they support. _end note]_

_[Note:_ "Features" can be something like the use of a floating-point CIL instruction in the implementation of a method when the CLI upon which it is running does not support the Extended Numerics Library. Or, the "feature" might be a call to a method that this Standard specifies exists only when a particular Library is implemented and yet the code making the call is running on an implementation of the CLI that does not support that particular library. _end note]_
