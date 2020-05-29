## V.1.3 Tables and heaps

The CILDB header is immediately followed by various tables and heaps, in the following order:

 1. _SymConstant_

 2. _SymMethod_

 3. _SymScopes_

 4. _SymVariable_

 5. _SymUsing_

 6. _SymSequencePoint_

 7. _SymDocument_

 8. _SymMisc_

 9. _SymString_

Some of the tables contain CIL offsets. These offsets are in bytes, and the offset of the first instruction is zero. The offsets do not necessarily match the beginning of a CIL instruction. For example, offsets denoting the end of a range of bytes often refer to the last byte of an instruction. Lengths are also in bytes.

The rows in each of the tables 3&ndash;7 above that belong to the same method must be contiguous within their parent table.
