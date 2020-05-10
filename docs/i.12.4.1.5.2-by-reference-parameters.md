## I.12.4.1.5.2 By-reference parameters

By-reference parameters (identified by the presence of a byref constraint) are the equivalent of C++ reference parameters or PASCAL `var` parameters: instead of passing as an argument the value of a variable, field, or array element, its address is passed instead; and any assignment to the corresponding parameter actually modifies the corresponding caller's variable, field, or array element. Much of this work is done by the higher-level language, which hides from the user the need to compute addresses to pass a value and the use of indirection to reference or update values.

Passing a value by reference requires that the value have a home (see §[I.12.1.6.1](#todo-missing-hyperlink)) and it is the address of this home that is passed. Constants, and intermediate values on the evaluation stack, cannot be passed as byref parameters because they have no home.

The CLI provides instructions to support byref parameters:

 * calculate addresses of home locations (see [Table I.8: Address and Type of Home Locations](#todo-missing-hyperlink))

 * load and store built-in data types through these address pointers (`ldind.*`, `stind.*`, `ldfld`, etc.)

 * copy value types (`ldobj` and `cpobj`).

Some addresses (e.g., local variables and arguments) have lifetimes tied to that method invocation. These shall not be referenced outside their lifetimes, and so they should not be stored in locations that last beyond their lifetime. The CIL does not (and cannot) enforce this restriction, so the CIL generator shall enforce this restriction or the resulting CIL will not work correctly. For code to be verifiable (see §[I.8.8](#todo-missing-hyperlink)) byref parameters shall only be passed to other methods or referenced via the appropriate `stind` or `ldind` instructions.
