## II.22.14 ExportedType: 0x27

The _ExportedType_ table holds a row for each type:

 1. Defined within other modules of this Assembly; that is exported out of this Assembly. In essence, it stores _TypeDef_ row numbers of all types that are marked public in other modules that this Assembly comprises.
 
    The actual target row in a _TypeDef_ table is given by the combination of _TypeDefId_ (in effect, row number) and _Implementation_ (in effect, the module that holds the target _TypeDef_ table).  Note that this is the only occurrence in metadata of *foreign* tokens; that is, token values that have a meaning in another module. (A regular token value is an index into a table in the *current* module); OR

 2. Originally defined in this Assembly but now moved to another Assembly. _Flags_ must have **IsTypeForwarder** set and _Implementation_ is an _AssemblyRef_ indicating the Assembly the type may now be found in.

The full name of the type need not be stored directly.  Instead, it can be split into two parts at any included "." (although typically this is done at the last "." in the full name). The part preceding the "." is stored as the _TypeNamespace_ and that following the "." is stored as the _TypeName_. If there is no "." in the full name, then the _TypeNamespace_ shall be the index of the empty string.

The _ExportedType_ table has the following columns:

 * _Flags_ (a 4-byte bitmask of type _TypeAttributes_, §[II.23.1.15](#todo-missing-hyperlink))

 * _TypeDefId_ (a 4-byte index into a _TypeDef_ table of another module in this Assembly). This column is used as a hint only. If the entry in the target _TypeDef_ table matches the _TypeName_ and _TypeNamespace_ entries in this table, resolution has succeeded. But if there is a mismatch, the CLI shall fall back to a search of the target _TypeDef_ table. Ignored and should be zero if _Flags_ has **IsTypeForwarder** set.

 * _TypeName_ (an index into the String heap)

 * _TypeNamespace_ (an index into the String heap)

 * _Implementation_. This is an index (more precisely, an _Implementation_ (§[II.24.2.6](#todo-missing-hyperlink)) coded index) into either of the following tables:

     * _File_ table, where that entry says which module in the current assembly holds the _TypeDef_

     * _ExportedType_ table, where that entry is the enclosing Type of the current nested Type

     * _AssemblyRef_ table, where that entry says in which assembly the type may now be found (_Flags_ must have the **IsTypeForwarder** flag set).

The rows in the _ExportedType_ table are the result of the **.class extern** directive (§[II.6.7](#todo-missing-hyperlink)).

> _This contains informative text only._

 The term "_FullName_" refers to the string created as follows: if the _TypeNamespace_ is null, then use the _TypeName_, otherwise use the concatenation of _TypeNamespace_, ".", and _TypeName_.

 1. The _ExportedType_ table can contain zero or more rows

 2. There shall be no entries in the _ExportedType_ table for Types that are defined in the current module&mdash;just for Types defined in other modules within the Assembly \[ERROR\]

 3. _Flags_ shall have only those values set that are specified \[ERROR\]

 4. If _Implementation_ indexes the _File_ table, then _Flags_.**VisibilityMask** shall be **Public** (§[II.23.1.15](#todo-missing-hyperlink)) \[ERROR\]

 5. If _Implementation_ indexes the _ExportedType_ table, then _Flags_.**VisibilityMask** shall be **NestedPublic** (§[II.23.1.15](#todo-missing-hyperlink)) \[ERROR\]

 6. If non-null, _TypeDefId_ should index a valid row in a _TypeDef_ table in a module somewhere within this Assembly (but not this module), and the row so indexed should have its _Flags_.**Public** = 1 (§[II.23.1.15](#todo-missing-hyperlink)) \[WARNING\]

 7. _TypeName_ shall index a non-empty string in the String heap \[ERROR\]

 8. _TypeNamespace_ can be null, or non-null

 9. If _TypeNamespace_ is non-null, then it shall index a non-empty string in the String heap \[ERROR\]

10. _FullName_ shall be a valid CLS identifier \[CLS\]

 11. If this is a nested Type, then _TypeNamespace_ should be null, and _TypeName_ should represent the unmangled, simple name of the nested Type \[ERROR\]

 12. _Implementation_ shall be a valid index into either of the following: \[ERROR\]

     * the _File_ table; that file shall hold a definition of the target Type in its _TypeDef_ table

     * a different row in the current _ExportedType_ table&mdash;this identifies the enclosing Type of the current, nested Type

 13. _FullName_ shall match exactly the corresponding _FullName_ for the row in the _TypeDef_ table indexed by _TypeDefId_ \[ERROR\]

 14. Ignoring nested Types, there shall be no duplicate rows, based upon _FullName_ \[ERROR\]

 15. For nested Types, there shall be no duplicate rows, based upon _TypeName_ and enclosing Type \[ERROR\]

 16. The complete list of Types exported from the current Assembly is given as the catenation of the _ExportedType_ table with all public Types in the current _TypeDef_ table, where "public" means a _Flags_.**VisibilityMask** of either **Public** or **NestedPublic**. There shall be no duplicate rows, in this concatenated table, based upon _FullName_ (add Enclosing Type into the duplicates check if this is a nested Type) \[ERROR\]

> _End informative text._
