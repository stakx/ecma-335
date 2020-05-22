## II.15.1.1 Method declarations

A _MethodDecl_, or method declaration, supplies the method name and signature (parameter and return types), but not its body. That is, a method declaration provides a _MethodHeader_ but no _MethodBodyItems_. These are used at call sites to specify the call target (`call` or `callvirt` instructions, see [Partition III](#todo-missing-hyperlink)) or to declare an abstract method. A _MethodDecl_ has no direct logical couterpart in the metadata; it can be either a _Method_ or a _MethodRef_.
