## II.9.11 Constraints on generic parameters

A generic parameter declared on a generic class or generic method can be *constrained* by one or more types (for encoding, see _GenericParamConstraint_ table in §[II.22.21](ii.22.21-genericparamconstraint-0x2c.md)) and by one or more special constraints (§[II.10.1.7](#todo-missing-hyperlink)). Generic parameters can be instantiated only with generic arguments that are *assignable-to* (§[I.8.7.3](#todo-missing-hyperlink)) (when boxed) each of the declared constraints and that satisfy all specified special constraints.

Generic parameter constraints shall have at least the same visibility as the generic type definition or generic method definition itself.

_[Note:_ There are no other restrictions on generic parameter constraints. In particular, the following uses are valid:

 * Constraints on generic parameters of generic classes can make recursive reference to the generic parameters, and even to the class itself.

   ```ilasm
   .class public Set`1<(class IComparable`1<!0>) T> { … }

   // can only be instantiated by a derived class!
   .class public C`1<(class C<!0>) T> {} 
   .class public D extends C`1<class D> { … } 
   ```

 * Constraints on generic parameters of generic methods can make recursive reference to the generic parameters of both the generic method and its enclosing class (if generic). The constraints can also reference the enclosing class itself.

   ```ilasm
   .class public A`1<T> {
     .method public void M<(class IDictionary<!0,!!0>) U>() {}
   }
   ```

 * Generic parameter constraints can be generic parameters or non-generic types such as arrays.

   ```ilasm
   .class public List`1<T> {
     // The constraint on U is T itself
     .method public void AddRange<(!0) U>(class IEnumerable`1<!!0> items) { … }
   }
   ```

_end note]_

Generic parameters can have multiple constraints: to inherit from at most one base class (if none is specified, the CLI defaults to inheriting from `System.Object`); and to implement zero or more interfaces. (The syntax for using constraints with a class or method is defined in §[II.10.1.7](#todo-missing-hyperlink).)

_[Example:_

The following declaration shows a generic class `OrderedSet<T>`, in which the generic parameter `T` is constrained to inherit both from the class `Employee`, and to implement the interface `IComparable<T>`:

 ```ilasm
 .class OrderedSet`1<(Employee, class [mscorlib]System.IComparable`1<!0>) T> { … }
 ```
 
_end example]_

_[Note:_ Constraints on a generic parameter only restrict the types that the generic parameter may be instantiated with. Verification (see [Partition III](#todo-missing-hyperlink)) requires that a field, property or method that a generic parameter is known to provide through meeting a constraint, cannot be directly accessed/called via the generic parameter unless it is first boxed (see [Partition III](#todo-missing-hyperlink)) or the `callvirt` instruction is prefixed with the `constrained.` prefix instruction (see [Partition III](#todo-missing-hyperlink)). _end note]_
