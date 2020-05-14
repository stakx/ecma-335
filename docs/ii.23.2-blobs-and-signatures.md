## II.23.2 Blobs and signatures

The word *signature* is conventionally used to describe the type info for a function or method; that is, the type of each of its parameters, and the type of its return value.  Within metadata, the word signature is also used to describe the type info for fields, properties, and local variables.  Each Signature is stored as a (counted) byte array in the Blob heap.  There are several kinds of Signature, as follows:

 * _MethodRefSig_ (differs from a _MethodDefSig_ only for `VARARG` calls)

 * _MethodDefSig_

 * _FieldSig_

 * _PropertySig_

 * _LocalVarSig_

 * _TypeSpec_

 * _MethodSpec_

The value of the first byte of a Signature 'blob' indicates what kind of Signature it is. Its lowest 4 bits hold one of the following: `C`, `DEFAULT`, `FASTCALL`, `STDCALL`, `THISCALL`, or `VARARG` (whose values are defined in §[II.23.2.3](#todo-missing-hyperlink)), which qualify method signatures; `FIELD`, which denotes a field signature (whose value is defined in §[II.23.2.4](#todo-missing-hyperlink)); or `PROPERTY`, which denotes a property signature (whose value is defined in §[II.23.2.5](#todo-missing-hyperlink)). This subclause defines the binary 'blob' format for each kind of Signature. In the syntax diagrams that accompany many of the definitions, shading is used to combine into a single diagram what would otherwise be multiple diagrams; the accompanying text describes the use of shading.

Signatures are compressed before being stored into the Blob heap (described below) by compressing the integers embedded in the signature. The maximum encodable unsigned integer is 29 bits long, 0x1FFFFFFF. For signed integers, as occur in ArrayShape (§[II.23.2.13](#todo-missing-hyperlink)), the range is -2<sup>28</sup> (0xF0000000) to 2<sup>28</sup>-1 (0x0FFFFFFF). The compression algorithm used is as follows (bit 0 is the least significant bit):

 * For unsigned integers:

   * If the value lies between 0 (0x00) and 127 (0x7F), inclusive, encode as a one-byte integer (bit 7 is clear, value held in bits 6 through 0)

   * If the value lies between 2<sup>8</sup> (0x80) and 2<sup>14</sup>-1 (0x3FFF), inclusive, encode as a 2-byte integer with bit 15 set, bit 14 clear (value held in bits 13 through 0)

   * Otherwise, encode as a 4-byte integer, with bit 31 set, bit 30 set, bit 29 clear (value held in bits 28 through 0)

 * For signed integers:

   * If the value lies between -2<sup>6</sup> and 2<sup>6</sup>-1 inclusive:

      * Represent the value as a 7-bit 2's complement number, giving 0x40 (-2<sup>6</sup>) to 0x3F (2<sup>6</sup>-1);

      * Rotate this value 1 bit left, giving 0x01 (-2<sup>6</sup>) to 0x7E (2<sup>6</sup>-1);

      * Encode as a one-byte integer, bit 7 clear, rotated value in bits 6 through 0, giving 0x01 (-2<sup>6</sup>) to 0x7E (2<sup>6</sup>-1).

   * If the value lies between -2<sup>13</sup> and 2<sup>13</sup>-1 inclusive:

      * Represent the value as a 14-bit 2’s complement number, giving 0x2000 (-2<sup>13</sup>) to 0x1FFF (2<sup>13</sup>-1);

      * Rotate this value 1 bit left, giving 0x0001 (-2<sup>13</sup>) to 0x3FFE (2<sup>13</sup>-1);

      * Encode as a two-byte integer: bit 15 set, bit 14 clear, rotated value in bits 13 through 0, giving 0x8001 (-2<sup>13</sup>) to 0xBFFE (2<sup>13</sup>-1).

   * If the value lies between -2<sup>28</sup> and 2<sup>28</sup>-1 inclusive:

      * Represent the value as a 29-bit 2's complement representation, giving 0x10000000 (-2<sup>28</sup>) to 0xFFFFFFF (2<sup>28</sup>-1);

      * Rotate this value 1-bit left, giving 0x00000001 (-2<sup>28</sup>) to 0x1FFFFFFE (2<sup>28</sup>-1);

      * Encode as a four-byte integer: bit 31 set, 30 set, bit 29 clear, rotated value in bits 28 through 0, giving 0xC0000001 (-2<sup>28</sup>) to 0xDFFFFFFE (2<sup>28</sup>-1).

 * A null string should be represented with the reserved single byte 0xFF, and no following data

_[Note:_ The tables below show several examples. The first column gives a value, expressed in familiar (C-like) hex notation. The second column shows the corresponding, compressed result, as it would appear in a PE file, with successive bytes of the result lying at successively higher byte offsets within the file. (This is the opposite order from how regular binary integers are laid out in a PE file.)

Unsigned examples:

 | Original Value | Compressed Representation |
 | ---- | ----
 | 0x03 | 03
 | 0x7F | 7F (7 bits set)
 | 0x80 | 8080
 | 0x2E57 | AE57
 | 0x3FFF | BFFF
 | 0x4000 | C000 4000
 | 0x1FFF FFFF | DFFF FFFF |

Signed examples:

 | Original Value | Compressed Representation
 | ---- | ----
 | 3 | 06
 | -3 | 7B
 | 64 | 8080
 | -64 | 01
 | 8192 | C000 4000
 | -8192 | 8001
 | 268435455 | DFFF FFFE
 | -268435456 | C000 0001

_end note]_

The most significant bits (the first ones encountered in a PE file) of a "compressed" field, can reveal whether it occupies 1, 2, or 4 bytes, as well as its value. For this to work, the "compressed" value, as explained above, is stored in big-endian order; i.e., with the most significant byte at the smallest offset within the file.

Signatures make extensive use of constant values called `ELEMENT_TYPE_xxx` &ndash; see §[II.23.1.16](ii.23.1.16-element-types-used-in-signatures.md). In particular, signatures include two modifiers called:

 * `ELEMENT_TYPE_BYREF` &ndash; this element is a managed pointer (see [Partition I](#todo-missing-hyperlink)). This modifier can only occur in the definition of _LocalVarSig_ (§[II.23.2.6](#todo-missing-hyperlink)), _Param_ (§[II.23.2.10](#todo-missing-hyperlink)) or _RetType_ (§[II.23.2.11](#todo-missing-hyperlink)). It shall not occur within the definition of a _Field_ (§[II.23.2.4](#todo-missing-hyperlink))

 * `ELEMENT_TYPE_PTR` &ndash; this element is an unmanaged pointer (see [Partition I](#todo-missing-hyperlink)). This modifier can occur in the definition of _LocalVarSig_ (§[II.23.2.6](#todo-missing-hyperlink)), _Param_ (§[II.23.2.10](#todo-missing-hyperlink)), _RetType_ (§[II.23.2.11](#todo-missing-hyperlink)) or _Field_ (§[II.23.2.4](#todo-missing-hyperlink))
