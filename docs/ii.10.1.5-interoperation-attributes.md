## II.10.1.5 Interoperation attributes

 | _ClassAttr_ ::= &hellip;
 | ----
 | \| `ansi`
 | \| `autochar`
 | \| `unicode`

These attributes are for interoperation with unmanaged code. They specify the default behavior to be used when calling a method (static, instance, or virtual) on the class, that has an argument or return type of `System.String` and does not itself specify marshalling behavior. Only one value shall be specified for any type, and the default value is **ansi**. The interoperation attributes are:

**ansi** specifies that marshalling shall be to and from ANSI strings.

**autochar** specifies marshalling behavior (either ANSI or Unicode), depending on the platform on which the CLI is running.

**unicode** specifies that marshalling shall be to and from Unicode strings.

In addition to these three attributes, §[II.23.1.15](ii.23.1.15-flags-for-types-typeattributes.md) specifies an additional set of bit patterns (`CustomFormatClass` and `CustomStringFormatMask`), which have no standardized meaning. If these bits are set, but an implementation has no support for them, a `System.NotSupportedException` is thrown.
