## III.3.19 call &ndash; call a method

 | Format | Assembly Format | Description
 | ---- | ---- | ----
 | 28 _\<T\>_ | `call` _method_ | Call method described by _method_.

#### Stack Transition:

&hellip;, _arg0_, _arg1_ &hellip; _argN_ &rarr; &hellip;, _retVal_ (not always returned)

#### Description:

The `call` instruction calls the method indicated by the descriptor _method_. _method_ is a metadata token (a `methodref`, `methoddef`, or `methodspec`; See [Partition II](#todo-missing-hyperlink)) that indicates the method to call, and the number, type, and order of the arguments that have been placed on the stack to be passed to that method, as well as the calling convention to be used. (See [Partition I](#todo-missing-hyperlink) for a detailed description of the CIL calling sequence.) The `call` instruction can be immediately preceded by a `tail.` prefix to specify that the current method state should be released before transferring control (see §[III.2.3](iii.2.3-readonly.md)).

The metadata token carries sufficient information to determine whether the call is to a static method, an instance method, a virtual method, or a global function. In all of these cases the destination address is determined entirely from the metadata token. (Contrast this with the `callvirt` instruction for calling virtual methods, where the destination address also depends upon the exact type of the instance reference pushed before the `callvirt`; see below.)

The CLI resolves the method to be called according to the rules specified in §[I.12.4.1.3](i.12.4.1.3-computed-destinations.md) (Computed destinations), except that the destination is computed with respect to the class specified by the metadata token.

_[Rationale:_ This implements "call base class" behavior. _end rationale]_

The arguments are placed on the stack in left-to-right order. That is, the first argument is computed and placed on the stack, then the second argument, and so on. There are three important special cases:

 1. Calls to an instance (or virtual, see below) method shall push that instance reference (the *this* pointer) first. The signature carried in the metadata may not contain an entry in the parameter list for the *this* pointer but the calling convention always indicates whether one is required and if its signature is explicit or inferred (see §[I.8.6.1.5](#todo-missing-hyperlink) and §[II.15.3](ii.15.3-calling-convention.md)) _[Note:_ for calls to methods on value types, the *this* pointer is a managed pointer, not an instance reference §[I.8.6.1.5(#todo-missing-hyperlink). _end note]_

 2. It is valid to call a virtual method using `call` (rather than `callvirt`); this indicates that the method is to be resolved using the class specified by method rather than as specified dynamically from the object being invoked. This is used, for example, to compile calls to "methods on super" (i.e., the statically known parent class).

 3. Note that a delegate's `Invoke` method can be called with either the `call` or `callvirt` instruction.

The arguments are passed as though by implicit `starg` (§[III.3.61](iii.3.61-starg-length.md)) instructions, see _Implicit argument coercion_ §[III.1.6](iii.1.6-implicit-argument-coercion.md). `call` pops the *this* pointer, if any, and the arguments off the evaluation stack before calling the method. If the method has a return value, it is pushed on the stack upon method completion. On the callee side, the _arg0_ parameter/_this_ pointer is accessed as argument 0, _arg1_ as argument 1, and so on.

#### Exceptions:

`System.SecurityException` can be thrown if system security does not grant the caller access to the called method. The security check can occur when the CIL is converted to native code rather than at runtime.

`System.MethodAccessException` can be thrown when there is an invalid attempt to access a non-public method.

`System.MissingMethodException` can be thrown when there is an attempt to dynamically access a method that does not exist.

#### Correctness:

Correct CIL ensures that the stack contains a *this* pointer if required and the correct number and type of arguments for the method being called. Unlike Verified CIL, Correct CIL also allows a `native int` to be passed as a byref (`&`); in which case following the store the value will be tracked by garbage collection.

#### Verifiability:

For a typical use of the `call` instruction, verification checks that:

 1. _method_ refers to a valid `methodref`, `methoddef`, or `methodspec` token;

 2. if _method_ requires a *this* pointer, as specified by its method signature (§[I.8.6.1.5](#todo-missing-hyperlink)), then one is one the stack and its verification type is *verifier-assignable-to* (§[III.1.8.1.2.3](iii.1.8.1.2.3-verification-type-compatibility.md)) the *this* signature of the method's signature;

 3. the types of the arguments on the stack are *verifier-assignable-to* (§[III.1.8.1.2.3](iii.1.8.1.2.3-verification-type-compatibility.md)) the parameter signatures of the method's signature;

 4. the method is accessible from the call site; and

 5. the method is not abstract (i.e., it has an implementation). 

If the call returns a value then verification also tracks that the type of the value returned as the intermediate type of the called method's return type.

The `call` instruction can also be used to call an object's base class constructor, or to initialize a value type location by calling an appropriate constructor, both of which are treated as special cases by verification. A `call` annotated by `tail.` is also a special case.

If the target method is global (defined outside of any type), then the method shall be static.

When using the `call` opcode to call a non-final virtual method on an instance other than a boxed value type, verification checks that the instance reference to the method being called is the result of `ldarg.s` 0, `ldarg` 0 or `ldarg.0` and the caller's body does not contain `starg.s` 0, `starg` 0 or `ldarga.s` 0, `ldarga` 0.

_[Rationale:_ This means that non-virtually calling a non-final virtual method is only verifiable in the case where the subclass methods calls one of its superclasses using the same *this* object reference, where "same" is easy to verify. This means that an override implementation effectively "hides" the superclass' implementation, and can assume that the override implementation cannot be bypassed by code outside the class hierarchy. For non-sealed class hierarchies, malicious code can attempt to extend the class hierarchy in an attempt to bypass a class' override implementation. However, this can only be done on an object of the malicious type, and not of the class with the override, which mitigates much of the security concern. _end rationale]_
