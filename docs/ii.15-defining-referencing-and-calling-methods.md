## II.15 Defining, referencing, and calling methods

Methods can be defined at the global level (outside of any type):

 | _Decl_ ::= &hellip;
 | ----
 | \| `.method` _MethodHeader_ `'{'` _MethodBodyItem_* `'}'`

as well as inside a type:

 | _ClassMember_ ::= &hellip;
 | ----
 | \| `.method` _MethodHeader_ `'{'` _MethodBodyItem_* `'}'`
