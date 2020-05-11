## II.7.4 Native data types

Some implementations of the CLI will be hosted on top of existing operating systems or runtime platforms that specify data types required to perform certain functions. The metadata allows interaction with these *native data types* by specifying how the built-in and user-defined types of the CLI are to be *marshalled* to and from native data types. This marshalling information can be specified (using the keyword **marshal**) for

 * the return type of a method, indicating that a native data type is actually returned and shall be marshalled back into the specified CLI data type

 * a parameter to a method, indicating that the CLI data type provided by the caller shall be marshalled into the specified native data type. (If the parameter is passed by reference, the updated value shall be marshalled back from the native data type into the CLI data type when the call is completed.)

 * a field of a user-defined type, indicating that any attempt to pass the object in which it occurs, to platform methods shall make a copy of the object, replacing the field by the specified native data type. (If the object is passed by reference, then the updated value shall be marshalled back when the call is completed.)

The following table lists all native types supported by the CLI, and provides a description for each of them. (A more complete description can be found in [Partition IV](#todo-missing-hyperlink) in the definition of the enum `System.Runtime.Interopservices.UnmanagedType`, which provides the actual values used to encode these types.) All encoding values in the range 0&ndash;63, inclusive, are reserved for backward compatibility with existing implementations of the CLI. Values in the range 64&ndash;127 are reserved for future use in this and related Standards.

 | _NativeType_ ::= | Description | Name in the class library<br>enum type `UnmanagedType`
 | ---- | ---- | ----
 | `'['` `']'` | Native array. Type and size are determined at runtime from the actual marshaled array. | `LPArray`
 | \| `bool` | Boolean. 4-byte integer value where any nonzero value represents TRUE, and 0 represents FALSE. | `Bool`
 | \| `float32` | 32-bit floating-point number. | `R4`
 | \| `float64` | 64-bit floating-point number. | `R8`
 | \| [ `unsigned` ] `int` | Signed or unsigned integer, sized to hold a pointer on the platform | `SysUInt` or `SysInt`
 | \| [ `unsigned` ] `int8` | Signed or unsigned 8-bit integer | `U1` or `I1`
 | \| [ `unsigned` ] `int16` | Signed or unsigned 16-bit integer | `U2` or `I2`
 | \| [ `unsigned` ] `int32` | Signed or unsigned 32-bit integer | `U4` or `I4`
 | \| [ `unsigned` ] `int64` | Signed or unsigned 64-bit integer | `U8` or `I8`
 | \| `lpstr` | A pointer to a null-terminated array of ANSI characters. The code page is implementation-specific. | `LPStr`
 | \| `lpwstr` | A pointer to a null-terminated array of Unicode characters. The character encoding is implementation-specific. | `LPWStr`
 | \| `method` | A function pointer. | `FunctionPtr`
 | \| _NativeType_ `'['` `']'` | Array of _NativeType_. The length is determined at runtime by the size of the actual marshaled array. | `LPArray`
 | \| _NativeType_ `'['` _Int32_ `']'` | Array of _NativeType_ of length _Int32_. | `LPArray`
 | \| _NativeType_ `'['` `'+'` _Int32_ `']'` | Array of _NativeType_ with runtime supplied element size. The _Int32_ specifies a parameter to the current method (counting from parameter number 0) that, at runtime, will contain the size of an element of the array in bytes. Can only be applied to methods, not fields. | `LPArray`
 | \| _NativeType_ `'['` _Int32_ `'+'` _Int32_ `']'` | Array of _NativeType_ with runtime supplied element size. The first _Int32_ specifies the number of elements in the array. The second _Int32_ specifies which parameter to the current method (counting from parameter number 0) will specify the additional number of elements in the array. Can only be applied to methods, not fields. | `LPArray`

_[Example:_

 ```ilasm
 .method int32 M1( int32 marshal(int32), bool[] marshal(bool[5]) )
 ```

Method `M1` takes two arguments: an `int32`, and an array of 5 `bool`s.

 ```ilasm
 .method int32 M2( int32 marshal(int32), bool[] marshal(bool[+1]) )
 ```

Method `M2` takes two arguments: an `int32`, and an array of `bool`s: the number of elements in that array is given by the value of the first parameter.

 ```ilasm
 .method int32 M3( int32 marshal(int32), bool[] marshal(bool[7+1]) )
 ```

Method `M3` takes two arguments: an `int32`, and an array of `bool`s: the number of elements in that array is given as 7 plus the value of the first parameter. _end example]_
