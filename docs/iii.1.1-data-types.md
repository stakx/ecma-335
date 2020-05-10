## III.1.1 Data types

While the CTS defines a rich type system and the CLS specifies a subset that can be used for language interoperability, the CLI itself deals with a much simpler set of types. These types include user-defined value types and a subset of the built-in types.  The subset, collectively called the "basic CLI types", contains the following types:

 * A subset of the full numeric types (`int32`, `int64`, `native int`, and `F`).

 * Object references (`O`) without distinction between the type of object referenced.

 * Pointer types (`native unsigned int` and `&`) without distinction as to the type pointed to.

Note that object references and pointer types can be assigned the value `null`. This is defined throughout the CLI to be zero (a bit pattern of all-bits-zero).

_[Note:_ As far as VES operations on the evaluation stack are concerned, there is only one floatingpoint type, and the VES does not care about its size. The VES makes the distinction about the size of numerical values only when storing these values to, or reading from, the heap, statics, local variables, or method arguments. _end note]_
