## II.10.4 Method implementation requirements

A type (concrete or abstract) *can* provide

 * implementations for instance, static, and virtual methods that it introduces

 * implementations for methods declared in interfaces that it has specified it will implement, or that its base type has specified it will implement

 * alternative implementations for virtual methods inherited from its base class

 * implementations for virtual methods inherited from an abstract base type that did not provide an implementation

A concrete (i.e., non-abstract) type shall provide, either directly or by inheritance, an implementation for

 * all methods declared by the type itself

 * all virtual methods of interfaces implemented by the type

 * all virtual methods that the type inherits from its base type
