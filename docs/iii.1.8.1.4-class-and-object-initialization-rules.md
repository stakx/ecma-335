## III.1.8.1.4 Class and object initialization rules

The VES ensures that all statics are initially zeroed (i.e., built-in types are 0 or false, object references are null), hence the verification algorithm does not test for definite assignment to statics.

An object constructor shall not return unless a constructor for the base class or a different construct for the object’s class has been called on the newly constructed object. The verification algorithm shall treat the **this** pointer as uninitialized unless the base class constructor has been called. No operations can be performed on an uninitialized **this** except for storing into and loading from the object's fields.

_[Note:_ If the constructor generates an exception the this pointer in the corresponding catch block is still uninitialized. _end note]_
