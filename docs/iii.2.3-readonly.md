### III.2.3 readonly. (prefix) &mdash; following instruction returns a controlled-mutability managed pointer

 Format | Assembly Format | Description
 ---- | ---- | ----
 FE 1E | `readonly.` | Specify that the subsequent array address operation performs no type check at runtime, and that it returns a controlled-mutability managed pointer

#### Description:

This prefix can only appear only immediately preceding the `ldelema` instruction and calls to the special *Address* method on arrays. Its effect on the subsequent operation is twofold.

1. At run-time, no type check operation is performed. (For the value class case there is never a runtime time check so this is a noop in that case).

 2. The verifier treats the result of the address-of operation as a controlled-mutability managed pointer (§[III.1.8.1.2.2](#todo-missing-hyperlink)).

#### Exceptions:

None.

#### Correctness:

#### Verifiability:

A controlled-mutability managed pointer must obey the verifier rules given in (2) of §[III.1.8.1.2.2](#todo-missing-hyperlink). See also §[III.1.8.1.3](#todo-missing-hyperlink).

_[Rationale:_ The main goal of the `readonly.` prefix is to avoid a type check when fetching an element from an array in generic code. For example the expression

 _array_[_i_]._method_()

where _array_ has type `T[]` (where `T` is a generic parameter), and `T` has been constrained to have an interface with method _method_ might compile into the following IL code.

 ```ilasm
 ldloc array
 ldloc j          // j is array index
 readonly.
 ldelema !0       // loads the pointer to the object
 …                // load the arguments to the call
 constrained. !0
 callvirt method
 ```

Without the `readonly.` prefix the `ldelema` would do a type check in the case that `!0` was a reference class. Not only is this type check inefficient, but it is semantically incorrect. The type check for `ldelema` does an exact match typecheck, which is too strong in general. If the array held derived classes of `!0` then the code above would fail the `ldelema` typecheck. The only reason we fetch the address of the array element instead of the element itself (which is what the source code says), is because we need a handle for _array_[_i_] that works both for value types and reference types that can be passed to the constrained `callvirt` instruction.

If the array holds elements of a reference type, in general, skipping the runtime check would be unsafe. To be safe we have to insure that no modifications of the array happen through this pointer. The verifier rules stated above insure this. Since we explicitly allow read-only pointers to be passed as the object of instance method calls, these pointers are not strictly read-only for value types, but there is no type safety problem for value types. _end rationale]_
