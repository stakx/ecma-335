## II.19.5 Finally blocks

A finally block is declared using the **finally** keyword. This specifies the handler code, with this grammar:

 | _SEHClause_ ::= &hellip;
 | ----
 | \| `finally` _HandlerBlock_
 
The last possible CIL instruction that can be executed in a **finally** handler shall be `endfinally`.

_[Example:_

 ```ilasm
 .try {
   …              // protected instructions
   leave exitTry  // shall use leave
 }
 finally {
   …              // finally handler
   endfinally
 }
 exitTry:         // back to normal
 ```

_end example]_
