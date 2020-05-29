## VI.B.1 Mutually recursive program (with tail calls)

The following is an example of a mutually recursive program that uses tail calls. The methods below determine whether a number is even or odd.

_[Example:_

 ```ilasm
 .assembly extern mscorlib { }
 .assembly test.exe { }
 .class EvenOdd
 { .method private static bool IsEven(int32 N) cil managed
   { .maxstack   2
     ldarg.0              // N
     ldc.i4.0
     bne.un      NonZero
     ldc.i4.1
     ret

 NonZero:
     ldarg.0
     ldc.i4.1
     sub
     tail.
     call        bool EvenOdd::IsOdd(int32)
     ret
   } // end of method ‘EvenOdd::IsEven’

   .method private static bool IsOdd(int32 N) cil managed
   { .maxstack   2
     // Demonstrates use of argument names and labels
     // Notice that the assembler does not convert these
     // automatically to their short versions
     ldarg       N
     ldc.i4.0
     bne.un      NonZero
     ldc.i4.0
     ret

 NonZero:
     ldarg       N
     ldc.i4.1
     sub
     tail.
     call        bool EvenOdd::IsEven(int32)
     ret
   } // end of method ‘EvenOdd::IsOdd’

   .method public static void Test(int32 N) cil managed
   { .maxstack   1
     ldarg       N
     call        void [mscorlib]System.Console::Write(int32)
     ldstr       " is "
     call        void [mscorlib]System.Console::Write(string)
     ldarg       N
     call        bool EvenOdd::IsEven(int32)
     brfalse     LoadOdd
     ldstr       "even"

 Print:
     call        void [mscorlib]System.Console::WriteLine(string)
     ret

 LoadOdd:
     ldstr       "odd"
     br          Print
   } // end of method ‘EvenOdd::Test’
 } // end of class ‘EvenOdd’

 //Global method
 .method public static void main() cil managed
 { .entrypoint
   .maxstack     1
   ldc.i4.5
   call          void EvenOdd::Test(int32)
   ldc.i4.2
   call          void EvenOdd::Test(int32)
   ldc.i4        100
   call          void EvenOdd::Test(int32)
   ldc.i4        1000001
   call          void EvenOdd::Test(int32)
   ret
 } // end of global method ‘main’
 ```

_end example]_
