## II.22.23 InterfaceImpl: 0x09

The _InterfaceImpl_ table has the following columns:

 * _Class_ (an index into the _TypeDef_ table)

 * _Interface_ (an index into the _TypeDef_, _TypeRef_, or _TypeSpec_ table; more precisely, a _TypeDefOrRef_ (§[II.24.2.6](ii.24.2.6-metadata-stream.md)) coded index)
 
 The _InterfaceImpl_ table records the interfaces a type implements explicitly.  Conceptually, each row in the _InterfaceImpl_ table indicates that _Class_ implements _Interface_.

 > _ This contains informative text only._

 1. The _InterfaceImpl_ table can contain zero or more rows

 2. _Class_ shall be non-null \[ERROR\]

 3. If _Class_ is non-null, then:

     1. _Class_ shall index a valid row in the _TypeDef_ table \[ERROR\]

     2. _Interface_ shall index a valid row in the _TypeDef_ or _TypeRef_ table \[ERROR\]

     3. The row in the _TypeDef_, _TypeRef_, or _TypeSpec_ table indexed by _Interface_ shall be an interface (_Flags_.`Interface` = 1), not a Class or ValueType \[ERROR\]

 4. There should be no duplicates in the _InterfaceImpl_ table, based upon non-null _Class_ and _Interface_ values \[WARNING\]

 5. There can be many rows with the same value for _Class_ (since a class can implement many interfaces)

 6. There can be many rows with the same value for _Interface_ (since many classes can implement the same interface)

> _End informative text._
