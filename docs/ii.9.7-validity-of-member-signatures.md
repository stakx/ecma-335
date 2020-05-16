## II.9.7 Validity of member signatures

To achieve type safety, it is necessary to impose additional requirements on the well-formedness of signatures of members of covariant and contravariant generic types.

> _This block contains only informative text._

 * Covariant parameters can only appear in "producer," "reader," or "getter" positions in the type definition; i.e., in

     * result types of methods

     * inherited interfaces

 * Contravariant parameters can only appear in "consumer," "writer," or "setter" positions in the type definition; i.e., in

     * argument types of methods

 * NonVariant parameters can appear anywhere.

> _End informative text._

We now define formally what it means for a co/contravariant generic type definition to be valid.

**Generic type definition:** A generic type definition _G_\<_var_<sub>1</sub> _T_<sub>1</sub>, &hellip;, _var_<sub>_n_</sub> _T_<sub>_n_</sub>\> is valid if _G_ is an interface or delegate type, and each of the following holds, given _S_ = \<_var_<sub>1</sub> _T_<sub>1</sub>, &hellip;, _var_<sub>_n_</sub> _T_<sub>_n_</sub>\>, where _var_<sub>_n_</sub> is `+`, `-`, or nothing:

 * Every instance method and virtual method declaration is valid with respect to _S_

 * Every inherited interface declaration is valid with respect to _S_

 * There are no restrictions on static members, instance constructors, or on the type's own generic parameter constraints.

Given the annotated generic parameters _S_ = \<_var_<sub>1</sub> _T_<sub>1</sub>, &hellip;, _var_<sub>_n_</sub> _T_<sub>_n_</sub>\>, we define what it means for various components of the type definition to be valid with respect to _S_. We define a negation operation on annotations, written -_S_, to mean "flip negatives to positives, and positives to negatives". Think of

 * "valid with respect to _S_" as "behaves covariantly"

 * "valid with respect to &not;_S_" as "behaves contravariantly"

 * "valid with respect to S and to &not;_S_" as "behaves non-variantly".

Note that the last of these has the effect of prohibiting covariant and contravariant parameters from a type; i.e., all generic parameters appearing shall be non-variant.

**Methods.** A method signature _t_ _meth_(_t_<sub>1</sub>, &hellip;, _t_<sub>_n_</sub>) is valid with respect to _S_ if

 * its result type signature _t_ is valid with respect to _S_; and

 * each argument type signature _t_<sub>_i_</sub> is valid with respect to &not;_S_.

 * each method generic parameter constraint type _t_<sub>_j_</sub> is valid with respect to &not;_S_.

_[Note:_ In other words, the result behaves covariantly and the arguments behave contravariantly. Constraints on generic parameters also behave contravariantly. _end note]_

**Type signatures.** A type signature _t_ is valid with respect to _S_ if it is

 * a non-generic type (e.g., an ordinary class or value type)

 * a generic parameter _T_<sub>_i_</sub> for which _var_<sub>_i_</sub> is `+` or none (i.e., it is a generic parameter that is marked covariant or non-variant)

 * an array type _u_[] and _u_ is valid with respect to _S_; i.e., array types behave covariantly

 * a closed generic type _G_\<_t_<sub>1</sub>,&hellip;,_t_<sub>_n_</sub>\> for which each

     * _t_<sub>i</sub> is valid with respect to _S_, if the _i_'th parameter of _G_ is declared covariant

     * _t_<sub>_i_</sub> is valid with respect to &not;_S_, if the _i_'th parameter of _G_ is declared contravariant

     * _t_<sub>_i_</sub> is valid with respect to _S_ and with respect to &not;_S_, if the _i_'th parameter of _G_ is declared non-variant.
