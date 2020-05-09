## I.10.7.1 Nested type parameter re-declaration

Any type exported by a CLS-compliant framework, that is nested in a generic type, itself declares, by position, all the generic parameters of that enclosing type. (The nested type can also introduce new generic parameters.) As such, any CLS-compliant type nested inside a generic type is itself generic. Such redeclared generic parameters shall precede any newly introduced generic parameters. _[Example:_ Consider the following C# source code:

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

 ```il
 .class … A`1<T> … {                       // T is introduced
   .class … nested … B<T> … { }            // T is redeclared
   .class … nested … C`2<T,U,V> … {        // T is redeclared; U and V are introduced
     .class … nested … D`1<T,U,V,W> … { }  // T, U, and V are redeclared; W is introduced
   }
 }
 .class … X … {
   .class … nested Y`1<T> … { }            // Nothing is redeclared; T is introduced
 }
 ```

As generic parameter re-declaration is based on parameter position matching, not on parameter name matching, the name of a redeclared generic parameter need not be the same as the one it redeclares. For example:

 ```il
 .class … A`1<T> … {                          // T is introduced
   .class … nested … B<Q> … { }               // T is redeclared (as Q)
   .class … nested … C`2<T1,U,V> … {          // T is redeclared (as T1); U and V are introduced
     .class … nested … D`1<R1,R2,R3,W> … { }  // T1, U, and V are redeclared (as R1, R2, and R3); W is introduced
   }
 }
 ```

A CLS-compliant Framework should therefore expose the following types:

 Lexical Name | Total Generic Parameters | Redeclared Generic Parameters | Introduced Generic Parameters 
 ---- | ---- | ---- | ----
 `A<T>` | 1 (`T`) | 0 | 1 `T`
 `A<T>.B` | 1 (`T`) | 1 `T` | 0
 `A<T>.C<U,V>` | 3 (`T`,`U`,`V`) | 1 `T` | 2 `U`,`V`
 `A<T>.C<U,V>.D<W>` | 4 (`T`,`U`,`V`,`W`) | 3 `T`,`U`,`V` | 1 `W`
 `X` | 0 | 0 | 0
 `X.Y<T>` | 1 (`T`) | 0 | 1 `T`

_end example]_

 > #### CLS Rule 42:
 > 
 > Nested types shall have at least as many generic parameters as the enclosing type. Generic parameters in a nested type correspond by position to the generic parameters in its enclosing type.
 >
 > _[Note:_
 >
 > **CLS (consumer):** Need not consume types that violate this rule.
 >
 > **CLS (extender):** Same as consumers. Extenders choosing to support definition of types nested in generic types shall follow this rule for externally visible types.
 >
 > **CLS (framework):** Shall not expose types that violate this rule. _end note]_
