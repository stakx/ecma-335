## II.22.29 MethodSpec: 0x2B

The _MethodSpec_ table has the following columns:

 * _Method_ (an index into the _MethodDef_ or _MemberRef_ table, specifying to which generic method this row refers; that is, which generic method this row is an instantiation of; more precisely, a _MethodDefOrRef_ (§[II.24.2.6](ii.24.2.6-metadata-stream.md)) coded index)

 * _Instantiation_ (an index into the Blob heap (§[II.23.2.15](ii.23.2.15-methodspec.md)), holding the signature of this instantiation)
 
The _MethodSpec_ table records the signature of an instantiated generic method. Each unique instantiation of a generic method (i.e., a combination of _Method_ and _Instantiation_) shall be represented by a single row in the table.

> _This contains informative text only._

 1. The _MethodSpec_ table can contain zero or more rows

 2. One or more rows can refer to the same row in the _MethodDef_ or _MemberRef_ table. (There can be multiple instantiations of the same generic method.)

 3. The signature stored at _Instantiation_ shall be a valid instantiation of the signature of the generic method stored at _Method_ \[ERROR\]

 4. There shall be no duplicate rows based upon _Method_+_Instantiation_ \[ERROR\]

> _End informative text._
