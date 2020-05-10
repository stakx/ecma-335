## I.1 Scope

This International Standard defines the Common Language Infrastructure (CLI) in which applications written in multiple high-level languages can be executed in different system environments without the need to rewrite those applications to take into consideration the unique characteristics of those environments. This International Standard consists of the following parts:

 * **Partition I: Concepts and Architecture** &ndash; Describes the overall architecture of the CLI, and provides the normative description of the Common Type System (CTS), the Virtual Execution System (VES), and the Common Language Specification (CLS). It also provides an informative description of the metadata.

 * **Partition II: Metadata Definition and Semantics** &ndash; Provides the normative description of the metadata: its physical layout (as a file format), its logical contents (as a set of tables and their relationships), and its semantics (as seen from a hypothetical assembler, *ilasm*).

 * **Partition III: CIL Instruction Set** &ndash; Describes the Common Intermediate Language (CIL) instruction set.

 * **Partition IV: Profiles and Libraries** &ndash; Provides an overview of the CLI Libraries, and a specification of their factoring into Profiles and Libraries. A companion file, `CLILibrary.xml`, considered to be part of this Partition, but distributed in XML format, provides details of each class, value type, and interface in the CLI Libraries.

 * **Partition V: Debug Interchange Format** &ndash; Describes a standard way to interchange debugging information between CLI producers and consumers.

 * **Partition VI: Annexes** &ndash; Contains some sample programs written in CIL Assembly Language (ILAsm), information about a particular implementation of an assembler, a machine-readable description of the CIL instruction set which can be used to derive parts of the grammar used by this assembler as well as other tools that manipulate CIL, a set of guidelines used in the design of the libraries of [Partition IV](#todo-missing-hyperlink), and portability considerations.
