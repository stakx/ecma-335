## II.15.4.2.4 Method attributes

 | _MethAttr_ ::= &hellip;
 | ----
 | \| `abstract`

**abstract** shall only be used with **virtual** methods that are not **final**. It specifies that an implementation of the method is not provided but shall be provided by a derived class. **abstract** methods shall only appear in **abstract** types (§[II.10.1.4](ii.10.1.4-inheritance-attributes.md)).
