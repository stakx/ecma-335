## I.12.1.4 CIL instructions and numeric types

> _This subclause contains only informative text._

Most CIL instructions that deal with numbers take their operands from the evaluation stack (see §[I.12.3.2.1](#todo-missing-hyperlink)), and these inputs have an associated type that is known to the VES. As a result, a single operation like `add` can have inputs of any numeric data type, although not all instructions can deal with all combinations of operand types. Binary operations other than addition and subtraction require that both operands be of the same type. Addition and subtraction allow an integer to be added to or subtracted from a managed pointer (types `&` and `O`). Details are specified in [Partition II](#todo-missing-hyperlink).

Instructions fall into the following categories:

 * **Numeric:** These instructions deal with both integers and floating point numbers, and consider integers to be signed. Simple arithmetic, conditional branch, and comparison instructions fit in this category.

 * **Integer:** These instructions deal only with integers. Bit operations and unsigned integer division/remainder fit in this category.

 * **Floating-point:** These instructions deal only with floating-point numbers.

 * **Specific:** These instructions deal with integer and/or floating-point numbers, but have variants that deal specially with different sizes and unsigned integers. Integer operations with overflow detection, data conversion instructions, and operations that transfer data between the evaluation stack and other parts of memory (see §[I.12.3.2](#todo-missing-hyperlink)) fit into this category.

 * **Unsigned/unordered:** There are special comparison and branch instructions that treat integers as unsigned and consider unordered floating-point numbers specially (as in "branch if greater than or unordered"):

 * **Load constant:** The load constant (`ldc.*`) instructions are used to load constants of type `int32`, `int64`, `float32`, or `float64`. Native size constants (type `native int`) shall be created by conversion from `int32` (conversion from `int64` would not be portable) using `conv.i` or `conv.u`. [Table I.7: CIL Instructions by Numeric Category](#todo-missing-hyperlink) shows the CIL instructions that deal with numeric values, along with the category to which they belong. Instructions that end in ".*" indicate all variants of the instruction (based on size of data and whether the data is treated as signed or unsigned). The notation "[.s]" means both the long and short forms of these instructions.

#### Table I.7: CIL Instructions by Numeric Category

 Instruction | Category
 ---- | ----
 `add` | Numeric
 `add.ovf.*` | Specific
 `and` | Integer
 `beq[.s]` | Numeric
 `bge[.s]` | Numeric
 `bge.un[.s]` | Unsigned/unordered
 `bgt[.s]` | Numeric
 `bgt.un[.s]` | Unsigned/unordered
 `ble[.s]` | Numeric
 `ble.un[.s]` | Unsigned/unordered
 `blt[.s]` | Numeric
 `blt.un[.s]` | Unsigned/unordered
 `bne.un[.s]` | Unsigned/unordered
 `ceq` | Numeric
 `cgt` | Numeric
 `cgt.un` | Unsigned/unordered
 `ckfinite` | Floating point
 `clt` | Numeric
 `clt.un` | Unsigned/unordered
 `conv.*` | Specific
 `conv.ovf.*` | Specific
 `div` | Numeric
 `div.un` | Integer
 `ldc.*` | Load constant
 `ldelem.*` | Specific
 `ldind.*` | Specific
 `mul` | Numeric
 `mul.ovf.*` | Specific
 `neg` | Integer
 `newarr.*` | Specific
 `not` | Integer
 `or` | Integer
 `rem` | Numeric
 `rem.un` | Integer
 `shl` | Integer
 `shr` | Integer
 `shr.un` | Specific
 `stelem.*` | Specific
 `stind.*` | Specific
 `sub` | Numeric
 `sub.ovf.*` | Specific
 `xor` | Integer 

> _End informative text._