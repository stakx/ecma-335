## III.1.5 Operand type table

Many CIL operations take numeric operands on the stack. These operations fall into several categories, depending on how they deal with the types of the operands. The following tables summarize the valid kinds of operand types and the type of the result. Notice that the type referred to here is the type as tracked by the CLI rather than the more detailed types used by tools such as CIL verification. The types tracked by the CLI are: `int32`, `int64`, `native int`, `F`, `O`, and `&`.

[Table III.2](#todo-missing-hyperlink) shows the result type for A `op` B&mdash;where `op` is `add`, `div`, `mul`, `rem`, or `sub`&mdash;for each possible combination of operand types. Boxes holding simply a result type, apply to all five instructions. Boxes marked &cross; indicate an invalid CIL instruction. ~~Shaded boxes~~ <ins>Boxes marked with <sup>nv</sup></ins> indicate a CIL instruction that is not verifiable. Boxes with a list of instructions are valid only for those instructions.

#### Table III.2: Binary Numeric Operations

 A's Type | B's Type | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp; |
 ---- | ---- | ---- | ---- | ---- | ---- | ----
 &nbsp; | **`int32`** | **`int64`** | **`native int`** | **`F`** | **`&`** | **`O`**
 **`int32`** | `int32` | &cross; | `native int` | &cross; | `&` (`add`) <sup>nv</sup></ins> | &cross;
 **`int64`** | &cross; | `int64` | &cross; | &cross; | &cross; | &cross;
 **`native int`** | `native int` | &cross; | `native int` | &cross; | `&` (`add`) <sup>nv</sup></ins> | &cross;
 **`F`** | &cross; | &cross; | &cross; | `F` | &cross; | &cross;
 **`&`** | `&` (`add`, `sub`) <sup>nv</sup></ins> | &cross; | `&` (`add`, `sub`) <sup>nv</sup></ins> | &cross; `native int` (`sub`) <sup>nv</sup></ins> | &cross;
 **`O`** | &cross; | &cross; | &cross; | &cross; | &cross; | &cross;

[Table III.3](#todo-missing-hyperlink) shows the result type for the unary numeric operations. Used for the `neg` instruction. Boxes marked &cross; indicate an invalid CIL instruction. All valid uses of this instruction are verifiable.

#### Table III.3: Unary Numeric Operations

 Operand Type | Result Type
 ---- | ----
 `int32` | `int32`
 `int64` | `int64`
 `native int` | `native int`
 `F` | `F`
 `&` | &cross;
 `O` | &cross;

[Table III.4](#todo-missing-hyperlink) shows the result type for the comparison and branch instructions. The binary comparison returns a Boolean value and the branch operations branch based on the top two values on the stack. Used for `beq`, `beq.s`, `bge`, `bge.s`, `bge.un`, `bge.un.s`, `bgt`, `bgt.s`, `bgt.un`, `bgt.un.s`, `ble`, `ble.s`, `ble.un`, `ble.un.s`, `blt`, `blt.s`, `blt.un`, `blt.un.s`, `bne.un`, `bne.un.s`, `ceq`, `cgt`, `cgt.un`, `clt`, `clt.un`. Boxes marked &check; indicate that all instructions are valid for that combination of operand types. Boxes marked &cross; indicate invalid CIL sequences. ~~Shaded boxes~~ <ins>Boxes marked <sup>nv<sup></ins> indicate a CIL instruction that is not verifiable. Boxes with a list of instructions are valid only for those instructions.

#### Table III.4: Binary Comparison or Branch Operations

 &nbsp; | `int32` | `int64` | `native int` | `F` | `&` | `O`
 ---- | ---- | ---- | ---- | ---- | ---- | ----
 **`int32`** | &check; | &cross; | &check; | &cross; | &cross; | &cross;
 **`int64`** | &cross; | &check; | &cross; | &cross; | &cross; | &cross;
 **`native int`** | &check; | &cross; | &check; | &cross; | `beq[.s]`, `bne.un[.s]`, `ceq` <sup>nv</sup> | &cross;
 **`F`** | &cross; | &cross; | &cross; | &check; | &cross; | &cross;
 **`&`** | &cross; | &cross; | `beq[.s]`, `bne.un[.s]`, `ceq` <sup>nv</sup> | &cross; | &check; <sup>1</sup> | &cross;
 **`O`** | &cross; | &cross; | &cross; | &cross; | &cross; | `beq[.s]`, `bne.un[.s]`, `ceq` <sup>2</sup>

 <sup>1</sup> Except for `beq`, `bne.un`, `beq.s`, `bne.un.s`, or `ceq` these combinations make sense if both operands are known to be pointers to elements of the same array. However, there is no security issue for a CLI that does not check this constraint _[Note:_ if the two operands are not pointers into the same array, then the result is simply the distance apart in the garbage-collected heap of two unrelated data items. This distance apart will almost certainly change at the next garbage collection. Essentially, the result cannot be used to compute anything useful _end note]_

 <sup>2</sup> `cgt.un` is allowed and verifiable on ObjectRefs (`O`). This is commonly used when comparing an ObjectRef with `null` (there is no "compare-not-equal" instruction, which would otherwise be a more obvious solution)

[Table III.5](#todo-missing-hyperlink) shows the result type for each possible combination of operand types in integer operations. Used for `and`, `div.un`, `not`, `or`, `rem.un`, `xor`. The `div.un` and `rem.un` instructions treat their operands as unsigned integers and produce the bit pattern corresponding to the unsigned result. As described in the CLI standard, however, the CLI makes no distinction between signed and unsigned integers on the stack. The `not` instruction is unary and returns the same type as the input. The `shl` and `shr` instructions return the same type as their first operand, and their second operand shall be of type `int32` or `native int`. Boxes marked &cross; indicate invalid CIL sequences. All other boxes denote verifiable combinations of operands.

#### Table III.5: Integer Operations

 &nbsp; | `int32` | `int64` | `native int` | `F` `&` `O`
 ---- | ---- | ---- | ---- | ---- | ---- | ----
 **`int32`** | `int32` | &cross; | `native int` | &cross; | &cross; | &cross;
 **`int64`** | &cross; | `int64` | &cross; | &cross; | &cross; | &cross;
 **`native int`** | `native int` | &cross; | `native int` | &cross; | &cross; | &cross;
 **`F`** | &cross; | &cross; | &cross; | &cross; | &cross; | &cross;
 **`&`** | &cross; | &cross; | &cross; | &cross; | &cross; | &cross;
 **`O`** | &cross; | &cross; | &cross; | &cross; | &cross; | &cross;
 
[Table III.6](#todo-missing-hyperlink) shows the valid combinations of operands and result for the shift instructions: `shl`, `shr`, `shr.un`. Boxes marked &cross; indicate invalid CIL sequences. All other boxes denote verifiable combinations of operand. If the "Shift-By" operand is larger than the width of the "To-Be-Shifted" operand, then the results are unspecified. (e.g., shift an `int32` integer left by 37 bits)

#### Table III.6: Shift Operations

 **To Be Shifted** | Shift-By | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
 ---- | ---- | ---- | ---- | ---- | ---- | ---- |
 &nbsp; | **`int32`** | **`int64`** | **`native int`** | **`F`** | **`&`** | **`O`**
 **`int32`** | `int32` | &cross; | `int32` | &cross; | &cross; | &cross;
 **`int64`** | `int64` | &cross; | `int64` | &cross; | &cross; | &cross;
 **`native int`** | `native int` | &cross; | `native int` | &cross; | &cross; | &cross;
 **`F`** | &cross; | &cross; | &cross; | &cross; | &cross; | &cross;
 **`&`** | &cross; | &cross; | &cross; | &cross; | &cross; | &cross;
 **`O`** | &cross; | &cross; | &cross; | &cross; | &cross; | &cross;

[Table III.7](#todo-missing-hyperlink) shows the result type for each possible combination of operand types in the arithmetic operations with overflow checking. An exception shall be thrown if the result cannot be represented in the result type. Used for `add.ovf`, `add.ovf.un`, `mul.ovf`, `mul.ovf.un`, `sub.ovf`, and `sub.ovf.un`. For details of the exceptions thrown, see the descriptions of the specific instructions. The ~~shaded~~ uses <ins>marked <sup>nv</sup></ins> are not verifiable, while boxes marked &cross; indicate invalid CIL sequences.

#### Table III.7: Overflow Arithmetic Operations

 &nbsp; | **`int32`** | **`int64`** | **`native int`** | **`F`** | **`&`** | **`O`**
 ---- | ---- | ---- | ---- | ---- | ---- | ----
 **`int32`** | `int32` | &cross; | `native int` | &cross; | `&` `add.ovf.un` <sup>nv</sup> | &cross;
 **`int64`** | &cross; | `int64` | &cross; | &cross; | &cross; | &cross;
 **`native int`** | `native int` | &cross; | `native int` | &cross; | `&` `add.ovf.un` <sup>nv</sup> | &cross;
 **`F`** | &cross; | &cross; | &cross; | &cross; | &cross; | &cross;
 **`&`** | `&` `add.ovf.un`, `sub.ovf.un` <sup>nv</sup> | &cross; | `&` `add.ovf.un`, `sub.ovf.un` <sup>nv</sup> | &cross; | `native int` `sub.ovf.un` <sup>nv</sup> | &cross;
 **`O`** | &cross; | &cross; | &cross; | &cross; | &cross; | &cross;

[Table III.8](#todo-missing-hyperlink) shows the result type for the conversion operations. Conversion operations convert the top item on the evaluation stack from one numeric type to another. While converting, truncation or extension occurs as shown in the table. The result type is guaranteed to be representable as the data type specified as part of the operation (i.e., the `conv.u2` instruction returns a value that can be stored in an `unsigned int16`). The stack, however, can only store values that are a minimum of 4 bytes wide. Used for the `conv.<to type>`, `conv.ovf.<to type>`, and `conv.ovf.<to type>.un` instructions. The ~~shaded~~ uses <ins>marked <sup>nv</sup></ins> are not verifiable, while boxes marked &cross; indicate invalid CIL sequences.

#### Table III.8: Conversion Operations

 Convert-To | Input (from evaluation stack) | &nbsp; | &nbsp; | &nbsp; | &nbsp; | &nbsp;
 ---- | ---- | ---- | ---- | ---- | ---- | ----
 &nbsp; | **`int32`** | **`int64`** | **`native int`** | **`F`** | **`&`** | **`O`**
 **`int8`**,<br>**`unsigned int8`**,<br>**`int16`**,<br>**`unsigned int16`** | Truncate<sup>1</sup> | Truncate<sup>1</sup> | Truncate<sup>1</sup> | Truncate to zero<sup>2</sup> | &cross; | &cross;
 **`int32`**,<br>**`unsigned int32`** | Nop | Truncate<sup>1</sup> | Truncate<sup>1</sup> | Truncate to zero<sup>2</sup> | &cross; | &cross;
 **`int64`** | Sign extend | Nop | Sign extend | Truncate to zero<sup>2</sup> | Stop GC tracking<sup>nv</sup> | Stop GC tracking<sup>nv</sup>
 **`unsigned int64`** | Zero extend | Nop | Zero extend | Truncate to zero<sup>2</sup> | Stop GC tracking<sup>4,nv</sup> | Stop GC tracking<sup>4,nv</sup>
 **`native int`** | Sign extend | Truncate<sup>1</sup> | Nop | Truncate to zero<sup>2</sup> | Stop GC tracking<sup>4,nv</sup> | Stop GC tracking<sup>4,nv</sup>
 **`native unsigned int`** | Zero extend | Truncate<sup>1</sup> | Nop | Truncate to zero<sup>2</sup> | Stop GC tracking<sup>4,nv</sup> | Stop GC tracking<sup>4,nv</sup>
 **All Float Types** | To Float | To Float | To Float | Change precision<sup>3</sup> | &cross; | &cross;

 <sup>1</sup> "Truncate" means that the number is truncated to the desired size (i.e., the most significant bytes of the input value are simply ignored). If the result is narrower than the minimum stack width of 4 bytes, then this result is zero extended (if the result type is unsigned) or sign-extended (if the result type is signed). Thus, converting the value 0x1234 ABCD from the evaluation stack to an 8-bit datum yields the result 0xCD; if the result type were `int8`, this is sign-extended to give 0xFFFF FFCD; if, instead, the result type were `unsigned int8`, this is zero-extended to give 0x0000 00CD.

 <sup>2</sup> "Truncate to zero" means that the floating-point number will be converted to an integer by truncation toward zero. Thus 1.1 is converted to 1, and -1.1 is converted to -1.

 <sup>3</sup> Converts from the current precision available on the evaluation stack to the precision specified by the instruction. If the stack has more precision than the output size the conversion is performed using the IEC 60559:1989 "round-to-nearest" mode to compute the low order bit of the result.

 <sup>4</sup> "Stop GC Tracking" means that, following the conversion, the item's value will not be reported to subsequent garbage-collection operations (and therefore will not be updated by such operations).

Rounding mode for integer to and from `F` conversions is the same as for arithmetic.
