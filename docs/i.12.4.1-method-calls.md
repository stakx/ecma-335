## I.12.4.1 Method calls

Instructions emitted by the CIL code generator contain sufficient information for different implementations of the CLI to use different native calling conventions. All method calls initialize the method state areas (see §[I.12.3.2](#todo-missing-hyperlink)) as follows:

 1. The incoming arguments array is set by the caller to the desired values.

 2. The local variables array always has **null** for object types and for fields within value types that hold objects.  In addition, if the **localsinit** flag is set in the method header, then the local variables array is initialized to 0 for all integer types and to 0.0 for all floating-point types. Value types are not initialized by the CLI, but verified code will supply a call to an initializer as part of the method’s entry point code.

 3. The evaluation stack is empty.
