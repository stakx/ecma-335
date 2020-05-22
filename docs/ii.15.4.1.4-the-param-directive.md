## II.15.4.1.4 The .param directive

 | _MethodBodyItem_ ::= &hellip;
 | ----
 | \| `.param` `'['` _Int32_ `']'` [ `'='` _FieldInit_ ]

This directive stores in the metadata a constant value associated with method parameter number _Int32_, see §[II.22.9](ii.22.9-constant-0x0b.md). While the CLI requires that a value be supplied for the parameter, some tools can use the presence of this attribute to indicate that the tool rather than the user is intended to supply the value of the parameter. Unlike CIL instructions, **.param** uses index 0 to specify the return value of the method, index 1 to specify the first parameter of the method, index 2 to specify the second parameter of the method, and so on.

_[Note:_ The CLI attaches no semantic whatsoever to these values&mdash;it is entirely up to compilers to implement any semantic they wish (e.g., so-called default argument values). _end note]_
