## V.1.3.4 SymSequencePoint table

Each row of a _SymSequencePoint_ table describes a sequence point, as follows:

 | Offset | Size | Field | Description
 | ---- | ---- | ---- | ----
 | 0 | 4 | **Offset** | CIL offset of the sequence point.
 | 4 | 4 | **StartLine** | Starting line of the source document.
 | 8 | 4 | **StartColumn** | Starting column, or 0 if not specified.
 | 12 | 4 | **EndLine** | Ending line of the source document, or 0 if not specified.
 | 16 | 4 | **EndColumn** | Ending column, or 0 if not specified.
 | 20 | 4 | **Doc** | Index of the source document in the _SymString_ heap.

Together, **EndLine** and **EndColumn** specify the column "one past" the last byte position associated with the sequence point. In other words, they specify the end of a half-open interval [start,end).

Rows of the _SymSequencePoint_ belonging to the same Method must be contiguous and sorted in ascending order of **Offset**.
