## II.14.1 Vectors

 | _Type_ ::=
 | ----
 | &hellip;
 | \| _Type_ `'['` `']'`

Vectors are single-dimension arrays with a zero lower bound. They have direct support in CIL instructions (`newarr`, `ldelem`, `stelem`, and `ldelema`, see [Partition III](#todo-missing-hyperlink)). The CIL Framework also provides methods that deal with multidimensional arrays and single-dimension arrays with a non-zero lower bound (§[II.14.2](#todo-missing-hyperlink)). Two vectors have the same type if their element types are the same, regardless of their actual upper bounds.

Vectors have a fixed size and element type, determined when they are created.  All CIL instructions shall respect these values. That is, they shall reliably detect attempts to do the following: index beyond the end of the vector, store the incorrect type of data into an element of a vector, and take the address of elements of a vector with an incorrect data type. See [Partition III](#todo-missing-hyperlink).

_[Example:_ Declare a vector of Strings:

 ```ilasm
 .field string[] errorStrings
 ```

Declare a vector of function pointers:

 ```ilasm
 .field method instance void*(int32) [] myVec
 ```

Create a vector of 4 strings, and store it into the field `errorStrings`. The 4 strings lie at `errorStrings[0]` through `errorStrings[3]`:

 ```ilasm
 ldc.i4.4
 newarr string
 stfld string[] CountDownForm::errorStrings
 ```

Store the string `"First"` into `errorStrings[0]`:

 ```ilasm
 ldfld string[] CountDownForm::errorStrings
 ldc.i4.0
 ldstr "First"
 stelem
 ```

_end example]_

Vectors are subtypes of `System.Array`, an abstract class pre-defined by the CLI. It provides several methods that can be applied to all vectors. See [Partition IV](#todo-missing-hyperlink).
