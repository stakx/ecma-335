## I.10.7.2 Type names and arity encoding

CLS-compliant generic type names are encoded using the format "*name*\[`` ` ``*arity*\]" , where \[&hellip;\] indicates that the grave accent character "`` ` ``" and *arity* together are optional. The encoded name shall follow these rules:

 1. *name* shall be an ID (see [Partition II](#todo-missing-hyperlink)) that does not contain the "`` ` ``" character.

 2. *arity* is specified as an unsigned decimal number without leading zeros or spaces.

 3. For a normal generic type, *arity* is the number of type parameters declared on the type.

 4. For a nested generic type, *arity* is the number of newly introduced type parameters.

_[Example:_ Consider the following C# source code:

 ```csharp
 public class A<T> {
   public class B {}
   public class C<U,V> {
     public class D<W> {}
   }
 }
 public class X {
   public class Y<T> {}
 }
 ```

The relevant corresponding ILAsm code is:

 ```ilasm
 .class … A`1<T> … {                      // T is introduced
   .class … nested … B<T> … { }           // T is redeclared
   .class … nested … C`2<T,U,V> … {       // T is redeclared; U and V are introduced
     .class … nested … D`1<T,U,V,W> … { } // T, U, and V are redeclared; W is introduced
   }
 }
 .class … X … {
   .class … nested Y`1<T> … { }           // Nothing is redeclared; T is introduced
 }
 ```

A CLS-compliant Framework should expose the following types:

 Lexical Name | Total Generic Parameters | Redeclared Generic Parameters | Introduced Generic Parameters | Metadata Encoding
 ---- | ---- | ---- | ---- | ----
 `A<T>` | 1 (`T`) | 0 | 1 `T` | ``A`1``
 `A<T>.B` | 1 (`T`) | 1 `T` | 0 | `B`
 `A<T>.C<U,V>` | 3 (`T`,`U`,`V`) | 1 `T` | 2 `U`,`V` | ``C`2``
 `A<T>.C<U,V>.D<W>` | 4 (`T`,`U`,`V`,`W`) | 3 `T`,`U`,`V` | 1 `W` | ``D`1``
 `X` | 0 | 0 | 0 | `X`
 `X.Y<T>` | 1 (`T`) | 0 | 1 `T` | ``Y`1``
 
While a type name encoded in metadata does not explicitly mention its enclosing type, the CIL and Reflection type name grammars do include this detail:

 Lexical | Name | Metadata Encoding | CIL Reflection
 ---- | ---- | ---- | ----
 `A<T>` | ``A`1`` <td> ``A`1`` | ``A`1[T]``
 `A<T>.B` | `B` | ``A`1/B`` <td> ``A`1+B[T]``
 `A<T>.C<U,V>` | ``C`2`` <td> ``A`1/C`2`` <td> ``A`1+C`2[T,U,V]``
 `A<T>.C<U,V>.D<W>` | ``D`1`` <td> ``A`1/C`2/D`1`` | ``A`1+C`2+D`1[T,U,V,W]``
 `X` | `X` | `X` | `X`
 `X.Y<T>` | ``Y`1`` <td> ``X/Y`1`` | ``X+Y`1[T]``

_end example]_

> #### CLS Rule 43:
>
> The name of a generic type shall encode the number of type parameters declared on the non-nested type, or newly introduced to the type if nested, according to the rules defined above.
>
> _[Note:_
>
> **CLS (consumer):** Need not consume types that violate this rule.
>
> **CLS (extender):** Same as consumers. Extenders choosing to support definition of generic types shall follow this rule for externally visible types.
>
> **CLS (framework):** Shall not expose types that violate this rule. _end note]_
