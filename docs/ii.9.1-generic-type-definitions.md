## II.9.1 Generic type definitions

A generic type definition is one that includes generic parameters. Each such generic parameter can have a name and an optional set of constraints&mdash;types which generic arguments shall be *assignable-to* (§[I.8.7.3](#todo-missing-hyperlink)). Optional variance notation is also permitted (§[II.10.1.7](#todo-missing-hyperlink)). (For an explanation of the `!` and `!!` notation used below, see §[II.9.4](ii.9.4-instantiating-generic-types.md)) The generic parameter is in scope in the declarations of:

 * its constraints (e.g., ``.class … C`1<(class IComparable`1<!0>) T>)``

 * any base class from which the type-under-definition derives (e.g., ``.class … MultiSet`1<T> extends class Set`1<!0[]>``)

 * any interfaces that the type-under-definition implements (e.g., ``.class … Hashtable`2<K,D> implements class IDictionary`2<!0,!1>``)

 * all members (instance and static fields, methods, constructors, properties and events) except nested classes. _[Note:_ C# allows generic parameters from an enclosing class to be used in a nested class, but adds any required extra generic parameters to the nested class definition in metadata. _end note]_

A generic type definition can include static, instance, and virtual methods.

Generic type definitions are subject to the following restrictions:

 * A generic parameter, on its own, cannot be used to specify the base class, or any implemented interfaces. So, for example, ``.class … G`1<T> extends !0`` is invalid. However, it is valid for the base class, or interfaces, to use that generic parameter when nested within another generic type. For example, ``.class … G`1<T> extends class H`1<!0>`` and ``.class … G`1<T> extends class B`2<!0,int32>`` are valid.
 
    _[Rationale:_ This permits checking that generic types are valid at definition time rather than at instantiation time. e.g., in ``.class … G`1<T> extends !0``, we do not know what methods would override what others because no information is available about the base class; indeed, we do not even know whether `T` is a class: it might be an array or an interface.  Similarly, for ``.class … C`2<(!1)T,U>`` where we are in the same situation of knowing nothing about the base class/interface definition. _end rationale]_

 * Varargs methods cannot be members of generic types
 
    _[Rationale:_ Implementing this feature would take considerable effort.  Since varargs has very limited use among languages targetting the CLI, it was decided to exclude varargs methods from generic types. _end rationale]_

 * When generic parameters are ignored, there shall be no cycles in the inheritance/interface hierarchy. To be precise, define a graph whose nodes are possibly-generic (but open) classes and interfaces, and whose edges are the following:

     * If a (possibly-generic) class or interface _D_ extends or implements a class or interface _B_, then add an edge from _D_ to _B_.

     * If a (possibly-generic) class or interface _D_ extends or implements an instantiated class or interface _B_\<_type-1_, &hellip;, _type-n_\>, then add an edge from _D_ to _B_.

     * The graph is valid if it contains no cycles.

   _[Note:_ This algorithm is a natural generalization of the rules for non-generic types. See [Partition I, §8.9.9](#todo-missing-hyperlink) _end note]_
