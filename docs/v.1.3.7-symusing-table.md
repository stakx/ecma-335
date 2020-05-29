## V.1.3.7 SymUsing table

Each row of the _SymUsing_ table describes importation of a namespace, as follows:

 | Offset | Size | Field | Description
 | ---- | ---- | ---- | ----
 | 0 | 4 | **Scope** | Index of the parent scope
 | 4 | 4 | **Namespace** | Index of the namespace in the _SymString_ heap
