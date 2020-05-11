## II.25.4.6 Exception handling clauses

Exception handling clauses also come in small and fat versions.

The small form of the exception clause should be used whenever the code sizes for the try block and the handler code are both smaller than 256 bytes and both their offsets are smaller than 65536. The format for a small exception clause is as follows:

 Offset | Size | Field | Description
 ---- | ---- | ---- | ----
 0 | 2 | **Flags** | Flags, see below.
 2 | 2 | **TryOffset** | Offset in bytes of try block from start of method body.
 4 | 1 | **TryLength** | Length in bytes of the try block
 5 | 2 | **HandlerOffset** | Location of the handler for this try block
 7 | 1 | **HandlerLength** | Size of the handler code in bytes
 8 | 4 | **ClassToken** | Meta data token for a type-based exception handler
 8 | 4 | **FilterOffset** | Offset in method body for filter-based exception handler

The layout of the fat form of exception handling clauses is as follows:

 Offset | Size | Field | Description
 ---- | ---- | ---- | ----
 0 | 4 | **Flags** | Flags, see below.
 4 | 4 | **TryOffset** | Offset in bytes of try block from start of method body.
 8 | 4 | **TryLength** | Length in bytes of the try block
 12 | 4 | **HandlerOffset** | Location of the handler for this try block
 16 | 4 | **HandlerLength** | Size of the handler code in bytes
 20 | 4 | **ClassToken** | Meta data token for a type-based exception handler
 20 | 4 | **FilterOffset** | Offset in method body for filter-based exception handler

The following flag values are used for each exception-handling clause:

 Flag | Value | Description
 ---- | ---- | ----
 `COR_ILEXCEPTION_CLAUSE_EXCEPTION` | 0x0000 | A typed exception clause
 `COR_ILEXCEPTION_CLAUSE_FILTER` | 0x0001 | An exception filter and handler clause
 `COR_ILEXCEPTION_CLAUSE_FINALLY` | 0x0002 | A finally clause
 `COR_ILEXCEPTION_CLAUSE_FAULT` | 0x0004 | Fault clause (finally that is called on exception only)
