## II.15.4.1.1 The .emitbyte directive

 | _MethodBodyItem_ ::= &hellip;
 | \| `.emitbyte` _Int32_
 
This directive causes an unsigned 8-bit value to be emitted directly into the CIL stream of the method, at the point at which the directive appears.

_[Note:_ The **.emitbyte** directive is used for generating tests. It is not required in generating regular programs. _end note]_
