## III.2.1 constrained. – (prefix) invoke a member on a value of a variable type

 Format | Assembly Format | Description |
 ---- | ---- | ----
 FE 16 _\<T\>_ | `constrained.` _thisType_ | Call a virtual method on a type constrained to be type `T`

#### Stack Transition:

&hellip;, _ptr_, _arg1_, … _argN_ &rarr; &hellip;, _ptr_, _arg1_, … _argN_

#### Description:

The `constrained.` prefix is permitted only on a `callvirt` instruction. The type of ptr must be a managed pointer (`&)` to _thisType_. The constrained prefix is designed to allow `callvirt` instructions to be made in a uniform way independent of whether _thisType_ is a value type or a reference type.

When `callvirt` method instruction has been prefixed by `constrained.` _thisType_ the instruction is executed as follows.

If _thisType_ is a reference type (as opposed to a value type) then

 * _ptr_ is dereferenced and passed as the **this** pointer to the `callvirt` of method

If _thisType_ is a value type and _thisType_ implements _method_ then

 * _ptr_ is passed unmodified as the **this** pointer to a call of _method_ implemented by _thisType_

If _thisType_ is a value type and _thisType_ does not implement _method_ then

 * _ptr_ is dereferenced, boxed, and passed as the **this** pointer to the `callvirt` of method

This last case can only occur when _method_ was defined on `System.Object`, `System.ValueType`, or `System.Enum` and not overridden by _thisType_. In this last case, the boxing causes a copy of the original object to be made, however since all methods on `System.Object`, `System.ValueType`, and `System.Enum` do not modify the state of the object, this fact cannot be detected.

The need for the constrained prefix was motivated by the needs IL generators creating generic code. Normally the `callvirt` instruction is not valid on value types. Instead it is required that IL compilers effectively perform the **this** transformation outlined above at IL compile time, depending on the type of _ptr_ and the method being called. It is not possible to do this transformation at IL compile time, however, when _ptr_ is a generic type (which is unknown at IL compile time). This is why the `constrained.` prefix is needed. The `constrained.` opcode allows IL compilers to make a call to a virtual function in a uniform way independent of whether _ptr_ is a value type or reference type. While this was targeted for the case were _thisType_ is a generic type variable, `constrained.` works for non-generic types too, and can ease the complexity of generating virtual calls in languages that hide the distinction between value and reference types.

#### Exceptions:

None.

#### Correctness:

The constrained prefix will be immediately followed by a `callvirt` instruction. _thisType_ shall be a valid `typedef`, `typeref`, or `typespec` metadata token. 

#### Verifiability:

The _ptr_ argument will be a managed pointer (`&`)  to _thisType_.   In addition all the normal verification rules of the `callvirt` instruction apply after the _ptr_ transformation as described above. This is equivalent to requiring that a boxed _thisType_ must be a subclass of the class which method belongs to.

_[Rationale:_ The goal of this instruction was to achieve uniformity of calling virtual functions, so such calls could be made verifiably in generic routines. One way of achieving this uniformity was to always box the ‘this’ pointer before making a callvirt. This works for both reference type (where box is a no-op), and value types. The problem with this approach is that a copy is made in the value type case. Thus if the method being called modifies the state of the value type, this will not be reflected after the call completes since this modification was made in the boxed copy. This semantic difference (as well as the performance cost of the extra boxing), makes this alternative unacceptable. _end rationale]_
