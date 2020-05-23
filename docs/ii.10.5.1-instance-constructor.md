## II.10.5.1 Instance constructor

An *instance constructor* initializes an instance of a type, and is called when an instance of a type is created by the `newobj` instruction (see [Partition III](#todo-missing-hyperlink)). An instance constructor shall be an instance (not static or virtual) method, it shall be named `.ctor`, and marked **instance**, **rtspecialname**, and **specialname** (§[II.15.4.2.6](ii.15.4.2.6-special-handling-attributes.md)). An instance constructor can have parameters, but shall not return a value. An instance constructor cannot take generic type parameters. An instance constructor can be overloaded (i.e., a type can have several instance constructors). Each instance constructor for a type shall have a unique signature. Unlike other methods, instance constructors can write into fields of the type that are marked with the **initonly** attribute (§[II.16.1.2](ii.16.1.2-field-contract-attributes.md)).

_[Example:_ The following shows the definition of an instance constructor that does not take any parameters:

 ```ilasm
 .class X {
   .method public rtspecialname specialname instance void .ctor() cil managed
   { .maxstack 1
     // call super constructor
     ldarg.0  // load this pointer
     call instance void [mscorlib]System.Object::.ctor()
     // do other initialization work
     ret
   }
 }
 ```

_end example]_
