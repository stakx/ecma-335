## II.19.3 Catch blocks

A catch block is declared using the **catch** keyword. This specifies the type of exception object the clause is designed to handle, and the handler code itself.

 | _SEHClause_ ::=
 | ----
 | `catch` _TypeReference_ _HandlerBlock_

_[Example:_

 ```ilasm
 .try {
   …                            // protected instructions
   leave exitSEH                // normal exit
 }
 catch [mscorlib]System.FormatException {
   …                            // handle the exception
   pop                          // pop the exception object
   leave exitSEH                // leave catch handler
 }
 exitSEH:                       // continue here
 ```

_end example]_
