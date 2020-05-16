## I.8.9.6.6 Constructors

New values of an object type are created via **constructors**. Constructors shall be instance methods, defined via a special form of method contract, which defines the method contract as a constructor for a particular object type. The constructors for an object type are part of the object type definition. While the CTS and VES ensure that only a properly defined constructor is used to make new values of an object type, the ultimate correctness of a newly constructed object is dependent on the implementation of the constructor itself.

Object types shall define at least one constructor method, but that method need not be public. Creating a new value of an object type by invoking a constructor involves the following steps, in order:

 1. Space for the new value is allocated in managed memory.

 2. VES data structures of the new value are initialized and user-visible memory is zeroed.

 3. The specified constructor for the object type is invoked.

Inside the constructor, the object type can do any initialization it chooses (possibly none).

> #### CLS Rule 21:
>
> An object constructor shall call some instance constructor of its base class before any access occurs to inherited instance data. (This does not apply to value types, which need not have constructors.)
>
> #### CLS Rule 22:
>
> An object constructor shall not be called except as part of the creation of an object, and an object shall not be initialized twice.
>
> _[Note:_
>
> **CLS (consumer):** Shall provide syntax for choosing the constructor to be called when an object is created.
>
> **CLS (extender):** Shall provide syntax for defining constructor methods with different signatures. It can issue a compiler error if the constructor does not obey these rules.
>
> **CLS (framework):** Can assume that object creation includes a call to one of the constructors, and that no object is initialized twice. `System.Object.MemberwiseClone` (see [Partition IV Library](#todo-missing-hyperlink)) and deserialization (including object remoting) shall not run constructors. _end note]_
