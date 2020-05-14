## II.25.3.3 CLI header

The CLI header contains all of the runtime-specific data entries and other information. The header should be placed in a read-only, sharable section of the image. This header is defined as follows:

 Offset | Size | Field | Description
 ---- | ---- | ---- | ----
 0 | 4 | Cb | Size of the header in bytes
 4 | 2 | MajorRuntimeVersion | The minimum version of the runtime required to run this program, currently 2.
 6 | 2 | MinorRuntimeVersion | The minor portion of the version, currently 0.
 8 | 8 | MetaData | RVA and size of the physical metadata (§[II.24](ii.24-metadata-physical-layout.md)).
 16 | 4 | Flags | Flags describing this runtime image. (§[II.25.3.3.1](ii.25.3.3.1-runtime-flags.md)).
 20 | 4 | EntryPointToken | Token for the _MethodDef_ or _File_ of the entry point for the image
 24 | 8 | Resources | RVA and size of implementation-specific resources.
 32 | 8 | StrongNameSignature | RVA of the hash data for this PE file used by the CLI loader for binding and versioning
 40 | 8 | CodeManagerTable | Always 0 (§[II.24.1](ii.24.1-fixed-fields.md)).
 48 | 8 | VTableFixups | RVA of an array of locations in the file that contain an array of function pointers (e.g., vtable slots), see below.
 56 | 8 | ExportAddressTableJumps | Always 0 (§[II.24.1](ii.24.1-fixed-fields.md)).
 64 | 8 | ManagedNativeHeader | Always 0 (§[II.24.1](ii.24.1-fixed-fields.md)).
