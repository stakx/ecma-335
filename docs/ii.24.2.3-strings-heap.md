## II.24.2.3 #Strings heap

The stream of bytes pointed to by a "`#Strings`" header is the physical representation of the logical string heap. The physical heap can contain garbage, that is, it can contain parts that are unreachable from any of the tables, but parts that are reachable from a table shall contain a valid null-terminated UTF8 string. When the #Strings heap is present, the first entry is always the empty string (i.e., `\0`).
