## II.6.5 Referencing modules

When an item is in the current assembly, but is part of a module other than the one containing the manifest, the defining module shall be declared in the manifest of the assembly using the **.module extern** directive. The name used in the **.module extern** directive of the referencing assembly shall exactly match the name used in the **.module** directive (§[II.6.4](ii.6.4-declaring-modules.md)) of the defining module. See §[II.22.31](ii.22.31-moduleref-0x1a.md).

 | _Decl_ ::= | Clause
 | ---- | ----
 | \| `.module extern` _Filename_
 | \| &hellip; | §[II.5.10](#todo-missing-hyperlink)

_[Example:_

 ```ilasm
 .module extern Counter.dll
 ```

_end example]_
