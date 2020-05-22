## II.15.5.1 Method transition thunks

_[Note:_ As this mechanism is not part of the Kernel Profile, it might not be present in all conforming implementations of the CLI. See [Partition IV](#todo-missing-hyperlink). _end note]_

In order to call managed code from unmanaged code, some platforms require a specific transition sequence to be performed. In addition, some platforms require that the representation of data types be converted (data marshaling). Both of these problems are solved by the **.vtfixup** directive. This directive can appear several times, but only at the top level of a CIL assembly file, as shown by the following grammar:

 | _Decl_ ::= | Clause
 | ---- | ----
 | `.vtfixup` _VTFixupDecl_
 | \| &hellip; | §II.5.10

The **.vtfixup** directive declares that at a certain memory location there is a table that contains metadata tokens referring to methods that shall be converted into method pointers. The CLI will do this conversion automatically when the file containing the **.vtfixup** directive is loaded into memory for execution. The declaration specifies the number of entries in the table, the kind of method pointer that is required, the width of an entry in the table, and the location of the table:

 | _VTFixupDecl_ ::=
 | ----
 | [ _Int32_ ] _VTFixupAttr_* `at` _DataLabel_

 | _VTFixupAttr_ ::=
 | ----
 | `fromunmanaged`
 | \| `int32`
 | \| `int64`

The attributes **int32** and **int64** are mutually exclusive, with **int32** being the default. These attributes specify the width of each slot in the table. Each slot contains a 32-bit metadata token (zero-padded if the table has 64-bit slots), and the CLI converts it into a method pointer of the same width as the slot.

If **fromunmanaged** is specified, the CLI will generate a thunk that will convert the unmanaged method call to a managed call, call the method, and return the result to the unmanaged environment. The thunk will also perform data marshalling in the platform-specific manner described for platform invoke.

The ILAsm syntax does not specify a mechanism for creating the table of tokens, but a compiler can simply emit the tokens as byte literals into a block specified using the **.data** directive.
