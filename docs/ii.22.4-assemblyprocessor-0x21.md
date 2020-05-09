## II.22.4 AssemblyProcessor: 0x21

The _AssemblyProcessor_ table has the following column:

 * _Processor_ (a 4-byte constant)

This record should not be emitted into any PE file. However, if present in a PE file, it should be treated as if its field were zero. It should be ignored by the CLI.
