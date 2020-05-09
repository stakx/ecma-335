## II.22.1 Metadata validation rules

> _This contains informative text only._

The subclauses that follow describe the schema for each kind of metadata table, and explain the detailed rules that guarantee metadata emitted into any PE file is valid. Checking that metadata is valid ensures that later processing (such as checking the CIL instruction stream for type safety, building method tables, CIL-to-native-code compilation, and data marshalling) will not cause the CLI to crash or behave in an insecure fashion.

In addition, some of the rules are used to check compliance with the CLS requirements (see [Partition I](#todo-missing-hyperlink)) even though these are not related to valid Metadata. These are marked with a trailing **\[CLS\]** tag.

The rules for valid metadata refer to an individual module. A module is any collection of metadata that *could* typically be saved to a disk file. This includes the output of compilers and linkers, or the output of script compilers (where the metadata is often held only in memory, but never actually saved to a file on disk).

The rules address intra-module validation only.  As such, software that checks conformance with this standard need not resolve references or walk type hierarchies defined in other modules. However, even if two modules, A and B, analyzed separately, contain only valid metadata, they can still be in error when viewed together (e.g., a call from Module A, to a method defined in module B, might specify a call site signature that does not match the signatures defined for that method in B).

All checks are categorized as ERROR, WARNING, or CLS.

 * An ERROR check reports something that might cause a CLI to crash or hang, it might run but produce wrong answers; or it might be entirely benign. Conforming implementations of the CLI can exist that will not accept metadata that violates an ERROR rule, and therefore such metadata is invalid and is not portable.

 * A WARNING check reports something, not actually wrong, but possibly a slip on the part of the compiler. Normally, it indicates a case where a compiler could have encoded the same information in a more compact fashion or where the metadata represents a construct that can have no actual use at runtime. All conforming implementations shall support metadata that violate only WARNING rules; hence such metadata is both valid and portable.

 * A CLS check reports lack of compliance with the Common Language Specification (see [Partition I](#todo-missing-hyperlink)). Such metadata is both valid and portable, but programming languages might exist that cannot process it, even though all conforming implementations of the CLI support the constructs.

Validation rules fall into the following broad categories:

 * **Number of Rows:** A few tables are allowed only one row (e.g., *Module* table). Most have no such restriction.

 * **Unique Rows:** No table shall contain duplicate rows, where "duplicate" is defined in terms of its key column, or combination of columns.

 * **Valid Indexes:** Columns which are indexes shall point somewhere sensible, as follows:

    * Every index into the String, Blob, or Userstring heaps shall point *into* that heap, neither before its start (offset 0), nor after its end.

    * Every index into the Guid heap shall lie between 1 and the maximum element number in this module, inclusive.

    * Every index (row number) into another metadata table shall lie between 0 and that table’s row count + 1 (for some tables, the index can point just past the end of any target table, meaning it indexes nothing).

 * **Valid Bitmasks:** Columns which are bitmasks shall have only valid permutations of bits set.

 * **Valid RVAs:** There are restrictions upon fields and methods that are assigned RVAs (Relative Virtual Addresses, which are byte offsets, expressed from the address at which the corresponding PE file is loaded into memory).

Note that some of the rules listed below really don't say anything&mdash;for example, some rules state that a particular table is allowed zero or more rows&mdash;in which case, there is no way that the check can fail. This is done simply for completeness, to record that such details have indeed been addressed, rather than overlooked.

> _End informative text._

The CLI imposes no limit on the length of names stored in metadata, and subsequently processed by a CLI implementation.
