## III.1.2 Instruction variant table

In §[III.3](iii.3-base-instructions.md) an Instruction Variant Table is presented for each instruction. It describes each variant of the instructions. The format column of the table lists the opcode for the instruction variant, along with any operands that follow the instruction in the instruction stream. For example:

 Format | Assembly Format | Description
 ---- | ---- | ----
 FE 0A _\<unsigned int16\>_ | `ldarga` _argNum_ | Fetch the address of argument _argNum_.
 0F _\<unsigned int8\>_ | `ldarga.s` _argNum_ | Fetch the address of argument _argNum_, short form.
 
The first one or two hex numbers in the format show how this instruction is encoded (its "opcode"). For example, the `ldarga` instruction is encoded as a byte holding FE, followed by another holding 0A. Italicized type names delimited by \< and \> represent numbers that should follow in the instruction stream; for example, a 2-byte quantity that is to be treated as an unsigned integer directly follows the FE 0A opcode. _[Example:_ One of the forms of the `ldc.`_\<type\>_ instruction is `ldc.r8` _num_, which has a Format "23 _\<float64\>_". For the instruction `ldc.r8` 3.1415926535897931, the resulting code is 23 182D4454FB210940, where 182D4454FB210940 is the 8-byte hex representation for 3.1415926535897931.

Similarly, another of the forms of the `ldc.`_\<type\>_ instruction is `ldc.i4.s` _num_, which a Format of "1F _\<int8\>_". For the instruction `ldc.i4.s` -3, the resulting code is 1F FD, where FD is the 1-byte hex representation for -3. The `.s` suffix indicates an instruction is a short-form instruction. In this case, it requires 2 bytes rather than the long form `ldc.i4`, which requires 5 bytes. _end example]_

Any of the fixed-size built-in types (`int8`, `unsigned int8`, `int16`, `unsigned int16`, `int32`, `unsigned int32`, `int64`, `unsigned in64`, `float32`, and `float64`) can appear in format descriptions. These types define the number of bytes for the operand and how it should be interpreted (signed, unsigned or floating-point). In addition, a metadata token can appear, indicated as _\<T\>_. Tokens are encoded as 4-byte integers. All operand numbers are encoded least-significant-byte-at-smallest-address (a pattern commonly termed "little-endian"). Bytes for instruction opcodes and operands are packed as tightly as possible (no alignment padding is done).

The assembly format column defines an assembly code mnemonic for each instruction variant. For those instructions having instruction stream operands, this column also assigns names to each of the operands to the instruction. For each instruction operand, there is a name in the assembly format. These names are used later in the instruction description.
