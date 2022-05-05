## II.16.3.2 Accessing data from the PE file

The data stored in a PE File using the **.data** directive can be accessed through a static variable, either global or a member of a type, declared at a particular position of the data:

 | _FieldDecl_ ::=
 | ----
 | _FieldAttr_* _Type_ _Id_ `at` _DataLabel_
 
The data is then accessed by a program as it would access any other static variable, using instructions such as `ldsfld`, `ldsflda`, and so on (see [Partition III](#todo-missing-hyperlink)). The ability to access data from within the PE File can be subject to platform-specific rules, typically related to section access permissions within the PE File format itself.

_[Example:_ The following accesses the data declared in the example of §[II.16.3.1](ii.16.3.1-data-declaration.md). First a static variable needs to be declared for the data, e.g., a global static variable:

 ```ilasm
 .field public static int32 myInt at theInt
 ```

Then the static variable can be used to load the data:

 ```ilasm
 ldsfld int32 myInt
 // data on stack
 ```

_end example]_
