## IV.4.1.6 Vararg

The **vararg feature set** supports variable-length argument lists and runtime-typed pointers.

**If omitted:** Any attempt to reference a method with the **vararg** calling convention or the signature encodings associated with vararg methods (see [Partition II](#todo-missing-hyperlink)) shall throw the `System.NotImplementedException` exception. Methods using the CIL instructions `arglist`, `refanytype`, `mkrefany`, and `refanyval` shall throw the `System.NotImplementedException` exception. The precise timing of the exception is not specified. The type `System.TypedReference` need not be defined.

**Part of Library:** Vararg (see §[IV.5.9](#todo-missing-hyperlink)).
