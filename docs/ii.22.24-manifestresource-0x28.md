## II.22.24 ManifestResource: 0x28

The _ManifestResource_ table has the following columns:

 * _Offset_ (a 4-byte constant)

 * _Flags_ (a 4-byte bitmask of type _ManifestResourceAttributes_, §[II.23.1.9](ii.23.1.9-flags-for-manifestresource-manifestresourceattributes.md))

 * _Name_ (an index into the String heap)

 * _Implementation_ (an index into a _File_ table, a _AssemblyRef_ table, or  null; more precisely, an _Implementation_ (§[II.24.2.6](ii.24.2.6-metadata-stream.md)) coded index)

The _Offset_ specifies the byte offset within the referenced file at which this resource record begins. The _Implementation_ specifies which file holds this resource.

The rows in the table result from **.mresource** directives on the Assembly (§[II.6.2.2](#todo-missing-hyperlink)).

> _This contains informative text only._

 1. The _ManifestResource_ table can contain zero or more rows

 2. _Offset_ shall be a valid offset into the target file, starting from the Resource entry in the CLI header \[ERROR\]

 3. _Flags_ shall have only those values set that are specified \[ERROR\]

 4. The `VisibilityMask` (§[II.23.1.9](ii.23.1.9-flags-for-manifestresource-manifestresourceattributes.md)) subfield of _Flags_ shall be one of `Public` or `Private` \[ERROR\]

 5. _Name_ shall index a non-empty string in the String heap \[ERROR\]

 6. _Implementation_ can be null or non-null (if null, it means the resource is stored in the current file)

 7. If _Implementation_ is null, then _Offset_ shall be a valid offset in the current file, starting from the Resource entry in the CLI header \[ERROR\]

 8. If _Implementation_ is non-null, then it shall index a valid row in the _File_ or _AssemblyRef_ table \[ERROR\]

 9. There shall be no duplicate rows, based upon _Name_ \[ERROR\]

 10. If the resource is an index into the _File_ table, _Offset_ shall be zero  \[ERROR\]

> _End informative text._
