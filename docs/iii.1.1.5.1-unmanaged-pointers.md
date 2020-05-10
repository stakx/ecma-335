## III.1.1.5.1 Unmanaged pointers

Unmanaged pointers are the traditional pointers used in languages like C and C++. There are no restrictions on their use, although for the most part they result in code that cannot be verified. While it is perfectly valid to mark locations that contain unmanaged pointers as though they were unsigned integers (and this is, in fact, how they are treated by the CLI), it is often better to mark them as unmanaged pointers to a specific type of data. This is done by using `ELEMENT_TYPE_PTR` in a signature for a return value, local variable or an argument or by using a pointer type for a field or array element.

Unmanaged pointers are not reported to the garbage collector and can be used in any way that an integer can be used.

 * Unmanaged pointers should be treated as unsigned (i.e., using `conv.ovf.u` rather than `conv.ovf.i`, etc.).

 * Verifiable code cannot use unmanaged pointers to reference memory.

 * Unverified code can pass an unmanaged pointer to a method that expects a managed pointer. This is safe only if one of the following is true:

     1. The unmanaged pointer refers to memory that is not in memory managed by the garbage collector.

     2. The unmanaged pointer refers to a field within an object.

     3. The unmanaged pointer refers to an element within an array.

     4. The unmanaged pointer refers to the location where the element following the last element in an array would be located.
