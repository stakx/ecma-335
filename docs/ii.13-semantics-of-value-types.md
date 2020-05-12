## II.13 Semantics of value types

In contrast to reference types, value types (see [Partition I](#todo-missing-hyperlink)) are not accessed by using a reference, but are stored directly in the location of that type.

_[Rationale:_ Value types are used to describe the type of small data items. They can be compared to struct (as opposed to pointers to struct) types in C++. Compared to reference types, value types are accessed faster since there is no additional indirection involved. As elements of arrays they do not require allocating memory for the pointers as well as for the data itself. Typical value types are complex numbers, geometric points, and dates. _end rationale]_

Like other types, value types can have fields (static or instance), methods (static, instance, or virtual), properties, events, and nested types. A value of some value type can be converted into an instance of a corresponding reference type (its *boxed form*, a class automatically created for this purpose by the VES when a value type is defined) by a process called *boxing*. A boxed value type can be converted back into its value type representation, the *unboxed form*, by a process called *unboxing*. Value types shall be sealed, and they shall have a base type of either `System.ValueType` or `System.Enum` (see [Partition IV](#todo-missing-hyperlink)). Value types shall implement zero or more interfaces, but this has meaning only in their boxed form (§[II.13.3](#todo-missing-hyperlink)).

Unboxed value types are not considered subtypes of another type and it is not valid to use the `isinst` instruction (see [Partition III](#todo-missing-hyperlink)) on unboxed value types. The `isinst` instruction can be used for boxed value types, however. Unboxed value types shall not be assigned the value *null* and they shall not be compared to *null*.

Value types support layout control in the same way as do reference types (§[II.10.7](#todo-missing-hyperlink)). This is especially important when values are imported from native code.

Since ValueTypes represent direct layout of data, recursive struct definitions such as (in C#) `struct S {S x; S y;}` are not permitted. A struct shall have an acyclic finite **flattening graph**:

For a value type *S*, define the flattening graph *G* of *S* to be the smallest directed graph such that:

 * *S* is in *G*.

 * Whenever *T* is in *G* and *T* has an instance field of value type *X* then *X* is in *G* and there is an edge from *T* to *X*.

 * Whenever *T* is in *G* and *T* has a static field of value type *Y* then *Y* is in *G*.

_[Example:_

 ```csharp
 class C<U> { }
 struct S1<V> {
   S1<V> x;
 }
 struct S2<V> {
   static S2<V> x;
 }
 struct S3<V> {
   static S3<C<V>> x;
 }
 struct S4<V> {
   S4<C<V>>[] x;
 }
 ```

Struct type `S1` has a finite but cyclic flattening graph and is invalid; `S2` has a finite acyclic flattening graph and is valid; `S3` has an infinite acyclic flattening graph and is invalid; `S4` has a finite acyclic flattening graph and is valid because field `S4<C<V>>.x` has reference type, not value type.

The `C<U>` type is not strictly necessary for the examples, but if it were not used, it might be unclear whether something like the following

 ```csharp
 struct S3<V> {
   static S3<S3<V>> x;
 }
 ```

is problematic due to the inner or the outer occurrence of `S3<...>` in the field type. _end example]_
