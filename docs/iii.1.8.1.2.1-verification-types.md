## III.1.8.1.2.1 Verification types

§[I.8.7](#todo-missing-hyperlink) specifies the mapping of types used in the CLI and those used in verification. Notice that verification compresses the CLI types to a smaller set that maintains information about the size of those types in memory, but then compresses these again to represent the fact that the CLI stack expands 1, 2 and 4-byte built-in types into 4-byte types on the stack. Similarly, verification treats floating-point numbers on the stack as 64-bit quantities regardless of the actual representation.

Arrays are objects, but with special compatibility rules.

There is a special encoding for `null` that represents an object known to be the null value, hence with indeterminate actual type. A null value may be known to have some reference type; e.g., when it has been loaded from a local or field; or to have the special null type when it results from a ldnull instruction. A null value of null type can only exist on the evaluation stack. When the correctness or verification sections (§[III.1.8](#todo-missing-hyperlink)) of any instruction require a value of some particular reference type, then a value of null type is also permitted. If a value of null type is supplied and the instruction dereferences it, then a System.NullReferenceException is thrown; this is noted in the appropriate exception areas of the instruction descriptions.

> _This block contains only informative text._

In the following table, "CLI Type" is the type as it is described in metadata. The "Verification Type" is a corresponding type used for type compatibility rules in verification (see §[I.8.7](#todo-missing-hyperlink), *verification type*, and §[III.1.8.1.2.2](#todo-missing-hyperlink)) when considering the types of local variables, arguments, and parameters on methods being called. The column "Verification Type (in stack state)" corresponds with *intermediate type*, §[I.8.7](#todo-missing-hyperlink), and is used to simulate instructions that load data onto the stack, and shows the types that are actually maintained in the stack state information of the verification algorithm. The column "Managed Pointer to Type" shows the type tracked for managed pointers (see §[I.8.7.2](#todo-missing-hyperlink), *pointer-element-compatible-with*).

 CLI Type | Verification Type | Verification Type (in stack state) | Managed Pointer to Type
 ---- | ---- | --- | ----
 `int8`, `unsigned int8`, `bool` | `int8` | `int32` |`int8&`
 `int16`, `unsigned int16`, `char` | `int16` | `int32` | `int16&`
 `int32`, `unsigned int32` | `int32` | `int32` | `int32&`
 `int64`, `unsigned int64` | `int64` | `int64` | `int64&`
 `native int`, `native unsigned int` | `native int` | `native int` | `native int&`
 `float32` | `float32` | `float64` | `float32&`
 `float64` | `float64` | `float64` | `float64&`
 Any value type | Same type | Same type | Same type`&`
 Any object type | Same type | Same type | Same type`&`
 Method pointer | Same type | Same type | Not valid

> _End informative text._

A method can be defined as returning a managed pointer, but calls upon such methods are not verifiable. When returning byrefs, verification is done at the return site, not at the call site.

_[Rationale:_ Some uses of returning a managed pointer are perfectly verifiable (e.g., returning a reference to a field in an object); but some not (e.g., returning a pointer to a local variable of the called method). Tracking this in the general case is a burden, and therefore not included in this standard. _end rationale]_
