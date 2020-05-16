## II.9.3 Generic method definitions

A generic method definition is one that includes a generic parameter list.  A generic method can be defined within a non-generic type; or within a generic type, in which case the method's generic parameter(s) shall be additional to the generic parameter(s) of the owner. As with generic type definitions, each generic parameter on a generic method definition has a name and an optional set of constraints.

Generic methods can be static, instance, or virtual. Class or instance constructors (`.cctor`, or `.ctor`, respectively) shall not be generic.

The method generic parameters are in scope in the signature and body of the method, and in the generic parameter constraints. _[Note: The signature includes the method return type. So, in the example:

 ```ilasm
 .method … !!0 M`1<T>() { … }
 ```

the `!!0` is in scope&mdash;it's the generic parameter of ``M`1<T>`` even though it preceeds that parameter in the declaration. _end note]_

Generic instance (virtual and non-virtual) methods can be defined as members of generic types, in which case the generic parameters of both the generic type and the generic method are in scope in the method signature and body, and in constraints on method generic parameters.
