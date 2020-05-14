## II.6.8 Type forwarders

A type forwarder indicates that a type originally in this assembly is now located in a different assembly, the VES shall resolve references for the type to the other assembly. The type forwarding information is stored in the _ExportedType_ table (§[II.22.14](ii.22.14-exportedtype-0x27.md)). The following grammar is used to construct the entry in the _ExportedType_ table:

 | _Decl_ ::= | Clause
 | ---- | ----
 | `.class extern forwarder` _DottedName_ `'{'` `.assembly extern` _DottedName_ `'}'`
 | \| &hellip;

_[Rationale:_ Type forwarders allow assemblies which reference the original assembly for the type to function correctly without recompilation if the type is moved to another assembly. _end rationale]_
