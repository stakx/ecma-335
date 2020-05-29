## VI.B.4.3 Metadata

As detailed in §[II.23.2.12](ii.23.2.12-type.md), the _Type_ non-terminal now includes a production for generic instantiations, as follows:

 | _Type_ ::= &hellip
 | ----
 | \| `GENERICINST` (`CLASS` \| `VALUETYPE`) _TypeDefOrRefEncoded_ _GenArgCount_ _Type_ *

Following this production, the `Phone<string,int>` instantiation above is encoded as:

 ```
 0x15  ELEMENT_TYPE_GENERICINST
 0x12  ELEMENT_TYPE_CLASS
 0x08  TypeDefOrRef coded index for class "Phone<K,V>"
 0x02  GenArgCount = 2
 0x0E     ELEMENT_TYPE_STRING
 0x08     ELEMENT_TYPE_I4
 ```

Similarly, the signature for the field `vals` is encoded as:

 ```
 0x06  FIELD
 0x1D  ELEMENT_TYPE_SZARRAY
 0x13  ELEMENT_TYPE_VAR
 0x01  1, representing generic argument number 1 (i.e., "V")
 ```

Similarly, the signature for the (rather contrived) static method `AddOne` is encoded as:

 ```
 0x10  IMAGE_CEE_CS_CALLCONV_GENERIC
 0x02  GenParamCount = 2 (2 generic parameters for this method: KK and VV
 0x03  ParamCount = 3 (phone, kk and vv)
 0x01  RetType = ELEMENT_TYPE_VOID
 0x15  Param-0:  ELEMENT_TYPE_GENERICINST
 0x12            ELEMENT_TYPE_CLASS
 0x08            TypeDefOrRef coded index for class "Phone<KK,VV>"
 0x02            GenArgCount = 2
 0x1e               ELEMENT_TYPE_MVAR
 0x00               !!0 (KK in AddOne<KK,VV>)
 0x1e               ELEMENT_TYPE_MVAR
 0x01               !!1 (VV in AddOne<KK,VV>)
 0x1e  Param-1   ELEMENT_TYPE_MVAR
 0x00            !!0 (KK in AddOne<KK,VV>)
 0x1e  Param-2   ELEMENT_TYPE_MVAR
 0x01            !!1 (VV in AddOne<KK,VV>)
 ```

Notice that the above example uses indenting to help denote loops over the three method parameters, and the two generic parameters on `Phone`.
