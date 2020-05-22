## II.15.4.1.2 The .entrypoint directive

 | _MethodBodyItem_ ::= &hellip;
 | \| `.entrypoint`

The **.entrypoint** directive marks the current method, which shall be static, as the entry point to an application. The VES shall call this method to start the application. An executable shall have exactly one entry point method; entry point methods in a library are not handled specially by the VES. This entry point method can be a global method or it can appear inside a type. (The effect of the directive is to place the metadata token for this method into the CLI header of the PE file)

The entry point method shall either accept no arguments or a vector of strings. If it accepts a vector of strings, the strings shall represent the arguments to the executable, with index 0 containing the first argument. The mechanism for specifying these arguments is platform-specific and is not specified here.

The return type of the entry point method shall be **void**, **int32**, or **unsigned int32**. If an **int32** or **unsigned int32** is returned, the executable can return an exit code to the host environment. A value of 0 shall indicate that the application terminated ordinarily.

The accessibility of the entry point method shall not prevent its use in starting execution. Once started the VES shall treat the entry point as it would any other method. The entry point method cannot be defined in a generic class.

_[Example:_ The following prints the first argument and returns successfully to the operating system:

 ```ilasm
 .method public static int32 MyEntry(string[] s) cil managed
 { .entrypoint
   .maxstack 2
   ldarg.0                  // load and print the first argument
   ldc.i4.0
   ldelem.ref
   call void [mscorlib]System.Console::WriteLine(string)
   ldc.i4.0                 // return success
   ret
 }
 ```

_end example]_
