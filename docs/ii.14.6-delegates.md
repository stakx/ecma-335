## II.14.6 Delegates

Delegates (see [Partition I](#todo-missing-hyperlink)) are the object-oriented equivalent of function pointers. Unlike function pointers, delegates are object-oriented, type-safe, and secure. Delegates are reference types, and are declared in the form of classes. Delegates shall have a base type of `System.Delegate` (see [Partition IV](#todo-missing-hyperlink)).

Delegates shall be declared **sealed**, and the only members a delegate shall have are either the first two or all four methods as specified here. These methods shall be declared **runtime** and **managed** (§[II.15.4.3](#todo-missing-hyperlink)). They shall not have a body, since that body shall be created automatically by the VES. Other methods available on delegates are inherited from the class `System.Delegate` in the Base Class Library (see [Partition IV](#todo-missing-hyperlink)). The delegate methods are:

 * The instance constructor (named `.ctor` and marked **specialname** and **rtspecialname**, see §[II.10.5.1](#todo-missing-hyperlink)) shall take exactly two parameters, the first having type `System.Object`, and the second having type `System.IntPtr`.  When actually called (via a `newobj` instruction, see [Partition III](#todo-missing-hyperlink)), the first argument shall be an instance of the class (or one of its derived classes) that defines the target method, and the second argument shall be a method pointer to the method to be called.

 * The `Invoke` method shall be **virtual** and its signature constrains the target method to which it can be bound; see §[II.14.6.1](ii.14.6.1-delegate-signature-compatibility.md). The verifier treats calls to the `Invoke` method on a delegate just like it treats calls to any other method.

 * The `BeginInvoke` method (§[II.14.6.3.1](ii.14.6.3.1-the-begininvoke-method.md)), if present, shall be virtual and have a signature related to, but not the same as, that of the `Invoke` method. There are two differences in the signature. First, the return type shall be `System.IAsyncResult` (see [Partition IV](#todo-missing-hyperlink)). Second, there shall be two additional parameters that follow those of `Invoke`: the first of type `System.AsyncCallback` and the second of type `System.Object`.

 * The `EndInvoke` method (§[II.14.6.3](ii.14.6.3-asynchronous-calls-to-delegates.md)) shall be **virtual** and have the same return type as the `Invoke` method. It shall take as parameters exactly those parameters of `Invoke` that are managed pointers, in the same order they occur in the signature for `Invoke`. In addition, there shall be an additional parameter of type `System.IAsyncResult`.

Unless stated otherwise, a standard delegate type shall provide the two optional asynchronous methods, `BeginInvoke` and `EndInvoke`.

_[Example:_ The following declares a Delegate used to call functions that take a single integer and return nothing. It provides all four methods so it can be called either synchronously or asynchronously. Because no parameters are passed by reference (i.e., as managed pointers) there are no additional arguments to `EndInvoke`.

 ```ilasm
 .assembly Test { }
 .assembly extern mscorlib { }

 .class private sealed StartStopEventHandler extends [mscorlib]System.Delegate
 { .method public specialname rtspecialname instance void .ctor(object Instance,  
          native int Method) runtime managed {}
   .method public virtual void Invoke(int32 action) runtime managed {}
   .method public virtual class [mscorlib]System.IAsyncResult
        BeginInvoke(int32 action, class [mscorlib]System.AsyncCallback callback,
           object Instance) runtime managed {}
   .method public virtual void EndInvoke(class
        [mscorlib]System.IAsyncResult result) runtime managed {}
 }
 ```

_end example]_

As with any class, an instance is created using the `newobj` instruction in conjunction with the instance constructor. The first argument to the constructor shall be the object on which the method is to be called, or it shall be null if the method is a static method. The second argument shall be a method pointer to a method on the corresponding class and with a signature that matches that of the delegate class being instantiated.
