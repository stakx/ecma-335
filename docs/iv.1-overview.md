## IV.1 Overview

_[Note:_ While compiler writers are most concerned with issues of file format, instruction set design, and a common type system, application programmers are most interested in the programming library that is available to them in the language they are using. The Common Language Infrastructure (CLI) specifies a Common Language Specification (CLS, see [Partition I](#todo-missing-hyperlink)) that shall be used to define the externally visible aspects (such as method signatures) when they are intended to be used from a wide range of programming languages. Since it is the goal of the CLI Libraries to be available from as many programming languages as possible, all of the library functionality is available through CLS-compliant types and type members.

The CLI Libraries were designed with the following goals in mind:

 * To support for a wide variety of programming languages.

 * To have consistent design patterns throughout.

 * To have features on parity with the ISO/IEC C Standard library of 1990.

 * To support more recent programming paradigms, notably networking, XML, runtime type inspection, instance creation, and dynamic method dispatch.

 * To be factored into self-consistent libraries with minimal interdependence. _end note]_

This partition provides an overview of the CLI Libraries, and a specification of their factoring into Profiles and Libraries. A companion file, considered to be part of this Partition but distributed in XML format, provides details of each type in the CLI Libraries. While the normative specification of the CLI Libraries is in XML form, it can be processed using an XSL transform to produce easily browsed information about the Class Libraries.

_[Note:_ [Partition VI](#todo-missing-hyperlink) contains an informative annex describing programming conventions used in defining the CLI Libraries. These conventions significantly simplify the use of libraries. Implementers are encouraged to follow them when creating additional (non-standard) Libraries. _end note]_
