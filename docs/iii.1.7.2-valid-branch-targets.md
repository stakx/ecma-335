## III.1.7.2 Valid branch targets

The set of addresses composed of the first byte of each instruction identified in the instruction stream defines the only valid instruction targets. Instruction targets include branch targets as specified in branch instructions, targets specified in exception tables such as protected ranges (see [Partition I](#todo-missing-hyperlink) and [Partition II](#todo-missing-hyperlink)), filter, and handler targets.

Branch instructions specify branch targets as either a 1-byte or 4-byte signed relative offset; the size of the offset is differentiated by the opcode of the instruction. The offset is defined as being relative to the byte following the branch instruction. _[Note:_ Thus, an offset value of zero targets the immediately following instruction._]_ The value of a 1-byte offset is computed by interpreting that byte as a signed 8-bit integer.

The value of a 4-byte offset is can be computed by concatenating the bytes into a signed integer in the following manner: the byte of lowest address forms the least significant byte, and the byte with highest address forms the most significant byte of the integer. _[Note:_ This representation is often called "a signed integer in little-endian byte-order"._]_
