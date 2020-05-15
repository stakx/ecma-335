## II.6.2.3 Associating files with an assembly

Assemblies can be associated with other files (such as documentation and other files that are used during execution). The declaration **.file** is used to add a reference to such a file to the manifest of the assembly: (See §[II.22.19](#todo-missing-hyperlink))

 | _Decl_ ::= | Clause
 | ---- | ----
 | `.file` [ `nometadata` ] _Filename_ `.hash` `'='` `'('` _Bytes_ `')'` [ `.entrypoint` ]
 | \| &hellip; | §[II.5.10](#todo-missing-hyperlink)
 
The attribute **nometadata** is specified if the file is not a module according to this specification. Files that are marked as **nometadata** can have any format; they are considered pure data files.

The Bytes after the **.hash** specify a hash value computed for the file. The VES shall recompute this hash value prior to accessing this file and if the two do not match, the behavior is unspecified. The algorithm used to calculate this hash value is specified with **.hash algorithm** (§[II.6.2.1.1](ii.6.2.1.1-hash-algorithm.md)). If specified, the **.entrypoint** directive indicates that the entrypoint of a multi-module assembly is contained in this file.
