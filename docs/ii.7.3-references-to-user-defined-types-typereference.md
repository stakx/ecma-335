## II.7.3 References to user-defined types (TypeReference)

User-defined types are referenced either using their full name and a resolution scope or, if one is available in the same module, a type definition (§[II.10](#todo-missing-hyperlink)). A _TypeReference_ is used to capture the full name and resolution scope:

 | _TypeReference_ ::=
 | ----
 | [ _ResolutionScope_ ] _DottedName_ [ `'/'` _DottedName_ ]* 

 | _ResolutionScope_ ::=
 | ----
 | `'['` `.module` _Filename_ `']'` | `'['` _AssemblyRefName_ `']'`
 
 | _AssemblyRefName_ ::= | Clause
 | ---- | ----
 | _DottedName_ | §[II.5.1](ii.5.1-general-syntax-notation.md)
 
The following resolution scopes are specified for un-nested types:

 * **Current module (and, hence, assembly).** This is the most common case and is the default if no resolution scope is specified.  The type shall be resolved to a definition only if the definition occurs in the same module as the reference.

_[Note:_ A type reference that refers to a type in the same module and assembly is better represented using a type definition. Where this is not possible (e.g., when referencing a nested type that has compilercontrolled accessibility) or convenient (e.g., in some one-pass compilers) a type reference is equivalent and can be used. _end note]_

 * **Different module, current assembly.** The resolution scope shall be a module reference syntactically represented using the notation **[** **.module** _Filename_ **\]**. The type shall be resolved to a definition only if the referenced module (§[II.6.4](ii.6.4-declaring-modules.md)) and type (§[II.6.7](ii.6.7-exported-type-definitions.md)) have been declared by the current assembly and hence have entries in the assembly's manifest. Note that in this case the manifest is not physically stored with the referencing module.

 * **Different assembly.** The resolution scope shall be an assembly reference syntactically represented using the notation **[** _AssemblyRefName_ **]**. The referenced assembly shall be declared in the manifest for the current assembly (§[II.6.3](ii.6.3-referencing-assemblies.md)), the type shall be declared in the referenced assembly's manifest, and the type shall be marked as exported from that assembly (§[II.6.7](ii.6.7-exported-type-definitions.md) and §[II.10.1.1](#todo-missing-hyperlink)).

 * For nested types, the resolution scope is always the enclosing type. (See §[II.10.6](#todo-missing-hyperlink)). This is indicated syntactically by using a slash ("`/`") to separate the enclosing type name from the nested type's name.

_[Example:_ The type `System.Console` defined in the base class library (found in the assembly named `mscorlib`):

 ```ilasm
 .assembly extern mscorlib { }
 .class [mscorlib]System.Console 
 ```

A reference to the type named `C.D` in the module named `x` in the current assembly:

 ```ilasm
 .module extern x
 .class [.module x]C.D
 ```

A reference to the type named `C` nested inside of the type named `Foo.Bar` in another assembly, named `MyAssembly`:

 ```ilasm
 .assembly extern MyAssembly { }
 .class [MyAssembly]Foo.Bar/C
 ```

_end example]_
