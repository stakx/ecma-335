## III.3.61 starg.\<length\> &ndash; store a value in an argument slot

 | Format | Assembly Format | Description
 | ---- | ---- | ----
 | FE 0B _\<unsigned int16\>_ | `starg` _num_ | Store value to the argument numbered _num_.
 | 10 _\<unsigned int8\>_ | `starg.s` _num_ | Store value to the argument numbered _num_, short form.

#### Stack Transition:

&hellip;, _value_ &rarr; &hellip;,

#### Description:

The `starg` _num_ instruction pops a value from the stack and places it in argument slot _num_ (see [Partition I](#todo-missing-hyperlink)). The type of the value shall match the type of the argument, as specified in the current method's signature. The `starg.s` instruction provides an efficient encoding for use with the first 256 arguments.

For procedures that take a variable argument list, the `starg` instructions can be used only for the initial fixed arguments, not those in the variable part of the signature. Storing into arguments that hold a value smaller than 4 bytes whose intermediate type is `int32` truncates the value as it moves from the stack to the argument. Floating-point values are rounded from their native size (type `F`) to the size associated with the argument. (See §[III.1.1.1](iii.1.1.1-numeric-data-types.md), _Numeric data types_.)

#### Exceptions:

None.

#### Correctness:

Correct CIL requires that _num_ is a valid argument slot. In addition to the stores allowed by Verified CIL, Correct CIL also allows a `native int` to be stored as a byref (`&`); in which case following the store the value will be tracked by garbage collection.

#### Verifiability:

Verification checks that the type of value is *verifier-assignable-to* (§[III.1.8.1.2.3](iii.1.8.1.2.3-verification-type-compatibility.md)) the type of the argument, as specified in the current method's signature.
