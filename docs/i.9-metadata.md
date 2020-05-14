## I.9 Metadata

> _This clause and its subclauses contain only informative text, with the exception of the CLS rules introduced here and repeated in §[I.11](i.11-collected-common-language-specification-rules.md). The metadata format is specified in [Partition II Metadata &ndash; File Format](#todo-missing-hyperlink)_

New types&mdash;value types and reference types&mdash;are introduced into the CTS via type declarations expressed in **metadata**. In addition, metadata is a structured way to represent all information that the CLI uses to locate and load classes, lay out instances in memory, resolve method invocations, translate CIL to native code, enforce security, and set up runtime context boundaries. Every CLI PE/COFF module (see [Partition II Metadata – File Format](#todo-missing-hyperlink)) carries a compact metadata binary that is emitted into the module by the CLI-enabled development tool or compiler.

Each CLI-enabled language will expose a language-appropriate syntax for declaring types and members and for annotating them with attributes that express which services they require of the infrastructure. Type imports are also handled in a language-appropriate way, and it is the development tool or compiler that consumes the metadata to expose the types that the developer sees.

Note that the typical component or application developer will not need to be aware of the rules for emitting and consuming CLI metadata. While it can help a developer to understand the structure of metadata, the rules outlined in this clause are primarily of interest to tool builders and compiler writers.
