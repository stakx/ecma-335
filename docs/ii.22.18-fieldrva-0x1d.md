## II.22.18 FieldRVA: 0x1D

The _FieldRVA_ table has the following columns:

 * _RVA_ (a 4-byte constant)

 * _Field_ (an index into _Field_ table)

Conceptually, each row in the _FieldRVA_ table is an extension to exactly one row in the _Field_ table, and records the RVA (Relative Virtual Address) within the image file at which this field's initial value is stored.

A row in the _FieldRVA_ table is created for each static parent field that has specified the optional **data** label §[II.16](ii.16-defining-and-referencing-fields.md)). The RVA column is the relative virtual address of the data in the PE file (§[II.16.3](ii.16.3-embedding-data-in-a-pe-file.md)). 

> _This contains informative text only._

 1. _RVA_ shall be non-zero \[ERROR\]

 2. _RVA_ shall point into the current module's data area (not its metadata area) \[ERROR\]

 3. _Field_ shall index a valid row in the _Field_ table \[ERROR\]

 4. Any field with an RVA shall be a ValueType (not a Class or an Interface). Moreover, it shall not have any private fields (and likewise for any of its fields that are themselves ValueTypes). (If any of these conditions were breached, code could overlay that global static and access its private fields.) Moreover, no fields of that ValueType can be Object References (into the GC heap)  \[ERROR\]

 5. So long as two RVA-based fields comply with the previous conditions, the ranges of memory spanned by the two ValueTypes can overlap, with no further constraints. This is not actually an additional rule; it simply clarifies the position with regard to overlapped RVA-based fields

> _End informative text._
