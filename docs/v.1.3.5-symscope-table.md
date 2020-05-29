## V.1.3.5 SymScope table

Each row of a _SymScope_ table describes a scope, as follows:

 | Offset | Size | Field | Description
 | ---- | ---- | ---- | ----
 | 0 | 4 | **Parent** | Index of parent _SymScope_ row, or -1 if scope has no parent.
 | 4 | 4 | **StartOffset** | CIL offset of the first byte in the scope.
 | 8 | 4 | **EndOffset** | CIL offset of the last byte in the scope.
 | 12 | 4 | **HasChildren** | 1 if scope has child scopes; 0 otherwise
 | 16 | 4 | **HasVars** | 1 if scope has variables; 0 otherwise

The scopes belonging to a method must form a tree, with the following constraints:

 * A parent scope must precede its child scopes.

 * The **StartOffset** and **EndOffset** of a child scope must be within the (inclusive) range of offsets specified by its parent's scope.
