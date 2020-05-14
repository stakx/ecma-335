## II.22.20 GenericParam: 0x2A

The _GenericParam_ table has the following columns:

 * _Number_ (the 2-byte index of the generic parameter, numbered left-to-right, from zero)

 * _Flags_ (a 2-byte bitmask of type _GenericParamAttributes_, §[II.23.1.7](ii.23.1.7-flags-for-generic-parameters-genericparamattributes.md))

 * _Owner_ (an index into the _TypeDef_ or _MethodDef_ table, specifying the Type or Method to which this generic parameter applies; more precisely, a _TypeOrMethodDef_ (§[II.24.2.6](ii.24.2.6-metadata-stream.md)) coded index)

 * _Name_ (a non-null index into the String heap, giving the name for the generic parameter. This is purely descriptive and is used only by source language compilers and by Reflection)

The following additional restrictions apply:

 * _Owner_ cannot be a non nested enumeration type; and

 * If _Owner_ is a nested enumeration type then _Number_ must be less than or equal to the number of generic parameters of the enclosing class.

_[Rationale:_ Generic enumeration types serve little purpose and usually only exist to meet CLS Rule 42. These additional restrictions limit the genericty of enumeration types while allowing CLS Rule 42 to be met. The _GenericParam_ table stores the generic parameters used in generic type definitions and generic method definitions. These generic parameters can be constrained (i.e., generic arguments shall extend some class and/or implement certain interfaces) or unconstrained. (Such constraints are stored in the _GenericParamConstraint_ table.)

Conceptually, each row in the _GenericParam_ table is owned by one, and only one, row in either the _TypeDef_ or _MethodDef_ tables. 

_[Example:_

 ```il
 .class Dict`2<([mscorlib]System.IComparable) K, V>
 ```

The generic parameter `K` of class `Dict` is constrained to implement `System.IComparable`.

 ```il
 .method static void ReverseArray<T>(!!0[] 'array')
 ```

There is no constraint on the generic parameter `T` of the generic method `ReverseArray`. _end example]_ 

> _This contains informative text only._

 1. _GenericParam_ table can contain zero or more rows

 2. Each row shall have one, and only one, owner row in the _TypeDef_ or _MethodDef_ table (i.e., no row sharing) \[ERROR\]

 3. Every generic type shall own one row in the _GenericParam_ table for each of its generic parameters \[ERROR\]

 4. Every generic method shall own one row in the _GenericParam_ table for each of its generic parameters \[ERROR\]

_Flags_:

 5. Can hold the value `Covariant` or `Contravariant`, but only if the owner row corresponds to a generic interface, or a generic delegate class. \[ERROR\]

 6. Otherwise, shall hold the value `None` indicating nonvariant (i.e., where the parameter is nonvariant or the owner is a non delegate class, a value-type, or a generic method) \[ERROR\]

 7. If _Flags_ == `Covariant` then the corresponding generic parameter can appear in a type definition only as: \[ERROR\]

     * The result type of a method

     * A generic parameter to an inherited interface

 8. If _Flags_ == `Contravariant` then the corresponding generic parameter can appear in a type definition only as the argument to a method \[ERROR\]

 9. _Number_ shall have a value &ge; 0 and < the number of generic parameters in owner type or method. \[ERROR\]

 10. Successive rows of the _GenericParam_ table that are owned by the same method shall be ordered by increasing _Number_ value; there shall be no gaps in the _Number_ sequence \[ERROR\]

 11. _Name_ shall be non-null and index a string in the String heap  \[ERROR\]

     _[Rationale:_ Otherwise, Reflection output is not fully usable. _end rationale]_

12. There shall be no duplicate rows based upon _Owner_+_Name_  \[ERROR\]

     _[Rationale:_ Otherwise, code using Reflection cannot disambiguate the different generic parameters. _end rationale]_

 13. There shall be no duplicate rows based upon _Owner_+_Number_ \[ERROR\]

> _End informative text._
