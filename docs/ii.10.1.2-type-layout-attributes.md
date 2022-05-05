## II.10.1.2 Type layout attributes

 | _ClassAttr_ ::= &hellip;
 | ----
 | \| `auto`
 | \| `explicit`
 | \| `sequential`
 
The type layout specifies how the fields of an instance of a type are arranged. A given type shall have only one layout attribute specified. By convention, *ilasm* supplies **auto** if no layout attribute is specified. The layout attributes are:

**auto**: The layout shall be done by the CLI, with no user-supplied constraints.

**explicit**: The layout of the fields is explicitly provided (§[II.10.7](ii.10.7-controlling-instance-layout.md)). However, a generic type shall not have explicit layout.

**sequential**: The CLI shall lay out the fields in sequential order, based on the order of the fields in the logical metadata table (§[II.22.15](ii.22.15-field-0x04.md)).

_[Rationale:_ The default **auto** layout should provide the best layout for the platform on which the code is executing. **sequential** layout is intended to instruct the CLI to match layout rules commonly followed by languages like C and C++ on an individual platform, where this is possible while still guaranteeing verifiable layout. **explicit** layout allows the CIL generator to specify the precise layout semantics. _end rationale]_
