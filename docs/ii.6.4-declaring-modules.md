## II.6.4 Declaring modules

All CIL files are modules and are referenced by a logical name carried in the metadata rather than by their file name. See §[II.22.30](ii.22.30-module_0x00.md). 

 | _Decl_ ::= | Clause
 | ---- | ----
 | \| `.module` _Filename_ | &nbsp;
 | \| &hellip; | §[II.5.10](#todo-missing-hyperlink)

_[Example:_

 ```ilasm
 .module CountDown.exe
 ```

_end example]_
