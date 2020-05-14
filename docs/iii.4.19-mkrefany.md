## III.4.19 mkrefany &ndash; push a typed reference on the stack

 | Format | Assembly Format | Description
 | ---- | ---- | ----
 | C6 _\<T\>_ | `mkrefany` _class_ | Push a typed reference to _ptr_ of type _class_ onto the stack.

#### Stack Transition:

&hellip;, _ptr_ &rarr; &hellip;, _typedRef_

#### Description:

The `mkrefany` instruction supports the passing of dynamically typed references. _ptr_ shall be a pointer (type `&`, or `native int`) that holds the address of a piece of data. _class_ is the class token (a `typeref`, `typedef` or `typespec`; see [Partition II](#todo-missing-hyperlink)) describing the type of _ptr_. `mkrefany` pushes a typed reference on the stack, that is an opaque descriptor of _ptr_ and _class_. This instruction enables the passing of dynamically typed references as arguments. The callee can use the `refanytype` and `refanyval` instructions to retrieve the type (_class_) and address (_ptr_) respectively of the parameter.

#### Exceptions:

`System.TypeLoadException` is thrown if _class_ cannot be found. This is typically detected when CIL is converted to native code rather than at runtime.

#### Correctness:

Correct CIL ensures that _class_ is a valid `typeref` or `typedef` or `typespec` token describing some type and that _ptr_ is a pointer to exactly that type.

#### Verifiability:

Verification additionally requires that _ptr_ be a managed pointer. Verification will fail if it cannot deduce that _ptr_ is a pointer to an instance of _class_.
