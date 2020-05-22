## II.15.4.1.5 The .param type directive

 | _MethodBodyItem_ ::= &hellip;
 | ----
 | \| `.param type` `'['` _Int32_ `']'`

This directive allows type parameters for a generic type or method to be specified. _Int32_ is the 1-based ordinal of the type or method parameter to which the directive applies. _[Note:_ This directive is used in conjunction with a **.custom** directive to associate a custom attribute with a type parameter. _end note]_

When a **.param type** directive is used within class scope, it refers to a type parameter of that class. When the directive is used within method scope inside a class definition, it refers to a type parameter of that method. Otherwise, the program is ill-formed.

_[Example:_

 ```ilasm
 .class public G<T,U> {
   .param type [1]  // refers to T
   .custom instance void TypeParamAttribute::.ctor() = (01 00 ... )
   .method public void Foo<M>(!!0 m) {
      .param type [1] // refers to M
      .custom instance void AnotherTypeParamAttribute::.ctor() = (01 00 ... )
       …
   }
   …
 }
 ```

_end example]_
