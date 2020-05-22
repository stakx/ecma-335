## II.15.4.5 vararg methods

**vararg** methods accept a variable number of arguments. They shall use the **vararg** calling convention (§[II.15.3(#todo-missing-hyperlink)).

At each call site, a method reference shall be used to describe the types of the fixed and variable arguments that are passed. The fixed part of the argument list shall be separated from the additional arguments with an ellipsis (see [Partition I](#todo-missing-hyperlink)).

_[Note:_ The method reference is represented by either a _MethodRef_ (§[II.22.25](#todo-missing-hyperlink)) or _MethodDef_ (§[II.22.26](ii.22.26-methoddef-0x06.md)). A _MethodRef_ might be needed even if the method is defined in the same assembly, because the _MethodDef_ only describes the fixed part of the argument list. If the call site does not pass any additional arguments, then it can use the _MethodDef_ for **vararg** methods defined in the same assembly. _end note]_

The **vararg** arguments shall be accessed by obtaining a handle to the argument list using the CIL instruction `arglist` (see [Partition III](#todo-missing-hyperlink)). The handle can be used to create an instance of the value type `System.ArgIterator` which provides a type-safe mechanism for accessing the arguments (see [Partition IV](#todo-missing-hyperlink)).

_[Example:_ The following example shows how a **vararg** method is declared and how the first **vararg** argument is accessed, assuming that at least one additional argument was passed to the method:

 ```ilasm
 .method public static vararg void MyMethod(int32 required) {
   .maxstack 3
   .locals init (valuetype [mscorlib]System.ArgIterator it, int32 x)

   ldloca it    // initialize the iterator
   initobj  valuetype [mscorlib]System.ArgIterator
   ldloca it
   arglist     // obtain the argument handle
   call instance void [mscorlib]System.ArgIterator::.ctor(valuetype
       [mscorlib]System.RuntimeArgumentHandle)   // call constructor of iterator

   /* argument value will be stored in x when retrieved, so load address of x */
   ldloca x
   ldloca it
   // retrieve the argument, the argument for required does not matter
   call instance typedref [mscorlib]System.ArgIterator::GetNextArg() 
   call object [mscorlib]System.TypedReference::ToObject(typedref)  /* retrieve the object */
   castclass [mscorlib]System.Int32  // cast and unbox
   unbox int32
   cpobj int32                       // copy the value into x
   // first vararg argument is stored in x
   ret
 }
 ```

_end example]_
