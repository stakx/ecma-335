## II.16.3.1 Data declaration

A **.data** directive contains an optional data label and the body which defines the actual data. A data label shall be used if the data is to be accessed by the code.

 | _DataDecl_ ::=
 | ----
 | [ _DataLabel_ `'='` ] _DdBody_

The body consists either of one data item or a list of data items in braces. A list of data items is similar to an array.

 | _DdBody_ ::=
 | ----
 | _DdItem_ | `'{'` _DdItemList_ `'}'`

A list of items consists of any number of items:

 | _DdItemList_ ::=
 | ----
 | _DdItem_ [ `','` _DdItemList_ ]

The list can be used to declare multiple data items associated with one label. The items will be laid out in the order declared. The first data item is accessible directly through the label. To access the other items, pointer arithmetic is used, adding the size of each data item to get to the next one in the list. The use of pointer arithmetic will make the application non-verifiable. (Each data item shall have a _DataLabel_ if it is to be referenced afterwards; missing a _DataLabel_ is useful in order to insert alignment padding between data items)

A data item declares the type of the data and provides the data in parentheses. If a list of data items contains items of the same type and initial value, the grammar below can be used as a short cut for some of the types: the number of times the item shall be replicated is put in brackets after the declaration.

 | _DdItem_ ::= | Description
 | ---- | ----
 | `'&'` `'(` _Id_ `')'` | Address of label
 | \| `bytearray` `'('` _Bytes_ `')'` | Array of bytes
 | \| `char` `'*'` `'('` _QSTRING_ `')'` | Array of (Unicode) characters
 | \| `float32` [ `'('` _Float64_ `')'` ] [ `'['` _Int32_ `']'` ] | 32-bit floating-point number, can be replicated
 | \| `float64` [ `'('` _Float64_ `')'` ] [ `'['` _Int32_ `']'` ] | 64-bit floating-point number, can be replicated
 | \| `int8` [ `'('` _Int32_ `')'` ] [ `'['` _Int32_ `']'` ] | 8-bit integer, can be replicated
 | \| `int16` [ `'('` _Int32_ `')'` ] [ `'['` _Int32_ `']'` ] | 16-bit integer, can be replicated
 | \| `int32` [ `'('` _Int32_ `')'` ] [ `'['` _Int32_ `']'` ] | 32-bit integer, can be replicated
 | \| `int64` [ `'('` _Int64_ `')'` ] [ `'['` _Int32_ `']'` ] | 64-bit integer, can be replicated

_[Example:_ The following declares a 32-bit signed integer with value 123:

 ```ilasm
 .data theInt = int32(123)
 ```

The following declares 10 replications of an 8-bit unsigned integer with value 3:

 ```ilasm
 .data theBytes = int8 (3) [10]
 ```

_end example]_
