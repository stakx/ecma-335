## I.12.1.6.2.2 Loading and storing instances of value types

There are two ways to load a value type onto the evaluation stack:

 * Directly load the value from a home that has the appropriate type, using an `ldarg`, `ldloc`, `ldfld`, or `ldsfld` instruction.

 * Compute the address of the value type, then use an `ldobj` instruction.

Similarly, there are two ways to store a value type from the evaluation stack:

 * Directly store the value into a home of the appropriate type, using a `starg`, `stloc`, `stfld`, or `stsfld` instruction.

 * Compute the address of the value type, then use a `stobj` instruction.

