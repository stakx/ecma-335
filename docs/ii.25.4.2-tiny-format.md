## II.25.4.2 Tiny format

Tiny headers use a 6-bit length encoding. The following is true for all tiny headers:

 * No local variables are allowed

 * No exceptions

 * No extra data sections

 * The operand stack shall be no bigger than 8 entries

A Tiny Format header is encoded as follows:

 Start bit | Count of Bits | Description
 ---- | ---- | ----
 0 | 2 | Flags (`CorILMethod_TinyFormat` shall be set, see §[II.25.4.4](ii.25.4.4-flags-for-method-headers.md)).
 2 | 6 | Size, in bytes, of the method body immediately following this header.

