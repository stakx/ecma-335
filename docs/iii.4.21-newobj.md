## III.4.21 newobj &ndash; create a new object

 | Format | Assembly Format | Description
 | ---- | ---- | ----
 | 73 _\<T\>_ | `newobj` _ctor_ | Allocate an uninitialized object or value type and call _ctor_.

#### Stack Transition:

&hellip;, _arg1_, &hellip; _argN_ &rarr; &hellip;, _obj_

#### Description:

The `newobj` instruction creates a new object or a new instance of a value type. _ctor_ is a metadata token (a `methodref` or `methodef` that shall be marked as a constructor; see [Partition II](#todo-missing-hyperlink)) that indicates the name, class, and signature of the constructor to call. If a constructor exactly matching the indicated name, class and signature cannot be found, `MissingMethodException` is thrown.

The `newobj` instruction allocates a new instance of the class associated with _ctor_ and initializes all the fields in the new instance to 0 (of the proper type) or `null` as appropriate. It then calls the constructor with the given arguments along with the newly created instance. After the constructor has been called, the now initialized object reference is pushed on the stack.

From the constructor's point of view, the uninitialized object is argument 0 and the other arguments passed to `newobj` follow in order.

All zero-based, one-dimensional arrays are created using `newarr`, not `newobj`. On the other hand, all other arrays (more than one dimension, or one-dimensional but not zero-based) are created using `newobj`.

Value types are not usually created using `newobj`. They are usually allocated either as arguments or local variables, using `newarr` (for zero-based, one-dimensional arrays), or as fields of objects. Once allocated, they are initialized using `initobj`. However, the `newobj` instruction can be used to create a new instance of a value type on the stack, that can then be passed as an argument, stored in a local, etc.

#### Exceptions:

`System.InvalidOperationException` is thrown if ctor's class is abstract.

`System.MethodAccessException` is thrown if _ctor_ is inaccessible.

`System.OutOfMemoryException` is thrown if there is insufficient memory to satisfy the request.

`System.MissingMethodException` is thrown if a constructor method with the indicated name, class, and signature could not be found. This is typically detected when CIL is converted to native code, rather than at runtime.

#### Correctness:

Correct CIL ensures that _ctor_ is a valid `methodref` or `methoddef` token, and that the arguments on the stack are *assignable-to* (§[I.8.7.3](i.8.7.3-general-assignment-compatibility.md)) the parameters of the constructor.

#### Verifiability:

Verification depends on whether a delegate or other object is being created. There are three cases, in order:

 1. If the `newobj` instruction is part of a `dup`; `ldvirtftn`; `newobj` instruction sequence and the _ctor_ metadata token references a delegate type then a delegate for a virtual function is being created;

 2. If the `newobj` instruction is part of a `ldftn`; `newobj` instruction sequence and the _ctor_ metadata token references a delegate type then a delegate for a static or non-virtual instance function is being created;

 3. Otherwise if the _ctor_ metadata token does not references a delegate type then some other object is being created.

No other cases are verifiable. The different verification rules for the three cases follow.

#### Verifiability of virtual dispatch delegate creation:

When a `newobj` instruction is part of a:

 ```ilasm
 dup
 ldvirtftn <function>
 newobj <ctor>
 ```

instruction sequence then verification checks that:

 1. there is a _target_ on the stack prior to the `dup` instruction of type *T*;

 2. function is a `methoddef`, `methodref` or `methodspec` metadata token for a virtual method on type *T*;

 3. _ctor_ is a `methoddef` or `methodref` metadata token marked as a constructor for a delegate type _deltype_;

 4. _ctor_ is accessible from the `newobj` site;

 5. the signature of function is *delegate-assignable-to* the signature of _deltype_ (i.e. the signature of the `Invoke` method of _deltype_);

 6. the verification type of _target_ is *verifier-assignable-to* (§[III.1.8.1.2.3](iii.1.8.1.2.3-verification-type-compatibility.md)) the **this** signature of _function_; and

 7. no branch instructions target the `ldvirtftn` or `newobj` instructions within the sequence.

Verification tracks the type of _obj_ as _deltype_.

#### Verifiability of interface dispatch delegate creation for static and instance methods:

When a `newobj` instruction is part of a:

 ```ilasm
  ldftn <function>
  newobj <ctor>
  ```

instruction sequence then verification checks that:

 1. _function_ is a `methoddef`, `methodref` or `methodspec` metadata token for a static or nonvirtual instance method;
 
 2. there is a _target_ on the stack prior to the `ldftn` instruction and the verification type of _target_ is either:

     1. *verifier-assignable-to* (§[III.1.8.1.2.3](iii.1.8.1.2.3-verification-type-compatibility.md)) the **this** signature of _function_, if _function_ refers to an instance method, or

     2. null (i.e. the result of `ldnull`), if _function_ refers to a static method

 3. _ctor_ is a `methoddef` or `methodref` metadata token marked as a constructor for a delegate type _deltype_;

 4. _ctor_ is accessible from the `newobj` site;

 5. the signature of _function_ is *delegate-assignable-to* the signature of _deltype_ (i.e. the signature of the `Invoke` method of _deltype_); and

 6. when _function_ is a non-final virtual method and the _target_ on the stack is not a boxed valued type, verification checks that _target_ is the result of `ldarg.s 0`, `ldarg 0` or `ldarg.0` and the creator's body does not contain `starg.s 0`, `starg 0` or `ldarga.s 0`, `ldarga 0`. _[Note:_ This mirrors the requirement, and rationale, for the `call` instruction (§[III.3.19](iii.3.19-call.md)). _end note]_; and

 7. no branch instructions target the `newobj` instruction within the sequence.

Verification tracks the type of _obj_ as _deltype_.

#### Verifiability of creation of non-delegate objects:

Verification checks that:

 1. _ctor_ is a `methoddef` or `methodref` metadata token marked as a constructor for a non-delegate type *T*;

 2. _ctor_ is accessible from the `newobj` site; and

 3. the types of the arguments; _arg1_, &hellip; _argN_; on the stack are *verifier-assignable-to* (§[III.1.8.1.2.3](iii.1.8.1.2.3-verification-type-compatibility.md)) the parameter signatures of _ctor_'s signature.
 
 Verification tracks the type of _obj_ as _T_.
 