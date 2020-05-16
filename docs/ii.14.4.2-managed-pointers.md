## II.14.4.2 Managed pointers

Managed pointers (`&`) can point to an instance of a value type, a field of an object, a field of a value type, an element of an array, or the address where an element just past the end of an array would be stored (for pointer indexes into managed arrays). Managed pointers cannot be *null*, and they shall be reported to the garbage collector even if they do not point to managed memory.

Managed pointers are specified by using `&` in a signature for a return value, local variable or an argument, or by using a byref type for a field or array element.

 * Managed pointers can be passed as arguments, stored in local variables, and returned as values.

 * If a parameter is passed by reference, the corresponding argument is a managed pointer.

 * Managed pointers cannot be stored in static variables, array elements, or fields of objects or value types.

 * Managed pointers are not interchangeable with object references.

 * A managed pointer cannot point to another managed pointer, but it can point to an object reference or a value type.

 * A managed pointer can point to a local variable, or a method argument

 * Managed pointers that do not point to managed memory can be converted (using `conv.u` or `conv.ovf.u`) into unmanaged pointers, but this is not verifiable.

 * Unverified code that erroneously converts a managed pointer into an unmanaged pointer can seriously compromise the integrity of the CLI. See [Partition III](#todo-missing-hyperlink) (Managed Pointers) for more details.

> _End informative text._
