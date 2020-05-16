## II.9.4 Instantiating generic types

_GenArgs_ is used to represent a generic argument list:

 | _GenArgs_ ::=
 | ----
 | _Type_ [ `','` _Type_ ]*

We say that a type is *closed* if it contains no generic parameters; otherwise, it is *open*.

A given generic type definition can be *instantiated* with *generic arguments* to produce an instantiated type.

_[Example:_ Given suitable definitions for the generic class `MyList` and value type `Pair`, we could instantiate them as follows:

 ```ilasm
 newobj instance void class MyList`1<int32>::.ctor()
 initobj valuetype Pair`2<int32, valuetype Pair<string,int32>>
 ```

_end example]_

_[Example:_

 ```ilasm
 ldtoken !0                   // !0 = generic parameter 0 in generic type definition
 castclass class List`1<!1>   // !1 = generic parameter 1 in generic type definition
 box !!1                      // !!1 = generic parameter 1 in generic method definition
 ```

_end example]_

The number of generic arguments in an instantiation shall match the number of generic parameters specified in the type or method definition.

The CLI does not support partial instantiation of generic types. And generic types shall not appear uninstantiated anywhere in metadata signature blobs.

The following kinds of type cannot be used as arguments in instantiations (of generic types or methods):

 * Byref types (e.g., ``System.Generic.Collection.List`1<string&>`` is invalid)

 * Byref-like types, i.e. value types that contain fields that can point into the CIL evaluation stack (e.g., `List<System.RuntimeArgumentHandle>` is invalid)

 * Typed references (e.g. `List<System.TypedReference>` is invalid)

 * Unmanaged pointers (e.g. `List<int32*>` is invalid)

 * `void` (e.g., `List<System.Void>` is invalid)

_[Rationale:_ Byrefs types cannot be used as generic arguments because some, indeed most, instantiations would be invalid. For example, since byrefs are not allowed as field types or as method return types, in the definition of ``List`1<string&>``, one could not declare a field of type `!0`, nor a method that returned a type of `!0`. _end rationale]_

_[Rationale:_ Unmanaged pointers are disallowed because as currently specified unmanaged pointers are not technically subclasses of `System.Object`. This restriction can be lifted, but currently the runtime enforces this restriction and this spec reflects that.]
 
Objects of instantiated types shall carry sufficient information to recover at runtime their exact type (including the types and number of their generic arguments). _[Rationale:_ This is required to correctly implement casting and instance-of testing, as well as in reflection capabilities (`System.Object::GetType`). _end rationale]_
