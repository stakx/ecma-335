## II.22.36 StandAloneSig: 0x11

Signatures are stored in the metadata Blob heap. In most cases, they are indexed by a column in some table&mdash;_Field_._Signature_, _Method_._Signature_, _MemberRef_._Signature_, etc. However, there are two cases that require a metadata token for a signature that is not indexed by any metadata table. The _StandAloneSig_ table fulfils this need. It has just one column, which points to a _Signature_ in the Blob heap.

The signature shall describe either:

 * **a method** &ndash; code generators create a row in the _StandAloneSig_ table for each occurrence of a `calli` CIL instruction. That row indexes the call-site signature for the function pointer operand of the `calli` instruction

 * **local variables** &ndash; code generators create one row in the _StandAloneSig_ table for each method, to describe all of its local variables.  The **.locals** directive (§[II.15.4.1](#todo-missing-hyperlink)) in ILAsm generates a row in the _StandAloneSig_ table.

The _StandAloneSig_ table has the following column:

 * _Signature_ (an index into the Blob heap)

_[Example:_

 ```ilasm
 // On encountering the calli instruction, ilasm generates a signature
 // in the blob heap (DEFAULT, ParamCount = 1, RetType = int32, Param1 = int32),
 // indexed by the StandAloneSig table:
 .assembly Test {}
 .method static int32 AddTen(int32)
 { ldarg.0
   ldc.i4  10
   add
   ret
 }
 .class Test
 { .method static void main()
   { .entrypoint
     ldc.i4.1
     ldftn int32 AddTen(int32)
     calli int32(int32)
     pop
     ret
   }
 }
 ```

_end example]_

> _This contains informative text only._

 1. The _StandAloneSig_ table can contain zero or more rows

 2. _Signature_ shall index a valid signature in the Blob heap \[ERROR\]

 3. The signature 'blob' indexed by _Signature_ shall be a valid `METHOD` or `LOCALS` signature \[ERROR\]

 4. Duplicate rows are allowed

> _End informative text._
