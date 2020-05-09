## II.22.3 AssemblyOS: 0x22

The _AssemblyOS_ table has the following columns:

 * _OSPlatformID_ (a 4-byte constant)

 * _OSMajorVersion_ (a 4-byte constant)

 * _OSMinorVersion_ (a 4-byte constant)

This record should not be emitted into any PE file. However, if present in a PE file, it shall be treated as if all its fields were zero. It shall be ignored by the CLI.
