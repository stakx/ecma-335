## II.10 Defining types

Types (i.e., classes, value types, and interfaces) can be defined at the top-level of a module:

 | Decl ::=
 | ----
 | `.class` _ClassHeader_ `'{'` _ClassMember_* `'}'`
 | \| &hellip;
 
The logical metadata table created by this declaration is specified in §[II.22.37](ii.22.37-typedef-0x02.md).

_[Rationale:_ For historical reasons, many of the syntactic categories used for defining types incorrectly use “class" instead of "type" in their name.  All classes are types, but "types" is a broader term encompassing value types, and interfaces as well. _end rationale]_
