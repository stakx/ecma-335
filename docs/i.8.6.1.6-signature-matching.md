## I.8.6.1.6 Signature Matching

For signatures other than method signatures two signatures are said to _match_ if and only if every component type of the signature is identical in the two signatures.

Method signature matching is used when determining _hiding_ and _overriding_ (§[I.8.10.2](i.8.10.2-method-inheritance.md), §[I.8.10.4](i.8.10.4-hiding-overriding-and-layout.md)). Two method signatures are said to _match_ if and only if:

 * the calling conventions are identical;
 * both signatures are either static or instance;
 * the number of generic parameters is identical, if the method is generic;
 * for instance signatures the type of the `this` pointer of the overriding/hiding signature is _assignable-to_ (§[I.8.7](i.8.7-assignment-compatibility.md)) the type of the `this` pointer of the overridden/hidden signature;
 * the number and type signatures of the parameters are identical; and
 * the type signatures for the result are identical. _[Note:_ This includes void (§[II.23.2.11](ii.23.2.11-rettype.md)) if no value is returned. _end note]_

_[Note:_ when overriding/hiding the accessibility of items need not be identical (§[I.8.10.2](i.8.10.2-method-inheritance.md), §[I.8.10.4](i.8.10.4-hiding-overriding-and-layout.md)). _end note]_
