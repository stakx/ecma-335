## II.6.7 Exported type definitions

The manifest module, of which there can only be one per assembly, includes the **.assembly** directive. To export a type defined in any other module of an assembly requires an entry in the assembly's manifest. The following grammar is used to construct such an entry in the manifest:

 | _Decl_ ::= | Clause
 | ---- | ----
 | `.class extern` _ExportAttr_ _DottedName_ `'{'` _ExternClassDecl_* `'}'`
 | \| &hellip;

 | _ExternClassDecl_ ::= | Clause
 | ---- | ----
 | `.file` _DottedName_

 | _ExternClassDecl_ ::= | Clause
 | ---- | ----
 | \| `.class extern` _DottedName_
 | \| `.custom` _CustomDecl_ | §[II.21](#todo-missing-hyperlink)
 
The _ExportAttr_ value shall be either **public** or **nested public** and shall match the visibility of the type.

For example, suppose an assembly consists of two modules, `A.EXE` and `B.DLL`. `A.EXE` contains the manifest. A public class `Foo` is defined in `B.DLL`. In order to export it&mdash;that is, to make it visible by, and usable from, other assemblies&mdash;a **.class extern** directive shall be included in `A.EXE`. Conversely, a public class `Bar` defined in `A.EXE` does not need any **.class extern** directive.

_[Rationale:_ Tools should be able to retrieve a single module, the manifest module, to determine the complete set of types defined by the assembly. Therefore, information from other modules within the assembly is replicated in the manifest module. By convention, the manifest module is also known as the assembly. _end rationale]_
