## II.25.3.1 Import Table and Import Address Table (IAT)

The Import Table and the Import Address Table (IAT) are used to import the `_CorExeMain` (for a `.exe`) or `_CorDllMain` (for a `.dll`) entries of the runtime engine (`mscoree.dll`). The Import Table directory entry points to a one element zero terminated array of Import Directory entries (in a general PE file there is one entry for each imported DLL):

 Offset | Size | Field | Description
 ---- | ---- | ---- | ----
 0 | 4 | ImportLookupTable | RVA of the Import Lookup Table
 4 | 4 | DateTimeStamp | Always 0 (§[II.24.1](#todo-missing-hyperlink)).
 8 | 4 | ForwarderChain | Always 0 (§[II.24.1](#todo-missing-hyperlink)).
 12 | 4 | Name | RVA of null-terminated ASCII string "`mscoree.dll`".
 16 | 4 | ImportAddressTable | RVA of Import Address Table (this is the same as the RVA of the IAT descriptor in the optional header).
 20 | 20 | &nbsp; | End of Import Table. Shall be filled with zeros. 

The Import Lookup Table and the Import Address Table (IAT) are both one element, zero terminated arrays of RVAs into the Hint/Name table. Bit 31 of the RVA shall be set to 0. In a general PE file there is one entry in this table for every imported symbol.

 Offset | Size | Field | Description
 ---- | ---- | ---- | ----
 0 | 4 | Hint/Name Table RVA | A 31-bit RVA into the Hint/Name Table. Bit 31 shall be set to 0 indicating import by name.
 4 | 4 | &nbsp; | End of table, shall be filled with zeros.

The IAT should be in an executable and writable section as the loader will replace the pointers into the Hint/Name table by the actual entry points of the imported symbols.

The Hint/Name table contains the name of the dll-entry that is imported.

 Offset | Size | Field | Description
 ---- | ---- | ---- | ----
 0 | 2 | Hint | Shall be 0.
 2 | variable | Name | Case sensitive, null-terminated ASCII string containing name to import. Shall be "`_CorExeMain`" for a `.exe` file and "`_CorDllMain`" for a `.dll` file.
