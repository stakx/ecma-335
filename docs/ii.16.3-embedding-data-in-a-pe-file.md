## II.16.3 Embedding data in a PE file

There are several ways to declare a data field that is stored in a PE file. In all cases, the **.data** directive is used.

Data can be embedded in a PE file by using the **.data** directive at the top-level.

 | _Decl_ ::= | Clause
 | ---- | ----
 | `.data` _DataDecl_
 | \| &hellip; | §[II.6.6](ii.6.6-declarations-inside-a-module-or-assembly.md)

Data can also be declared as part of a type:

 | _ClassMember_ ::= | Clause
 | ---- | ----
 | `.data` _DataDecl_
 | \| &hellip; | §[II.10.2](ii.10.2-body-of-a-type-definition.md)

Yet another alternative is to declare data inside a method:

 | _MethodBodyItem_ ::= | Clause
 | ---- | ----
 | `.data` _DataDecl_
 | \| &hellip; | §[II.15.4.1](ii.15.4.1-method-body.md)
