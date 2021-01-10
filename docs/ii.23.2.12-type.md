## II.23.2.12 Type

_Type_ is encoded in signatures as follows (`I1` is an abbreviation for `ELEMENT_TYPE_I1`, `U1` is an abbreviation for `ELEMENT_TYPE_U1`, and so on; see [II.23.1.16](ii.23.1.16-element-types-used-in-signatures.md)):

 | _Type_ ::=
 | ----
 | `BOOLEAN` \| `CHAR` \| `I1` \| `U1` \| `I2` \| `U2` \| `I4` \| `U4` \| `I8` \| `U8` \| `R4` \| `R8` \| `I` \| `U`
 | \| `ARRAY` _Type_ _ArrayShape_ (general array, see §[II.23.2.13](#todo-missing-hyperlink))
 | \| `CLASS` _TypeDefOrRefOrSpecEncoded_
 | \| `FNPTR` _MethodDefSig_
 | \| `FNPTR` _MethodRefSig_
 | \| `GENERICINST` (`CLASS` \| `VALUETYPE`) _TypeDefOrRefOrSpecEncoded_ _GenArgCount_ _Type_* 
 | \| `MVAR` _number_
 | \| `OBJECT` 
 | \| `PTR` _CustomMod_* _Type_
 | \| `PTR` _CustomMod_* `VOID` 
 | \| `STRING`
 | \| `SZARRAY` _CustomMod_* _Type_ (single dimensional, zero-based array i.e., vector) 
 | \| `VALUETYPE` _TypeDefOrRefOrSpecEncoded_
 | \| `VAR` _number_

The _GenArgCount_ non-terminal is an unsigned integer value (compressed) specifying the _number_ of generic arguments in this signature. The number non-terminal following `MVAR` or `VAR` is an unsigned integer value (compressed).
