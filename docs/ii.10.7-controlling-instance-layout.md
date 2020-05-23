## II.10.7 Controlling instance layout

The CLI supports both sequential and explicit layout control, see §[II.10.1.2](ii.10.1.2-type-layout-attributes.md). For explicit layout it is also necessary to specify the precise layout of an instance; see also §[II.22.18](ii.22.18-fieldrva-0x1d.md) and §[II.22.16](ii.22.16-fieldlayout-0x10.md).

 | _FieldDecl_ ::=
 | ----
 | [ `'['` _Int32_ `']'` ] _FieldAttr_* _Type_ _Id_

The optional `int32` specified in brackets at the beginning of the declaration specifies the byte offset from the beginning of the instance of the type. (For a given type _t_, this beginning refers to the start of the set of members explicitly defined in type _t_, excluding all members defined in any types from which type _t_ directly or indirectly inherits.) This form of explicit layout control shall not be used with global fields specified using the at notation §[II.16.3.2](ii.16.3.2-accessing-data-from-the-pe-file.md)).

Offset values shall be non-negative. It is possible to overlap fields in this way, though offsets occupied by an object reference shall not overlap with offsets occupied by a built-in value type or a part of another object reference. While one object reference can completely overlap another, this is unverifiable.

Fields can be accessed using pointer arithmetic and `ldind` to load the field indirectly or `stind` to store the field indirectly (see [Partition III](#todo-missing-hyperlink)). See §[II.22.16](ii.22.16-fieldlayout-0x10.md) and §[II.22.18](ii.22.18-fieldrva-0x1d.md) for encoding of this information. For explicit layout, every field shall be assigned an offset.

The **.pack** directive specifies that fields should be placed within the runtime object at byte addresses which are a multiple of the specified number, or at natural alignment for that field type, whichever is *smaller*. For example, **.pack** 2 would allow 32-bit-wide fields to be started on even addresses, whereas without any **.pack** directive, they would be naturally aligned; that is, placed on addresses that are a multiple of 4. The integer following **.pack** shall be one of the following: 0, 1, 2, 4, 8, 16, 32, 64, or 128. (A value of zero indicates that the pack size used should match the default for the current platform.) The **.pack** directive shall not be supplied for any type with explicit layout control.

The **.size** directive indicates a minimum size, and is intended to allow for padding. Therefore, the amount of memory allocated is the maximum of the size calculated from the layout and the **.size** directive. Note that if this directive applies to a value type, then the size shall be less than 1 MByte.

_[Note:_ Metadata that controls instance layout is not a "hint," it is an integral part of the VES that shall be supported by all conforming implementations of the CLI. _end note]_

_[Example:_ The following class uses sequential layout of its fields:

 ```ilasm
 .class sequential public SequentialClass
 { .field public int32 a  // store at offset 0 bytes
   .field public int32 b  // store at offset 4 bytes
 }
 ```

The following class uses explicit layout of its fields:

 ```ilasm
 .class explicit public ExplicitClass
 { .field [0] public int32 a // store at offset 0 bytes
   .field [6] public int32 b // store at offset 6 bytes
 }
 ```

The following value type uses **.pack** to pack its fields together:

 ```ilasm
 .class value sealed public MyClass extends [mscorlib]System.ValueType
 { .pack 2
   .field  public int8  a  // store at offset 0 bytes
   .field  public int32 b // store at offset 2 bytes (not 4)
 }
 ```

The following class specifies a contiguous block of 16 bytes:

 ```ilasm
 .class public BlobClass
 { .size 16
 }
 ```

_end example]_
