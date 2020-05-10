## II.22.21 GenericParamConstraint: 0x2C

The _GenericParamConstraint_ table has the following columns:

 * _Owner_ (an index into the _GenericParam_ table, specifying to which generic parameter this row refers)

 * _Constraint_ (an index into the _TypeDef_, _TypeRef_, or _TypeSpec_ tables, specifying from which class this generic parameter is constrained to derive; or which interface this generic parameter is constrained to implement; more precisely, a _TypeDefOrRef_ (§[II.24.2.6](#todo-missing-hyperlink)) coded index)

The _GenericParamConstraint_ table records the constraints for each generic parameter. Each generic parameter can be constrained to derive from zero or one class. Each generic parameter can be constrained to implement zero or more interfaces.

Conceptually, each row in the _GenericParamConstraint_ table is 'owned' by a row in the _GenericParam_ table. All rows in the _GenericParamConstraint_ table for a given _Owner_ shall refer to distinct constraints.

Note that if _Constraint_ is a _TypeRef_ to `System.ValueType`, then it means the constraint type shall be `System.ValueType`, or one of its sub types.  However, since `System.ValueType` itself is a reference type, this particular mechanism does not guarantee that the type is a non-reference type.

> _This contains informative text only._

 1. The _GenericParamConstraint_ table can contain zero or more rows

 2. Each row shall have one, and only one, owner row in the _GenericParam_ table (i.e., no row sharing)  \[ERROR\]

 3. Each row in the _GenericParam_ table shall 'own' a separate row in the _GenericParamConstraint_ table for each constraint that generic parameter has \[ERROR\]

 4. All of the rows in the _GenericParamConstraint_ table that are owned by a given row in the _GenericParam_ table shall form a contiguous range (of rows) \[ERROR\]

 5. Any generic parameter (corresponding to a row in the _GenericParam_ table) shall own zero or one row in the _GenericParamConstraint_ table corresponding to a class constraint. \[ERROR\]

6. Any generic parameter (corresponding to a row in the _GenericParam_ table) shall own zero or more rows in the _GenericParamConstraint_ table corresponding to an interface constraint. \[ERROR\]

7. There shall be no duplicate rows based upon _Owner_+_Constraint_ \[ERROR\]

8. Constraint shall not reference `System.Void`. \[ERROR\]

> _End informative text._
