## II.9 Generics

As mentioned in [Partition I](#todo-missing-hyperlink), generics allows a whole family of types and methods to be defined using a pattern, which includes placeholders called generic parameters. These generic parameters are replaced, as required, by specific types, to instantiate whichever member of the family is actually required. For example, `class List<T>{}`, represents a whole family of possible `List`s; `List<string>`, `List<int>` and `List<Button>` are three possible instantiations; however, as we'll see below, the CLS-compliant names of these types are really class ``List`1<T>``, ``List`1<string>``, ``List`1<int>``, and ``List`1<Button>``.

A generic type consists of a name followed by a `<…>`-delimited list of generic parameters, as in `C<T>`. Two or more generic types shall not be defined with the same name, but different numbers of generic parameters, in the same scope. However, to allow such overloading on generic arity at the source language level, CLS Rule 43 is defined to map generic type names to unique CIL names. That Rule states that the CLS-compliant name of a type `C` having one or more generic parameters, shall have a suffix of the form `` ` ``_n_, where _n_ is a decimal integer constant (without leading zeros) representing the number of generic parameters that `C` has. For example: the types `C`, `C<T>`, and `C<K,V>` have CLS-compliant names of `C`, ``C`1<T>``, and ``C`2<K,V>``, respectively. _[Note:_ The names of all standard library types are CLS-compliant; e.g., ``System.Collections.Generic.IEnumerable`1<T>``. _end note]_

Before generics is discussed in detail, here are the definitions of some new terms:

 * ``public class List`1<T> {}`` is a *generic type definition*.

 * `<T>` is a generic parameter list, and `T` is a generic parameter.

 * ``List`1<T>`` is a *generic type*; it is sometimes termed a *generic type*, or *open generic type* because it has at least one generic parameter. This partition will use the term *open type*.

 * ``List`1<int>`` is a *closed generic type* because it has no unbound generic parameters. (It is sometimes called an *instantiated* generic type or a generic type *instantiation*). This partition will use the term *closed type*.

 * Note that generics includes generic types which are neither strictly open nor strictly closed; e.g., the base class `B`, in: ``.public class D`1<V> extends B`2<!0,int32> {}``, given ``.public class B`2<T,U> {}``.

 * If a distinction need be made between generic types and ordinary types, the latter are referred to as *non-generic types*.

 * `<int>` is a generic argument list, and `int` is a generic argument.

 * This standard maintains the distinction between generic parameters and generic arguments. If at all possible, use the phrase "`int` is the type used for generic parameter `T`" when speaking of ``List`1<int>``. (In Reflection, this is sometimes referred to as "`T` is bound to `int`")

 * "`(C1, …, Cn) T`" is a _generic parameter constraint_ on the generic parameter `T`.

_[Note:_ Conside the following definition:

 ```ilasm
 class C`2<(I1,I2) S, (Base,I3) T> { … }
 ```

This denotes a class called `C`, with two generic parameters, `S` and `T`. `S` is constrained to implement two interfaces, `I1` and `I2`. `T` is constrained to derive from the class `Base`, and also to implement the interface `I3`. _end note]_

Within a generic type definition, its generic parameters are referred to by their index. Generic parameter zero is referred to as `!0`, generic parameter one as `!1`, and so on. Similarly, within the body of a generic method definition, its generic parameters are referred to by their index; generic parameter zero is referred to as `!!0`, generic parameter one as `!!1`, and so on.
