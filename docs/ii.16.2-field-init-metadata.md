## II.16.2 Field init metadata

The _FieldInit_ metadata can optionally be added to a field declaration. The use of this feature shall not be combined with a data label.

The _FieldInit_ information is stored in metadata and this information can be queried from metadata. But the CLI does not use this information to automatically initialize the corresponding fields. The field initializer is typically used with **literal** fields (§[II.16.1.2](ii.16.1.2-field-contract-attributes.md)) or parameters with default values. See §[II.22.9](ii.22.9-constant-0x0b.md).

The following table lists the options for a field initializer. Note that while both the type and the field initializer are stored in metadata there is no requirement that they match. (Any importing compiler is responsible for coercing the stored value to the target field type). The description column in the table below provides additional information.

 | _FieldInit_ ::= | Description
 | ---- | ----
 | `bool` `'('` `true` | `false` `')'` | Boolean value, encoded as true or false
 | \| `bytearray` `'('` _Bytes_ `')'` | String of bytes, stored without conversion. Can be padded with one zero byte to make the total byte-count an even number
 | \| `char` `'('` _Int32_ `')'` | 16-bit unsigned integer (Unicode character)
 | \| `float32` `'('` _Float64_ `')'` | 32-bit floating-point number, with the floating-point number specified in parentheses.
 | \| `float32` `'('` _Int32_ `')'` | _Int32_ is binary representation of float
 | \| `float64` `'('` _Float64_ `')'` | 64-bit floating-point number, with the floating-point number specified in parentheses.
 | \| `float64` `'('` _Int64_ `')'` | _Int64_ is binary representation of double
 | \| [ `unsigned` ] `int8` `'('` _Int32_ `')'` | 8-bit integer with the value specified in parentheses.
 | \| [ `unsigned` ] `int16` `'('` _Int32_ `')'` | 16-bit integer with the value specified in parentheses.
 | \| [ `unsigned` ] `int32` `'('` _Int32_ `')'` | 32-bit integer with the value specified in parentheses.
 | \| [ `unsigned` ] `int64` `'('` _Int64_ `')'` | 64-bit integer with the value specified in parentheses.
 | \| _QSTRING_ | String. _QSTRING_ is stored as Unicode
 | \| `nullref` | Null object reference

_[Example:_ The following shows a typical use of this:

 ```ilasm
 .field public static literal valuetype ErrorCodes no_error = int8(0)
 ```

The field named `no_error` is a literal of type `ErrorCodes` (a value type) for which no memory is allocated. Tools and compilers can look up the value and detect that it is intended to be an 8-bit signed integer whose value is 0. _end example]_
