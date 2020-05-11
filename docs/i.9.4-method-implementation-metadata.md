## I.9.4 Method implementation metadata

For each method for which an implementation is supplied in the current CLI module, the tool or compiler will emit information used by the CIL-to-native code compilers, the CLI loader, and other infrastructure services. This information includes:

 * Whether the code is managed or unmanaged.

 * Whether the implementation is in native code or CIL (note that all CIL code is managed).

 * The location of the method body in the current module, as an address relative to the start of the module file in which it is located (a **Relative Virtual Address**, or **RVA**). Or, alternatively, the RVA is encoded as 0 and other metadata is used to tell the infrastructure where the method implementation will be found, including:

    * A method implementation to be located by implementation-specific means described outside this Standard.

    * Forwarding calls through an imported global static method.
