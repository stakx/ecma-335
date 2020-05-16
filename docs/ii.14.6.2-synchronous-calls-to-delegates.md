## II.14.6.2 Synchronous calls to delegates

The synchronous mode of calling delegates corresponds to regular method calls and is performed by calling the virtual method named `Invoke` on the delegate. The delegate itself is the first argument to this call (it serves as the **this** pointer), followed by the other arguments as specified in the signature. When this call is made, the caller shall block until the called method returns. The called method shall be executed on the same thread as the caller.

_[Example:_ Continuing the previous example, define a class `Test` that declares a method, `onStartStop`, appropriate for use as the target for the delegate.

 ```ilasm
 .class public Test
 { .field public int32 MyData
   .method public void onStartStop(int32 action)
   { ret        // put your code here
   }
   .method public specialname rtspecialname
           instance void .ctor(int32 Data)
   { ret        // call base class constructor, store state, etc.
   }
 }
 ```

Then define a main program. This one constructs an instance of `Test` and then a delegate that targets the `onStartStop` method of that instance. Finally, call the delegate.

 ```ilasm
 .method public static void Start()
 { .maxstack 3
   .entrypoint
   .locals (class StartStopEventHandler DelegateOne,
            class Test InstanceOne)
   // Create instance of Test class
   ldc.i4.1
   newobj instance void Test::.ctor(int32)
   stloc InstanceOne 

  // Create delegate to onStartStop method of that class
  ldloc InstanceOne
   ldftn instance void Test::onStartStop(int32)
   newobj void StartStopEventHandler::.ctor(object, native int)
   stloc DelegateOne

   // Invoke the delegate, passing 100 as an argument
   ldloc DelegateOne
   ldc.i4 100
   callvirt instance void StartStopEventHandler::Invoke(int32)
   ret
 }
 ```

Note that the example above creates a delegate to a non-virtual function. If `onStartStop` had been a virtual function, use the following code sequence instead:

 ```ilasm
 ldloc InstanceOne
 dup
 ldvirtftn instance void Test::onStartStop(int32)
 newobj void StartStopEventHandler::.ctor(object, native int)
 stloc DelegateOne

 // Invoke the delegate, passing 100 as an argument
 ldloc DelegateOne
 ```

_end example]_

_[Note:_ The code sequence above shall use `dup` &ndash; not `ldloc InstanceOne` twice. The `dup` code sequence is easily recognized as type-safe, whereas alternatives would require more complex analysis. Verifiability of code is discussed in [Partition III](#todo-missing-hyperlink) _end note]_
