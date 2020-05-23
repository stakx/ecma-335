## IV.2 Libraries and Profiles

Libraries and Profiles, defined below, are constructs created for the purpose of standards conformance. They specify a set of features that shall be present in an implementation of the CLI, and a set of types that shall be available to programs run by that CLI.

_[Note:_ There need not be any direct support for Libraries and Profiles in the Virtual Execution System (VES). They are not represented in the metadata and they have no impact on the structure or performance of an implementation of the CLI. Libraries and Profiles can span assemblies (the deployment unit), and the names of types in a single Library or Profile are not required to have a common prefix ("namespace"). _end note]_

In general, there is no way to test whether a feature is available at runtime, nor a way to enquire whether a particular Profile or Library is available. If present, however, the Reflection Library makes it possible to test, at runtime, for the existence of particular types and members.
