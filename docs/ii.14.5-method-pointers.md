## II.14.5 Method pointers

 | _Type_ ::=
 | ----
 | &hellip;
 | \| `method` _CallConv_ _Type_ `'*'` `'('` _Parameters_ `')'`

Variables of type method pointer shall store the address of the entry point to a method whose signature is *method-signature-compatible-with* (§[I.8.7.1](i.8.7.1-assignment-compatibility-for-signature-types.md)) the type of the method pointer. A pointer to a static or instance method is obtained with the `ldftn` instruction, while a pointer to a virtual method is obtained with the `ldvirtftn` instruction. A method can be called by using a method pointer with the `calli` instruction.  See [Partition III](#todo-missing-hyperlink) for the specification of these instructions.

_[Note:_ Like other pointers, method pointers are compatible with `unsigned int64` on 64-bit architectures, and with `unsigned int32` on 32-bit architectures. The preferred usage, however, is `unsigned native int`, which works on both 32- and 64-bit architectures. _end note]_

_[Example:_ Call a method using a pointer. The method `MakeDecision::Decide` returns a method pointer to either `AddOne` or `Negate`, alternating on each call. The main program calls `MakeDecision::Decide` three times, and after each call uses a `calli` instruction to call the method specified. The output printed is "`-1 2 -1`" indicating successful alternating calls.

 ```ilasm
 .assembly Test { }
 .assembly extern mscorlib { }
 
 .method public static int32 AddOne(int32 Input)
 { .maxstack 5
   ldarg Input
   ldc.i4.1
   add
   ret
 }

 .method public static int32 Negate(int32 Input)
 { .maxstack 5
   ldarg Input
   neg
   ret
 }

 .class value sealed public MakeDecision extends
        [mscorlib]System.ValueType
 { .field static bool Oscillate
   .method public static method int32 *(int32) Decide()
   { ldsfld bool valuetype MakeDecision::Oscillate
     dup
     not
     stsfld bool valuetype MakeDecision::Oscillate
     brfalse NegateIt
     ldftn int32 AddOne(int32)
     ret

 NegateIt:
     ldftn int32 Negate(int32)
     ret
   }
 }

 .method public static void Start()
 { .maxstack 2
   .entrypoint

   ldc.i4.1
   call method int32 *(int32) valuetype MakeDecision::Decide()
   calli int32(int32)
   call  void [mscorlib]System.Console::WriteLine(int32)

   ldc.i4.1
   call method int32 *(int32) valuetype MakeDecision::Decide()
   calli int32(int32)
   call  void [mscorlib]System.Console::WriteLine(int32)

   ldc.i4.1
   call method int32 *(int32) valuetype MakeDecision::Decide()
   calli int32(int32)
   call  void [mscorlib]System.Console::WriteLine(int32)

   ret
 }
 ```

_end example]_
