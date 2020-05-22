## II.15.4.1 Method body

The method body shall contain the instructions of a program. However, it can also contain labels, additional syntactic forms and many directives that provide additional information to *ilasm* and are helpful in the compilation of methods of some languages.

 | _MethodBodyItem_ ::= | Description | Clause
 | ---- | ---- | ----
 | `.custom` _CustomDecl_ | Definition of custom attributes. | §[II.21](ii.21-custom-attributes.md)
 | \| `.data` _DataDecl_ | Emits data to the data section | §[II.16.3](ii.16.3-embedding-data-in-a-pe-file.md)
 | \| `.emitbyte` _Int32_ | Emits an unsigned byte to the code section of the method. | §[II.15.4.1.1](ii.15.4.1.1-the-emitbyte-directive.md)
 | \| `.entrypoint` | Specifies that this method is the entry point to the application (only one such method is allowed). | §[II.15.4.1.2](ii.15.4.1.2-the-entrypoint-directive.md)
 | \| `.locals` [ `init` ] `'('` _LocalsSignature_ `')'` | Defines a set of local variables for this method. | §[II.15.4.1.3](ii.15.4.1.3-the-locals-directive.md)
 | \| `.maxstack` _Int32_ | The `int32` specifies the maximum number of elements on the evaluation stack during the execution of the method. | §[II.15.4.1](ii.15.4.1-method-body.md)
 | \| `.override` _TypeSpec_ `'::'` _MethodName_ | Use current method as the implementation for the method specified. | §[II.10.3.2](#todo-missing-hyperlink)
 | \| `.override method` _CallConv_ _Type_ _TypeSpec_ `'::'` _MethodName_ _GenArity_ `'('` _Parameters_ `')'` | Use current method as the implementation for the method specified. | §[II.10.3.2](#todo-missing-hyperlink)
 | \| `.param` ``['` _Int32_ `']'` [ `'='` _FieldInit_ ] | Store a constant _FieldInit_ value for parameter _Int32_ | §[II.15.4.1.4](ii.15.4.1.4-the-param-directive.md)
 | \| `.param type` `'['` _Int32_ `']'` | Specifies a type parameter for a generic method | §[II.15.4.1.5](ii.15.4.1.5-the-param-type_directive.md)
 | \| _ExternSourceDecl_ | `.line` or `#line` | §[II.5.7](ii.5.7-source-line-information.md)
 | \| _Instr_ | An instruction | [Partition VI](#todo-missing-hyperlink)
 | \| _Id_ `':'` | A label | §[II.5.4](ii.5.4-labels-and-lists-of-labels.md)
 | \| _ScopeBlock_ | Lexical scope of local variables | §[II.15.4.4](ii.15.4.4-scope-blocks.md)
 | \| _SecurityDecl_ | `.permission` or `.permissionset` | §[II.20](ii.20-declarative-security.md)
 | \| _SEHBlock_ | An exception block | §[II.19](ii.19-exception-handling.md)
