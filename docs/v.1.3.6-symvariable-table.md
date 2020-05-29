## V.1.3.6 SymVariable table

Each row of a _SymVariable_ table describes a local variable.

 | Offset | Size | Field | Description 
 | ---- | ---- | ---- | ----
 | 0 | 4 | **Scope** | Index of the parent scope
 | 4 | 4 | **Name** | Index of the variable's name in the _SymString_ heap.
 | 8 | 4 | **Attributes** | Flags describing the variable (see below).
 | 12 | 4 | **Signature** | Index of the signature in the SymMisc heap.
 | 16 | 4 | **SignatureSize** | Length of the signature.
 | 20 | 4 | **AddressKind** | Always 1.
 | 24 | 4 | **Address1** | Local variable number.
 | 28 | 4 | **Address2** | Always 0.
 | 32 | 4 | **Address3** | Always 0.
 | 36 | 4 | **StartOffset** | CIL offset where the variable is first visible.
 | 40 | 4 | **EndOffset** | CIL offset where the variable is last visible.
 | 44 | 4 | **Sequence** | Always 0.
 | 48 | 4 | **IsParam** | Always 0.
 | 52 | 4 | **IsHidden** | 1 if variable should be hidden from debugger; 0 otherwise.

The least-significant bit of **Attributes** indicates whether the variable is user-generated (0) or compiler-generated (1). The other bits are reserved and should be set to zero.

Because parameters are fully described by the Metadata, they do not appear in the _SymVariable_ table.
