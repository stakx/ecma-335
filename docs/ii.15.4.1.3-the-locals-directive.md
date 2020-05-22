## II.15.4.1.3 The .locals directive

The **.locals** statement declares one or more local variables (see [Partition I](#todo-missing-hyperlink)) for the current method.

 | _MethodBodyItem_ ::= &hellip;
 | ----
 | \| `.locals` [ `init` ] `'('` _LocalsSignature_ `')'`

 | _LocalsSignature_ ::=
 | ----
 | _Local_ [ `','` _Local_ ]*

 | _Local_ ::=
 | ----
 | _Type_ [ _Id_ ]

If present, the _Id_ is the name of the corresponding local variable. If **init** is specified, the variables are initialized to their default values according to their type: reference types are initialized to null and value types are zeroed out.  

_[Note:_ Verifiable methods shall include the **init** keyword. See [Partition III](#todo-missing-hyperlink). _end note]_

_[Example:_ The following declares 4 local variables, each of which is to be initialized to its default value:

 ```ilasm
 .locals init ( int32 i, int32 j, float32 f, int64[] vect)
 ```

_end example]_
