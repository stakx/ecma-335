## II.22.31 ModuleRef: 0x1A

The _ModuleRef_ table has the following column:

 * _Name_ (an index into the String heap)

The rows in the _ModuleRef_ table result from **.module extern** directives in the Assembly (§[II.6.5](ii.6.5-referencing-modules.md)).

> _This contains informative text only._

 1. _Name_ shall index a non-empty string in the String heap. This string shall enable the CLI to locate the target module (typically, it might name the file used to hold the module) \[ERROR\]

 2. There should be no duplicate rows  \[WARNING\]

 3. _Name_ should match an entry in the _Name_ column of the _File_ table. Moreover, that entry shall enable the CLI to locate the target module (typically it might name the file used to hold the module) \[ERROR\]

> _End informative text._
