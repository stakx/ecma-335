## III.1.6 Implicit argument coercion

A method call involves the implicit assignment of argument values on the stack to the parameters of the called method (accessed using the `ldarg`, §III.3.38, or `ldarga`, §[III.3.39](#todo-missing-hyperlink), instructions). The assignment is an implicit `starg` (§[III.3.61](#todo-missing-hyperlink)) instruction and may be referred to as implicit argument coercion. In Verified CLI the validity of implicit argument coercion, as with the `starg` (§[III.3.61](#todo-missing-hyperlink)) instruction, is determined by the verifier-assignable-to relation (§[III.1.8.1.2.3](#todo-missing-hyperlink)). Correct CIL also allows a `native int` to be passed as a byref (`&`); in which case following implicit conversion the value will be tracked by garbage collection.

> _The remainder of this clause contains only informative text._

While the CLI operates only on 6 types (`int32`, `native int`, `int64`, `F`, `O`, and `&`) the metadata supplies a much richer model for parameters of methods. When about to call a method, the CLI performs implicit type conversions, detailed in the following table. (Conceptually, it inserts the appropriate `conv.*` instruction into the CIL stream, which might result in an information loss through truncation or rounding) This implicit conversion occurs for boxes marked &check;. ~~Shaded boxes~~ <ins>Boxes marked <sup>nv</sup></ins> are not verifiable. Boxes marked &cross; indicate invalid CIL sequences. (A compiler is, of course, free to emit explicit `conv.*` or `conv.*.ovf` instructions to achieve any desired effect.)

#### Table III.9: Signature Matching

 Type In Signature | Stack Parameter | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
 ---- | ---- | ---- | ---- | ---- | ---- | ---- | ----
 &nbsp; | **`int32`** | **`native int`** | **`int64`** | **`F`** | **`&`** | **`O`** | **value type**<sup>1</sup>
 **`int8`** | &check;<br>Truncate | &check;<br>Truncate | &cross; | &cross; | &cross; | &cross; | &cross;
 **`unsigned int8`**,<br>**`bool`** | &check;<br>Truncate | &check;<br>Truncate | &cross; | &cross; | &cross; | &cross; | &cross;
 **`int16`** | &check;<br>Truncate | &check;<br>Truncate | &cross; | &cross; | &cross; | &cross; | &cross;
 **`unsigned int16`**,<br>**`char`** | &check;<br>Truncate | &check;<br>Truncate | &cross; | &cross; | &cross; | &cross; | &cross;
 **`int32`** | &check;<br>Nop | &check;<br>Truncate | &cross; | &cross; | &cross; | &cross; | &cross;
 **`unsigned int32`** | &check;<br>Nop | &check;<br>Truncate | &cross; | &cross; | &cross; | &cross; | &cross;
 **`int64`** | &cross; | &cross; | &check;<br>Nop | &cross; | &cross; | &cross; | &cross;
 **`unsigned int64`** | &cross; | &cross; | &check;<br>Nop | &cross; | &cross; | &cross; | &cross;
 **`native int`** | &check;<br>Sign extend | &check;<br>Nop | &cross; | &cross; | &cross; | &cross; | &cross;
 **`native unsigned int`** | &check;<br>Zero extend | &check;<br>Nop | &cross; | &cross; | &cross; | &cross; | &cross;
 **`float32`** | &cross; | &cross; | &cross; Note<sup>4</sup> | &cross; | &cross; | &cross; | &cross;
 **`float64`** | &cross; | &cross; | &cross; Note<sup>4</sup> | &cross; | &cross; | &cross; | &cross;
 **Class** | &cross; | &cross; | &cross; | &cross; | &cross; | &check; | &cross;
 **Value Type**<sup>1</sup> | &cross; | &cross; | &cross; | &cross; | &cross; | &cross; | &check;<sup>2</sup>
 **By-reference (Byref) (`&`)** | &cross; | &check;<br>Start GC tracking<sup>nv</sup> | &cross; | &cross; | &check; | &cross; | &cross;
 **Typed Reference (RefAny)<sup>3</sup>** | &cross; | &cross; | &cross; | &cross; | &cross; | &cross; | &cross;

 <sup>1</sup> A value type in a signature cannot be the long form of a built-in type (§[II.23.2.15](#todo-missing-hyperlink)).

 <sup>2</sup> The CLI's stack can contain a value type. These can only be passed if the particular value type on the stack exactly matches the value type required by the corresponding parameter.

 <sup>3</sup> There are special instructions to construct and pass a `RefAny`.

 <sup>4</sup> The CLI is permitted to pass floating point arguments using its internal `F` type, see §[III.1.1.1](#todo-missing-hyperlink). CIL generators can, of course, include an explicit `conv.r4`, `conv.r4.ovf`, or similar instruction.

Further notes concerning this table:

 * The meaning of Truncate is defined for [Table 8](#todo-missing-hyperlink) above; Nop means no conversion is performed.

 * "Start GC Tracking" means that, following the implicit conversion, the item's value will be reported to any subsequent garbage-collection operations, and perhaps changed as a result of the item pointed-to being relocated in the heap.
