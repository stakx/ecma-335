## II.19.4 Filter blocks

A filter block is declared using the **filter** keyword.

 | _SEHClause_ ::= &hellip;
 | ----
 | \| `filter` _Label_ _HandlerBlock_
 | \| `filter` _Scope_ _HandlerBlock_

The filter code begins at the specified label and ends at the first instruction of the handler block. (Note that the CLI demands that the filter block shall immediately precede, within the CIL stream, its corresponding handler block.)

_[Example:_

 ```ilasm
 .method public static void m () {
   .try {
     …              // protected instructions
     leave exitSEH  // normal exit
   }
   filter {
     …              // decide whether to handle
     pop            // pop exception object
     ldc.i4.1       // EXCEPTION_EXECUTE_HANDLER
     endfilter      // return answer to CLI
   }
   {
     …              // handle the exception
     pop            // pop the exception object
     leave exitSEH  // leave filter handler
   }
 exitSEH:
   …
 }
 ```

_end example]_
