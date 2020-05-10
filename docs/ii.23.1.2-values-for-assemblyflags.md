## II.23.1.2 Values for AssemblyFlags

 Flag | Value | Description
 ---- | ---- | ----
 `PublicKey` | 0x0001 | The assembly reference holds the full (unhashed) public key.
 `Retargetable` | 0x0100 | The implementation of this assembly used at runtime is not expected to match the version seen at compile time. (See the text following this table.)
 `DisableJITcompileOptimizer` | 0x4000 | Reserved (a conforming implementation of the CLI can ignore this setting on read; some implementations might use this bit to indicate that a CIL-to-native-code compiler should not generate optimized code)
 `EnableJITcompileTracking` | 0x8000 | Reserved (a conforming implementation of the CLI can ignore this setting on read; some implementations might use this bit to indicate that a CIL-to-native-code compiler should generate CIL-to-native code map)
