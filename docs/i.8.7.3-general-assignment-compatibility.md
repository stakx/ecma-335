## I.8.7.3 General assignment compatibility

In this section the relation *assignable-to* is defined which extends *compatible-with* to cover the primitive value type assignments supported by the semantics of the various load and store instructions (§[III.3](iii.3-base-instructions.md)), implicit argument coercion (§[III.1.6](iii.1.6-implicit-argument-coercion.md)), and method return (§[III.3.57](iii.3.57-ret.md)).

A location type T is *assignable-to* a location type _U_ if one of the following holds:

 1. _T_ is identical to _U_. _[Note:_ this is *reflexivity*. _end note]_

 2. There exists some _V_ such that _T_ is *assignable-to* _V_ and _V_ is *assignable-to* _U_. _[Note:_ this is *transitivity*. _end note]_

 3. _T_ has intermediate type _V_, _U_ has intermediate type _W_, and _V_ is identical to _W_.

 4. _T_ has intermediate type `native int` and _U_ has intermediate type `int32`, or vice-versa.

 5. _T_ is *compatible-with* _U_.

_[Note:_ an assignment governed by *assignable-to* which involves an application of rules that use the intermediate type may change the representation and meaning of the assigned value as it is translated to and then from the intermediate type. _end note]_
