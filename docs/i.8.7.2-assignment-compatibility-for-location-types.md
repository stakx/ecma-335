## I.8.7.2 Assignment compatibility for location types

In this section the *compatible-with* relation is extended to deal with managed pointer types.

A location type _T_ is *compatible-with* a location type _U_ if and only if one of the following holds.

 1. _T_ and _U_ are not managed pointer types and _T_ is *compatible-with* _U_ according to the definition in §[I.8.7.1](i.8.7.1-assignment-compatibility-for-signature-types.md).

 2. _T_ and _U_ are both managed pointer types and _T_ is *pointer-element-compatible-with* _U_.

A managed pointer type _T_ is *pointer-element-compatible-with* a managed pointer type _U_ if and only if _T_ has verification type _V_ and _U_ has verification type _W_ and _V_ is identical to _W_.
