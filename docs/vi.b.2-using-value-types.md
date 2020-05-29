## VI.B.2 Using value types

The following program shows how rational numbers can be implemented using value types.

_[Example:_

 ```ilasm
 .assembly extern mscorlib { }
 .assembly rational.exe { }
 .class private sealed Rational extends [mscorlib]System.ValueType
          implements mscorlib]System.IComparable
 { .field public int32 Numerator
   .field public int32 Denominator

   .method virtual public int32 CompareTo(object o)
   // Implements IComparable::CompareTo(Object)
   { ldarg.0
     // 'this' as a managed pointer
     ldfld int32 value class Rational::Numerator
     ldarg.1     // 'o' as an object
     unbox value class Rational
     ldfld int32 value class Rational::Numerator
     beq.s TryDenom
     ldc.i4.0
     ret

 TryDenom:
     ldarg.0     // 'this' as a managed pointer
     ldfld int32 value class Rational::Denominator
     ldarg.1     // 'o' as an object
     unbox value class Rational
     ldfld int32 class Rational::Denominator
     ceq
     ret
   }

   .method virtual public string ToString()
   // Implements Object::ToString
   { .locals init (class [mscorlib]System.Text.StringBuilder SB,
                   string S, object N, object D)
     newobj void [mscorlib]System.Text.StringBuilder::.ctor()
     stloc.s SB
     ldstr "The value is: {0}/{1}"
     stloc.s S
     ldarg.0     // Managed pointer to self
     dup
     ldfld int32 value class Rational::Numerator
     box [mscorlib]System.Int32
     stloc.s N
     ldfld int32 value class Rational::Denominator
     box [mscorlib]System.Int32
     stloc.s D
     ldloc.s SB
     ldloc.s S
     ldloc.s N
     ldloc.s D
     call instance class [mscorlib]System.Text.StringBuilder
       [mscorlib]System.Text.StringBuilder::AppendFormat(string,
         object, object)
     callvirt instance string [mscorlib]System.Object::ToString()
     ret
   }

   .method public value class Rational Mul(value class Rational)
   {
     .locals init (value class Rational Result)
     ldloca.s Result
     dup
     ldarg.0     // 'this'
     ldfld int32 value class Rational::Numerator
     ldarga.s    1     // arg
     ldfld int32 value class Rational::Numerator
     mul
     stfld int32 value class Rational::Numerator
     ldarg.0     // this
     ldfld int32 value class Rational::Denominator
     ldarga.s    1     // arg
     ldfld int32 value class Rational::Denominator
     mul
     stfld int32 value class Rational::Denominator
     ldloc.s Result
     ret
   }
 }

 .method static void main()
 {
   .entrypoint
   .locals init (value class Rational Half,
                 value class Rational Third,
                 value class Rational Temporary,
                 object H, object T)

   // Initialize Half, Third, H, and T
   ldloca.s Half
   dup
   ldc.i4.1
   stfld int32 value class Rational::Numerator
   ldc.i4.2
   stfld  int32 value class Rational::Denominator
   ldloca.s Third
   dup
   ldc.i4.1
   stfld int32 value class Rational::Numerator
   ldc.i4.3
   stfld int32 value class Rational::Denominator
   ldloc.s Half
   box value class Rational
   stloc.s H
   ldloc.s Third
   box value class Rational
   stloc.s T
   // WriteLine(H.IComparable::CompareTo(H))
   // Call CompareTo via interface using boxed instance
   ldloc H
   dup
   callvirt int32 [mscorlib]System.IComparable::CompareTo(object)
   call void [mscorlib]System.Console::WriteLine(bool)
   // WriteLine(Half.CompareTo(T))
   // Call CompareTo via value type directly
   ldloca.s Half
   ldloc T
   call instance int32
   value class Rational::CompareTo(object)
   call void [mscorlib]System.Console::WriteLine(bool)
   // WriteLine(Half.ToString())
   // Call virtual method via value type directly
   ldloca.s Half
   call instance string class Rational::ToString()
   call void [mscorlib]System.Console::WriteLine(string)
   // WriteLine(T.ToString)
   // Call virtual method inherited from Object, via boxed instance
   ldloc T
   callvirt string [mscorlib]System.Object::ToString()
   call void [mscorlib]System.Console::WriteLine(string)
   // WriteLine((Half.Mul(T)).ToString())
   // Mul is called on two value types, returning a value type
   // ToString is then called directly on that value type
   // Note that we are required to introduce a temporary variable
   //   since the call to ToString requires
   //   a managed pointer (address)
   ldloca.s Half
   ldloc.s Third
   call instance value class Rational
          Rational::Mul(value class Rational)
   stloc.s Temporary
   ldloca.s Temporary
   call instance string Rational::ToString()
   call void [mscorlib]System.Console::WriteLine(string)
   ret
 }
 ```

_end example]_
