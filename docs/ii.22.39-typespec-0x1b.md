## II.22.39 TypeSpec: 0x1B

The _TypeSpec_ table has just one column, which indexes the specification of a Type, stored in the Blob heap. This provides a metadata token for that Type (rather than simply an index into the Blob heap). This is required, typically, for array operations, such as creating, or calling methods on the array class.

The _TypeSpec_ table has the following column:

 * _Signature_ (index into the Blob heap, where the blob is formatted as specified in §[II.23.2.14](#todo-missing-hyperlink))

Note that _TypeSpec_ tokens can be used with any of the CIL instructions that take a _TypeDef_ or _TypeRef_ token; specifically, `castclass`, `cpobj`, `initobj`, `isinst`, `ldelema`, `ldobj`, `mkrefany`, `newarr`, `refanyval`, `sizeof`, `stobj`, `box`, and `unbox`.

> _This contains informative text only._

 1. The _TypeSpec_ table can contain zero or more rows

 2. _Signature_ shall index a valid Type specification in the Blob heap \[ERROR\]

 3. There shall be no duplicate rows, based upon _Signature_ \[ERROR\]

> _End informative text._
