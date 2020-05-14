## II.13.2 Initializing value types

Like classes, value types can have both instance constructors (§[II.10.5.1](#todo-missing-hyperlink)) and type initializers (§[II.10.5.3](#todo-missing-hyperlink)). Unlike classes, whose fields are automatically initialized to null, the following rules constitute the only guarantee about the initilization of (unboxed) value types:

 * Static variables shall be initialized to zero when a type is loaded (§[II.10.5.3.3](#todo-missing-hyperlink)), hence statics whose type is a value type are zero-initialized when the type is loaded.

 * Local variables shall be initialized to zero if the **localsinit** bit in the method header (§[II.25.4.4](ii.25.4.4-flags-for-method-headers.md)) is set.

 * Arrays shall be zero-initialized.

 * Instances of classes (i.e., objects) shall be zero-initialized prior to calling their instance constructor.

_[Rationale:_ Guaranteeing automatic initialization of unboxed value types is both difficult and expensive, especially on platforms that support thread-local storage and that allow threads to be created outside of the CLI and then passed to the CLI for management. _end rationale]_
 
_[Note:_ Boxed value types are classes and follow the rules for classes. _end note]_

The instruction `initobj` (see [Partition III](#todo-missing-hyperlink)) performs zero-initialization under program control. If a value type has a constructor, an instance of its unboxed type can be created as is done with classes. The `newobj` instruction (see [Partition III](#todo-missing-hyperlink)) is used along with the initializer and its parameters to allocate and initialize the instance. The instance of the value type will be allocated on the stack. The Base Class Library provides the method `System.Array.Initialize` (see [Partition IV](#todo-missing-hyperlink)) to zero all instances in an array of unboxed value types.

_[Example:_ The following code declares and initializes three value type variables. The first variable is zero-initialized, the second is initialized by calling an instance constructor, and the third by creating the object on the stack and storing it into the local.

 ```ilasm
 .assembly Test { }
 .assembly extern System.Drawing {
   .ver 1:0:3102:0
   .publickeytoken = (b03f5f7f11d50a3a)
 }
 
 .method public static void Start()
 { .maxstack 3
   .entrypoint
   .locals init (valuetype [System.Drawing]System.Drawing.Size Zero,
           valuetype [System.Drawing]System.Drawing.Size Init,
           valuetype [System.Drawing]System.Drawing.Size Store)

   // Zero initialize the local named Zero
   ldloca Zero           // load address of local variable
   initobj valuetype [System.Drawing]System.Drawing.Size

   // Call the initializer on the local named Init
   ldloca Init           // load address of local variable
   ldc.i4 425            // load argument 1 (width)
   ldc.i4 300            // load argument 2 (height) 
   call instance void [System.Drawing]System.Drawing.Size::.ctor(int32, int32) 

   // Create a new instance on the stack and store into Store. Note that
   // stobj is used here - but one could equally well use stloc, stfld, etc.
   ldloca Store
   ldc.i4 425            // load argument 1 (width)
   ldc.i4 300            // load argument 2 (height)
   newobj instance void [System.Drawing]System.Drawing.Size::.ctor(int32, int32)
   stobj valuetype [System.Drawing]System.Drawing.Size
   ret
 }
 ```

_end example]_
