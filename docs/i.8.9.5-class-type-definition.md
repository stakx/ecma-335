## I.8.9.5 Class type definition

All types other than interfaces and those types for which a definition is automatically supplied by the CTS, are defined by **class definitions**. A **class type** is a complete specification of the representation of the values of the class type and all of the contracts (class, interface, method, property, and event) that are supported by the class type. Hence, a class type is an exact type. Unless it specifies that the class is an **abstract object type**, a class definition not only defines the class type, it also provides implementations for all of the contracts supported by the class type.

A class definition, and hence the implementation of the class type, always resides in some assembly. (An assembly is a configured set of loadable code modules and other resources that together implement a unit of functionality.)

_[Note:_ While class definitions always define class types, not all class types require a class definition. Array types and pointer types, which are implicitly defined, are also class types. See §[I.8.2.3](#todo-missing-hyperlink). _end note]_

An explicit class definition is used to define:

 * An object type (see §[I.8.2.3](i.8.2.3-classes-interfaces-and-objects.md)).

 * A value type and its associated boxed type (see §[I.8.2.4](i.8.2.4-boxing-and-unboxing-of-values.md)).

An explicit class definition:

 * Names the class type.

 * Implicitly assigns the class type name to a scope, i.e., the assembly that contains the class definition, (see §[I.8.5.2](i.8.5.2-assemblies-and-scoping.md)).

 * Defines the class contract of the same name (see §[I.8.6](i.8.6-contracts.md)).

 * Defines the representations and valid operations of all values of the class type using member definitions for the fields, methods, properties, and events (see §[I.8.11](#todo-missing-hyperlink)).

 * Defines the static members of the class type (see §[I.8.11](#todo-missing-hyperlink)).

 * Specifies any other interface and class contracts also supported by the class type.

 * Supplies implementations for member and interface contracts supported by the class type.

 * Explicitly declares a visibility for the type, either public or assembly (see §[I.8.5.3](i.8.5.3-visibility-accessibility-and-security.md)).

 * Can optionally specify a method (called `.cctor`) to be called to initialize the type.

The semantics of when and what triggers execution of such type initialization methods, is as follows:

 1. A type can have a type-initializer method, or not.

 2. A type can be specified as having a relaxed semantic for its type-initializer method (for convenience below, we call this relaxed semantic **BeforeFieldInit**).

 3. If marked **BeforeFieldInit** then the type's initializer method is executed at, or sometime before, first access to any static field defined for that type.

 4. If *not* marked **BeforeFieldInit** then that type's initializer method is executed at (i.e., is triggered by):

     1. first access to any static field of that type, or

     2. first invocation of any static method of that type, or

     3. first invocation of any instance or virtual method of that type if it is a value type or

     4. first invocation of any constructor for that type.

 5. Execution of any type's initializer method will not trigger automatic execution of any initializer methods defined by its base type, nor of any interfaces that the type implements.

For reference types, a constructor has to be called to create a non-null instance. Thus, for reference types, the `.cctor` will be called before instance fields can be accessed and methods can be called on non-null instances. For value types, an "all-zero" instance can be created without a constructor (but only this value can be created without a constructor). Thus for value types, the `.cctor` is only guaranteed to be called for instances of the value type that are not "all-zero". _[Note:_ This changes the semantics slightly in the reference class case from the first edition of this standard, in that the `.cctor` might not be called before an instance method is invoked if the 'this' argument is null. The added performance of avoiding class constructors warrants this change. _end note]_

_[Note:_ **BeforeFieldInit** behavior is intended for initialization code with no interesting sideeffects, where exact timing does not matter. Also, under **BeforeFieldInit** semantics, type initializers are allowed to be executed at or before first access to any static field of that type, at the discretion of the CLI. If a language wishes to provide more rigid behavior&mdash;e.g., type initialization automatically triggers execution of base class's initializers, in a top-to-bottom order&mdash;then it can do so by either:

 * defining hidden static fields and code in each class constructor that touches the hidden static field of its base class and/or interfaces it implements, or

 * by making explicit calls to `System.Runtime.CompilerServices.RuntimeHelpers.RunClassConstructor` (see [Partition IV Library](#todo-missing-hyperlink)). _end note]_
