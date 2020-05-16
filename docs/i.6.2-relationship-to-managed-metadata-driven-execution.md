## I.6.2 Relationship to managed metadata-driven execution

Metadata describes code by describing the types that the code defines and the types that it references externally. The compiler produces the metadata when the code is produced. Enough information is stored in the metadata to:

 * **Manage code execution** &ndash; not just load and execute, but also memory management and execution state inspection.

 * **Administer the code** &ndash; Installation, resolution, and other services.

 * **Reference types in the code** &ndash; Importing into other languages and tools as well as scripting and automation support. The CTS assumes that the execution environment is metadata-driven. Using metadata allows the CLI to support:

 * **Multiple execution models** &ndash; The metadata allows the execution environment to deal with a mixture of interpreted, JIT-compiled, native, and legacy code, and still present uniform services to tools like debuggers and profilers, consistent exception handling and unwinding, reliable code access security, and efficient memory management.

 * **Auto support for services** &ndash; Since the metadata is available at execution time, the execution environment and the base libraries can automatically supply support for reflection, automation, serialization, remote objects, and inter-operability with existing unmanaged native code with little or no effort on the part of the programmer.

 * **Better optimization** &ndash; Using metadata references instead of physical offsets, layouts, and sizes allows the CLI to optimize the physical layouts of members and dispatch tables. In addition, this allows the generated code to be optimized to match the particular CPU or environment.

 * **Reduced binding brittleness** &ndash; Using metadata references reduces version-to-version brittleness by replacing compile-time object layout with load-time layout and binding by name.

 * **Flexible deployment resolution** &ndash; Since we can have metadata for both the reference and the definition of a type, more robust and flexible deployment and resolution mechanisms are possible. Resolution means that by looking in the appropriate set of places it is possible to find the implementation that best satisfies these requirements for use in this context. There are five elements of information in the foregoing: requirements and context are made available via metadata; where to look, how to find an implementation, and how to decide the best match all come from application packaging and deployment.
