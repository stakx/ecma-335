## I.10.7.5 Frameworks and accessibility of nested types

CLI generics treat the generic type declaration and all instantiations of that generic type as having the same accessibility scope. However, language accessibility rules may differ in this regard, with some choosing to follow the CLI accessibility model, while others use a more restrictive, per-instantiation model. To enable consumption by all CLS languages, CLS frameworks shall be designed with a conservative per-instantiation model of accessibility in mind, and not expose nested types or require access to protected members based on specific, alternate instantiations of a generic type.

This has implications for signatures containing nested types with **family** accessibility. Open generic types shall not expose fields or members with signatures containing a specific instantiation of a nested generic type with family accessibility. Non-generic types extending a specific instantiation of a generic base class or interface, shall not expose fields or members with signatures containing a different instantiation of a nested generic type with family accessibility.

_[Example:_ Consider the following C# source code: 

 ```csharp
 public class C<T> {
   protected class N {…}
   protected void M1(C<int>.N n) {…}  // Not CLS-compliant - C<int>.N not
                                      // accessible from within C<T> in all languages
   protected void M2(C<T>.N n) {…}    // CLS-compliant – C<T>.N accessible inside C<T>
 }
 public class D : C<long> {
   protected void M3(C<int>.N n) {…}  // Not CLS-compliant – C<int>.N is not
                                      // accessible in D (extends C<long>)
   protected void M4(C<long>.N n) {…} // CLS-compliant, C<long>.N is
                                      // accessible in D (extends C<long>)
 }
 ```

The relevant corresponding ILASM code is:

 ```ilasm
 .class public … C`1<T> … {
   .class … nested … N<T> … {}
   .method family hidebysig instance void  M1(class C`1/N<int32> n) … {}
   // Not CLS-compliant - C<int>.N is not accessible from within C<T> in all languages

   .method family hidebysig instance void  M2(class C`1/N<!0> n) … {}
   // CLS-compliant – C<T>.N is accessible inside C<T>
 }
 .class public … D extends class C`1<int64> {
   .method family hidebysig instance void  M3(class C`1/N<int32> n) … {}
   // Not CLS-compliant – C<int>.N is not accessible in D (extends C<long>)

   .method family hidebysig instance void  M4(class C`1/N<int64> n) … {}
   // CLS-compliant, C<long>.N is accessible in D (extends C<long>)
 }
 ```

_end example]_

> #### CLS Rule 46:
>
> The visibility and accessibility of members (including nested types) in an instantiated generic type shall be considered to be scoped to the specific instantiation rather than the generic type declaration as a whole. Assuming this, the visibility and accessibility rules of CLS rule 12 still apply.
>
> _[Note:_
>
> **CLS (consumer):** Need not consume types that violate this rule.
>
> **CLS (extender):** Shall use this more restrictive notion of accessibility when determining CLS compliance.
>
> **CLS (framework):** Shall not expose members that violate this rule. _end note]_
