## II.23.2.14 TypeSpec

The signature in the Blob heap indexed by a _TypeSpec_ token has the following format

 | _TypeSpecBlob_ ::=
 | ----
 | `PTR` _CustomMod_* `VOID` 
 |  \| `PTR` _CustomMod_* _Type_
 | \| `FNPTR` _MethodDefSig_
 | \| `FNPTR` _MethodRefSig_
 | \| `ARRAY` _Type_ _ArrayShape_
 | \| `SZARRAY` _CustomMod_* _Type_
 | \| `GENERICINST` ( `CLASS` \| `VALUETYPE` ) _TypeDefOrRefOrSpecEncoded_ _GenArgCount_ _Type_ _Type_*

For compactness, the `ELEMENT_TYPE_` prefixes have been omitted from this list. So, for example, `PTR` is shorthand for `ELEMENT_TYPE_PTR`. (§[II.23.1.16](ii.23.1.16-element-types-used-in-signatures.md))   Note that a TypeSpecBlob does not begin with a calling-convention byte, so it differs from the various other signatures that are stored into Metadata.
