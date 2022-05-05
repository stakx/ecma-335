## I.8.7.1 Assignment compatibility for signature types

A signature type T is *compatible-with* a signature type _U_ if and only if at least one of the following holds. [Formally, the *compatible-with* relation is the smallest relation that is closed under the following rules.]

 1. _T_ is identical to _U_. _[Note:_ this is *reflexivity*. _end note]_

 2. There exists some _V_ such that _T_ is *compatible-with* _V_ and _V_ is *compatible-with* _U_. _[Note:_ this is *transitivity*. _end note]_

 3. _T_ is a reference type, and _U_ is the direct base class of _T_.

 4. _T_ is a reference type, and _U_ is an interface directly implemented by _T_.

 5. _T_ is a zero-based rank-1 array _V_[], and _U_ is a zero-based rank-1 array _W_[], and _V_ is *array-element-compatible-with* _W_.

 6. _T_ is an array with rank _r_ and element type _V_, and _U_ is an array with the same rank _r_ and element type _W_, and _V_ is *array-element-compatible-with* _W_.

 7. _T_ is a zero-based rank-1 array _V_[], and _U_ is `IList<W>`, and _V_ is *array-element-compatible-with* _W_.

 8. _T_ is _D_\<_T_<sub>1</sub>,&hellip;,_T_<sub>_n_</sub>\> and _U_ is _D_\<_U_<sub>1</sub>,&hellip;,_U_<sub>_n_</sub>\> for some interface or delegate type _D_ with variance declarations _var_<sub>1</sub> to _var_<sub>_n_</sub>, and for each _i_ from 1 to _n_, one of the following holds:

     1. _var_<sub>_i_</sub> = none (no variance), and _T_<sub>_i_</sub> is identical to _U_<sub>_i_</sub>

     2. _var_<sub>_i_</sub> = + (covariance), and _T_<sub>_i_</sub> is *compatible-with* _U_<sub>_i_</sub>

     3. _var_<sub>_i_</sub> = - (contravariance), and _U_<sub>_i_</sub> is *compatible-with* _T_<sub>_i_</sub>

 9. _T_ and _U_ are method signatures and _T_ is *method-signature-compatible-with* _U_.

A signature type _T_ is *array-element-compatible-with* a signature type _U_ if and only if _T_ has underlying type _V_ and _U_ has underlying type _W_ and either:

 1. _V_ is *compatible-with* _W_; or

 2. _V_ and _W_ have the same reduced type.

_[Note:_ in other words, *array-element-compatible-with* extends *compatible-with* but is agnostic with respect to enumerations and integral signed-ness. _end note]_

_[Note:_ When _W_[] is *compatible-with* _V_[] and _V_ and _W_ have the same reduced type then no representation change from _V_ to _W_ shall be performed, rather the bits of the value shall be interpreted according to the type _W_ rather than the type _V_ (§[III.1.1.1](iii.1.1.1-numeric-data-types.md)). _end note]_

_[Note:_ Variance rules do not mirror the reduced type equivalence rules of *array-element-compatible-with*. Thus, for example by rule 7 above:

 ```
 IList<int16> := int16[]
 IList<uint16> := int16[]
 ```

But by rule 8 above:

 ```
 IList<int16> :≠ IList<uint16>
 ```

_end note]_

A method signature type _T_ is *method-signature-compatible-with* a method signature type _U_ if and only if:

 1. For each signature, independently, if the signature is for an instance method it carries the type of this. _[Note:_ This is always true for the signatures of instance method pointers produced by the `ldftn` (§[III.3.41](iii.3.41-ldftn.md)) and `ldvirtftn` (§[III.4.18](iii.4.18-ldvirtftn.md)) instructions. However, variables (as opposed to methods) whose signatures specified in the metadata have `HASTHIS` set with `EXPLICITTHIS` being set cannot be used in verified code and are unsupported by *method-signature-compatible-with*. _end note]_

 2. The calling conventions of _T_ and _U_ shall match exactly, ignoring the distinction between static and instance methods (i.e., the this parameter, if any, is not treated specially).

 3. For each parameter type of _P_ of _T_, and corresponding type _Q_ of _U_, _P_ is *assignable-to* _Q_.

 4. For the return type _P_ of _T_, and return type _Q_ of _U_, _Q_ is *assignable-to* _P_.
