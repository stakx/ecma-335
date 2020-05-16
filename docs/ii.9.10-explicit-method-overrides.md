## II.9.10

Explicit method overrides A type, be it generic or non-generic, can implement particular virtual methods (whether the method was introduced in an interface or base class) using an explicit override. (See §[II.10.3.2](#todo-missing-hyperlink) and §[II.15.1.4](#todo-missing-hyperlink).)

The rules governing overrides are extended, in the presence of generics, as follows:

 * If the implementing method is part of a non-generic type or a closed generic type, then the declaring method shall be part of a base class of that type or an interface implemented by that type. _[Example:_

   ```ilasm
   .class interface I`1<T>
   { .method public abstract virtual void M(!0) {}
   }
   
   .class C implements class I`1<string>
   { .override method instance void class I`1<string>::M(!0) with
               method instance void class C::MInC(string)
     .method virtual void MInC(string s)
     { ldstr "I.M"
       call void [mscorlib]System.Console::WriteLine(string)
       ret
     }
   }
   ```
   
   _end example]_

 * If the implementing method is generic, then the declared method shall also be generic and shall have the same number of method generic parameters.
 
   Neither the implementing method nor the declared method shall be an instantiated generic method.  This means that an instantiated generic method cannot be used to implement an interface method, and that it is not possible to provide a special method for instantiating a generic method with specific generic parameters.
   
   _[Example:_ Given the following
   
   ```ilasm
   .class interface I
   { .method public abstract virtual void M<T>(!!0) {}
     .method public abstract virtual void N() {}
   }
   ```

   neither of the following **.override** statements is allowed

   ```ilasm
   .class C implements class I`1<string>
   { .override class I::M<string> with instance void class C::MInC(string)
     .override class I::N with instance void class C::MyFn<string>
     .method virtual void MInC(string s) { … }
     .method virtual void MyFn<T>() { … }
   }
   ```
   
   _end example]_
