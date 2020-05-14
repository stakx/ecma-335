## II.6.2.2 Manifest resources

A *manifest resource* is simply a named item of data associated with an assembly. A manifest resource is introduced using the **.mresource** directive, which adds the manifest resource to the assembly manifest begun by a preceding **.assembly** declaration.

 | _Decl_ ::= | Clause
 | `.mresource` [ `public` | `private` ] _DottedName_ `'{'` _ManResDecl_* `'}'`
 | \| &hellip; | §[II.5.10](#todo-missing-hyperlink)

If the manifest resource is declared **public**, it is exported from the assembly. If it is declared **private**, it is not exported, in which case, it is only available from within the assembly. The _DottedName_ is the name of the resource.

 | _ManResDecl_ ::= | Description | Clause
 | ---- | ---- | ----
 | `.assembly extern` _DottedName_ | Manifest resource is in external assembly with name _DottedName_. | §[II.6.3](ii.6.3-referencing-assemblies.md)
 | \| `.custom` _CustomDecl_ | Custom attribute. | §[II.21](#todo-missing-hyperlink)
 | \| `.file` _DottedName_ `at` _Int32_ | Manifest resource is in file _DottedName_ at byte offset _Int32_.

For a resource stored in a file that is not a module (for example, an attached text file), the file shall be declared in the manifest using a separate (top-level) **.file** declaration (see §[II.6.2.3](ii.6.2.3-associating-files-with-an-assembly.md)) and the byte offset shall be zero. A resource that is defined in another assembly is referenced using **.assembly extern**, which requires that the assembly has been defined in a separate (top-level) **.assembly extern** directive (§[II.6.3](ii.6.3-referencing-assemblies.md)).
