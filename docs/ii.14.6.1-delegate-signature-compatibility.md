## II.14.6.1 Delegate signature compatibility

This clause defines the relation *delegate-assignable-to*, which is a variant of *method-signature-compatible-with* (§[I.8.7.1](i.8.7.1-assignment-compatibility-for-signature-types.md)) and covers delegate construction.

Delegates are bound to target methods through the `newobj` IL instruction (§[III.4.21](iii.4.21-newobj.md)) passing a method pointer for the target method and an object reference, if the target is an instance method, or null, if the target is a static method. The target method is loaded onto the evaluation stack through the `ldftn`, `ldvirtftn`, or one of the load IL instructions, at which time the signature of the method is available.

The *signature of a delegate* is the signature of the `Invoke` method on the delegate type. _[Note:_ the signature does not include the type of the **this** pointer, if any, bound at delegate creation time. _end note]_

Delegates can only be verifiably bound to target methods where:

 1. the signatures of the target method is *delegate-assignable-to* the signature of the delegate;

 2. The object reference's verification type is *verifier-assignable-to* (§[III.1.8.1.2.3](iii.1.8.1.2.3-verification-type-compatibility.md)) the this signature of the target method, if the target is an instance method, or null, if the target method is a static method. The special verification rules for delegate construction are captured by the `newobj` (§[III.4.21](iii.4.21-newobj.md)) instruction.

The *delegate-assignable-to* relation is defined in terms of the parameter types, ignoring the **this** parameter, if any, the return type and calling convention. (Custom modifiers are not considered significant and do not impact compatibility.)

A target method or delegate of type _T_ is *delegate-assignable-to* a delegate of type _D_ if and only if all of the following apply:

 1. The calling conventions of _T_ and _D_ shall match exactly, ignoring the distinction between static and instance methods (i.e., the **this** parameter, if any, is not treated specially). _[Note:_ *delegate-assignable-to* does not consider the type of **this**, if any, that is covered by the additional verification rules above. _end note]_

 2. _T_ and _D_ have the same number of parameters, ignoring any this parameter if _T_ is a method.

 3. For each parameter type _U_ of _T_, ignoring any this parameter if _T_ is a method, and corresponding type _V_ of _D_, _U_ is *assignable-to* (§[I.8.7.3](i.8.7.3-general-assignment-compatibility.md)) _V_.

 4. The return type _U_ of _T_ and return type _V_ of _D_, _V_ is *assignable-to* _U_.
