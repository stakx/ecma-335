## I.8.7 Assignment compatibility

**Assignment compatibility** refers to the ability to store a value of type *T* (statically described by a type signature) into a location of type *U* (described by a location signature), and is sometimes abbreviated *U* := *T*. Because the type signature for *T* is described statically, the value might not actually be of the type described by the signature, but rather something compatible with that type. No location or value shall have type `System.Void`.

The formal description of assignment compatibility is provided here, and is extended in [Partition III](#todo-missing-hyperlink), Verification type compatibility, with the *verifier-assignable-to* relation.

There are different rules for determining the compatibility of types, depending upon the context in which they are evaluated. The following relations are defined in this section:

 * *compatible-with* &ndash; this is the relation used by `castclass` (§[III.4.3](iii.4.3-castclass.md)) and `isinst` (§[III.4.6](iii.4.6-isinst.md)), and in determining the validity of variant generic arguments. _[Note:_ operations based on this relation do not change the representation of a value. When casting, the source type is the dynamic type of the value. _end note]_

 * *assignable-to* &ndash; this is the relation used for general assignment; including load and store instructions (§[III.3](iii.3-base-instructions.md)), implicit argument coercion (§[III.1.6](iii.1.6-implicit-argument-coercion.md)), and method return (§[III.3.57](iii.3.57-ret.md)). _[Note:_ operations based on this relation may change the representation of a value. When assigning, the source type is the static type of the value. _end note]_

 * *array-element-compatible-with* &ndash; this is the auxiliary relation used to determine the validity of assignments to array elements

 * *pointer-element-compatible-with* &ndash; this is the auxiliary relation used to determine the compatibility of managed pointers

> _Informative text._

These relations are defined in terms of six type subsets:

* *storage types* &ndash; these are the types that can occur as location (§[I.8.6.1.2](#todo-missing-hyperlink)), local (§[I.8.6.1.3](#todo-missing-hyperlink)) and parameter (§[I.8.6.1.4](#todo-missing-hyperlink)) signatures. _[Note:_ method signatures (§[I.8.6.1.5](#todo-missing-hyperlink)) are not included here as there are no method values which can be assigned, delegate types (§[I.8.9.3](i.8.9.3-delegates.md)) are reference types (§[I.8.2.1](i.8.2.1-value-types-and-reference-types.md)) and may occur in the above signatures. _end note]_

 * *underlying types* &ndash; in the CTS enumerations are alternate names for existing types (§[I.8.5.2](i.8.5.2-assemblies-and-scoping.md)), termed their underlying type. Except for signature matching (§[I.8.5.2](i.8.5.2-assemblies-and-scoping.md)) enumerations are treated as their underlying type. This subset is the set of storage types with the enumerations removed.

 * *reduced types* &ndash; a value of value type _S_ can be stored into, or loaded from, an array of value type _T_; and an array of value type _S_ can be assigned to an array of value type _T_; if and only if _S_ and _T_ have the same reduced type. The reduced types are a subset of the underlying types.

 * *verification types* &ndash; the verification algorithm treats certain types as interchangeable, assigning them a common verification type. The verification types are a subset of the reduced types.

 * *intermediate types* &ndash; only a subset of the built-in value types can be represented on the evaluation stack (§[I.12.1](i.12.1-supported-data-types.md)). Values of other built-in value types are translated to/from their intermediate type when loaded onto/stored from the evaluation stack. The intermediate types are a subset of the verification types plus the floating-point type _F_ (which is not a member of the above four subsets).

 * *transient types* &ndash; these are types which can only occur on the evaluation stack: boxed types, controlled-mutability managed pointer types, and the null type. Assignment compatibility for these types is defined by the *verifier-assignable-to* relation defined in §[III.1.8.1.2.3](iii.1.8.1.2.3-verification-type-compatibility.md). The precise definitions of underlying type, reduced type, verification type and intermediate type are given below. 

> _End informative text._

#### Treatment of floating-point types

Floating-point values have two types; the nominal type, and the representation type. There are three floating-point types: `float32`, `float64` and `F`. A value of (nominal) type `float32` or `float64` may be represented by an implementation using a value of type `F`. See §[I.12.1.3](i.12.1.3-handling-of-floating-point-data-types.md) for complete details. Unless explicitly indicated any reference to floating-point types refers to the nominal type, in particular when referring to signatures (§[I.8.6.1](i.8.6.1-signatures.md)) and assignment compatibility. Consequently when the assignment compatibility rules indicate that a floating-point representation may change based on the (nominal) types the representation types may already be the same and no change is actually performed.

#### Notation

In the following definitions and relations:

 * _S_, _T_, _U_, _V_, _W_ represent arbitrary type expressions;

 * _N_, _M_ represent declared type names; and

 * _X_, _Y_ represent declared (formal) type parameters.

The notation:

_T_ is of the form _N_\<{_X_<sub>_i_</sub> &larr; _T_<sub>i</sub>}\>

is defined to mean:

_T_ is a possibly-instantiated object, interface, delegate or value type of the form _N_\<_T_<sub>1</sub>,&hellip;,_T_<sub>_n_</sub>>, _n_ &ge; 0 (for _n_ = 0 the empty \<\> are omitted), and _N_ is declared with generic parameters _X_<sub>1</sub>,&hellip;,_X_<sub>_n_</sub>

#### Definitions

The following definitions are used in defining assignment compatibility.

The *underlying type* of a type _T_ is the following:

 1. If _T_ is an enumeration type, then its underlying type is the underlying type declared in the enumeration's definition.

 2. Otherwise, the underlying type is itself.

The *reduced type* of a type _T_ is the following:

 1. If the underlying type of _T_ is:

     1. `int8`, or `unsigned int8`, then its reduced type is `int8`.

     2. `int16`, or `unsigned int16`, then its reduced type is `int16`.

     3. `int32`, or `unsigned int32`, then its reduced type is `int32`.

     4. `int64`, or `unsigned int64`, then its reduced type is `int64`.

     5. `native int`, or `unsigned native int`, then its reduced type is `native int`.

 2. Otherwise, the reduced type is itself.

_[Note:_ in other words the reduced type ignores the semantic differences between enumerations and the signed and unsigned integer types; treating these types the same if they have the same number of bits. _end note]_

The *verification type* (§[III.1.8.1.2.1](iii.1.8.1.2.1-verification-types.md)) of a type *T* is the following:

 1. If the reduced type of _T_ is:

     1. `int8` or `bool`, then its verification type is `int8`.

     2. `int16` or `char`, then its verification type is `int16`.

     3. `int32` then its verification type is `int32`.

     4. `int64` then its verification type is `int64`.

     5. `native int`, then its verification type is `native int`.

 2. If _T_ is a managed pointer type _S_`&` and the reduced type of _S_ is:

     1. `int8` or `bool`, then its verification type is `int8&`.

     2. `int16` or `char`, then its verification type is `int16&`.

     3. `int32`, then its verification type is `int32&`.

     4. `int64`, then its verification type is `int64&`.

     5. `native int`, then its verification type is `native int&`.

 3. Otherwise, the verification type is itself.

_[Note:_ in other words the verification type ignores the semantic differences between enumerations, characters, booleans, the signed and unsigned integer types, and managed pointers to any of these; treating these types the same if they have the same number of bits or point to types with the same number of bits. _end note]_

The *intermediate type* of a type _T_ is the following:

 1. If the verification type of _T_ is `int8`, `int16`, or `int32`, then its intermediate type is `int32`.

 2. If the verification type of _T_ is a floating-point type then its intermediate type is `F` (§[III.1.1.1](iii.1.1.1-numeric-data-types.md)).

 3. Otherwise, the intermediate type is the verification type of `T`.

_[Note:_ the *intermediate type* is similar to the *verification type* in stack state according to the table in [III.1.8.1.2.1](#todo-missing-hyperlink), differing only for floating-point types. The *intermediate type* of a type _T_ may have a different representation and meaning than _T_. _end note]_

The *direct base class* of a type _T_ is the following:

 1. If _T_ is an array type (zero-based single-dimensional, or general) then its direct base class is `System.Array`.

 2. If _T_ is an interface type, then its direct base class is `System.Object`.

 3. If _T_ is of the form _N_\<{_X_<sub>_i_</sub> &larr; _T_<sub>_i_</sub>}\>, and _N_ is declared to extend a type _U_ of the form _M_\<{_Y_<sub>_j_</sub> &larr; _S_<sub>_j_</sub>}\>, then the direct base class of _T_ is _U_ with any occurrence of _X_<sub>1</sub>,&hellip;,_X_<sub>_n_</sub> in _S_<sub>1</sub>,&hellip;,_S_<sub>_m_</sub> replaced by the corresponding _T_<sub>1<sub>,&hellip;,_T_<sub>_n_<sub>.

 4. For any other form of type _T_, there is no direct base class.

_[Note:_ as a result of this definition, only `System.Object` itself, the unboxed form of a value type, and generic parameters have no direct base class. _end note]_

The *interfaces directly implemented* by a type _T_ are the following:

 1. If _T_ is of the form _N_\<{_X_<sub>_i_</sub> &larr; _T_<sub>_i_</sub>}\> and is declared to implement (or require implementation of, if _N_ is an interface) interfaces _U_<sub>1</sub>,&hellip;,_U_<sub>_m_</sub> of the form _M_<sub>_j_</sub>\<{_Y_<sub>_j_,_k_</sub> &larr; _S_<sub>_j_,_k_</sub>}\>, then the interfaces directly implemented by _T_ are _U_<sub>1</sub>,&hellip;,_U_<sub>_m_</sub> with any occurrence of _X_<sub>_i_</sub> in _S_<sub>_j_,_k_</sub> replaced by the corresponding _T_<sub>_i_</sub>.

 2. For any other form of type _T_, there are no directly implemented interfaces.

A type _T_ is a reference type if and only if one of the following holds.

 1. _T_ is a possibly-instantiated object, delegate or interface of the form _N_\<_T_<sub>1</sub>,&hellip;,_T_<sub>_n_</sub>\> (_n_ &ge; 0)

 2. _T_ is an array type

_[Note:_ generic parameters are not reference types. Therefore, the compatibility rules for reference types do not apply. See the definition of verification compatibility in [Partition III](#todo-missing-hyperlink) for the special case of boxed types. _end note]_

For the purpose of type compatibility when determining a type from a signature:

 1. Any byref (`&`) constraint (§[I.8.6.1.3](#todo-missing-hyperlink)) is considered part of the type;
 
 2. The special signature typed reference (§[I.8.6.1.3](#todo-missing-hyperlink)) is the type **typedref**;

 3. Any **modopt**, **modreq**, or **pinned** modifiers are ignored; and

 4. Any calling convention is considered part of the type.

_[Note:_ the literal constraint is not considered as fields so marked cannot be referenced from CIL (§[I.8.6.1.2](#todo-missing-hyperlink)). _end note]_
