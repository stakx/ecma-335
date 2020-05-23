## IV.5.2 Runtime infrastructure library

The Runtime Infrastructure Library is part of the Kernel Profile. It provides the services needed by a compiler to target the CLI and the facilities needed to dynamically load types from a stream in the file format specified in [Partition II](#todo-missing-hyperlink). For example, it provides `System.BadImageFormatException`, which is thrown when a stream that does not have the correct format is loaded.

**Name used in XML:** RuntimeInfrastructure

**CLI Feature Requirement:** None
