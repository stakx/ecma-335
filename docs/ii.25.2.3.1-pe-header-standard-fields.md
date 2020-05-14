## II.25.2.3.1 PE header standard fields

These fields are required for all PE files and contain the following information:

 Offset | Size | Field | Description
 ---- | ---- | ---- | ----
 0 | 2 | Magic | Always 0x10B.
 2 | 1 | LMajor | Always 6 (§[II.24.1](ii.24.1-fixed-fields.md)).
 3 | 1 | LMinor | Always 0 (§[II.24.1](ii.24.1-fixed-fields.md)).
 4 | 4 | Code Size | Size of the code (text) section, or the sum of all code sections if there are multiple sections.
 8 | 4 | Initialized Data Size | Size of the initialized data section, or the sum of all such sections if there are multiple data sections.
 12 | 4 | Uninitialized Data Size | Size of the uninitialized data section, or the sum of all such sections if there are multiple unitinitalized data sections.
 16 | 4 | Entry Point RVA | RVA of entry point, needs to point to bytes 0xFF 0x25 followed by the RVA in a section marked execute/read for EXEs or 0 for DLLs
 20 | 4 | Base Of Code | RVA of the code section. (This is a hint to the loader.)
 24 | 4 | Base Of Data | RVA of the data section. (This is a hint to the loader.) 
 
> _This contains informative text only._

The entry point RVA shall always be either the x86 entry point stub or be 0. On non-CLI aware platforms, this stub will call the entry point API of `mscoree` (`_CorExeMain` or `_CorDllMain`). The `mscoree` entry point will use the module handle to load the metadata from the image, and invoke the entry point specified in the CLI header.

> _End informative text._
