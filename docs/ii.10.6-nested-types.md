## II.10.6 Nested types

Nested types are specified in [Partition I](#todo-missing-hyperlink). For information about the logical tables associated with nested types, see §[II.22.32](ii.22.32-nestedclass-0x29.md).

_[Note:_ A nested type is not associated with an instance of its enclosing type. The nested type has its own base type, and can be instantiated independently of its enclosing type. This means that the instance members of the enclosing type are not accessible using the **this** pointer of the nested type.

A nested type can access any members of its enclosing type, including private members, as long as those members are static or the nested type has a reference to an instance of the enclosing type. Thus, by using nested types, a type can give access to its private members to another type.

On the other hand, the enclosing type cannot access any private or family members of the nested type. Only members with **assembly**, **famorassem**, or **public** accessibility can be accessed by the enclosing type. _end note]_

_[Example:_ The following shows a class declared inside another class. Each class declares a field. The nested class can access both fields, while the enclosing class does not have access to the enclosed class's field `b`.

 ```ilasm
 .class public auto ansi X
 { .field static private int32 a
   .class auto ansi nested public Y
    { .field static private int32 b
     // ...
   }
 }
 ```

_end example]_
