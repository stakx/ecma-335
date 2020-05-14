## III.1.8.1.2.3 Verification type compatibility

Verification type compatibility is defined in terms of assignment compatibility (see §[I.8.7](i.8.7-assignment-compatibility.md)).

A type `Q` is *verifier-assignable-to* `R` (sometimes written `R` := `Q`) if and only if `T` is the verification type of `Q`, and `U` is the verification type of `R`, and at least one of the following holds:

 1. `T` is identical to `U`. _[Note:_ this is reflexivity for verification type compatibility._]_

 2. There exists some `V` such that `T` is *verifier-assignable-to* `V` and `V` is *verifier-assignable-to* `U`. _[Note:_ this is transitivity for verification type compatibility._]_

 3. `T` is *assignable-to* `U` according to the rules in §[I.8.7.3](#todo-missing-hyperlink).

 4. `T` is a controlled-mutability managed pointer type to type `V` and `U` is a controlled-mutability managed pointer type to type `W` and `V` is *pointer-element-assignable-to* `W`.

 5. `T` is a managed pointer type `V&` and `U` is a controlled-mutability managed pointer type to type `W` and `V` is *pointer-element-assignable-to* `W`.

 6. `T` is boxed `V` and `U` is the immediate base class of `V`.

 7. `T` is boxed `V` and `U` is an interface directly implemented by `V`.

 8. `T` is boxed `X` for a generic parameter `X` and `V` is a generic constraint declared on parameter `X`.

 9. `T` is the null type, and `U` is a reference type.

_[Note:_ verifier-assignable-to extends assignable-to to deal with types that can occur only on the stack, namely boxed types, controlled-mutability managed pointer types, and the null type. _end note]_

In the remainder of [Partition III](#todo-missing-hyperlink), the use of the notation "`U` := `T`" is sometimes used to mean `T` is *verifier-assignable-to* `U`.