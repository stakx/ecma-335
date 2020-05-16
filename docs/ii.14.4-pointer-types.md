## II.14.4 Pointer types

 | _Type_ ::= | Clause
 | ---- | ----
 | &hellip; |
 | \| _Type_ `'&'` | [II.14.4.2](ii.14.4.2-managed-pointers.md)
 | \| _Type_ `'*'` | [II.14.4.1](ii.14.4.1-unmanaged-pointers.md)

A *pointer type* shall be defined by specifying a signature that includes the type of the location at which it points. A *pointer* can be *managed* (reported to the CLI garbage collector, denoted by `&`, see §[II.14.4.2](ii.14.4.2-managed-pointers.md)) or *unmanaged* (not reported, denoted by `*`, see §[II.14.4.1](ii.14.4.1-unmanaged-pointers.md))

*Pointers* can contain the address of a field (of an object or value type) or of an element of an array. *Pointers* differ from object references in that they do not point to an entire type instance, but, rather, to the interior of an instance. The CLI provides two type-safe operations on pointers:

 * Loading the value from the location referenced by the pointer.

 * Storing a value _V_ into the location referenced by a pointer _P_, where the type of _V_ is *assignable-to* (§[I.8.7.3](i.8.7.3-general-assignment-compatibility.md)) the type referenced by _P_.

For pointers into the same array or object (see [Partition I](#todo-missing-hyperlink)) the following arithmetic operations are supported:

 * Adding an integer value to a pointer (where that value is interpreted as a number of bytes), which results in a pointer of the same kind

 * Subtracting an integer value from a pointer (where that value is interpreted as a number of bytes), which results in a pointer of the same kind. Note that subtracting a pointer from an integer value is not permitted.

 * Two pointers, regardless of kind, can be subtracted from one another, producing an integer value that specifies the number of bytes between the addresses they reference.

> _The following is informative text._

Pointers are compatible with `unsigned int32` on 32-bit architectures, and with `unsigned int64` on 64-bit architectures. They are best considered as `unsigned int`, whose size varies depending upon the runtime machine architecture.

The CIL instruction set (see [Partition III](#todo-missing-hyperlink)) contains instructions to compute addresses of fields, local variables, arguments, and elements of vectors:

 | Instruction | Description
 | ---- | ----
 | `ldarga` | Load address of argument
 | `ldelema` | Load address of vector element
 | `ldflda` | Load address of field
 | `ldloca` | Load address of local variable
 | `ldsflda` | Load address of static field

Once a pointer is loaded onto the stack, the `ldind` class of instructions can be used to load the data item to which it points. Similarly, the `stind` family of instructions can be used to store data into the location.

Note that the CLI will throw an `InvalidOperationException` for an `ldflda` instruction if the address is not within the current application domain. This situation arises typically only from the use of objects with a base type of `System.MarshalByRefObject` (see [Partition IV](#todo-missing-hyperlink)).