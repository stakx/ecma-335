## III.4.18 ldvirtftn &ndash; load a virtual method pointer

 | Format | Assembly Format | Description
 | ---- | ---- | ----
 | FE 07 _\<T\>_ | `ldvirtftn` _method_ | Push address of virtual method `method` on the stack.

#### Stack Transition:

&hellip; _object_ &rarr; &hellip;, _ftn_

#### Description:

The `ldvirtftn` instruction pushes a method pointer (§[II.14.5](#todo-missing-hyperlink)) to the native code implementing the virtual method associated with _object_ and described by the method reference _method_ (a metadata token, a `methoddef`, `methodref` or `methodspec`; see [Partition II](#todo-missing-hyperlink)), or to some other implementation-specific description of the method associated with _object_ (see Note), onto the stack. The value pushed can be called using the `calli` instruction if it references a managed method (or a stub that transitions from managed to unmanaged code). It may also be used to construct a delegate, stored in a variable, etc.

The value returned points to native code (see Note) using the calling convention specified by _method_. Thus a method pointer can be passed to unmanaged native code (e.g., as a callback routine) if that routine expects the corresponding calling convention. _[Note:_ that the address computed by this instruction can be to a thunk produced specially for this purpose (for example, to re-enter the CLI when a native version of the method isn't available). _end note]_

_[Note:_ There are many options for implementing this instruction. Conceptually, this instruction places on the virtual machine's evaluation stack a representation of the address of the method specified. In terms of native code this can be an address (as specified), a data structure that contains the address, or any value that can be used to compute the address, depending on the architecture of the underlying machine, the native calling conventions, and the implementation technology of the VES (JIT, interpreter, threaded code, etc.). _end note]_

#### Exceptions:

`System.MethodAccessException` can be thrown when there is an invalid attempt to access a non-public method.

`System.NullReferenceException` is thrown if _object_ is null.

#### Correctness:

Correct CIL ensures that _method_ is a valid `methoddef`, `methodref` or `methodspec` token. Also that _method_ references a non-static method that is defined for _object_.

#### Verifiability:

Verification requires that tracked type of _object_ combined with _method_ identify a final virtual method. _[Rationale:_ If the identified method is not final then the exact type of its **this** pointer cannot be statically determined. _end rationale]_

There is a defined exception to the above requirement as described for `newobj` (§[III.4.21](#todo-missing-hyperlink)). Verification tracks the method signature (§[I.8.6.1.5](#todo-missing-hyperlink)) of the value, which includes the number and types of parameters, the type of the **this** pointer, and the return type and the calling convention. _[Note:_ the type of the **this** pointer is determined in §[I.8.6.1.5](#todo-missing-hyperlink) based on the resolved method definition. _end note]_

See also the `newobj` instruction.
