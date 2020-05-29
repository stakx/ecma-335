## V.1.3.1 SymConstant table

Each row of the _SymConstant_ table describes a constant, as follows:

 | Offset | Size | Field | Description
 | ---- | ---- | ---- | ----
 | 0 | 4 | **Scope** | Index of parent scope
 | 4 | 4 | **Name** | Index of the name in the _SymString_ heap
 | 8 | 4 | **Signature** | Index of the signature in the _SymMisc_ heap
 | 12 | 4 | **SignatureSize** | Length of the signature
 | 16 | 4 | **Value** | Index of the value in the _SymMisc_ heap
 | 20 | 4 | **ValueSize** | Length of the value.

The value of the constant is encoded just like a Blob for the _Value_ column of a _Constant_ metadata table in [Partition II](#todo-missing-hyperlink), except that there is no length prefix.
