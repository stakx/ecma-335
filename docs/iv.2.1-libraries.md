## IV.2.1 Libraries

A Library specifies three things:

 1. A set of types that shall be available, including their grouping into assemblies. (The standard library types are contained in three assemblies: mscorlib, System, and System.Xml. The specification for each type indicates the assembly in which it resides.)

 2. A set of features of the CLI that shall be available.

   _[Note:_ The set of features required for any particular Library is a subset of the complete set of CLI features. Each Library described in §[IV.5](#todo-missing-hyperlink) has text that defines the CLI features that are required for implementations that support that Library. _end note]_

 3. Modifications to types defined in *other* Libraries. These modifications typically involve the addition of methods and interfaces to types belonging to some other Library, and additional exception types that can be thrown by methods of that other Library’s types. These modifications shall provide only additional functionality or specify behavior where it was previously unspecified; they shall not be used to alter previously specified behavior.

_[Example:_ Consider the Extended Numerics Library.  Since it provides a base data type, `Double`, it also specifies that the method `ToDouble` be added to the `System.Convert` class that is part of the Base Class Library. It also defines a new exception type, `System.NotFiniteNumberException`, and specifies existing methods in other Libraries methods that throw it (as it happens, there are no such methods). _end example]_

In the XML specification of the Libraries, each type specifies the Library to which it belongs. For those members (e.g., `Console.WriteLine(float)`) that are part of one Library (such as Extended Numerics (§[IV.5.7](#todo-missing-hyperlink))), but whose type is in another Library (such as Base Class Library (§[IV.5.3](#todo-missing-hyperlink))), the XML specifies the Library that defines the method. See §[IV.7](#todo-missing-hyperlink).
