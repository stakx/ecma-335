## II.12 Semantics of interfaces

Interfaces, as specified in [Partition I](#todo-missing-hyperlink), each define a contract that other types can implement. Interfaces can have static fields and methods, but they shall not have instance fields or methods.  Interfaces can define virtual methods, but only if those methods are **abstract** (see [Partition I](#todo-missing-hyperlink) and §[II.15.4.2.4](#todo-missing-hyperlink)).

_[Rationale:_ Interfaces cannot define instance fields for the same reason that the CLI does not support multiple inheritance of base types: in the presence of dynamic loading of data types there is no known implementation technique that is both efficient when used and has no cost when not used.  By contrast, providing static fields and methods need not affect the layout of instances and therefore does not raise these issues. _end rationale]_

Interfaces can be nested inside any type (interface, class, or value type).
