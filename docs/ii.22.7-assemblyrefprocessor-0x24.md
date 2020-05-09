## II.22.7 AssemblyRefProcessor: 0x24

The _AssemblyRefProcessor_ table has the following columns:

 * _Processor_ (a 4-byte constant)

 * _AssemblyRef_ (an index into the _AssemblyRef_ table)

These records should not be emitted into any PE file. However, if present in a PE file, they should be treated as-if their fields were zero. They should be ignored by the CLI.
