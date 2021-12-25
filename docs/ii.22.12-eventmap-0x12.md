## II.22.12 EventMap: 0x12

The _EventMap_ table has the following columns:

 * _Parent_ (an index into the _TypeDef_ table)

 * _EventList_ (an index into the _Event_ table). It marks the first of a contiguous run of Events owned by this Type. That run continues to the smaller of:

    * the last row of the _Event_ table

    * the next run of Events, found by inspecting the _EventList_ of the next row in the _EventMap_ table

Note that _EventMap_ info does not directly influence runtime behavior; what counts is the information stored for each method that the event comprises. The _EventMap_ and _Event_ tables result from putting the **.event** directive on a class (§[II.18](ii.18-defining-events.md)).

> _This contains informative text only._

 1. _EventMap_ table can contain zero or more rows

 2. There shall be no duplicate rows, based upon _Parent_ (a given class has only one 'pointer' to the start of its event list) \[ERROR\]

 3. There shall be no duplicate rows, based upon _EventList_ (different classes cannot share rows in the _Event_ table) \[ERROR\]

> _End informative text._
