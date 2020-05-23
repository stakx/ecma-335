## II.10.3.4 Impact of overrides on derived classes

When a method is overridden in a parent type, the override shall apply to the derived class according to the following:

 * If the derived class provides an implementation of a virtual method, then that method is not affected by any overrides of that method in the parent type

 * Otherwise, if the method is overridden in the parent type, the override is inherited, subject to any overrides in the derived class. _[Note:_ This means that if the parent type overrides method _A_ with method _B_, and the derived class does not provide an implementation or override of method _A_, but provides an overriding implementation of method _B_, then it is the derived class' implementation of _B_ that will override method _A_ in the derived class. It may be useful to think of this as virtual slot overriding. _end Note.]_

_[Example:_ Consider the following (excerpted for clarity; all methods are declared **public hidebysig virtual instance**):

 ```ilasm
 .class interface I
 {
   .method newslot abstract void foo() {...}
 }
 .class A implements I
 {
   .method newslot void foo() {...}
 }
 .class B extends A
 { 
  .method newslot void foo1() {.override I::foo ... }
 }
 .class C extends B
 {
   .method void foo1() {...}
   .method void foo2() {.override A::foo ... }
 }
 .class D extends C
 {
   .method newslot void foo() {...}
   .method void foo1(){...}
   .method void foo2(){...}
 }
 ```

For this example, a sampling of the behavior of calls on objects of various types is presented in the following table:

 | Type of object | Method invocation (`callvirt`) | Method called | Notes
 | ---- | ---- | ---- | ----
 | `B` | `I::foo()` | `B::foo1` | Explicit override
 | `C` | `I::foo()` | `C::foo1` | Override of `I::foo` to virtual function `foo1` is inherited from `B`
 | `C` | `A::foo()` | `C::foo2` | Explicit override
 | `C` | `B::foo1()` | `C::foo1` | Virtual override
 | `D` | `I::foo()` | `D::foo1` | Override of `I::foo` to virtual function `foo1` is inherited
 | `D` | `A::foo()` | `D::foo2` | Explicit override of `A::foo` with virtual `C::foo2` (`D::foo` doesn't override this because it is **newslot**)
 | `D` | `B::foo1()` | `D::foo1` | Virtual override
 | `D` | `C::foo1()` | `D::foo1` | Virtual override
 
_end example]_
