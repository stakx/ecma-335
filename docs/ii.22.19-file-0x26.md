## II.22.19 File: 0x26

The _File_ table has the following columns:

 * _Flags_ (a 4-byte bitmask of type _FileAttributes_, §[II.23.1.6](#todo-missing-hyperlink))

 * _Name_ (an index into the String heap)

 * _HashValue_ (an index into the Blob heap)

The rows of the _File_ table result from **.file** directives in an Assembly (§[II.6.2.3](#todo-missing-hyperlink))

> _This contains informative text only._

 1. _Flags_ shall have only those values set that are specified (all combinations valid) \[ERROR\]

 2. _Name_ shall index a non-empty string in the String heap. It shall be in the format `<filename>.<extension>` (e.g., "`foo.dll`", but *not* "`c:\utils\foo.dll`") \[ERROR\]

 3. _HashValue_ shall index a non-empty 'blob' in the Blob heap \[ERROR\]

 4. There shall be no duplicate rows; that is, rows with the same _Name_ value \[ERROR\]

 5. If this module contains a row in the _Assembly_ table (that is, if this module "holds the manifest") then there shall not be any row in the _File_ table for this module; i.e., no self-reference \[ERROR\]

 6. If the _File_ table is empty, then this, by definition, is a single-file assembly. In this case, the _ExportedType_ table should be empty \[WARNING\]

> _End informative text._
