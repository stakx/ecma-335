### III.1.1.5.2 Managed pointers (type &)

Managed pointers (`&`) can point to a local variable, a method argument, a field of an object, a field of a value type, an element of an array, a static field, or the address where an element just past the end of an array would be stored (for pointer indexes into managed arrays). Managed pointers cannot be `null`. (They shall be reported to the garbage collector, even if they do not point to managed memory)

Managed pointers are specified by using `ELEMENT_TYPE_BYREF` in a signature for a return value, local variable or an argument or by using a byref type for a field or array element.

 * Managed pointers can be passed as arguments and stored in local variables.

 * If you pass a parameter by reference, the corresponding argument is a managed pointer.

 * Managed pointers cannot be stored in static variables, array elements, or fields of objects or value types.

 * Managed pointers are *not* interchangeable with object references.

 * A managed pointer cannot point to another managed pointer, but it can point to an object reference or a value type.

 * Managed pointers that do not point to managed memory can be converted (using `conv.u` or `conv.ovf`.u) into unmanaged pointers, but this is not verifiable.

 * Unverified code that erroneously converts a managed pointer into an unmanaged pointer can seriously compromise the integrity of the CLI. This conversion is safe if any of the following is known to be true:

     1. the managed pointer does not point into the garbage collector's memory area

     2. the memory referred to has been pinned for the entire time that the unmanaged pointer is in use

     3. a garbage collection cannot occur while the unmanaged pointer is in use

     4. the garbage collector for the given implementation of the CLI is known to not move the referenced memory
