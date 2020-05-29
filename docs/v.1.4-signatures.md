## V.1.4 Signatures

Signatures of variables and constants are encoded as an index into the _SymMisc_ heap, and a signature size. The values of the bytes are similar to those for a _FieldSig_ (see [Partition II](#todo-missing-hyperlink)), and include the prefix `FIELD` (0x6), even though the variables are not fields. Because the length of the signature is encoded in the tables, it is not included in the _SymMisc_ heap. For example, type `int32` is encoded as "0x06 0x08".
