## II.9.8 Signatures and binding

Members (fields and methods) of a generic type are referenced in CIL instructions using a metadata token, which specifies an entry in the _MemberRef_ table (§[II.22.25](ii.22.25-memberref-0x0a.md)). Abstractly, the reference consists of two parts:

 1. The type in which the member is declared, in this case, an instantiation of the generic type definition. For example: ``IComparer`1<String>``.

 2. The name and generic (uninstantiated) signature of the member. For example: ``int32 Compare(!0,!0)``.

It is possible for distinct members to have identical types when instantiated, but which can be distinguished by _MemberRef_.

_[Example:_

 ```ilasm
 .class public C`2<S,T> {
   .field string f
   .field !0 f
   .method instance void m(!0 x) {...}
   .method instance void m(!1 x) {...}
   .method instance void m(string x) {...}
 }
 ```

The closed type ``C`2<string,string>`` is valid: it has three methods called `m`, all with the same parameter type; and two fields called `f` with the same type. They are all distinguished through the _MemberRef_ encoding described above:

 ```
 string C`2<string, string>::f
 !0  C<string, string>::f
 void C`2<string, string>::m(!0)
 void C`2<string, string>::m(!1)
 void C`2<string, string>::m(string)
 ```

The way in which a source language might resolve this kind of overloading is left to each individual language. For example, many might disallow such overloads. _end example]_
