## II.22.16 FieldLayout: 0x10

The _FieldLayout_ table has the following columns:

 * _Offset_ (a 4-byte constant)

 * _Field_ (an index into the _Field_ table)

Note that each Field in any Type is defined by its Signature.  When a Type instance (i.e., an object) is laid out by the CLI, each Field is one of four kinds:

 * **Scalar:** for any member of built-in type, such as `int32`.  The size of the field is given by the size of that intrinsic, which varies between 1 and 8 bytes

 * **ObjectRef:** for `ELEMENT_TYPE_CLASS`, `ELEMENT_TYPE_STRING`, `ELEMENT_TYPE_OBJECT`, `ELEMENT_TYPE_ARRAY`, `ELEMENT_TYPE_SZARRAY`

 * **Pointer:** for `ELEMENT_TYPE_PTR`, `ELEMENT_TYPE_FNPTR`

 * **ValueType:** for `ELEMENT_TYPE_VALUETYPE`. The instance of that ValueType is actually laid out in this object, so the size of the field is the size of that ValueType

Note that metadata specifying explicit structure layout can be valid for use on one platform but not on another, since some of the rules specified here are dependent on platform-specific alignment rules.

A row in the _FieldLayout_ table is created if the **.field** directive for the parent field has specified a field offset (§[II.16](#todo-missing-hyperlink)).

> _This contains informative text only._

 1. A _FieldLayout_ table can contain zero or more or rows

 2. The Type whose Fields are described by each row of the _FieldLayout_ table shall have _Flags_.`ExplicitLayout` (§[II.23.1.15](#todo-missing-hyperlink)) set \[ERROR\]

 3. _Offset_ shall be zero or more \[ERROR\]

 4. _Field_ shall index a valid row in the _Field_ table \[ERROR\]

 5. _Flags_.`Static` for the row in the _Field_ table indexed by _Field_ shall be non-static (i.e., zero 0) \[ERROR\]

 6. Among the rows owned by a given Type there shall be no duplicates, based upon _Field_. That is, a given _Field_ of a Type cannot be given two offsets. \[ERROR\]

 7. Each Field of kind **ObjectRef** shall be naturally aligned within the Type \[ERROR\]

 8. Among the rows owned by a given Type it is perfectly valid for several rows to have the same value of _Offset_. **ObjectRef** and a valuetype cannot have the same offset \[ERROR\]

 9. Every Field of an `ExplicitLayout` Type shall be given an offset; that is, it shall have a row in the _FieldLayout_ table \[ERROR\]

> _End informative text._
