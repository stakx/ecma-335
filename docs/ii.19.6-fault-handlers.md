## II.19.6 Fault handlers

A fault block is declared using the **fault** keyword. This specifies the handler code, with this grammar:

 | _SEHClause_ ::= &hellip;
 | ----
 | \| `fault` _HandlerBlock_

The last possible CIL instruction that can be executed in a **fault** handler shall be `endfault`.

_[Example:_

 ```ilasm
 .method public static void m() {
   startTry:
       …                        // protected instructions
       leave exitSEH            // shall use leave
   endTry:

   startFault:
       …                        // fault handler instructions
       endfault

   endFault:
       .try startTry to endTry  // fault handler startFault to endFault

   exitSEH:                     // back to normal
 }
 ```

_end example]_
