## I.5 Terms and definitions

For the purposes of this International Standard, the following definitions apply. Other terms are defined where they appear in *italic* type.

**ANSI character:** A character from an implementation-defined 8-bit character set whose first 128 code points correspond exactly to those of ISO/IEC 10646.

**ANSI string:** A string of ANSI characters, of which the final character has the value all-bits-zero.

**argument:** The expression supplied for a parameter at the point of the call to a method.

**assembly:** A configured set of loadable code modules and other resources that together implement a unit of functionality.

**attribute:** A characteristic of a type and/or its members that contains descriptive information. While the most common attributes are predefined, and have a specific encoding in the metadata associated with them, user-defined attributes can also be added to the metadata.

**behavior, implementation-specific:** Unspecified behavior, for which each implementation is required to document the choice it makes.

**behavior, unspecified:** Behavior, for a well-formed program construct and correct data, that depends on the implementation. The implementation is not required to document which behavior occurs.

**behavior, undefined:** Behavior, such as might arise upon use of an erroneous program construct or erroneous data, for which this International Standard imposes no requirements. Undefined behavior can also be expected in cases when this International Standard omits the description of any explicit definition of behavior.

**boxing:** The conversion of a value having some value type, to a newly allocated instance of the reference type `System.Object`.

**Common Intermediate Language (CIL):** The instruction set understood by the VES.

**Common Language Infrastructure (CLI):** A specification for the format of executable code, and the run-time environment that can execute that code.

**Common Language Specification (CLS):** An agreement between language designers and framework (class library) designers. It specifies a subset of the CTS and a set of usage conventions.

**Common Type System (CTS):** A unified type system that is shared by compilers, tools, and the CLI itself. It is the model that defines the rules the CLI follows when declaring, using, and managing types. The CTS establishes a framework that enables cross-language integration, type safety, and high performance code execution.

**delegate:** A reference type such that an instance of it can encapsulate one or more methods in an invocation list. Given a delegate instance and an appropriate set of arguments, one can invoke all of the methods in a delegate’s invocation list with that set of arguments.

**event:** A member that enables an object or class to provide notifications.

**Execution Engine:** See **Virtual Execution System**.

**field:** A member that designates a typed memory location that stores some data in a program.

**garbage collection:** The process by which memory for managed data is allocated and released.

**generic argument:** The actual type used to instantiate a particular generic type or generic method.  For example, in `List<string>`, `string` is the generic argument corresponding to the generic parameter `T` in the generic type definition `List<T>`.

**generic parameter:** A parameter within the definition of a generic type or generic method that acts as a place holder for a generic argument. For example, in the generic type definition `List<T>`, `T` is a generic parameter.

**generics:** The feature that allows types and methods to be defined such that they are parameterized with one or more generic parameters.

**library:** A repository for a set of types, which are grouped into one or more assemblies. A library can also contain modifications to types defined in other libraries. For example, a library can include additional methods, interfaces, and exceptions for types defined in other libraries.

**managed code:** Code that contains enough information to allow the CLI to provide a set of core services. For example, given an address for a method inside the code, the CLI must be able to locate the metadata describing that method. It must also be able to walk the stack, handle exceptions, and store and retrieve security information.

**managed data:** Data that is allocated and released automatically by the CLI, through a process called garbage collection.

**manifest:** That part of an assembly that specifies the following information about that assembly: its version, name, culture, and security requirements; which other files, if any, belong to that assembly, along with a cryptographic hash of each file; which of the types defined in other files of that assembly are to be exported from that assembly; and, optionally, a digital signature for the manifest itself, and the public key used to compute it.

**member:** Any of the fields, array elements, methods, properties, and events of a type.

**metadata:** Data that describes and references the types defined by the CTS. Metadata is stored in a way that is independent of any particular programming language. Thus, metadata provides a common interchange mechanism for use between tools that manipulate programs (such as compilers and debuggers) as well as between these tools and the VES. method: A member that describes an operation that can be performed on values of an exact type.

**method, generic:** A method (be it static, instance, or virtual), defined within a type, whose signature includes one or more generic parameters, not present in the type definition itself. The enclosing type itself might, or might not, be generic. For example, within the generic type `List<T>`, the generic method `S ConvertTo<S>()` is generic.

**method, non-generic:** A method that is not generic.

**module:** A single file containing content that can be executed by the VES.

**object:** An instance of a reference type. An object has more to it than a value. An object is self-typing; its type is explicitly stored in its representation. It has an identity that distinguishes it from all other objects, and it has slots that store other entities (which can be either objects or values). While the contents of its slots can be changed, the identity of an object never changes.

**parameter:** The name used in the header and body of a method to refer to an argument value supplied at the point of call.

**profile:** A set of libraries, grouped together to form a consistent whole that provides a fixed level of functionality.

**property:** A member that defines a named value and the methods that access that value. A property definition defines the accessing contracts on that value. Hence, the property definition specifies which accessing methods exist and their respective method contracts.

**signature:** The part of a contract that can be checked and automatically enforced. Signatures are formed by adding constraints to types and other signatures. A constraint is a limitation on the use of or allowed operations on a value or location.

**type, generic:** A type whose definition is parameterized by one or more other types; for example, `List<T>`, where `T` is a generic parameter. The CLI supports the creation and use of instances of generic types. For example, `List<int32>` or `List<string>`.

**type, reference:** A type such that an instance of it contains a reference to its data. type, value: A type such that an instance of it directly contains all its data.

**unboxing:** The conversion of a value having type `System.Object`, whose run-time type is a value type, to a value type instance.

**unmanaged code:** Code that is not managed.

**unmanaged data:** Data that is not managed.

**value:** A simple bit pattern for something like an integer or a float. Each value has a type that describes both the storage that it occupies and the meanings of the bits in its representation, and also the operations that can be performed on that representation. Values are intended for representing the simple types and non-objects in programming languages.

**verification:** The checking of both CIL and its related metadata to ensure that the CIL code sequences do not permit any access to memory outside the program’s logical address space. In conjunction with the validation tests, verification ensures that the program cannot access memory or other resources to which it is not granted access.

**Virtual Execution System (VES):** This system implements and enforces the CTS model. The VES is responsible for loading and running programs written for the CLI. It provides the services needed to execute managed code and data using the metadata to connect separately generated modules together at runtime. The VES is also known as the **Execution Engine**.
