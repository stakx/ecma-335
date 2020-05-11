## II.24.2.4 #US and #Blob heaps

The stream of bytes pointed to by a "`#US`" or "`#Blob`" header are the physical representation of logical Userstring and 'blob' heaps respectively. Both these heaps can contain garbage, as long as any part that is reachable from any of the tables contains a valid 'blob'. Individual blobs are stored with their length encoded in the first few bytes:

 * If the first one byte of the 'blob' is _0bbbbbbb<sub>2</sub>_, then the rest of the 'blob' contains the _bbbbbbb<sub>2</sub>_ bytes of actual data.

 * If the first two bytes of the 'blob' are _10bbbbbb<sub>2</sub>_ and *x*, then the rest of the 'blob' contains the (_bbbbbb<sub>2</sub>_ << 8 + *x*) bytes of actual data.

 * If the first four bytes of the 'blob' are _110bbbbb<sub>2</sub>_, *x*, *y*, and *z*, then the rest of the 'blob' contains the (_bbbbb<sub>2</sub>_ << 24 + *x* << 16 + *y* << 8 + *z*) bytes of actual data.

The first entry in both these heaps is the empty 'blob' that consists of the single byte 0x00.

Strings in the #US (user string) heap are encoded using 16-bit Unicode encodings. The count on each string is the number of bytes (not characters) in the string. Furthermore, there is an additional terminal byte (so all byte counts are odd, not even). This final byte holds the value 1 if and only if any UTF16 character within the string has any bit set in its top byte, or its low byte is any of the following: 0x01&ndash;0x08, 0x0E&ndash;0x1F, 0x27, 0x2D, 0x7F. Otherwise, it holds 0. The 1 signifies Unicode characters that require handling beyond that normally provided for 8-bit encoding sets.
