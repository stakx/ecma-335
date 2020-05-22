## II.23.4 Marshalling descriptors

A Marshalling Descriptor is like a signature &ndash; it's a 'blob' of binary data. It describes how a field or parameter (which, as usual, covers the method return, as parameter number 0) should be marshalled when calling to or from unmanaged code via PInvoke dispatch. The ILAsm syntax **marshal** can be used to create a marshalling descriptor, as can the pseudo custom attribute `MarshalAsAttribute` &ndash; see §[II.21.2.1](ii.21.2.1-pseudo-custom-attributes.md))

Note that a conforming implementation of the CLI need only support marshalling of the types specified earlier &ndash; see §[II.15.5.4](ii.15.5.4-data-type-marshaling.md).

Marshalling descriptors make use of constants named `NATIVE_TYPE_xxx`. Their names and values are listed in the following table:

 | Name | Value
 | ---- | ----
 | `NATIVE_TYPE_BOOLEAN` | 0x02
 | `NATIVE_TYPE_I1` | 0x03
 | `NATIVE_TYPE_U1` | 0x04
 | `NATIVE_TYPE_I2` | 0x05
 | `NATIVE_TYPE_U2` | 0x06
 | `NATIVE_TYPE_I4` | 0x07
 | `NATIVE_TYPE_U4` | 0x08
 | `NATIVE_TYPE_I8` | 0x09
 | `NATIVE_TYPE_U8` | 0x0a
 | `NATIVE_TYPE_R4` | 0x0b
 | `NATIVE_TYPE_R8` | 0x0c
 | `NATIVE_TYPE_LPSTR` |  0x14
 | `NATIVE_TYPE_LPWSTR` |  0x15
 | `NATIVE_TYPE_INT` |  0x1f
 | `NATIVE_TYPE_UINT` |  0x20
 | `NATIVE_TYPE_FUNC` | 0x26
 | `NATIVE_TYPE_ARRAY` | 0x2a

The 'blob' has the following format

 | _MarshalSpec_ ::=
 | ----
 | _NativeIntrinsic_
 | \| `ARRAY` _ArrayElemType_
 | \| `ARRAY` _ArrayElemType_ _ParamNum_
 | \| `ARRAY` _ArrayElemType_ _ParamNum_ _NumElem_

 | _NativeIntrinsic_ ::=
 | ----
 | `BOOLEAN` \| `I1` \| `U1` \| `I2` \| `U2` \| `I4` \| `U4` \| `I8` \| `U8` \| `R4` \| `R8` \| `LPSTR` \| `LPSTR` \| `INT` \| `UINT` \| `FUNC`

For compactness, the `NATIVE_TYPE_` prefixes have been omitted in the above lists; for example, `ARRAY` is shorthand for `NATIVE_TYPE_ARRAY`.

 | _ArrayElemType_ ::=
 | ----
 | _NativeIntrinsic_

_ParamNum_ is an unsigned integer (compressed as described in §[II.23.2](ii.23.2-blobs-and-signatures.md)) specifying the parameter in the method call that provides the number of elements in the array &ndash; see below.

_NumElem_ is an unsigned integer (compressed as described in §[II.23.2](ii.23.2-blobs-and-signatures.md)) specifying the number of elements or additional elements &ndash; see below.

_[Note:_ For example, in the method declaration:

 ```ilasm
 .method void M(int32[] ar1, int32 size1, unsigned int8[] ar2, int32 size2) { … }
 ```

The `ar1` parameter might own a row in the _FieldMarshal_ table, which indexes a _MarshalSpec_ in the Blob heap with the format:

 ```
 ARRAY  MAX  2  1
 ```

This says the parameter is marshalled to a `NATIVE_TYPE_ARRAY`. There is no additional info about the type of each element (signified by that `NATIVE_TYPE_MAX`).  The value of _ParamNum_ is 2, which indicates that parameter number 2 in the method (the one called `size1`) will specify the number of elements in the actual array &ndash; let's suppose its value on a particular call is 42. The value of _NumElem_ is 0. The calculated total size, in bytes, of the array is given by the formula:

 ```
 if ParamNum = 0
    SizeInBytes = NumElem * sizeof (elem)
 else
    SizeInBytes = ( @ParamNum +  NumElem ) * sizeof (elem)
 endif
 ```

The syntax `@ParamNum` is used here to denote the value passed in for parameter number _ParamNum_ &ndash; it would be 42 in this example. The size of each element is calculated from the metadata for the `ar1` parameter in `Foo`'s signature &ndash; an `ELEMENT_TYPE_I4` (§[II.23.1.16](ii.23.1.16-element-types-used-in-signatures.md)) of size 4 bytes. _end note]_
