## II.24.2.6 #~ stream

The "`#~`" streams contain the actual physical representations of the logical metadata tables (§[II.22](ii.22-metadata-logical-format-tables.md)). A "`#~`" stream has the following top-level structure:

 Offset | Size | Field | Description
 ---- | ---- | ---- | ----
 0 | 4 | **Reserved** | Reserved, always 0 (§[II.24.1](ii.24.1-fixed-fields.md)).
 4 | 1 | **MajorVersion** | Major version of table schemata; shall be 2 (§[II.24.1](ii.24.1-fixed-fields.md)).
 5 | 1 | **MinorVersion** | Minor version of table schemata; shall be 0 (§[II.24.1](ii.24.1-fixed-fields.md)).
 6 | 1 | **HeapSizes** | Bit vector for heap sizes.
 7 | 1 | **Reserved** | Reserved, always 1 (§[II.24.1](ii.24.1-fixed-fields.md)).
 8 | 8 | **Valid** | Bit vector of present tables, let *n* be the number of bits that are 1.
 16 | 8 | **Sorted** | Bit vector of sorted tables.
 24 | 4\**n* | **Rows** | Array of *n* 4-byte unsigned integers indicating the number of rows for each present table.
 24+4\**n* | &nbsp; | **Tables** | The sequence of physical tables.

The _HeapSizes_ field is a bitvector that encodes the width of indexes into the various heaps.  If bit 0 is set, indexes into the "`#Strings`" heap are 4 bytes wide; if bit 1 is set, indexes into the "`#GUID`" heap are 4 bytes wide; if bit 2 is set, indexes into the "`#Blob`" heap are 4 bytes wide. Conversely, if the _HeapSizes_ bit for a particular heap is not set, indexes into that heap are 2 bytes wide.

 Heap size flag | Description
 ---- | ----
 0x01 | Size of "`#Strings`" stream &ge; 2<sup>16</sup>.
 0x02 | Size of "`#GUID`" stream &ge; 2<sup>16</sup>.
 0x04 | Size of "`#Blob`" stream &ge; 2<sup>16</sup>.

The _Valid_ field is a 64-bit bitvector that has a specific bit set for each table that is stored in the stream; the mapping of tables to indexes is given at the start of §[II.22](ii.22-metadata-logical-format-tables.md). For example when the _DeclSecurity_ table is present in the logical metadata, bit 0x0e should be set in the Valid vector. It is invalid to include non-existent tables in _Valid_, so all bits above 0x2c shall be zero.

The _Rows_ array contains the number of rows for each of the tables that are present. When decoding physical metadata to logical metadata, the number of 1's in _Valid_ indicates the number of elements in the _Rows_ array.

A crucial aspect in the encoding of a logical table is its schema. The schema for each table is given in §[II.22](ii.22-metadata-logical-format-tables.md). For example, the table with assigned index 0x02 is a _TypeDef_ table, which, according to its specification in §[II.22.37](ii.22.37-typedef-0x02.md), has the following columns: a 4-byte-wide flags, an index into the String heap, another index into the String heap, an index into _TypeDef_, _TypeRef_, or _TypeSpec_ table, an index into _Field_ table, and an index into _MethodDef_ table.

The physical representation of a table with *n* columns and *m* rows with schema (*C*<sub>0</sub>,&hellip;,*C*<sub>*n*-1</sub>) consists of the concatenation of the physical representation of each of its rows. The physical representation of a row with schema (*C*<sub>0</sub>,&hellip;,*C*<sub>n-1</sub>) is the concatenation of the physical representation of each of its elements. The physical representation of a row cell *e* at a column with type *C* is defined as follows:

 * If *e* is a constant, it is stored using the number of bytes as specified for its column type *C* (i.e., a 2-bit mask of type _PropertyAttributes_)

 * If *e* is an index into the GUID heap, 'blob', or String heap, it is stored using the number of bytes as defined in the *HeapSizes* field.

 * If *e* is a simple index into a table with index *i*, it is stored using 2 bytes if table *i* has less than 216 rows, otherwise it is stored using 4 bytes.

 * If *e* is a coded index that points into table *t*<sub>*i*</sub> out of *n* possible tables *t*<sub>0</sub>,&hellip;*t*<sub>*n*-1</sub>, then it is stored as *e* << (log *n*) | tag{ *t*<sub>0</sub>,&hellip;*t*<sub>*n*-1</sub> }\[ *t*<sub>*i*</sub> \] using 2 bytes if the maximum number of rows of tables *t*<sub>0</sub>,&hellip;*t*<sub>*n*-1</sub>, is less than 2(16 – (log *n*)), and using 4 bytes otherwise. The family of finite maps tag{ *t*<sub>0</sub>,&hellip;*t*<sub>*n*-1</sub> } is defined below. Note that decoding a physical row requires the inverse of this mapping. [For example, the _Parent_ column of the _Constant_ table indexes a row in the _Field_, _Param_, or _Property_ tables. The actual table is encoded into the low 2 bits of the number, using the values: 0 => _Field_, 1 => _Param_, 2 => _Property_. The remaining bits hold the actual row number being indexed. For example, a value of 0x321, indexes row number 0xC8 in the _Param_ table.]

 TypeDefOrRef: 2 bits to encode tag | Tag
 ---- | ----
 `TypeDef` | 0
 `TypeRef` | 1
 `TypeSpec` |  2

 HasConstant: 2 bits to encode tag | Tag
 ---- | ----
 `Field` | 0
 `Param` | 1
 `Property` | 2

HasCustomAttribute: 5 bits to encode tag | Tag
---- | ----
`MethodDef` | 0
`Field` | 1
`TypeRef` | 2
`TypeDef` | 3
`Param` | 4
`InterfaceImpl` | 5
`MemberRef` | 6
`Module` | 7
`Permission` | 8
`Property` | 9
`Event` | 10
`StandAloneSig` | 11
`ModuleRef` | 12
`TypeSpec` | 13
`Assembly` | 14
`AssemblyRef` | 15
`File` | 16
`ExportedType` | 17
`ManifestResource` | 18
`GenericParam` | 19
`GenericParamConstraint` | 20
`MethodSpec` | 21

_[Note:_ _HasCustomAttributes_ only has values for tables that are "externally visible"; that is, that correspond to items in a user source program. For example, an attribute can be attached to a _TypeDef_ table and a _Field_ table, but not a _ClassLayout_ table. As a result, some table types are missing from the enum above. _end note]_

 HasFieldMarshall: 1 bit to encode tag | Tag
 ---- | ----
 `Field` | 0
 `Param` | 1

 HasDeclSecurity: 2 bits to encode tag | Tag
 ---- | ----
 `TypeDef` | 0
 `MethodDef` | 1
 `Assembly` | 2

 MemberRefParent: 3 bits to encode tag | Tag
 ---- | ----
 `TypeDef` | 0
 `TypeRef` | 1
 `ModuleRef` | 2
 `MethodDef` | 3
 `TypeSpec` | 4

 HasSemantics: 1 bit to encode tag | Tag
 ---- | ----
 `Event` | 0
 `Property` | 1

 MethodDefOrRef: 1 bit to encode tag | Tag
 ---- | ----
 `MethodDef` | 0
 `MemberRef` | 1

 MemberForwarded: 1 bit to encode tag | Tag
 ---- | ----
 `Field` | 0
 `MethodDef` | 1

 Implementation: 2 bits to encode tag | Tag
 ---- | ----
 `File` | 0
 `AssemblyRef` | 1
 `ExportedType` | 2

 CustomAttributeType: 3 bits to encode tag | Tag
 ---- | ----
 Not used | 0
 Not used | 1
 `MethodDef` | 2
 `MemberRef` | 3
 Not used | 4

 ResolutionScope: 2 bits to encode tag | Tag
 ---- | ----
 `Module` | 0
 `ModuleRef` | 1
 `AssemblyRef` | 2
 `TypeRef` | 3

 TypeOrMethodDef: 1 bit to encode tag | Tag
 ---- | ----
 `TypeDef` | 0
 `MethodDef` | 1
