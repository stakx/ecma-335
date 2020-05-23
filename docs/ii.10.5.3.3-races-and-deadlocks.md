## II.10.5.3.3 Races and deadlocks

In addition to the type initialization guarantees specified in §[II.10.5.3.1](ii.10.5.3.1-type-initialization-guarantees.md), the CLI shall ensure two further guarantees for code that is called from a type initializer:

 2. Static variables of a type are in a known state prior to any access whatsoever.
 5. Type initialization alone shall not create a deadlock unless some code called from a type initializer (directly or indirectly) explicitly invokes blocking operations.

_[Rationale:_ Consider the following two class definitions:

 ```ilasm
 .class public A extends [mscorlib]System.Object
 { .field static public class A a
   .field static public class B b
   .method public static rtspecialname specialname void .cctor ()
   { ldnull   // b=null
     stsfld class B A::b
     ldsfld class A B::a // a=B.a
     stsfld class A A::a
     ret
   }
 }

 .class public B extends [mscorlib]System.Object
 { .field static public class A a
   .field static public class B b
   .method public static rtspecialname specialname void .cctor ()
   { ldnull   // a=null
     stsfld class A B::a
     ldsfld class B A::b // b=A.b
     stsfld class B B::b
     ret
   }
 }
 ```

After loading these two classes, an attempt to reference any of the static fields causes a problem, since the type initializer for each of `A` and `B` requires that the type initializer of the other be invoked first. Requiring that no access to a type be permitted until its initializer has completed would create a deadlock situation. Instead, the CLI provides a weaker guarantee: the initializer will have started to run, but it need not have completed. But this alone would allow the full uninitialized state of a type to be visible, which would make it difficult to guarantee repeatable results.

There are similar, but more complex, problems when type initialization takes place in a multi-threaded system. In these cases, for example, two separate threads might start attempting to access static variables of separate types (A and B) and then each would have to wait for the other to complete initialization.

A rough outline of an algorithm to ensure points 1 and 2 above is as follows:

 1. At class load-time (hence prior to initialization time) store zero or null into all static fields of the type.

 2. If the type is initialized, you are done.

    1. If the type is not yet initialized, try to take an initialization lock.

    2. If successful, record this thread as responsible for initializing the type and proceed to step 3.

         1. If not successful, see whether this thread or any thread waiting for this thread to complete already holds the lock.
         
         2. If so, return since blocking would create a deadlock. This thread will now see an incompletely initialized state for the type, but no deadlock will arise.

         3. If not, block until the type is initialized then return.

     3. Initialize the base class type and then all interfaces implemented by this type.

     4. Execute the type initialization code for this type.

     5. Mark the type as initialized, release the initialization lock, awaken any threads waiting for this type to be initialized, and return.

_end rationale]_
