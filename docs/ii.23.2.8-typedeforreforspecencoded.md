## II.23.2.8 TypeDefOrRefOrSpecEncoded

These items are compact ways to store a _TypeDef_, _TypeRef_, or _TypeSpec_ token in a Signature (§[II.23.2.12](ii.23.2.12-type.md)). Consider a regular _TypeRef_ token, such as 0x01000012. The top byte of 0x01 indicates that this is a _TypeRef_ token (see §[II.22](ii.22-metadata-logical-format-tables.md) for a list of the supported metadata token types). The lower 3 bytes (0x000012) index row number 0x12 in the _TypeRef_ table.

The encoded version of this _TypeRef_ token is made up as follows:

 1. encode the table that this token indexes as the least significant 2 bits.  The bit values to use are 0, 1 and 2, specifying the target table is the _TypeDef_, _TypeRef_ or _TypeSpec_ table, respectively

 2. shift the 3-byte row index (0x000012 in this example) left by 2 bits and OR into the 2-bit encoding from step 1

 3. compress the resulting value (§[II.23.2](ii.23.2-blobs-and-signatures.md)).

This example yields the following encoded value:

 ```
 a)  encoded = value for TypeRef table = 0x01 (from 1. above)
 b)  encoded = ( 0x000012 << 2 ) |  0x01
             = 0x48 | 0x01
             = 0x49
 c)  encoded = Compress (0x49)
             = 0x49
 ```

So, instead of the original, regular _TypeRef_ token value of 0x01000012, requiring 4 bytes of space in the Signature 'blob', this _TypeRef_ token is encoded as a single byte.
