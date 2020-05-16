## II.9.9 Inheritance and overriding

Member inheritance is defined in [Partition I](#todo-missing-hyperlink), in "Member Inheritance". (Overriding and hiding are also defined in that partition, in "Hiding, overriding, and layout".) This definition is extended, in an obvious manner, in the presence of generics. Specifically, in order to determine whether a member hides (for static or instance members) or overrides (for virtual methods) a member from a base class or interface, simply substitute each generic parameter with its generic argument, and compare the resulting member signatures.

_[Example:_ The following illustrates this point:

Suppose the following definitions of a base class `B`, and a derived class `D`.

 ```ilasm
 .class B
 { .method public virtual void V(int32 i) { … } }

 .class D extends B
 { .method public virtual void V(int32 i) { … } }
 ```

In class `D`, `D.V` overrides the inherited method `B.V`, because their names and signatures match.

How does this simple example extend in the presence of generics, where class `D` derives from a generic instantiation? Consider this example:

 ```ilasm
 .class B`1<T>
 { .method public virtual void V(!0) { … } }

 .class D extends B`1<int32>
 { .method public virtual void V(int32) { … } }

 .class E extends B`1<string>
 { .method public virtual void V(int32) { … } }
 ```

Class `D` derives from `B<int32>`. And class `B<int32>` defines the method:

 ```ilasm
 public virtual void V(int32 t) { … }
 ```

where we have simply substituted `B`'s generic parameter `T`, with the specific generic argument `int32`. This matches the method `D.V` (same name and signature). Thus, for the same reasons as in the nongeneric example above, it's clear that `D.V` overrides the inherited method `B.V`.

Contrast this with class `E`, which derives from `B<string>`. In this case, substituting `B`'s `T` with string, we see that `B.V` has this signature:

 ```ilasm
 public virtual void V(string t) { … }
 ```

This signature differs from method `E.V`, which therefore does not override the base class's `B.V` method.

_end example]_

Type definitions are invalid if, after substituting base class generic arguments, two methods result in the same name and signature (including return type). The following illustrates this point:

_[Example:_

 ```ilasm
 .class B`1<T>
 { .method public virtual void V(!0 t)     { … }
   .method public virtual void V(string x) { … }
 }

 .class D extends B`1<string> { } // Invalid
 ```

Class `D` is invalid, because it will inherit from `B<string>` two methods with identical signatures:

 ```ilasm
 void V(string)
 ```

However, the following version of `D` is valid:

 ```ilasm
 .class D extends B`1<string>
 { .method public virtual void  V(string t)  { … }
   .method public virtual void  W(string t)
   { …
     .override  method instance void class B`1<string>::V(!0)
     …
   }
 }
 ```

_end example]_

When overriding generic methods (that is, methods with their own generic parameters) the number of generic parameters shall match exactly those of the overridden method. If an overridden generic method has one or more constraints on its generic arguments then:

 * The overriding method can have constraints only on the same generic arguments;

 * Any such constraint on a generic argument specified by the overriding method shall be no more restrictive than the constraint specified by the overridden method for the same generic argument; 

_[Note:_ Within the body of an overriding method, only constraints directly specified in its signature apply. When a method is invoked, it's the constraints associated with the metadata token in the `call` or `callvirt` instruction that are enforced. _end note]_
