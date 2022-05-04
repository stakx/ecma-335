## II.7.1 Types

The following grammar completely specifies all built-in types (including pointer types) of the CLI system. It also shows the syntax for user defined types that can be defined in the CLI system: 

 *Type* ::= | Description | Clause
 ---- | ---- | ----
 `'!'` _Int32_ | Generic parameter in a type definition, accessed by index from 0 | §[II.9.1](ii.9.1-generic-type-definitions.md)
 \| `'!!'` _Int32_ | Generic parameter in a method definition, accessed by index from 0 | §[II.9.2](ii.9.2-generics-and-recursive-inheritance-graphs.md)
 \| `bool` | Boolean | §[II.7.2](ii.7.2-built-in-types.md)
 \| `char` | 16-bit Unicode code point | §[II.7.2](ii.7.2-built-in-types.md)
 \| `class` _TypeReference_ | User defined reference type | §[II.7.3](ii.7.3-references-to-user-defined-types-typereference.md)
 \| `float32` | 32-bit floating-point number | §[II.7.2](ii.7.2-built-in-types.md)
 \| `float64` | 64-bit floating-point number | §[II.7.2](ii.7.2-built-in-types.md)
 \| `int8` | Signed 8-bit integer | §[II.7.2](ii.7.2-built-in-types.md)
 \| `int16` | Signed 16-bit integer | §[II.7.2](ii.7.2-built-in-types.md)
 \| `int32` | Signed 32-bit integer | §[II.7.2](ii.7.2-built-in-types.md)
 \| `int64` | Signed 64-bit integer | §[II.7.2](ii.7.2-built-in-types.md)
 \| `method` _CallConv_ _Type_ `'*'` `'('` _Parameters_ `')'` | Method pointer | §[II.14.5](ii.14.5-method-pointers.md)
 \| `native int` | 32- or 64-bit signed integer whose size is platform-specific | §[II.7.2](ii.7.2-built-in-types.md)
 \| `native unsigned int` | 32- or 64-bit unsigned integer whose size is platform-specific | §[II.7.2](ii.7.2-built-in-types.md)
 \| `object` | See `System.Object` in [Partition IV](#todo-missing-hyperlink) | &nbsp;
 \| `string` | See `System.String` in [Partition IV](#todo-missing-hyperlink) | &nbsp;
 \| _Type_ `'&'` | Managed pointer to _Type_. _Type_ shall not be a managed pointer type or **typedref** | §[II.14.4](ii.14.4-pointer-types.md)
 \| *Type* `'*'` | Unmanaged pointer to *Type* | §[II.14.4](ii.14.4-pointer-types.md)
 \| *Type* `'<'` *GenArgs* `'>'` | Instantiation of generic type | §[II.9.4](ii.9.4-instantiating-generic-types.md)
 \| _Type_ `'['` [ *Bound* [ `','` *Bound* ]*] `']'` | Array of _Type_ with optional rank (number of dimensions) and bounds. | §[II.14.1](ii.14.1-vectors.md) and §[II.14.2](ii.14.2-arrays.md)
 \| _Type_ `modopt` `'('` _TypeReference_ `')'` | Custom modifier that can be ignored by the caller. | §[II.7.1.1](ii.7.1.1-modreq-and-modopt.md)
 \| _Type_ `modreq` `'('` _TypeReference_ `')'` | Custom modifier that the caller shall understand. | §[II.7.1.1](ii.7.1.1-modreq-and-modopt.md)
 \| _Type_ `pinned` | For local variables only. The garbage collector shall not move the referenced value. | §[II.7.1.2](ii.7.1.2-pinned.md)
 \| `typedref` | Typed reference (i.e., a value of type `System.TypedReference`), created by `mkrefany` and used by `refanytype` or `refanyval`. | §[II.7.2](ii.7.2-built-in-types.md)
 \| `valuetype` _TypeReference_ | (Unboxed) user defined value type | §[II.13](ii.13-semantics-of-value-types.md)
 \| `unsigned int8` | Unsigned 8-bit integer | §[II.7.2](ii.7.2-built-in-types.md)
 \| `unsigned int16` | Unsigned 16-bit integer | §[II.7.2](ii.7.2-built-in-types.md)
 \| `unsigned int32` | Unsigned 32-bit integer | §[II.7.2](ii.7.2-built-in-types.md)
 \| `unsigned int64` | Unsigned 64-bit integer | §[II.7.2](ii.7.2-built-in-types.md)
 \| `void` | No type. Only allowed as a return type or as part of `void *` | §[II.7.2](ii.7.2-built-in-types.md)

In several situations the grammar permits the use of a slightly simpler representation for specifying types; e.g., "`System.GC`" can be used instead of  "`class System.GC`". Such representations are called *type specifications*: 

 _TypeSpec_ ::= | Clause
 ---- | ----
 `'['` [ `.module` ] *DottedName* `']'` | §[II.7.3](ii.7.3-references-to-user-defined-types-typereference.md)
 \| _TypeReference_ | §[II.7.2](ii.7.2-built-in-types.md)
 \| _Type_ | §[II.7.1](ii.7.1-types.md)