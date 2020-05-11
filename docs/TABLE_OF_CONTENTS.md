# Table of Contents

**[Foreword](FOREWORD.md)**

## Partition 1: Concepts and Architecture

**[I.1 Scope](i.1-scope.md)**

**[I.2 Conformance](i.2-conformance.md)**

**[I.3 Normative references](i.3-normative-references.md)**

**[I.4 Conventions](i.4-conventions.md)**

 * [I.4.1 Organization](i.4.1-organization.md)
 * [I.4.2 Informative text](i.4.2-informative-text.md)
 
**[I.5 Terms and definitions](i.5-terms-and-definitions.md)**

**[I.6 Overview of the Common Language Infrastructure](i.6-overview-of-the-common-language-infrastructure.md)**

 * [I.6.1 Relationship to type safety](i.6.1-relationship-to-type-safety.md)
 * I.6.2 Relationship to managed metadata-driven execution
    * I.6.2.1 Managed code
    * I.6.2.2 Managed data
    * I.6.2.3 Summary

**I.7 Common Language Specification**

 * I.7.1 Introduction
 * I.7.2 Views of CLS compliance
    * I.7.2.1 CLS framework
    * I.7.2.2 CLS consumer
    * I.7.2.3 CLS extender
 * I.7.3 CLS compliance
    * I.7.3.1 Marking items as CLS-compliant

**I.8 Common Type System**

 * I.8.1 Relationship to object-oriented programming
 * I.8.2 Values and types
    * I.8.2.1 Value types and reference types
    * I.8.2.2 Built-in value and reference types
    * I.8.2.3 Classes, interfaces, and objects
    * I.8.2.4 Boxing and unboxing of values
    * I.8.2.5 Identity and equality of values
 * I.8.3 Locations
    * I.8.3.1 Assignment-compatible locations
    * I.8.3.2 Coercion
    * I.8.3.3 Casting
 * I.8.4 Type members
    * I.8.4.1 Fields, array elements, and values
    * I.8.4.2 Methods
    * I.8.4.3 Static fields and static methods
    * I.8.4.4 Virtual methods
 * I.8.5 Naming
    * I.8.5.1 Valid names
    * I.8.5.2 Assemblies and scoping
    * I.8.5.3 Visibility, accessibility, and security
 * I.8.6 Contracts
    * I.8.6.1 Signatures
 * I.8.7 Assignment compatibility
    * I.8.7.1 Assignment compatibility for signature types
    * I.8.7.2 Assignment compatibility for location types
    * I.8.7.3 General assignment compatibility
 * I.8.8 Type safety and verification
 * I.8.9 Type definers
    * I.8.9.1 Array types
    * I.8.9.2 Unmanaged pointer types
    * I.8.9.3 Delegates
    * I.8.9.4 Interface type definition
    * I.8.9.5 Class type definition
    * I.8.9.6 Object type definitions
    * I.8.9.7 Value type definition
    * I.8.9.8 Type inheritance
    * I.8.9.9 Object type inheritance
    * I.8.9.10 Value type inheritance
    * I.8.9.11 Interface type derivation
 * I.8.10 Member inheritance
    * I.8.10.1 Field inheritance
    * I.8.10.2 Method inheritance
    * I.8.10.3 Property and event inheritance
    * I.8.10.4 Hiding, overriding, and layout
 * I.8.11 Member definitions
    * I.8.11.1 Method definitions
    * I.8.11.2 Field definitions
    * I.8.11.3 Property definitions
    * I.8.11.4 Event definitions
    * I.8.11.5 Nested type definitions
 
**I.9 Metadata**

 * I.9.1 Components and assemblies
 * I.9.2 Accessing metadata
    * I.9.2.1 Metadata tokens
    * I.9.2.2 Member signatures in metadata
 * I.9.3 Unmanaged code
 * I.9.4 Method implementation metadata
 * I.9.5 Class layout
 * I.9.6 Assemblies: name scopes for types
 * [I.9.7 Metadata extensibility](i.9.7-metadata-extensibility.md)
 * I.9.8 Globals, imports, and exports
 * I.9.9 Scoped statics

**I.10 Name and type rules for the Common Language Specification**

 * I.10.1 Identifiers
 * [I.10.2 Overloading](i.10.2-overloading.md)
 * [I.10.3 Operator overloading](i.10.3-operator-overloading.md)
    * [I.10.3.1 Unary operators](i.10.3.1-unary-operators.md)
    * [I.10.3.2 Binary operators](i.10.3.2-binary-operators.md)
    * [I.10.3.3 Conversion operators](i.10.3.3-conversion-operators.md)
    * [I.10.4 Naming patterns](i.10.4-naming-patterns.md)
 * [I.10.5 Exceptions](i.10.5-exceptions.md)
 * [I.10.6 Custom attributes](i.10.6-custom-attributes.md)
 * [I.10.7 Generic types and methods](i.10.7-generic-types-and-methods.md)
    * [I.10.7.1 Nested type parameter re-declaration](i.10.7.1-nested-type-parameter-re-declaration.md)
    * I.10.7.2 Type names and arity encoding
    * I.10.7.3 Type constraint re-declaration
    * I.10.7.4 Constraint type restrictions
    * I.10.7.5 Frameworks and accessibility of nested types
    * I.10.7.6 Frameworks and abstract or virtual methods

**[I.11 Collected Common Language Specification rules](i.11-collected-common-language-specification-rules.md)**

**[I.12 Virtual Execution System](i.12-virtual-execution-system.md)**

 * [I.12.1 Supported data types](i.12.1-supported-data-types.md)
    * [I.12.1.1 Native size: native int, native unsigned int, O and &](i.12.1.1-native-size-native-int-native-unsigned-int-o-and-ref.md)
    * [I.12.1.2 Handling of short integer data types](i.12.1.2-handling-of-short-integer-data-types.md)
    * [I.12.1.3 Handling of floating-point data types](i.12.1.3-handling-of-floating-point-data-types.md)
    * [I.12.1.4 CIL instructions and numeric types](i.12.1.4-cil-instructions-and-numeric-types.md)
    * [I.12.1.5 CIL instructions and pointer types](i.12.1.5-cil-instructions-and-pointer-types.md)
    * [I.12.1.6 Aggregate data](i.12.1.6-aggregate-data.md)
 * [I.12.2 Module information](i.12.2-module-information.md)
 * [I.12.3 Machine state](i.12.3-machine-state.md)
    * [I.12.3.1 The global state](i.12.3.1-the-global-state.md)
    * [I.12.3.2 Method state](i.12.3.2-method-state.md)
 * [I.12.4 Control flow](i.12.4-control-flow.md)
    * [I.12.4.1 Method calls](i.12.4.1-method-calls.md)
    * [I.12.4.2 Exception handling](i.12.4.2-exception-handling.md)
 * [I.12.5 Proxies and remoting](i.12.5-proxies-and-remoting.md)
 * [I.12.6 Memory model and optimizations](i.12.6-memory-model-and-optimizations.md)
    * [I.12.6.1 The memory store](i.12.6.1-the-memory-store.md)
    * [I.12.6.2 Alignment](i.12.6.2-alignment.md)
    * [I.12.6.3 Byte ordering](i.12.6.3-byte-ordering.md)
    * [I.12.6.4 Optimization](i.12.6.4-optimization.md)
    * [I.12.6.5 Locks and threads](i.12.6.5-locks-and-threads.md)
    * [I.12.6.6 Atomic reads and writes](i.12.6.6-atomic-reads-and-writes.md)
    * [I.12.6.7 Volatile reads and writes](i.12.6.7-volatile-reads-and-writes.md)
    * [I.12.6.8 Other memory model issues](i.12.6.8-other-memory-model-issues.md)

## Partition II: Metadata Definition and Semantics

**[II.1 Introduction](ii.1-introduction.md)**

**[II.2 Overview](ii.2-overview.md)**

**[II.3 Validation and verification](ii.3-validation-and-verification.md)**

**[II.4 Introductory examples](ii.4-introductory-examples.md)**

 * [II.4.1 "Hello world!"](ii.4.1-hello-world.md)
 * [II.4.2 Other examples](ii.4.2-other-examples.md)

**II.5 General syntax**

 * II.5.1 General syntax notation
 * II.5.2 Basic syntax categories
 * II.5.3 Identifiers
 * II.5.4 Labels and lists of labels
 * II.5.5 Lists of hex bytes
 * II.5.6 Floating-point numbers
 * II.5.7 Source line information
 * II.5.8 File names
 * II.5.9 Attributes and metadata
 * II.5.10 ilasm source files

**II.6 Assemblies, manifests and modules**

 * II.6.1 Overview of modules, assemblies, and files
 * II.6.2 Defining an assembly
    * II.6.2.1 Information about the assembly (AsmDecl)
    * II.6.2.2 Manifest resources
    * II.6.2.3 Associating files with an assembly
 * II.6.3 Referencing assemblies
 * II.6.4 Declaring modules
 * II.6.5 Referencing modules
 * II.6.6 Declarations inside a module or assembly
 * II.6.7 Exported type definitions
 * II.6.8 Type forwarders

**[II.7 Types and signatures](ii.7-types-and-signatures.md)**

 * [II.7.1 Types](ii.7.1-types.md)
    * [II.7.1.1 modreq and modopt](ii.7.1.1-modreq-and-modopt.md)
    * [II.7.1.2 pinned](ii.7.1.2-pinned.md)
 * [II.7.2 Built-in types](ii.7.2-built-in-types.md)
 * II.7.3 References to user-defined types (TypeReference)
 * II.7.4 Native data types

**[II.8 Visibility, accessibility and hiding](ii.8-visibility-accessibility-and-hiding.md)**

 * [II.8.1 Visibility of top-level types and accessibility of nested types](ii.8.1-visibility-of-top-level-types-and-accessibility-of-nested-types.md)
 * [II.8.2 Accessibility](ii.8.2-accessibility.md)
 * [II.8.3 Hiding](ii.8.3-hiding.md)

**II.9 Generics**

 * II.9.1 Generic type definitions
 * II.9.2 Generics and recursive inheritance graphs 
 * II.9.3 Generic method definitions
 * II.9.4 Instantiating generic types
 * II.9.5 Generics variance
 * II.9.6 Assignment compatibility of instantiated types
 * II.9.7 Validity of member signatures
 * II.9.8 Signatures and binding
 * II.9.9 Inheritance and overriding
 * II.9.10 Explicit method overrides
 * II.9.11 Constraints on generic parameters
 * II.9.12 References to members of generic types

**II.10 Defining types**

 * II.10.1 Type header (ClassHeader)
    * II.10.1.1 Visibility and accessibility attributes
    * II.10.1.2 Type layout attributes
    * II.10.1.3 Type semantics attributes
    * II.10.1.4 Inheritance attributes
    * II.10.1.5 Interoperation attributes
    * II.10.1.6 Special handling attributes
    * II.10.1.7 Generic parameters (GenPars)
 * II.10.2 Body of a type definition
 * II.10.3 Introducing and overriding virtual methods
    * II.10.3.1 Introducing a virtual method
    * II.10.3.2 The .override directive
    * II.10.3.3 Accessibility and overriding
    * II.10.3.4 Impact of overrides on derived classes
 * II.10.4 Method implementation requirements
 * II.10.5 Special members
    * II.10.5.1 Instance constructor
    * II.10.5.2 Instance finalizer
    * II.10.5.3 Type initializer
 * II.10.6 Nested types
 * II.10.7 Controlling instance layout
 * II.10.8 Global fields and methods

**II.11 Semantics of classes**

**II.12 Semantics of interfaces**

 * II.12.1 Implementing interfaces
 * II.12.2 Implementing virtual methods on interfaces
    * II.12.2.1 Interface Implementation Examples

**II.13 Semantics of value types**

 * II.13.1 Referencing value types
 * II.13.2 Initializing value types
 * II.13.3 Methods of value types

**II.14 Semantics of special types**

 * II.14.1 Vectors
 * II.14.2 Arrays
 * II.14.3 Enums
 * II.14.4 Pointer types
    * II.14.4.1 Unmanaged pointers
    * II.14.4.2 Managed pointers
 * II.14.5 Method pointers
 * II.14.6 Delegates
    * II.14.6.1 Delegate signature compatibility
    * II.14.6.2 Synchronous calls to delegates
    * II.14.6.3 Asynchronous calls to delegates

**II.15 Defining, referencing, and calling methods**

 * II.15.1 Method descriptors
    * II.15.1.1 Method declarations
    * II.15.1.2 Method definitions
    * II.15.1.3 Method references
    * II.15.1.4 Method implementations
 * II.15.2 Static, instance, and virtual methods
 * II.15.3 Calling convention
 * II.15.4 Defining methods
    * II.15.4.1 Method body
    * II.15.4.2 Predefined attributes on methods
    * II.15.4.3 Implementation attributes of methods
    * II.15.4.4 Scope blocks
    * II.15.4.5 vararg methods
 * II.15.5 Unmanaged methods
    * II.15.5.1 Method transition thunks
    * II.15.5.2 Platform invoke
    * II.15.5.3 Method calls via function pointers
    * II.15.5.4 Data type marshaling

**II.16 Defining and referencing fields**

 * II.16.1 Attributes of fields
    * II.16.1.1 Accessibility information
    * II.16.1.2 Field contract attributes
    * II.16.1.3 Interoperation attributes
    * II.16.1.4 Other attributes
 * II.16.2 Field init metadata
 * II.16.3 Embedding data in a PE file
    * II.16.3.1 Data declaration
    * II.16.3.2 Accessing data from the PE file
 * II.16.4 Initialization of non-literal static data
    * II.16.4.1 Data known at link time
 * II.16.5 Data known at load time
    * II.16.5.1 Data known at run time

**II.17 Defining properties**

**II.18 Defining events**

**II.19 Exception handling**

 * II.19.1 Protected blocks
 * II.19.2 Handler blocks
 * II.19.3 Catch blocks
 * II.19.4 Filter blocks
 * II.19.5 Finally blocks
 * II.19.6 Fault handlers

**II.20 Declarative security**

**II.21 Custom attributes**

 * II.21.1 CLS conventions: custom attribute usage
 * II.21.2 Attributes used by the CLI
    * II.21.2.1 Pseudo custom attributes
    * II.21.2.2 Custom attributes defined by the CLS
    * II.21.2.3 Custom attributes for security
    * II.21.2.4 Custom attributes for TLS
    * II.21.2.5 Custom attributes, various

**[II.22 Metadata logical format: tables](ii.22-metadata-logical-format-tables.md)**

 * [II.22.1 Metadata validation rules](ii.22.1-metadata-validation-rules.md)
 * [II.22.2 Assembly: 0x20](ii.22.2-assembly-0x20.md)
 * [II.22.3 AssemblyOS: 0x22](ii.22.3-assemblyos-0x22.md)
 * [II.22.4 AssemblyProcessor: 0x21](ii.22.4-assemblyprocessor-0x21.md)
 * [II.22.5 AssemblyRef: 0x23](ii.22.5-assemblyref-0x23.md)
 * [II.22.6 AssemblyRefOS: 0x25](ii.22.6-assemblyrefos-0x25.md)
 * [II.22.7 AssemblyRefProcessor: 0x24](ii.22.7-assemblyrefprocessor-0x24.md)
 * [II.22.8 ClassLayout: 0x0F](ii.22.8-classlayout-0x0f.md)
 * [II.22.9 Constant: 0x0B](ii.22.9-constant-0x0b.md)
 * [II.22.10 CustomAttribute: 0x0C](ii.22.10-customattribute-0x0c.md)
 * [II.22.11 DeclSecurity: 0x0E](ii.22.11-declsecurity-0x0e.md)
 * [II.22.12 EventMap: 0x12](ii.22.12-eventmap-0x12.md)
 * [II.22.13 Event: 0x14](ii.22.13-event-0x14.md)
 * [II.22.14 ExportedType: 0x27](ii.22.14-exportedtype-0x27.md)
 * [II.22.15 Field: 0x04](ii.22.15-field-0x04.md)
 * [II.22.16 FieldLayout: 0x10](ii.22.16-fieldlayout-0x10.md)
 * [II.22.17 FieldMarshal: 0x0D](ii.22.17-fieldmarshal-0x0d.md)
 * [II.22.18 FieldRVA: 0x1D](ii.22.18-fieldrva-0x1d.md)
 * [II.22.19 File: 0x26](ii.22.19-file-0x26.md)
 * [II.22.20 GenericParam: 0x2A](ii.22.20-genericparam-0x2a.md)
 * [II.22.21 GenericParamConstraint: 0x2C](ii.22.21-genericparamconstraint-0x2c.md)
 * [II.22.22 ImplMap: 0x1C](ii.22.22-implmap-0x1c.md)
 * II.22.23 InterfaceImpl: 0x09
 * II.22.24 ManifestResource: 0x28
 * II.22.25 MemberRef: 0x0A
 * II.22.26 MethodDef: 0x06
 * II.22.27 MethodImpl: 0x19
 * II.22.28 MethodSemantics: 0x18
 * II.22.29 MethodSpec: 0x2B
 * II.22.30 Module: 0x00
 * II.22.31 ModuleRef: 0x1A
 * II.22.32 NestedClass: 0x29
 * II.22.33 Param : 0x08
 * II.22.34 Property: 0x17
 * II.22.35 PropertyMap: 0x15
 * II.22.36 StandAloneSig: 0x11
 * II.22.37 TypeDef: 0x02
 * II.22.38 TypeRef: 0x01
 * II.22.39 TypeSpec: 0x1B

**[II.23 Metadata logical format: other structures](ii.23-metadata-logical-format-other-structures.md)**

 * [II.23.1 Bitmasks and flags](ii.23.1-bitmasks-and-flags.md)
    * [II.23.1.1 Values for AssemblyHashAlgorithm](ii.23.1.1-values-for-assemblyhashalgorithm.md)
    * [II.23.1.2 Values for AssemblyFlags](ii.23.1.2-values-for-assemblyflags.md)
    * [II.23.1.3 Values for Culture](ii.23.1.3-values-for-culture.md)
    * [II.23.1.4 Flags for events \[EventAttributes\]](ii.23.1.4-flags-for-events-eventattributes.md)
    * [II.23.1.5 Flags for fields \[FieldAttributes\]](ii.23.1.5-flags-for-fields-fieldattributes.md)
    * [II.23.1.6 Flags for files \[FileAttributes\]](ii.23.1.6-flags-for-files-fileattributes.md)
    * [II.23.1.7 Flags for Generic Parameters \[GenericParamAttributes\]](ii.23.1.7-flags-for-generic-parameters-genericparamattributes.md)
    * [II.23.1.8 Flags for ImplMap \[PInvokeAttributes\]](ii.23.1.8-flags-for-implmap-pinvokeattributes.md)
    * [II.23.1.9 Flags for ManifestResource \[ManifestResourceAttributes\]](ii.23.1.9-flags-for-manifestresource-manifestresourceattributes.md)
    * II.23.1.10 Flags for methods \[MethodAttributes\]
    * II.23.1.11 Flags for methods \[MethodImplAttributes\]
    * II.23.1.12 Flags for MethodSemantics \[MethodSemanticsAttributes\]
    * II.23.1.13 Flags for params \[ParamAttributes\]
    * II.23.1.14 Flags for properties \[PropertyAttributes\]
    * II.23.1.15 Flags for types \[TypeAttributes\]
    * II.23.1.16 Element types used in signatures
 * II.23.2 Blobs and signatures
    * II.23.2.1 MethodDefSig
    * II.23.2.2 MethodRefSig
    * II.23.2.3 StandAloneMethodSig
    * II.23.2.4 FieldSig
    * II.23.2.5 PropertySig
    * II.23.2.6 LocalVarSig
    * II.23.2.7 CustomMod
    * II.23.2.8 TypeDefOrRefOrSpecEncoded
    * II.23.2.9 Constraint
    * II.23.2.10 Param
    * II.23.2.11 RetType
    * II.23.2.12 Type
    * II.23.2.13 ArrayShape
    * II.23.2.14 TypeSpec
    * II.23.2.15 MethodSpec
    * II.23.2.16 Short form signatures
 * II.23.3 Custom attributes
 * II.23.4 Marshalling descriptors

**[II.24 Metadata physical layout](ii.24-metadata-physical-layout.md)**

 * [II.24.1 Fixed fields](ii.24.1-fixed-fields.md)
 * [II.24.2 File headers](ii.24.2-file-headers.md)
    * [II.24.2.1 Metadata root](ii.24.2.1-metadata-root.md)
    * [II.24.2.2 Stream header](ii.24.2.2-stream-header.md)
    * [II.24.2.3 #Strings heap](ii.24.2.3-strings-heap.md)
    * [II.24.2.4 #US and #Blob heaps](ii.24.2.4-us-and-blob-heaps.md)
    * [II.24.2.5 #GUID heap](ii.24.2.5-guid-heap.md)
    * [II.24.2.6 #~ stream](ii.24.2.6-metadata-stream.md)

**II.25 File format extensions to PE**

 * II.25.1 Structure of the runtime file format
 * II.25.2 PE headers
    * II.25.2.1 MS-DOS header
    * II.25.2.2 PE file header
    * II.25.2.3 PE optional header
 * II.25.3 Section headers
    * II.25.3.1 Import Table and Import Address Table (IAT)
    * II.25.3.2 Relocations
    * II.25.3.3 CLI header
 * II.25.4 Common Intermediate Language physical layout
    * II.25.4.1 Method header type values
    * II.25.4.2 Tiny format
    * II.25.4.3 Fat format
    * II.25.4.4 Flags for method headers
    * II.25.4.5 Method data section
    * II.25.4.6 Exception handling clauses

# Partition III: CIL Instruction Set

**[III.1 Introduction](iii.1-introduction.md)**

 * [III.1.1 Data types](iii.1.1-data-types.md)
    * [III.1.1.1 Numeric data types](iii.1.1.1-numeric-data-types.md)
    * [III.1.1.2 Boolean data type](iii.1.1.2-boolean-data-type.md)
    * [III.1.1.3 Character data type](iii.1.1.3-character-data-type.md)
    * [III.1.1.4 Object references](iii.1.1.4-object-references.md)
    * [III.1.1.5 Runtime pointer types](iii.1.1.5-runtime-pointer-types.md)
 * [III.1.2 Instruction variant table](iii.1.2-instruction-variant-table.md)
    * [III.1.2.1 Opcode encodings](iii.1.2.1-opcode-encodings.md)
 * [III.1.3 Stack transition diagram](iii.1.3-stack-transition-diagram.md)
 * [III.1.4 English description](iii.1.4-english-description.md)
 * [III.1.5 Operand type table](iii.1.5-operand-type-table.md)
 * [III.1.6 Implicit argument coercion](iii.1.6-implicit-argument-coercion.md)
 * [III.1.7 Restrictions on CIL code sequences](iii.1.7-restrictions-on-cil-code-sequences.md)
    * [III.1.7.1 The instruction stream](iii.1.7.1-the-instruction-stream.md)
    * [III.1.7.2 Valid branch targets](iii.1.7.2-valid-branch-targets.md)
    * [III.1.7.3 Exception ranges](iii.1.7.3-exception-ranges.md)
    * [III.1.7.4 Must provide maxstack](iii.1.7.4-must-provide-maxstack.md)
    * [III.1.7.5 Backward branch constraints](iii.1.7.5-backward-branch-constraints.md)
    * [III.1.7.6 Branch verification constraints](iii.1.7.6-branch-verification-constraints.md)
 * [III.1.8 Verifiability and correctness](iii.1.8-verifiability-and-correctness.md)
    * [III.1.8.1 Flow control restrictions for verifiable CIL](iii.1.8.1-flow-control-restrictions-for-verifiable-cil.md)
 * [III.1.9 Metadata tokens](iii.1.9-metadata-tokens.md)
 * [III.1.10 Exceptions thrown](iii.1.10-exceptions-thrown.md)

**[III.2 Prefixes to instructions](iii.2-prefixes-to-instructions.md)**

 * [III.2.1 constrained. &ndash; (prefix) invoke a member on a value of a variable type](iii.2.1-constrained.md)
 * [III.2.2 no. &ndash; (prefix) possibly skip a fault check](iii.2.2-no.md)
 * III.2.3 readonly. (prefix) &ndash; following instruction returns a controlled-mutability managed pointer
 * III.2.4 tail. (prefix) &ndash; call terminates current method
 * III.2.5 unaligned. (prefix) &ndash; pointer instruction might be unaligned
 * III.2.6 volatile. (prefix) &ndash; pointer reference is volatile

**III.3 Base instructions**

 * III.3.1 add &ndash; add numeric values
 * III.3.2 add.ovf.\<signed\> &ndash; add integer values with overflow check
 * III.3.3 and &ndash; bitwise AND
 * III.3.4 arglist &ndash; get argument list
 * III.3.5 beq.\<length\> &ndash; branch on equal
 * III.3.6 bge.\<length\> &ndash; branch on greater than or equal to
 * III.3.7 bge.un.\<length\> &ndash; branch on greater than or equal to, unsigned or unordered
 * III.3.8 bgt.\<length\> &ndash; branch on greater than
 * III.3.9 bgt.un.\<length\> &ndash; branch on greater than, unsigned or unordered
 * III.3.10 ble.\<length\> &ndash; branch on less than or equal to
 * III.3.11 ble.un.\<length\> &ndash; branch on less than or equal to, unsigned or unordered
 * III.3.12 blt.\<length\> &ndash; branch on less than
 * III.3.13 blt.un.\<length\> &ndash; branch on less than, unsigned or unordered
 * III.3.14 bne.un\<length\> &ndash; branch on not equal or unordered
 * III.3.15 br.\<length\> &ndash; unconditional branch
 * III.3.16 break &ndash; breakpoint instruction
 * III.3.17 brfalse.\<length\> &ndash; branch on false, null, or zero
 * III.3.18 brtrue.\<length\> &ndash; branch on non-false or non-null
 * III.3.19 call &ndash; call a method
 * III.3.20 calli &ndash; indirect method call
 * III.3.21 ceq &ndash; compare equal
 * III.3.22 cgt &ndash; compare greater than
 * III.3.23 cgt.un &ndash; compare greater than, unsigned or unordered
 * III.3.24 ckfinite &ndash; check for a finite real number
 * III.3.25 clt &ndash; compare less than
 * III.3.26 clt.un &ndash; compare less than, unsigned or unordered
 * III.3.27 conv.\<to type\> &ndash; data conversion
 * III.3.28 conv.ovf.\<to type\> &ndash; data conversion with overflow detection
 * III.3.29 conv.ovf.\<to type\>.un &ndash; unsigned data conversion with overflow detection
 * III.3.30 cpblk &ndash; copy data from memory to memory
 * III.3.31 div &ndash; divide values
 * III.3.32 div.un &ndash; divide integer values, unsigned
 * III.3.33 dup &ndash; duplicate the top value of the stack
 * III.3.34 endfilter &ndash; end exception handling filter clause
 * III.3.35 endfinally &ndash; end the finally or fault clause of an exception block
 * III.3.36 initblk &ndash; initialize a block of memory to a value
 * III.3.37 jmp &ndash; jump to method
 * III.3.38 ldarg.\<length\> &ndash; load argument onto the stack
 * III.3.39 ldarga.\<length\> &ndash; load an argument address
 * III.3.40 ldc.\<type\> &ndash; load numeric constant
 * III.3.41 ldftn &ndash; load method pointer
 * III.3.42 ldind.\<type\> &ndash; load value indirect onto the stack
 * III.3.43 ldloc &ndash; load local variable onto the stack
 * III.3.44 ldloca.\<length\> &ndash; load local variable address
 * III.3.45 ldnull &ndash; load a null pointer
 * III.3.46 leave.\<length\> &ndash; exit a protected region of code
 * III.3.47 localloc &ndash; allocate space in the local dynamic memory pool
 * III.3.48 mul &ndash; multiply values
 * III.3.49 mul.ovf.\<type\> &ndash; multiply integer values with overflow check
 * III.3.50 neg &ndash; negate
 * III.3.51 nop &ndash; no operation
 * III.3.52 not &ndash; bitwise complement
 * III.3.53 or &ndash; bitwise OR
 * III.3.54 pop &ndash; remove the top element of the stack
 * III.3.55 rem &ndash; compute remainder
 * III.3.56 rem.un &ndash; compute integer remainder, unsigned
 * III.3.57 ret &ndash; return from method
 * III.3.58 shl &ndash; shift integer left
 * III.3.59 shr &ndash; shift integer right
 * III.3.60 shr.un &ndash; shift integer right, unsigned
 * III.3.61 starg.\<length\> &ndash; store a value in an argument slot
 * III.3.62 stind.\<type\> &ndash; store value indirect from stack
 * III.3.63 stloc &ndash; pop value from stack to local variable
 * III.3.64 sub &ndash; subtract numeric values
 * III.3.65 sub.ovf.\<type\> &ndash; subtract integer values, checking for overflow
 * III.3.66 switch &ndash; table switch based on value
 * III.3.67 xor &ndash; bitwise XOR

**III.4 Object model instructions**

 * III.4.1 box &ndash; convert a boxable value to its boxed form
 * III.4.2 callvirt &ndash; call a method associated, at runtime, with an object
 * III.4.3 castclass &ndash; cast an object to a class
 * III.4.4 cpobj &ndash; copy a value from one address to another
 * III.4.5 initobj &ndash; initialize the value at an address
 * III.4.6 isinst &ndash; test if an object is an instance of a class or interface
 * III.4.7 ldelem &ndash; load element from array
 * III.4.8 ldelem.\<type\> &ndash; load an element of an array
 * III.4.9 ldelema &ndash; load address of an element of an array
 * III.4.10 ldfld &ndash; load field of an object
 * III.4.11 ldflda &ndash; load field address
 * III.4.12 ldlen &ndash; load the length of an array
 * III.4.13 ldobj &ndash; copy a value from an address to the stack
 * III.4.14 ldsfld &ndash; load static field of a class
 * III.4.15 ldsflda &ndash; load static field address
 * III.4.16 ldstr &ndash; load a literal string
 * III.4.17 ldtoken &ndash; load the runtime representation of a metadata token
 * III.4.18 ldvirtftn &ndash; load a virtual method pointer
 * III.4.19 mkrefany &ndash; push a typed reference on the stack
 * III.4.20 newarr &ndash; create a zero-based, one-dimensional array
 * III.4.21 newobj &ndash; create a new object
 * III.4.22 refanytype &ndash; load the type out of a typed reference
 * III.4.23 refanyval &ndash; load the address out of a typed reference
 * III.4.24 rethrow &ndash; rethrow the current exception
 * III.4.25 sizeof &ndash; load the size, in bytes, of a type
 * III.4.26 stelem &ndash; store element to array
 * III.4.27 stelem.\<type\> &ndash; store an element of an array
 * III.4.28 stfld &ndash; store into a field of an object
 * III.4.29 stobj &ndash; store a value at an address
 * III.4.30 stsfld &ndash; store a static field of a class
 * III.4.31 throw &ndash; throw an exception
 * III.4.32 unbox &ndash; convert boxed value type to its raw form
 * III.4.33 unbox.any &ndash; convert boxed type to value

# Partition IV: Profiles and Libraries

**IV.1 Overview**

**IV.2 Libraries and Profiles**

 * IV.2.1 Libraries
 * IV.2.2 Profiles
 * IV.2.3 The relationship between Libraries and Profiles

**IV.3 The Standard Profiles**

 * IV.3.1 The Kernel Profile
 * IV.3.2 The Compact Profile

**IV.4 Kernel Profile feature requirements**

 * IV.4.1 Features excluded from the Kernel Profile
    * IV.4.1.1 Floating point
    * IV.4.1.2 Non-vector arrays
    * IV.4.1.3 Reflection
    * IV.4.1.4 Application domains
    * IV.4.1.5 Remoting
    * IV.4.1.6 Vararg
    * IV.4.1.7 Frame growth
    * IV.4.1.8 Filtered exceptions

**IV.5 The standard libraries**

 * IV.5.1 General comments
 * IV.5.2 Runtime infrastructure library
 * IV.5.3 Base Class Library (BCL)
 * IV.5.4 Network library
 * IV.5.5 Reflection library
 * IV.5.6 XML library
 * IV.5.7 Extended numerics library
 * IV.5.8 Extended array library
 * IV.5.9 Vararg library
 * IV.5.10 Parallel library

**IV.6 Implementation-specific modifications to the system libraries**

**IV.7 The XML specification**

 * IV.7.1 Semantics
    * IV.7.1.1 Value types as objects
    * IV.7.1.2 Exceptions
 * IV.7.2 XML signature notation issues
    * IV.7.2.1 Serialization
    * IV.7.2.2 Delegates
    * IV.7.2.3 Properties
    * IV.7.2.4 Nested types

# Partition V: Binary Formats

**V.1 Portable CILDB files**

 * V.1.1 Encoding of integers
 * V.1.2 CILDB header
    * V.1.2.1 Version GUID
    * V.1.3 Tables and heaps
    * V.1.3.1 SymConstant table
    * V.1.3.2 SymDocument table
    * V.1.3.3 SymMethod table
    * V.1.3.4 SymSequencePoint
    * V.1.3.5 SymScope table
    * V.1.3.6 SymVariable table
    * V.1.3.7 SymUsing table
    * V.1.3.8 SymMisc heap
    * V.1.3.9 SymString heap
 * V.1.4 Signatures

# Partition VI: Annexes

**VI.Annex A Introduction**

**VI.Annex B Sample programs**

 * VI.B.1 Mutually recursive program (with tail calls)
 * VI.B.2 Using value types
 * VI.B.3 Custom attributes
 * VI.B.4 Generics code and metadata
    * VI.B.4.1 ILAsm version
    * VI.B.4.2 C# version
    * VI.B.4.3 Metadata

**VI.Annex C CIL assembler implementation**

 * VI.C.1 ILAsm keywords
 * VI.C.2 CIL opcode descriptions
 * VI.C.3 Complete grammar
 * VI.C.4 Instruction syntax
    * VI.C.4.1 Top-level instruction syntax
    * VI.C.4.2 Instructions with no operand
    * VI.C.4.3 Instructions that refer to parameters or local variables
    * VI.C.4.4 Instructions that take a single 32-bit integer argument
    * VI.C.4.5 Instructions that take a single 64-bit integer argument
    * VI.C.4.6 Instructions that take a single floating-point argument
    * VI.C.4.7 Branch instructions
    * VI.C.4.8 Instructions that take a method as an argument
    * VI.C.4.9 Instructions that take a field of a class as an argument
    * VI.C.4.10 Instructions that take a type as an argument
    * VI.C.4.11 Instructions that take a string as an argument
    * VI.C.4.12 Instructions that take a signature as an argument
    * VI.C.4.13 Instructions that take a metadata token as an argument
    * VI.C.4.14 Switch instruction

**VI.Annex D Class library design guidelines**

**VI.Annex E Portability considerations**

 * VI.E.1 Uncontrollable behavior
 * VI.E.2 Language- and compiler-controllable behavior
 * VI.E.3 Programmer-controllable behavior

**VI.Annex F Imprecise faults**

 * VI.F.1 Instruction reordering
 * VI.F.2 Inlining
 * VI.F.3 Finally handlers still guaranteed once a try block is entered
 * VI.F.4 Interleaved calls
    * VI.F.4.1 Rejected notions for fencing
 * VI.F.5 Examples
    * VI.F.5.1 Hoisting checks out of a loop
    * VI.F.5.2 Vectorizing a loop
    * VI.F.5.3 Autothreading a loop

**VI.Annex G Parallel library**

 * VI.G.1 Considerations
 * VI.G.2 ParallelFor
 * VI.G.3 ParallelForEach
 * VI.G.4 ParallelWhile
 * VI.G.5 Debugging

**Index**
