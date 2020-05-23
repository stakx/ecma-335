## II.10.1.4 Inheritance attributes

 | _ClassAttr_ ::= &hellip;
 | ----
 | \| `abstract`
 | \| `sealed`

Attributes that specify special semantics are **abstract** and **sealed**. These attributes can be used together.

**abstract** specifies that this type shall not be instantiated. If a type contains abstract methods, that type shall be declared as an abstract type.

**sealed** specifies that a type shall not have derived classes. All value types shall be sealed.

_[Rationale:_ Virtual methods of sealed types are effectively instance methods, since they cannot be overridden. Framework authors should use sealed classes sparingly since they do not provide a convenient building block for user extensibility. Sealed classes can be necessary when the implementation of a set of virtual methods for a single class (typically multiple interfaces) becomes interdependent or depends critically on implementation details not visible to potential derived classes.

A type that is both abstract and sealed should have only static members, and serves as what some languages call a "namespace" or "static class". _end rationale]_
