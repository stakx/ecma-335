## II.10.1.6 Special handling attributes

 | _ClassAttr_ ::= &hellip;
 | ----
 | \| `beforefieldinit`
 | \| `rtspecialname`
 | \| `serializable`
 | \| `specialname`

These attributes can be combined in any way.

**beforefieldinit** instructs the CLI that it need not initialize the type before a static method is called.  See §[II.10.5.3](ii.10.5.3-type-initializer.md).

**rtspecialname** indicates that the name of this item has special significance to the CLI. There are no currently defined special type names; this is for future use. Any item marked **rtspecialname** shall also be marked **specialname**.

**serializable** Reserved for future use, to indicate that the fields of the type are to be serialized into a data stream (should such support be provided by the implementation).

**specialname** indicates that the name of this item can have special significance to tools other than the CLI. See, for example, [Partition I](#todo-missing-hyperlink).

_[Rationale:_ If an item is treated specially by the CLI, then tools should also be made aware of that. The converse is not true. _end rationale]_
