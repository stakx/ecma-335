## III.4.2 callvirt &ndash; call a method associated, at runtime, with an object

 Format | Assembly Format | Description
 ---- | ---- | ----
 6F _\<T\>_ | `callvirt` _method_ | Call a method associated with an object.
 
#### Stack Transition:

&hellip;, _obj_, _arg1_, &hellip; _argN_ &rarr; &hellip;, _returnVal_ (not always returned)

#### Description:

The `callvirt` instruction calls a late-bound method on an object. That is, the method is chosen based on the exact type of _obj_ rather than the compile-time class visible in the _method_ metadata token. `callvirt` can be used to call both virtual and instance methods. See [Partition I](#todo-missing-hyperlink) for a detailed description of the CIL calling sequence. The `callvirt` instruction can be immediately preceded by a `tail.` prefix to specify that the current stack frame should be released before transferring control. If the call would transfer control to a method of higher trust than the original method the stack frame will not be released.

[A callee of "higher trust" is defined as one whose permission grant-set is a strict superset of the grant-set of the caller]

_method_ is a metadata token (a `methoddef`, `methodref` or `methodspec` see [Partition II](#todo-missing-hyperlink)) that provides the name, class and signature of the method to call. In more detail, `callvirt` can be thought of as follows. Associated with _obj_ is the class of which it is an instance. The CLI resolves the method to be called according to the rules specified in §[I.12.4.1.3](i.12.4.1.3-computed-destinations.md) (Computed destinations).

`callvirt` pops the object and the arguments off the evaluation stack before calling the method. If the method has a return value, it is pushed on the stack upon method completion. On the callee side, the _obj_ parameter is accessed as argument 0, _arg1_ as argument 1, and so on.

The arguments are placed on the stack in left-to-right order. That is, the first argument is computed and placed on the stack, then the second argument, etc. The **this** pointer (always required for `callvirt`) shall be pushed first. The signature carried in the metadata does not contain an entry in the parameter list for the **this** pointer, but the calling convention always indicates whether one is required and if its signature is explicit or inferred (see §[I.8.6.1.5](#todo-missing-hyperlink) and §[II.15.3](ii.15.3-calling-convention.md)) _[Note:_ For calls to methods on value types, the **this** pointer may be a managed pointer, not an instance reference (§[I.8.6.1.5](#todo-missing-hyperlink)). _end note]_

The arguments are passed as though by implicit `starg` (§[III.3.61](#todo-missing-hyperlink)) instructions, see *Implicit argument coercion* §[III.1.6](iii.1.6-implicit-argument-coercion.md).

Note that a virtual method can also be called using the `call` instruction.

#### Exceptions:

`System.MethodAccessException` can be thrown when there is an invalid attempt to access a nonpublic method.

`System.MissingMethodException` is thrown if a non-static method with the indicated name and signature could not be found in _obj_'s class or any of its base classes. This is typically detected when CIL is converted to native code, rather than at runtime.

`System.NullReferenceException` is thrown if _obj_ is null.

`System.SecurityException` is thrown if system security does not grant the caller access to the called method. The security check can occur when the CIL is converted to native code rather than at runtime.

#### Correctness:

Correct CIL ensures that the destination method exists and the values on the stack correspond to the types of the parameters of the method being called. In addition to the arguments types allowed by Verified CIL, Correct CIL also allows a `native int` to be passed as a byref (`&`); in which case following the store the value will be tracked by garbage collection.

#### Verifiability:

In its typical use, `callvirt` is verifiable if:

 1. the above restrictions are met;

 2. the verification type of _obj_ is *verifier-assignable-to* (§[III.1.8.1.2.3](iii.1.8.1.2.3-verification-type-compatibility.md)) with the **this** signature of the method's signature;

 3. the types of the arguments on the stack are *verifier-assignable-to* (§[III.1.8.1.2.3](iii.1.8.1.2.3-verification-type-compatibility.md)) the parameter signatures of the method's signature; and

 3. the method is accessible from the call site.

If _returnVal_ is present its type is tracked as the intermediate type of the called method's signature return type.

A `callvirt` annotated by `tail.` has additional considerations &ndash; see §[III.1.8](iii.1.8-verifiability-and-correctness.md).
