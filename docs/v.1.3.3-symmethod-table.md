## V.1.3.3 SymMethod table

Each row of a _SymMethod_ table has the following format:

 | Offset | Size | Field | Description
 | ---- | ---- | ---- | ----
 | 0 | 4 | **MethodToken** | A _MethodDef_ metadata token.
 | 4 | 8 | **Scopes** | [Start,Stop) range of _SymScope_ table.
 | 12 | 8 | **Vars** | [Start,Stop) range of _SymVariable_ table.
 | 20 | 8 | **Using** | [Start,Stop) range of _SymUsing_ table.
 | 28 | 8 | **Constant** | [Start,Stop) range of _SymConstant_ table.
 | 36 | 8 | **Documents** | [Start,Stop) range of _SymDocument_ table.
 | 44 | 8 | **SequencePoints** | [Start,Stop) range of _SymSequencePoint_ table.

Each [Start,Stop) range is represented as two 4-byte integers. The first integer is the index of the first related table row; the second integer is the index of one past the last related table row.

The rows of a _SymMethod_ table are sorted in ascending order of the **MethodToken** field. There is at most one row for each method.
