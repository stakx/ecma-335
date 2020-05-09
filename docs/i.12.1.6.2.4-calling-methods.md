## I.12.1.6.2.4 Calling methods

Static methods on value types are handled no differently from static methods on an ordinary class: use a `call` instruction with a metadata token specifying the value type as the class of the method. Non-static methods (i.e., instance and virtual methods) are supported on value types, but they are given special treatment. A non-static method on a reference type (rather than a value type) expects a **this** pointer that is an instance of that class. This makes sense for reference types, since they have identity and the **this** pointer represents that identity. Value types, however, have identity only when boxed. To address this issue, the **this** pointer on a non-static method of a value type is a byref parameter of the value type rather than an ordinary by-value parameter.

A non-static method on a value type can be called in the following ways:

 * For unboxed instances of a value type, the exact type is known statically. The `call` instruction can be used to invoke the function, passing as the first parameter (the **this** pointer) the address of the instance. The metadata token used with the `call` instruction shall specify the value type itself as the class of the method.

 * Given a boxed instance of a value type, there are three cases to consider:

   * Instance or virtual methods introduced on the value type itself: unbox the instance and call the method directly using the value type as the class of the method.

   * Virtual methods inherited from a base class: use the `callvirt` instruction and specify the method on the `System.Object`, `System.ValueType` or `System.Enum` class as appropriate.

   * Virtual methods on interfaces implemented by the value type: use the `callvirt` instruction and specify the method on the interface type.

