## I.12.4.1.5 Parameter passing

The CLI supports three kinds of parameter passing, all indicated in metadata as part of the signature of the method. Each parameter to a method has its own passing convention (e.g., the first parameter can be passed by-value while all others are passed byref). Parameters shall be passed in one of the following ways (see detailed descriptions below):

 * **By-value** &mdash; where the value of an object is passed from the caller to the callee.
 
 * **By-reference** &mdash; where the address of the data is passed from the caller to the callee, and the type of the parameter is therefore a managed or unmanaged pointer.

 * **Typed reference** &mdash; where a runtime representation of the data type is passed along with the address of the data, and the type of the parameter is therefore one specially supplied for this purpose. It is the responsibility of the CIL generator to follow these conventions. Verification checks that the types of parameters match the types of values passed, but is otherwise unaware of the details of the calling convention.
