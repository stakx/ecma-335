## I.12.1.6.2.3 Passing and returning value types

Value types are treated just as any other value would be treated:

 * **To pass a value type by value**, simply load it onto the stack as you would any other argument: use `ldloc`, `ldarg`, etc., or call a method that returns a value type. To access a value type parameter that has been passed by value use the `ldarga` instruction to compute its address or the `ldarg` instruction to load the value onto the evaluation stack.

 * **To pass a value type by reference**, load the address of the value type as you normally would (see [Table I.8: Address and Type of Home Locations](#todo-missing-hyperlink)). To access a value type parameter that has been passed by reference use the `ldarg` instruction to load the address of the value type and then the `ldobj` instruction to load the value type onto the evaluation stack.

 * **To return a value type**, just load the value onto an otherwise empty evaluation stack and then issue a `ret` instruction.
