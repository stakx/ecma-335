## VI.B.4.1 ILAsm version

 ```ilasm
 .assembly extern mscorlib {}
 .assembly Phone {}
 .class private Phone`2<([mscorlib]System.Object) K, ([mscorlib]System.Object) V>
     extends  [mscorlib]System.Object {
    .field private int32 hi
    .field private !0[]  keys
    .field private !1[]  vals
    .method public instance void Add(!0 k, !1 v) {
       .maxstack  4
       .locals init (int32 temp)
       ldarg.0
       ldfld      !0[] class Phone`2<!0,!1>::keys
       ldarg.0
       dup
       ldfld      int32 class Phone`2<!0,!1>::hi
       ldc.i4.1
       add
       dup
       stloc.0
       stfld      int32 class Phone`2<!0,!1>::hi
       ldloc.0
       ldarg.1
       stelem     !0
       ldarg.0
       ldfld      !1[] class Phone`2<!0,!1>::vals
       ldarg.0
       ldfld      int32 class Phone`2<!0,!1>::hi
       ldarg.2
       stelem     !1
       ret
    }  // end of Method Add
 }  // end of class Phone

 .class App extends [mscorlib]System.Object {
    .method static void Main() {
       .entrypoint
       .maxstack  3
       .locals init (class Phone`2<string,int32> temp)
       newobj     instance void class   Phone`2<string,int32>::.ctor()
       stloc.0
       ldloc.0
       ldstr      "Jim"
       ldc.i4.7
       callvirt   instance void class   Phone`2<string,int32>::Add(!0, !1)
       ret
    }  // end of method Main
 }  // end of class App
 ```
