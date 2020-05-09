## II.22.6 AssemblyRefOS: 0x25

The _AssemblyRefOS_ table has the following columns:

 * _OSPlatformId_ (a 4-byte constant)

 * _OSMajorVersion_ (a 4-byte constant)

 * _OSMinorVersion_ (a 4-byte constant)

 * _AssemblyRef_ (an index into the _AssemblyRef_ table)

These records should not be emitted into any PE file. However, if present in a PE file, they should be treated as-if their fields were zero. They should be ignored by the CLI.
