## II.25.3.3.3 Vtable fixup

Certain languages, which choose not to follow the common type system runtime model, can have virtual functions which need to be represented in a v-table.  These v-tables are laid out by the compiler, not by the runtime.  Finding the correct v-table slot and calling indirectly through the value held in that slot is also done by the compiler. The **VtableFixups** field in the runtime header contains the location and size of an array of Vtable Fixups (§[II.15.5.1](ii.15.5.1-method-transition-thunks.md)). V-tables shall be emitted into a *read-write* section of the PE file.

Each entry in this array describes a contiguous array of v-table slots of the specified size. Each slot starts out initialized to the metadata token value for the method they need to call.  At image load time, the runtime Loader will turn each entry into a pointer to machine code for the CPU and can be called directly.

 Offset | Size | Field | Description
 ---- | ---- | ---- | ----
 0 | 4 | **VirtualAddress** | RVA of Vtable
 4 | 2 | **Size** | Number of entries in Vtable
 6 | 2 | **Type** | Type of the entries, as defined in table below

 Constant | Value | Description
 ---- | ---- | ----
 `COR_VTABLE_32BIT` | 0x01 | Vtable slots are 32 bits.
 `COR_VTABLE_64BIT` | 0x02 | Vtable slots are 64 bits.
 `COR_VTABLE_FROM_UNMANAGED` | 0x04 | Transition from unmanaged to managed code.
 `COR_VTABLE_CALL_MOST_DERIVED` | 0x10 | Call most derived method described by the token (only valid for virtual methods).
