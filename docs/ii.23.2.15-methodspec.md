## II.23.2.15 MethodSpec

The signature in the Blob heap indexed by a _MethodSpec_ token has the following format

 | _MethodSpecBlob_ ::=
 | ----
 | `GENERICINST` _GenArgCount_ _Type_ _Type_*

`GENERICINST` has the value 0x0A. _[Note:_ This value is known as `IMAGE_CEE_CS_CALLCONV_GENERICINST` in the Microsoft CLR implementation. _end note]_

The _GenArgCount_ is a compressed unsigned integer indicating the number of generic arguments in the method. The blob then specifies the instantiated type, repeating a total of _GenArgCount_ times. 
