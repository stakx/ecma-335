## IV.4.1.3 Reflection

The **reflection feature set** supports full reflection on data types. All of its functionality is exposed through methods in the Reflection Library.

**If omitted:** The Kernel Profile specifies an opaque type, `System.Type`, instances of which uniquely represent any type in the system and provide access to the name of the type.

_[Note:_ With just the Kernel Profile there is no requirement, for example, to determine the members of the type, dynamically create instances of the type, or invoke methods of the type given an instance of `System.Type`. This can simplify the implementation of the CLI compared to that required when the Reflection Library is available. _end note]_

**Part of Library:** Reflection (see §[IV.5.5](#todo-missing-hyperlink)).
