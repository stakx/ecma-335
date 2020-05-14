## II.24.2.2 Stream header

A stream header gives the names, and the position and length of a particular table or heap. Note that the length of a Stream header structure is not fixed, but depends on the length of its name field (a variable length null-terminated string).

 Offset | Size | Field | Description 
 ---- | ---- | ---- | ----
 0 | 4 | **Offset** | Memory offset to start of this stream from start of the metadata root (§[II.24.2.1](ii.24.2.1-metadata-root.md))
 4 | 4 | **Size** | Size of this stream in bytes, shall be a multiple of 4.
 8 | &nbsp; | **Name** | Name of the stream as null-terminated variable length array of ASCII characters, padded to the next 4-byte boundary with `\0` characters. The name is limited to 32 characters.

Both logical tables and heaps are stored in streams. There are five possible kinds of streams. A stream header with name "`#Strings`" that points to the physical representation of the string heap where identifier strings are stored; a stream header with name "`#US`" that points to the physical representation of the user string heap; a stream header with name "`#Blob`" that points to the physical representation of the blob heap, a stream header with name "`#GUID`" that points to the physical representation of the GUID heap; and a stream header with name "`#~`" that points to the physical representation of a set of tables.

Each kind of stream shall occur at most once, that is, a meta-data file shall not contain two "`#US`" streams, or five "`#Blob`" streams. Streams need not be there if they are empty.

The next subclauses describe the structure of each kind of stream in more detail.
