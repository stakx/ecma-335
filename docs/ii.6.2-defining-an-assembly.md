## II.6.2 Defining an assembly

An assembly is specified as a module that contains a manifest in the metadata; see §[II.22.2](ii.22.2-assembly-0x20.md). The information for the manifest is created from the following portions of the grammar:

 | _Decl_ ::= | Clause
 | ---- | ----
 | `.assembly` _DottedName_ `'{'` _AsmDecl_* `'}'` | §[II.6.2](ii.6.2-defining-an-assembly.md)
 | \| `.assembly extern` _DottedName_ `'{'` _AsmRefDecl_* `'}'` | §[II.6.3](ii.6.3-referencing-assemblies.md)
 | \| `.corflags` _Int32_ | §[II.6.2](ii.6.2-defining-an-assembly.md)
 | \| `.file` [ `nometadata` ] _Filename_ `.hash` `'='` `'('` _Bytes_ `')'` [ `.entrypoint` ] | §[II.6.2.3](ii.6.2.3-associating-files-with-an-assembly.md)
 | \| `.module extern` _Filename_ | §[II.6.5](ii.6.5-referencing-modules.md)
 | \| `.mresource` [ `public` \| `private` ] _DottedName_ `'{'` _ManResDecl_* `'}'` | §[II.6.2.2](ii.6.2.2-manifest-resources.md)
 | \| `.subsystem` _Int32_ | §[II.6.2](ii.6.2-defining-an-assembly.md)
 | \| &hellip;

The **.assembly** directive declares the manifest and specifies to which assembly the current module belongs. A module shall contain at most one **.assembly** directive. The _DottedName_ specifies the name of the assembly.

_[Note:_ The standard library assemblies are described in [Partition IV](#todo-missing-hyperlink). _end note])_

_[Note:_ Since some platforms treat names in a case-insensitive manner, two assemblies that have names that differ only in case should not be declared. _end note]_

The **.corflags** directive sets a field in the CLI header of the output PE file (see §[II.25.3.3.1](ii.25.3.3.1-runtime-flags.md)). A conforming implementation of the CLI shall expect this field's value to be 1. For backwards compatibility, the three least-significant bits are reserved. Future versions of this standard might provide definitions for values between 8 and 65,535. Experimental and non-standard uses should thus use values greater than 65,535.

The **.subsystem** directive is used only when the assembly is executed directly (as opposed to its being used as a library for another program). This directive specifies the kind of application environment required for the program, by storing the specified value in the PE file header (see §[II.25.2.2](ii.25.2.2-pe-file-header.md)). While any 32-bit integer value can be supplied, a conforming implementation of the CLI need only respect the following two values:

 * If the value is 2, the program should be run using whatever conventions are appropriate for an application that has a graphical user interface.

 * If the value is 3, the program should be run using whatever conventions are appropriate for an application that has a direct console attached.

_[Example:_

 ```ilasm
 .assembly CountDown
 { .hash algorithm 32772
   .ver 1:0:0:0
 }
 .file Counter.dll .hash = (BA D9 7D 77 31 1C 85 4C 26 9C 49 E7  02 BE E7 52 3A CB 17 AF)
 ```

_end example]_
