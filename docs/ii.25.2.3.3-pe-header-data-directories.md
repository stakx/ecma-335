## II.25.2.3.3 PE header data directories

The optional header data directories give the address and size of several tables that appear in the sections of the PE file. Each data directory entry contains the RVA and Size of the structure it describes, in that order. 

 Offset | Size | Field | Description
 ---- | ---- | ---- | ----
 96 | 8 | Export Table | Always 0 (§[II.24.1](ii.24.1-fixed-fields.md)).
 104 | 8 | Import Table | RVA and Size of Import Table, (§[II.25.3.1](ii.25.3.1-import-table-and-import-address-table-iat.md)).
 112 | 8 | Resource Table | Always 0 (§[II.24.1](ii.24.1-fixed-fields.md)).
 120 | 8 | Exception Table | Always 0 (§[II.24.1](ii.24.1-fixed-fields.md)).
 128 | 8 | Certificate Table | Always 0 (§[II.24.1](ii.24.1-fixed-fields.md)).
 136 | 8 | Base Relocation Table | Relocation Table; set to 0 if unused (§).
 144 | 8 | Debug | Always 0 (§[II.24.1](ii.24.1-fixed-fields.md)).
 152 | 8 | Copyright | Always 0 (§[II.24.1](ii.24.1-fixed-fields.md)).
 160 | 8 | Global Ptr | Always 0 (§[II.24.1](ii.24.1-fixed-fields.md)).
 168 | 8 | TLS Table | Always 0 (§[II.24.1](ii.24.1-fixed-fields.md)).
 176 | 8 | Load Config Table | Always 0 (§[II.24.1](ii.24.1-fixed-fields.md)).
 184 | 8 | Bound Import | Always 0 (§[II.24.1](ii.24.1-fixed-fields.md)).
 192 | 8 | IAT | RVA and Size of Import Address Table, (§[II.25.3.1](ii.25.3.1-import-table-and-import-address-table-iat.md)).
 200 | 8 | Delay Import Descriptor | Always 0 (§[II.24.1](ii.24.1-fixed-fields.md)).
 208 | 8 | CLI Header | CLI Header with directories for runtime data, (§[II.25.3.1](ii.25.3.1-import-table-and-import-address-table-iat.md)).
 216 | 8 | Reserved | Always 0 (§[II.24.1](ii.24.1-fixed-fields.md)). 

The tables pointed to by the directory entries are stored in one of the PE file's sections; these sections themselves are described by section headers.
