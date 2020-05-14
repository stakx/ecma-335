## I.8.2.2 Built-in value and reference types

The following data types are an integral part of the CTS and are supported directly by the VES. They have special encoding in the persisted metadata:

#### Table I.1: Special Encoding

 | Name in CIL assembler (see [Partition II](#todo-missing-hyperlink)) | CLS Type? | Name in class library (see [Partition IV](#todo-missing-hyperlink)) | Description
 | ---- | ---- | ---- | ----
 | `bool`<sup>1</sup> | Yes | `System.Boolean` | True/false value
 | `char`<sup>1</sup> | Yes | `System.Char` | Unicode 16-bit char.
 | `object` | Yes | `System.Object` | Object or boxed value type
 | `string` | Yes | `System.String` | Unicode string
 | `float32` | Yes | `System.Single` | IEC 60559:1989 32-bit float
 | `float64` | Yes | `System.Double` | IEC 60559:1989 64-bit float
 | `int8` | No | `System.SByte` | Signed 8-bit integer
 | `int16` | Yes | `System.Int16` | Signed 16-bit integer
 | `int32` | Yes | `System.Int32` | Signed 32-bit integer
 | `int64` | Yes | `System.Int64` | Signed 64-bit integer
 | `native int` | Yes | `System.IntPtr` | Signed integer, native size
 | `native unsigned int` | No | `System.UIntPtr` | Unsigned integer, native size
 | `typedref` | No | `System.TypedReference` | Pointer plus exact type
 | `unsigned int8` | Yes | `System.Byte` | Unsigned 8-bit integer
 | `unsigned int16` | No | `System.UInt16` | Unsigned 16-bit integer
 | `unsigned int32` | No | `System.UInt32` | Unsigned 32-bit integer
 | `unsigned int64` | No | `System.UInt64` | Unsigned 64-bit integer

 <sup>1</sup> `bool` and `char` are integer types in the categorization shown in the figure above.
