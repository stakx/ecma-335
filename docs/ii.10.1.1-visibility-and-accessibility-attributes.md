## II.10.1.1 Visibility and accessibility attributes

 | _ClassAttr_ ::= &hellip;
 | ----
 | \| `nested assembly`
 | \| `nested famandassem`
 | \| `nested family`
 | \| `nested famorassem`
 | \| `nested private`
 | \| `nested public`
 | \| `private`
 | \| `public`

See [Partition I](#todo-missing-hyperlink). A type that is not nested inside another type shall have exactly one visibility (**private** or **public**) and shall not have an accessiblity. Nested types shall have no visibility, but instead shall have exactly one of the accessibility attributes **nested assembly**, **nested famandassem**, **nested family**, **nested famorassem**, **nested private**, or **nested public**. The default visibility for top-level types is **private**. The default accessibility for nested types is **nested private**.
