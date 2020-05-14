## II.6.2.1.1 Hash algorithm

 | _AsmDecl_ ::=
 | ----
 | `.hash algorithm` _Int32_
 | \| &hellip;

When an assembly consists of more than one file (see §[II.6.2.3](ii.6.2.3-associating-files-with-an-assembly.md)), the manifest for the assembly specifies both the name and cryptographic hash of the contents of each file other than its own. The algorithm used to compute the hash can be specified, and shall be the same for all files included in the assembly. All values are reserved for future use, and conforming implementations of the CLI shall use the SHA-1 (see FIPS 180-1 in [Partition I](#todo-missing-hyperlink), 3) hash function and shall specify this algorithm by using a value of 32772 (0x8004).

_[Rationale:_ SHA-1 was chosen as the best widely available technology at the time of standardization (see Partition I). A single algorithm was chosen since all conforming implementations of the CLI would be required to implement all algorithms to ensure portability of executable images. _end rationale]_
