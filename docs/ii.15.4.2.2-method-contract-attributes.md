## II.15.4.2.2 Method contract attributes

 | _MethAttr_ ::= &hellip;
 | ----
 | \| `final`
 | \| `hidebysig`
 | \| `static`
 | \| `virtual`
 | \| `strict`

These attributes can be combined, except a method shall not be both **static** and **virtual**; only **virtual** methods shall be **final** or **strict**; and **abstract** methods shall not be **final**.

**final** methods shall not be overridden by derived classes of this type.

**hidebysig** is supplied for the use of tools and is ignored by the VES. It specifies that the declared method hides all methods of the base class types that have a matching method signature; when omitted, the method should hide all methods of the same name, regardless of the signature.

_[Rationale:_ Some languages (such as C++) use a hide-by-name semantics while others (such as C#, Java&trade;) use a hide-by-name-and-signature semantics. _end rationale]_

**static** and **virtual** are described in §[II.15.2](ii.15.2-static-instance-and-virtual-methods.md).

**strict virtual** methods can only be overridden if they are also accessible. See §[II.23.1.10](ii.23.1.10-flags-for-methods-methodattributes.md).
