## II.22.35 PropertyMap: 0x15

The _PropertyMap_ table has the following columns:

 * _Parent_ (an index into the _TypeDef_ table)

 * _PropertyList_ (an index into the _Property_ table). It marks the first of a contiguous run of Properties owned by _Parent_. The run continues to the smaller of:

     * the last row of the _Property_ table

     * the next run of Properties, found by inspecting the _PropertyList_ of the next row in this _PropertyMap_ table

The _PropertyMap_ and _Property_ tables result from putting the **.property** directive on a class (§[II.17](ii.17-defining-properties.md)).

> _This contains informative text only._

 1. _PropertyMap_ table can contain zero or more rows

 2. There shall be no duplicate rows, based upon _Parent_ (a given class has only one 'pointer' to the start of its property list) \[ERROR\]

 3. There shall be no duplicate rows, based upon _PropertyList_ (different classes cannot share rows in the _Property_ table) \[ERROR\]

> _End informative text._
