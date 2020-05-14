## II.23.2.16 Short form signatures

The general specification for signatures leaves some leeway in how to encode certain items. For example, it appears valid to encode a String as either

 * long-form: (`ELEMENT_TYPE_CLASS`, TypeRef-to-`System.String`)
 * short-form: `ELEMENT_TYPE_STRING`

Only the short form is valid. The following table shows which short-forms should be used in place of each long-form item. (As usual, for compactness, the `ELEMENT_TYPE_` prefix have been omitted here &ndash; so `VALUETYPE` is short for `ELEMENT_TYPE_VALUETYPE`)

 | Long Form | &nbsp; | Short Form
 | ---- | ---- |----
 | **Prefix** | **TypeRef to:**
 | `CLASS` | `System.String` | `STRING`
 | `CLASS` | `System.Object` | `OBJECT`
 | `VALUETYPE` | `System.Void` | `VOID`
 | `VALUETYPE` | `System.Boolean` | `BOOLEAN`
 | `VALUETYPE` | `System.Char` | `CHAR`
 | `VALUETYPE` | `System.Byte` | `U1`
 | `VALUETYPE` | `System.Sbyte` | `I1`
 | `VALUETYPE` | `System.Int16` | `I2`
 | `VALUETYPE` | `System.UInt16` | `U2`
 | `VALUETYPE` | `System.Int32` | `I4`
 | `VALUETYPE` | `System.UInt32` | `U4`
 | `VALUETYPE` | `System.Int64` | `I8`
 | `VALUETYPE` | `System.UInt64` | `U8`
 | `VALUETYPE` | `System.IntPtr` | `I`
 | `VALUETYPE` | `System.UIntPtr` | `U`
 | `VALUETYPE` | `System.TypedReference` | `TYPEDBYREF`
