## II.7.1 Types

The following grammar completely specifies all built-in types (including pointer types) of the CLI system. It also shows the syntax for user defined types that can be defined in the CLI system: 

 *Type* ::= | Description | Clause
 ---- | ---- | ----
 `'!'` _Int32_ | Generic parameter in a type definition, accessed by index from 0 | §[II.9.1](#todo-missing-hyperlink)
 \| `'!!'` _Int32_ | Generic parameter in a method definition, accessed by index from 0 | §[II.9.2](#todo-missing-hyperlink)
 \| `bool` | Boolean | §[II.7.2](#todo-missing-hyperlink)
 \| `char` | 16-bit Unicode code point | §[II.7.2](#todo-missing-hyperlink)
 \| `class` _TypeReference_ | User defined reference type | §[II.7.3](#todo-missing-hyperlink)
 \| `float32` | 32-bit floating-point number | §[II.7.2](#todo-missing-hyperlink)
 \| `float64` | 64-bit floating-point number | §[II.7.2](#todo-missing-hyperlink)
 \| `int8` | Signed 8-bit integer | §[II.7.2](#todo-missing-hyperlink)
 \| `int16` | Signed 16-bit integer | §[II.7.2](#todo-missing-hyperlink)
 \| `int32` | Signed 32-bit integer | §[II.7.2](#todo-missing-hyperlink)
 \| `int64` | Signed 64-bit integer | §[II.7.2](#todo-missing-hyperlink)
 \| `method` _CallConv_ _Type_ `'*'` `'('` _Parameters_ `')'` | Method pointer | §[II.14.5](#todo-missing-hyperlink)
 \| `native int` | 32- or 64-bit signed integer whose size is platform-specific | §[II.7.2](#todo-missing-hyperlink)
 \| `native unsigned int` | 32- or 64-bit unsigned integer whose size is platform-specific | §[II.7.2](#todo-missing-hyperlink)
 \| `object` | See `System.Object` in [Partition IV](#todo-missing-hyperlink) | &nbsp;
 \| `string` | See `System.String` in [Partition IV](#todo-missing-hyperlink) | &nbsp;
 \| _Type_ `'&'` | Managed pointer to _Type_. _Type_ shall not be a managed pointer type or **typedref** | §[II.14.4](#todo-missing-hyperlink)
 \| *Type* `'*'` | Unmanaged pointer to *Type* | §[II.14.4](#todo-missing-hyperlink)
 \| *Type* `'<'` *GenArgs* `'>'` | Instantiation of generic type | §[II.9.4](#todo-missing-hyperlink)
 \| _Type_ `'['` [ *Bound* [ `','` *Bound* ]*] `']'` | Array of _Type_ with optional rank (number of dimensions) and bounds. | §[II.14.1](#todo-missing-hyperlink) and §[II.14.2](#todo-missing-hyperlink)
 \| _Type_ `modopt` `'('` _TypeReference_ `')'` | Custom modifier that can be ignored by the caller. | §[II.7.1.1](#todo-missing-hyperlink)
 \| _Type_ `modreq` `'('` _TypeReference_ `')'` | Custom modifier that the caller shall understand. | §[II.7.1.1](#todo-missing-hyperlink)
 \| _Type_ `pinned` | For local variables only. The garbage collector shall not move the referenced value. | §[II.7.1.2](#todo-missing-hyperlink)
 \| `typedref` | Typed reference (i.e., a value of type `System.TypedReference`), created by `mkrefany` and used by `refanytype` or `refanyval`. | §[II.7.2](#todo-missing-hyperlink)
 \| `valuetype` _TypeReference_ | (Unboxed) user defined value type | §[II.13](#todo-missing-hyperlink)
 \| `unsigned int8` | Unsigned 8-bit integer | §[II.7.2](#todo-missing-hyperlink)
 \| `unsigned int16` | Unsigned 16-bit integer | §[II.7.2](#todo-missing-hyperlink)
 \| `unsigned int32` | Unsigned 32-bit integer | §[II.7.2](#todo-missing-hyperlink)
 \| `unsigned int64` | Unsigned 64-bit integer | §[II.7.2](#todo-missing-hyperlink)
 \| `void` | No type. Only allowed as a return type or as part of `void *` | §[II.7.2](#todo-missing-hyperlink)

In several situations the grammar permits the use of a slightly simpler representation for specifying types; e.g., "`System.GC`" can be used instead of  "`class System.GC`". Such representations are called *type specifications*: 

 _TypeSpec_ ::= | Clause
 ---- | ----
 `'['` [ `.module` ] *DottedName* `']'` | §[II.7.3](#todo-missing-hyperlink)
 \| _TypeReference_ | §[II.7.2](#todo-missing-hyperlink)
 \| _Type_ | §[II.7.1](#todo-missing-hyperlink)