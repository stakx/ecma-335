## II.22.32 NestedClass: 0x29

The _NestedClass_ table has the following columns:

 * _NestedClass_ (an index into the _TypeDef_ table)

 * _EnclosingClass_ (an index into the _TypeDef_ table)

_NestedClass_ is defined as lexically 'inside' the text of its enclosing Type.

> _This contains informative text only._

The _NestedClass_ table records which Type definitions are nested within which other Type definition. In a typical high-level language, the nested class is defined as lexically 'inside' the text of its enclosing Type

 1. The _NestedClass_ table can contain zero or more rows

 2. _NestedClass_ shall index a valid row in the _TypeDef_ table \[ERROR\]

 3. _EnclosingClass_ shall index a valid row in the _TypeDef_ table (note particularly, it is not allowed to index the _TypeRef_ table) \[ERROR\]

 4. There should be no duplicate rows (ie same values for _NestedClass_ and _EnclosingClass_) \[WARNING\]

 5. A given Type can only be nested by one encloser. So, there cannot be two rows with the same value for _NestedClass_, but different value for _EnclosingClass_ \[ERROR\]

 6. A given Type can 'own' several different nested Types, so it is perfectly valid to have two or more rows with the same value for _EnclosingClass_ but different values for _NestedClass_

> _End informative text._
