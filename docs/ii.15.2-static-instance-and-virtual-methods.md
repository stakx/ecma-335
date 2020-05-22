## II.15.2 Static, instance, and virtual methods

Static methods are methods that are associated with a type, not with its instances.

Instance methods are associated with an instance of a type: within the body of an instance method it is possible to reference the particular instance on which the method is operating (via the *this* pointer). It follows that instance methods shall only be defined in classes or value types, but not in interfaces or outside of a type (i.e., globally). However, notice

 1. Instance methods on classes (including boxed value types), have a *this* pointer that is by default an object reference to the class on which the method is defined.

 2. Instance methods on (unboxed) value types, have a *this* pointer that is by default a managed pointer to an instance of the type on which the method is defined.

 3. There is a special encoding (denoted by the syntactic item **explicit** in the calling convention, see §[II.15.3](ii.15.3-calling-convention.md)) to specify the type of the this pointer, overriding the default values specified here.

 4. The *this* pointer can be null.

Virtual methods are associated with an instance of a type in much the same way as for instance methods. However, unlike instance methods, it is possible to call a virtual method in such a way that the implementation of the method shall be chosen at runtime by the VES depending upon the type of object used for the *this* pointer. The particular _Method_ that implements a virtual method is determined dynamically at runtime (a virtual call) when invoked via the `callvirt` instruction; whilst the binding is decided at compile time when invoked via the `call` instruction (see [Partition III](#todo-missing-hyperlink)).

With virtual calls (only), the notion of inheritance becomes important. A derived class can override a virtual method inherited from its base classes, providing a new implementation of the method. The method attribute **newslot** specifies that the CLI shall not override the virtual method definition of the base type, but shall treat the new definition as an independent virtual method definition.

Abstract virtual methods (which shall only be defined in abstract classes or interfaces) shall be called only with a `callvirt` instruction. Similarly, the address of an abstract virtual method shall be computed with the `ldvirtftn` instruction, and the `ldftn` instruction shall not be used.

_[Rationale:_ With a concrete virtual method there is always an implementation available from the class that contains the definition, thus there is no need at runtime to have an instance of a class available. Abstract virtual methods, however, receive their implementation only from a subtype or a class that implements the appropriate interface, hence an instance of a class that actually implements the method is required. _end rationale]_
