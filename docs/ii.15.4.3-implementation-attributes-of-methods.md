## II.15.4.3 Implementation attributes of methods

 | _ImplAttr_ ::= | Description | Clause
 | ---- | ---- | ----
 | `cil` | The method contains standard CIL code. | §[II.15.4.3.1](ii.15.4.3.1-code-implementation-attributes.md)
 | \| `forwardref` | The body of this method is not specified with this declaration. | §[II.15.4.3.3](ii.15.4.3.3-implementation-information.md)
 | \| `internalcall` | Denotes the method body is provided by the CLI itself | §[II.15.4.3.3](ii.15.4.3.3-implementation-information.md)
 | \| `managed` | The method is a managed method. | §[II.15.4.3.2](ii.15.4.3.2-managed-or-unmanaged.md)
 | \| `native` | The method contains native code. | §[II.15.4.3.1](ii.15.4.3.1-code-implementation-attributes.md)
 | \| `noinlining` | The runtime shall not expand the method inline. | §[II.15.4.3.3](ii.15.4.3.3-implementation-information.md)
 | \| `nooptimization` | The runtime shall not optimize the method when generating native code. | §[II.15.4.3.3](ii.15.4.3.3-implementation-information.md)
 | \| `runtime` | The body of the method is not defined, but is produced by the runtime. | §[II.15.4.3.1](ii.15.4.3.1-code-implementation-attributes.md)
 | \| `synchronized` | The method shall be executed in a single threaded fashion. | §[II.15.4.3.3](ii.15.4.3.3-implementation-information.md)
 | \| `unmanaged` | Specifies that the method is unmanaged. | §[II.15.4.3.2](ii.15.4.3.2-managed-or-unmanaged.md)
