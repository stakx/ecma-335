## II.22.33 Param: 0x08

The _Param_ table has the following columns:

 * _Flags_ (a 2-byte bitmask of type _ParamAttributes_, §[II.23.1.13](ii.23.1.13-flags-for-params-paramattributes.md))

 * _Sequence_ (a 2-byte constant)

 * _Name_ (an index into the String heap)
 
Conceptually, every row in the _Param_ table is owned by one, and only one, row in the _MethodDef_ table.

The rows in the _Param_ table result from the parameters in a method declaration (§II.15.4), or from a **.param** attribute attached to a method (§[II.15.4.1](ii.15.4.1-method-body.md).

> _This contains informative text only._

 1. _Param_ table can contain zero or more rows

 2. Each row shall have one, and only one, owner row in the _MethodDef_ table \[ERROR\]

 3. _Flags_ shall have only those values set that are specified (all combinations valid) \[ERROR\]

 4. _Sequence_ shall have a value &ge; 0 and &le; number of parameters in owner method. A _Sequence_ value of 0 refers to the owner method's return type; its parameters are then numbered from 1 onwards \[ERROR\]

 5. Successive rows of the _Param_ table that are owned by the same method shall be ordered by increasing _Sequence_ value &ndash; although gaps in the sequence are allowed \[WARNING\]

 6. If _Flags_.`HasDefault` = 1 then this row shall own exactly one row in the _Constant_ table \[ERROR\]

 7. If _Flags_.`HasDefault` = 0, then there shall be no rows in the _Constant_ table owned by this row \[ERROR\]

 8. If _Flags_.`FieldMarshal` = 1 then this row shall own exactly one row in the `FieldMarshal` table \[ERROR\]

 9. _Name_ can be null or non-null

 10. If _Name_ is non-null, then it shall index a non-empty string in the String heap \[WARNING\]

> _End informative text._
