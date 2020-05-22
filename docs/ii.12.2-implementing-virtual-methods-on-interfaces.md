## II.12.2 Implementing virtual methods on interfaces

Classes that implement an interface (§[II.12.1](ii.12.1-implementing-interfaces.md)) are required to provide implementations for the **abstract** virtual methods defined by that interface. There are three mechanisms for providing this implementation:

 * Directly specifying an implementation, using the same name and signature as appears in the interface.

 * Inheritance of an existing implementation from the base type.

 * Use of an explicit _MethodImpl_ (§[II.15.1.4](ii.15.1.4-method-implementations.md)).

Where there are multiple implementations for a given interface method due to differences in type parameters, the declaration order of the interfaces on the class determines which method is invoked, as well as the order in which the methods are declared. The following terms are used in the specification for interface method invocation (see Example in §[12.2.1](#todo-missing-hyperlink)):

 * For the type _T_ implements _I_<sub>1</sub>,&hellip;,_I_<sub>_n_</sub>, _n_ ≥ 0 the _I_<sub>_x_</sub> are termed the **explicit interfaces** of the type and form an ordered list; the _I_<sub>_x_</sub> are the interfaces listed in the _InterfaceImpl_ (§[22.23](ii.22.23-interfaceimpl-0x09.md)) table entries for _T_, ordered by row top-to-bottom.

 * The **inheritance/implements tree** for a type _T_ is the _n_-ary tree formed as follows:

     * The root of the tree is _T_

     * If _T_ derives from _S_; i.e. its _Extends_ field references _S_ (§[22.37](#todo-missing-hyperlink)); then the first child of the root node is the inheritance/implements tree of the type _S_.

     * If _T_ has one or more explicit interfaces, _I_<sub>_x_</sub>, then the inheritance/implements tree for each _I_<sub>_x_</sub> is a child of the root node, in order.

 * The **type declaration order** of the interfaces and super classes of a type _T_ is the postorder depth-first traversal of the inheritance/implements tree of type _T_ with any second and subsequent duplicates of any type omitted. Occurrences of the same interface with different type parameters are not considered duplicates. _[Note:_ a class may provide multiple implementations of the same interface, by specifying different generic arguments. This may result in a list of methods for the same interface method. _end note]_

 * The **method declaration order** of methods for a type _T_ is the method declaration order of its base type, if any, followed by the non-overriding methods of _T_, in top-to-bottom order as they are listed in the _MethodDef_ table (§[22.26](ii.22.26-methoddef-0x06.md)) of _T_.

The VES shall use the following algorithm to determine the appropriate implementation of an interface's virtual abstract methods on the open form of the class:

 * Create an interface table that has an empty list for each virtual method defined by the interface.

 * If the interface is an **explicit interface** of this class:

     * If the class defines any **public virtual** methods whose name and signature match a virtual method on the interface, then add these to the list for that method, in type declaration order (see above). _[Note:_ For an example where the order is relevant, see Case 6 in §[12.2.1](#todo-missing-hyperlink). _end note]_

     * If there are any public **virtual** methods available on this class (directly or inherited) having the same name and signature as the interface method, and whose generic type parameters do not exactly match any methods in the existing list for that interface method for this class or any class in its inheritance chain, then add them (in **type declaration order**) to the list for the corresponding methods on the interface.

     * If there are multiple methods with the same name, signature and generic type parameters, only the last such method in **method declaration order** is added to the list. _[Note:_ For an example of duplicate methods, see Case 4 in §[12.2.1](#todo-missing-hyperlink). _end note]_
     
     * Apply all *MethodImpl*s that are specified for this class, placing explicitly specified virtual methods into the interface list for this method, in place of those inherited or chosen by name matching that have identical generic type parameters. If there are multiple methods for the same interface method (i.e. with different generic type parameters), place them in the list in **type declaration order** of the associated interfaces.

     * If the current class is not **abstract** and there are any interface methods that still have empty slots (i.e. slots with empty lists) for this class and all classes in its inheritance chain, then the program is invalid.

When an interface method is invoked, the VES shall use the following algorithm to determine the appropriate method to call:

 * Beginning with the runtime class of the instance through which the interface method is invoked, using its interface table as constructed above, and substituting generic arguments, if any, specified on the invoking class: 

    1. For each method in the list associated with the interface method, if there exists a method whose generic type arguments match exactly for this instantiation (or there are no generic type parameters), then call the first method. _[Note:_ there may be duplicates in the list, once the generic arguments are substituted, in which case the first matching method is invoked. _end note]_

    2. Otherwise, if there exists a method in the list whose generic type parameters have the correct variance relationship, then call the first such method in the list.

    3. If no method is found in this class, return to step 1 with the next class in the inheritance chain (i.e. the _Extends_ field of the current class)

    4. If no method is found, then raise `System.InvalidCastException`

_[Note:_ In the presence of generic type parameters, it is possible for a method on a class which implicitly implements an interface to take precedence over a base type which explicitly implements the interface, in the case where the generic type arguments match only upon full instantiation. For an example, see Case 3 in §[12.2.1](#todo-missing-hyperlink). _end note]_

_[Note:_ In the presence of variant interfaces, it is possible for a method on a class which matches by variance to take precedence over a method in a base type which matches exactly. For an example, see Case 5 in §[12.2.1](#todo-missing-hyperlink). _end note]_

_[Note:_ It is possible for a type to provide multiple implementations of the same interface, with the same generic parameters.  In this case, it is the order of declaration that determines which implementation is used for the invocation of an interface method.  This means that changing declaration order can change the behavior. For an example, see Case 6 in §[12.2.1](#todo-missing-hyperlink). _end note_].
