## II.5.10 ilasm source files

An input to _ilasm_ is a sequence of top-level declarations, defined as follows:

 | _ILFile_ ::= | Reference
 | ---- | ----
 |  _Decl_* | §[II.5.10](ii.5.10-ilasm-source-files.md)

The complete grammar for a top-level declaration is shown below. The reference subclauses contain details of the corresponding productions of this grammar. These productions begin with a name having a `'.'` prefix. Such a name is referred to as a directive.

 | _Decl_ ::= | Reference
 | ---- | ----
 | `.assembly` _DottedName_ `'{'` _AsmDecl_* `'}'` | §[II.6.2](ii.6.2-defining-an-assembly.md)
 | \| `.assembly extern` _DottedName_ `'{'` _AsmRefDecl_* `'}'` | §[II.6.3](ii.6.3-referencing-assemblies.md)
 | \| `.class` _ClassHeader_ `'{'` _ClassMember_* `'}'` | §[II.10](#todo-missing-hyperlink)
 | \| `.class extern` _ExportAttr_ _DottedName_ `'{'` _ExternClassDecl_* `'}'` | §[II.6.7](ii.6.7-exported-type-definitions.md)
 | \| `.corflags` _Int32_ | §[II.6.2](ii.6.2-defining-an-assembly.md)
 | \| `.custom` _CustomDecl_ | §[II.21](#todo-missing-hyperlink)
 | \| `.data` _DataDecl_ | §[II.16.3.1](#todo-missing-hyperlink)
 | \| `.field` _FieldDecl_ | §[II.16](#todo-missing-hyperlink)
 | \| `.file` [ `nometadata` ] _Filename_ `.hash` `'='` `'('` _Bytes_ `')'` [ `.entrypoint` ] | §[II.6.2.3](ii.6.2.3-associating-files-with-an-assembly.md)
 | \| `.method` _MethodHeader_ `'{'` _MethodBodyItem_* `'}'` | §[II.15](#todo-missing-hyperlink)
 | \| `.module` [ _Filename_ ] | §[II.6.4](ii.6.4-declaring-modules.md)
 | \| `.module extern` _Filename_ | §[II.6.5](ii.6.5-referencing-modules.md)
 | \| `.mresource` [ `public`  \| `private` ] _DottedName_ `'{'` _ManResDecl_* `'}'` | §[II.6.2.2](ii.6.2.2-manifest-resources.md)
 | \| `.subsystem` _Int32_ | §[II.6.2](ii.6.2-defining-an-assembly.md)
 | \| `.vtfixup` _VTFixupDecl_ | §[II.15.5.1](#todo-missing-hyperlink)
 | \| _ExternSourceDecl_ | §[II.5.7](ii.5.7-source-line-information.md)
 | \| _SecurityDecl_ | §[II.20](#todo-missing-hyperlink)
