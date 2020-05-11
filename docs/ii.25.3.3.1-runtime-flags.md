## II.25.3.3.1 Runtime flags

The following flags describe this runtime image and are used by the loader. All unspecified bits should be zero.

 Flag | Value | Description
 ---- | ---- | ----
 `COMIMAGE_FLAGS_ILONLY` | 0x00000001 | Shall be 1.
 `COMIMAGE_FLAGS_32BITREQUIRED` | 0x00000002 | Image can only be loaded into a 32-bit process, for instance if there are 32-bit vtablefixups, or casts from `native integer`s to `int32`. CLI implementations that have 64-bit native integers shall refuse loading binaries with this flag set.
 `COMIMAGE_FLAGS_STRONGNAMESIGNED` | 0x00000008 | Image has a strong name signature.
 `COMIMAGE_FLAGS_NATIVE_ENTRYPOINT` | 0x00000010 | Shall be 0.
 `COMIMAGE_FLAGS_TRACKDEBUGDATA` | 0x00010000 | Should be 0 (§[II.24.1](#todo-missing-hyperlink)).
