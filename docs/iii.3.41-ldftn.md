## III.3.41 ldftn &ndash; load method pointer

 | Format | Assembly Format | Description
 | ---- | ---- | ----
 | FE 06 _\<T\>_ | `ldftn` _method_ | Push a pointer to a method referenced by _method_, on the stack.

#### Stack Transition:

&hellip; &rarr; &hellip;, _ftn_

#### Description:

The `ldftn` instruction pushes a method pointer (§[II.14.5](ii.14.5-method-pointers.md)) to the native code implementing the method described by _method_ (a metadata token, either a `methoddef` or `methodref` (see [Partition II](#todo-missing-hyperlink))), or to some other implementation-specific description of _method_ (see Note) onto the stack). The value pushed can be called using the `calli` instruction if it references a managed method (or a stub that transitions from managed to unmanaged code). It may also be used to construct a delegate, stored in a variable, etc.

The CLI resolves the method pointer according to the rules specified in §[I.12.4.1.3](i.12.4.1.3-computed-destinations.md) (Computed destinations), except that the destination is computed with respect to the class specified by _method_.

The value returned points to native code (see Note) using the calling convention specified by _method_. Thus a method pointer can be passed to unmanaged native code (e.g., as a callback routine). Note that the address computed by this instruction can be to a thunk produced specially for this purpose (for example, to re-enter the CIL interpreter when a native version of the method isn't available).

_[Note:_ There are many options for implementing this instruction. Conceptually, this instruction places on the virtual machine's evaluation stack a representation of the address of the method specified. In terms of native code this can be an address (as specified), a data structure that contains the address, or any value that can be used to compute the address, depending on the architecture of the underlying machine, the native calling conventions, and the implementation technology of the VES (JIT, interpreter, threaded code, etc.). _end note]_

#### Exceptions:

`System.MethodAccessException` can be thrown when there is an invalid attempt to access a non-public method.

#### Correctness:

Correct CIL requires that method is a valid `methoddef` or `methodref` token.

#### Verifiability:

Verification tracks the method signature (§[I.8.6.1.5](i.8.6.1.5-method-signatures.md)) of the value, which includes the number and types of parameters, the type of the *this* pointer (for an instance method), and the return type and the calling convention. _[Note:_ the type of *this* pointer for an instance method is determined as described in §[I.8.6.1.5](i.8.6.1.5-method-signatures.md) based on the resolved method definition. _end note]_

See also the `newobj` instruction.
