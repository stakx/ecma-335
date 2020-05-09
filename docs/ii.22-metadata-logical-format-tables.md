## II.22 Metadata logical format: tables

This clause defines the structures that describe metadata, and how they are cross-indexed. This corresponds to how metadata is laid out, after being read into memory from a PE file. (For a description of metadata layout inside the PE file itself, see §[II.24](#todo-missing-hyperlink))

Metadata is stored in two kinds of structure: tables (arrays of records) and heaps. There are four heaps in any module: String, Blob, Userstring, and Guid. The first three are byte arrays (so valid indexes into these heaps might be 0, 23, 25, 39, etc). The Guid heap is an array of GUIDs, each 16 bytes wide. Its first element is numbered 1, its second 2, and so on.

Each entry in each column of each table is either a constant or an index.

Constants are either literal values (e.g., ALG_SID_SHA1 = 4, stored in the *HashAlgId* column of the *Assembly* table), or, more commonly, bitmasks. Most bitmasks (they are almost all called *Flags*) are 2 bytes wide (e.g., the *Flags* column in the *Field* table), but there are a few that are 4 bytes (e.g., the *Flags* column in the *TypeDef* table).

Each index is either 2 or 4 bytes wide. The index points into the same or another table, or into one of the four heaps. The size of each index column in a table is only made 4 bytes if it needs to be for that particular module. So, if a particular column indexes a table, or tables, whose highest row number fits in a 2-byte value, the indexer column need only be 2 bytes wide. Conversely, for tables containing 64K or more rows, an indexer of that table will be 4 bytes wide.

Indexes to tables begin at 1, so index 1 means the first row in any given metadata table. (An index value of zero denotes that it does not index a row at all; that is, it behaves like a null reference.)

There are two kinds of columns that index a metadata table. (For details of the physical representation of these tables, see §[II.24.2.6](#todo-missing-hyperlink)):

 * Simple &mdash; such a column indexes one, and only one, table. For example, the *FieldList* column in the *TypeDef* table always indexes the *Field* table. So all values in that column are simple integers, giving the row number in the target table

 * Coded &mdash; such a column indexes any of several tables. For example, the *Extends* column in the *TypeDef* table can index into the *TypeDef* or *TypeRef* table. A few bits of that index value are reserved to define which table it targets. For the most part, this specification talks of index values after being decoded into row numbers within the target table. However, the specification includes a description of these coded indexes in the section that describes the physical layout of Metadata (§[II.24](#todo-missing-hyperlink)).

Metadata preserves name strings, as created by a compiler or code generator, unchanged. Essentially, it treats each string as an opaque blob. In particular, it preserves case. The CLI imposes no limit on the length of names stored in metadata and subsequently processed by the CLI.

Matching *AssemblyRef*s and *ModuleRef*s to their corresponding *Assembly* and *Module* shall be performed case-blind (see [Partition I](#todo-missing-hyperlink)). However, all other name matches (type, field, method, property, event) shall be exact&mdash;so that this level of resolution is the same across all platforms, whether their OS is case-sensitive or not.

Tables are given both a name (e.g., "Assembly") and a number (e.g., 0x20).  The number for each table is listed immediately with its title in the following subclauses. The table numbers indicate the order in which their corresponding table shall appear in the PE file, and there is a set of bits (§II.24.2.6) saying whether a given table exists or not. The number of a table is the position within that set of bits.

A few of the tables represent extensions to regular CLI files. Specifically, *ENCLog* and *ENCMap*, which occur in temporary images, generated during "Edit and Continue" or "incremental compilation" scenarios, whilst debugging.  Both table types are reserved for future use.

References to the methods or fields of a type are stored together in a metadata table called the *MemberRef* table.  However, sometimes, for clearer explanation, this standard distinguishes between these two kinds of reference, calling them "MethodRef" and "FieldRef".

Certain tables are required to be sorted by a primary key, as follows:

 Table | Primary Key Column
 ---- | ----
 *ClassLayout* | *Parent*
 *Constant* | *Parent*
 *CustomAttribute* | *Parent*
 *DeclSecurity* | *Parent*
 *FieldLayout* | *Field*
 *FieldMarshal* | *Parent*
 *FieldRVA* | *Field*
 *GenericParam* | *Owner*
 *GenericParamConstraint* | *Owner*
 *ImplMap* | *MemberForwarded*
 *InterfaceImpl* | *Class*
 *MethodImpl* | *Class*
 *MethodSemantics* | *Association*
 *NestedClass* | *NestedClass*

Furthermore, the *InterfaceImpl* table is sorted using the *Interface* column as a secondary key, and the *GenericParam* table is sorted using the *Number* column as a secondary key.

Finally, the *TypeDef* table has a special ordering constraint: the definition of an enclosing class shall precede the definition of all classes it encloses.

Metadata items (records in the metadata tables) are addressed by metadata tokens. Uncoded metadata tokens are 4-byte unsigned integers, which contain the metadata table index in the most significant byte and a 1-based record index in the three least-significant bytes. Metadata tables and their respective indexes are described in §[II.22.2](#todo-missing-hyperlink) and later subclauses.

Coded metadata tokens also contain table and record indexes, but in a different format. For details on the encoding, see §[II.24.2.6](#todo-missing-hyperlink).
