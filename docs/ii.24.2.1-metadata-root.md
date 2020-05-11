## II.24.2.1 Metadata root

The root of the physical metadata starts with a magic signature, several bytes of version and other miscellaneous information, followed by a count and an array of stream headers, one for each stream that is present. The actual encoded tables and heaps are stored in the streams, which immediately follow this array of headers.

 Offset | Size | Field | Description 
 ---- | ---- | ---- | ----
 0 | 4 | **Signature** | Magic signature for physical metadata: 0x424A5342.
 4 | 2 | **MajorVersion** | Major version, 1 (ignore on read)
 6 | 2 | **MinorVersion** | Minor version, 1 (ignore on read)
 8 | 4 | **Reserved** | Reserved, always 0 (§[II.24.1](#todo-missing-hyperlink)).
 12 | 4 | **Length** | Number of bytes allocated to hold version string (including null terminator), call this *x*.<p>Call the length of the string (including the terminator) *m* (we require *m* &le; 255); the length *x* is *m* rounded up to a multiple of four.
 16 | *m* | **Version** | UTF8-encoded null-terminated version string of length *m* (see above)
 16+*m* | *x*-*m* | &nbsp; | Padding to next 4 byte boundary.
 16+*x* | 2 | **Flags** | Reserved, always 0 (§[II.24.1](#todo-missing-hyperlink)).
 16+*x*+2 | 2 | **Streams** | Number of streams, say *n*.
 16+*x*+4 | &nbsp; | **StreamHeaders** | Array of *n* `StreamHdr` structures.

The Version string shall be "`Standard CLI 2005`" for any file that is intended to be executed on any conforming implementation of the CLI, and all conforming implementations of the CLI shall accept files that use this version string. Other strings shall be used when the file is restricted to a vendor-specific implementation of the CLI. Future versions of this standard shall specify different strings, but they shall begin "`Standard CLI`". Other standards that specify additional functionality shall specify their own specific version strings beginning with "`Standard□`", where "`□`" represents a single space. Vendors that provide implementation-specific extensions shall provide a version string that does not begin with "`Standard□`". (For the first version of this Standard, the Version string was "`Standard CLI 2002`".)
