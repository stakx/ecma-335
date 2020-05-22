## II.15.4.3.1 Code implementation attributes

 | _ImplAttr_ ::= &hellip;
 | ----
 | \| `cil`
 | \| `native`
 | \| `runtime`

These attributes are mutually exclusive; they specify the type of code the method contains.

**cil** specifies that the method body consists of cil code. Unless the method is declared abstract, the body of the method shall be provided if cil is used.

**native** specifies that a method was implemented using native code, tied to a specific processor for which it was generated. **native** methods shall not have a body but instead refer to a native method that declares the body. Typically, the PInvoke functionality (§[II.15.5.2](ii.15.5.2-platform-invoke.md)) of the CLI is used to refer to a native method.

**runtime** specifies that the implementation of the method is automatically provided by the runtime and is primarily used for the methods of delegates (§[II.14.6](ii.14.6-delegates.md)).
