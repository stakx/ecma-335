## V.1.2 CILDB header

A CILDB file starts with a 72-byte header, whose layout is as follows:

 | Offset | Size | Field | Description
 | ---- | ---- | ---- | ----
 | 0 | 16 | **Signature** | Magic signature for CILDB "`_ildb_signature\0`"
 | 16 | 16 | **GUID** | Version GUID
 | 32 | 4 | **UserEntryPoint** | _MethodDef_ token of the entry point.
 | 36 | 4 | **CountOfMethods** | Number of rows in the _SymMethod_ table.
 | 40 | 4 | **CountOfScopes** | Number of rows in the _SymScopes_ table.
 | 44 | 4 | **CountOfVars** | Number of rows in the _SymVariable_ table.
 | 48 | 4 | **CountOfUsing** | Number of rows in the _SymUsing_ table.
 | 52 | 4 | **CountOfConstants** | Number of rows in the _SymConstant_ table.
 | 56 | 4 | **CountOfDocuments** | Number of rows in the _SymDocument_ table.
 | 60 | 4 | **CountOfSequencePoints** | Number of rows in the _SymSequencePoint_ table.
 | 64 | 4 | **CountOfMiscBytes** | Number of bytes in the _SymMisc_ heap.
 | 68 | 4 | **CountOfStringBytes** | Number of bytes in the _SymString_ heap.
