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
 * [I.6.2 Relationship to managed metadata-driven execution](i.6.2-relationship-to-managed-metadata-driven-execution.md)
    * [I.6.2.1 Managed code](i.6.2.1-managed-code.md)
    * [I.6.2.2 Managed data](i.6.2.2-managed-data.md)
    * [I.6.2.3 Summary](i.6.2.3-summary.md)

**[I.7 Common Language Specification](i.7-common-language-specification.md)**

 * [I.7.1 Introduction](i.7.1-introduction.md)
 * [I.7.2 Views of CLS compliance](i.7.2-views-of-cls-compliance.md)
    * [I.7.2.1 CLS framework](i.7.2.1-cls-framework.md)
    * [I.7.2.2 CLS consumer](i.7.2.2-cls-consumer.md)
    * [I.7.2.3 CLS extender](i.7.2.3-cls-extender.md)
 * [I.7.3 CLS compliance](i.7.3-cls-compliance.md)
    * [I.7.3.1 Marking items as CLS-compliant](i.7.3.1-marking-items-as-cls-compliant.md)

**[I.8 Common Type System](i.8-common-type-system.md)**

 * [I.8.1 Relationship to object-oriented programming](i.8.1-relationship-to-object-oriented-programming.md)
 * [I.8.2 Values and types](i.8.2-values-and-types.md)
    * [I.8.2.1 Value types and reference types](i.8.2.1-value-types-and-reference-types.md)
    * [I.8.2.2 Built-in value and reference types](i.8.2.2-built-in-value-and-reference-types.md)
    * [I.8.2.3 Classes, interfaces, and objects](i.8.2.3-classes-interfaces-and-objects.md)
    * [I.8.2.4 Boxing and unboxing of values](i.8.2.4-boxing-and-unboxing-of-values.md)
    * [I.8.2.5 Identity and equality of values](i.8.2.5-identity-and-equality-of-values.md)
 * [I.8.3 Locations](i.8.3-locations.md)
    * [I.8.3.1 Assignment-compatible locations](i.8.3.1-assignment-compatible-locations.md)
    * [I.8.3.2 Coercion](i.8.3.2-coercion.md)
    * [I.8.3.3 Casting](i.8.3.3-casting.md)
 * [I.8.4 Type members](i.8.4-type-members.md)
    * [I.8.4.1 Fields, array elements, and values](i.8.4.1-fields-array-elements-and-values.md)
    * [I.8.4.2 Methods](i.8.4.2-methods.md)
    * [I.8.4.3 Static fields and static methods](i.8.4.3-static-fields-and-static-methods.md)
    * [I.8.4.4 Virtual methods](i.8.4.4-virtual-methods.md)
 * [I.8.5 Naming](i.8.5-naming.md)
    * [I.8.5.1 Valid names](i.8.5.1-valid-names.md)
    * [I.8.5.2 Assemblies and scoping](i.8.5.2-assemblies-and-scoping.md)
    * [I.8.5.3 Visibility, accessibility, and security](i.8.5.3-visibility-accessibility-and-security.md)
 * [I.8.6 Contracts](i.8.6-contracts.md)
    * [I.8.6.1 Signatures](i.8.6.1-signatures.md)
 * [I.8.7 Assignment compatibility](i.8.7-assignment-compatibility.md)
    * [I.8.7.1 Assignment compatibility for signature types](i.8.7.1-assignment-compatibility-for-signature-types.md)
    * [I.8.7.2 Assignment compatibility for location types](i.8.7.2-assignment-compatibility-for-location-types.md)
    * [I.8.7.3 General assignment compatibility](i.8.7.3-general-assignment-compatibility.md)
 * [I.8.8 Type safety and verification](i.8.8-type-safety-and-verification.md)
 * [I.8.9 Type definers](i.8.9-type-definers.md)
    * [I.8.9.1 Array types](i.8.9.1-array-types.md)
    * [I.8.9.2 Unmanaged pointer types](i.8.9.2-unmanaged-pointer-types.md)
    * [I.8.9.3 Delegates](i.8.9.3-delegates.md)
    * [I.8.9.4 Interface type definition](i.8.9.4-interface-type-definition.md)
    * [I.8.9.5 Class type definition](i.8.9.5-class-type-definition.md)
    * [I.8.9.6 Object type definitions](i.8.9.6-object-type-definitions.md)
    * [I.8.9.7 Value type definition](i.8.9.7-value-type-definition.md)
    * [I.8.9.8 Type inheritance](i.8.9.8-type-inheritance.md)
    * [I.8.9.9 Object type inheritance](i.8.9.9-object-type-inheritance.md)
    * [I.8.9.10 Value type inheritance](i.8.9.10-value-type-inheritance.md)
    * [I.8.9.11 Interface type derivation](i.8.9.10-value-type-inheritance.md)
 * [I.8.10 Member inheritance](i.8.10-member-inheritance.md)
    * [I.8.10.1 Field inheritance](i.8.10.1-field-inheritance.md)
    * [I.8.10.2 Method inheritance](i.8.10.2-method-inheritance.md)
    * [I.8.10.3 Property and event inheritance](i.8.10.3-property-and-event-inheritance.md)
    * [I.8.10.4 Hiding, overriding, and layout](i.8.10.4-hiding-overriding-and-layout.md)
 * [I.8.11 Member definitions](i.8.11-member-definitions.md)
    * [I.8.11.1 Method definitions](i.8.11.1-method-definitions.md)
    * [I.8.11.2 Field definitions](i.8.11.2-field-definitions.md)
    * [I.8.11.3 Property definitions](i.8.11.3-property-definitions.md)
    * [I.8.11.4 Event definitions](i.8.11.4-event-definitions.md)
    * [I.8.11.5 Nested type definitions](i.8.11.5-nested-type-definitions.md)
 
**[I.9 Metadata](i.9-metadata.md)**

 * [I.9.1 Components and assemblies](i.9.1-components-and-assemblies.md)
 * [I.9.2 Accessing metadata](i.9.2-accessing-metadata.md)
    * [I.9.2.1 Metadata tokens](i.9.2.1-metadata-tokens.md)
    * [I.9.2.2 Member signatures in metadata](i.9.2.2-member-signatures-in-metadata.md)
 * [I.9.3 Unmanaged code](i.9.3-unmanaged-code.md)
 * [I.9.4 Method implementation metadata](i.9.4-method-implementation-metadata.md)
 * [I.9.5 Class layout](i.9.5-class-layout.md)
 * [I.9.6 Assemblies: name scopes for types](i.9.6-assemblies-name-scopes-for-types.md)
 * [I.9.7 Metadata extensibility](i.9.7-metadata-extensibility.md)
 * [I.9.8 Globals, imports, and exports](i.9.8-globals-imports-and-exports.md)
 * [I.9.9 Scoped statics](i.9.9-scoped-statics.md)

**[I.10 Name and type rules for the Common Language Specification](i.10-name-and-type-rules-for-the-common-language-specification.md)**

 * [I.10.1 Identifiers](i.10.1-identifiers.md)
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
    * [I.10.7.2 Type names and arity encoding](i.10.7.2-type-names-and-arity-encoding.md)
    * [I.10.7.3 Type constraint re-declaration](i.10.7.3-type-constraint-re-declaration.md)
    * [I.10.7.4 Constraint type restrictions](i.10.7.4-constraint-type-restrictions.md)
    * [I.10.7.5 Frameworks and accessibility of nested types](i.10.7.5-frameworks-and-accessibility-of-nested-types.md)
    * [I.10.7.6 Frameworks and abstract or virtual methods](i.10.7.6-frameworks-and-abstract-or-virtual-methods.md)

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

**[II.5 General syntax](ii.5-general-syntax.md)**

 * [II.5.1 General syntax notation](ii.5.1-general-syntax-notation.md)
 * [II.5.2 Basic syntax categories](ii.5.2-basic-syntax-categories.md)
 * [II.5.3 Identifiers](ii.5.3-identifiers.md)
 * [II.5.4 Labels and lists of labels](ii.5.4-labels-and-lists-of-labels.md)
 * [II.5.5 Lists of hex bytes](ii.5.5-lists-of-hex-bytes.md)
 * [II.5.6 Floating-point numbers](ii.5.6-floating-point-numbers.md)
 * [II.5.7 Source line information](ii.5.7-source-line-information.md)
 * [II.5.8 File names](ii.5.8-file-names.md)
 * [II.5.9 Attributes and metadata](ii.5.9-attributes-and-metadata.md)
 * [II.5.10 ilasm source files](ii.5.10-ilasm-source-files.md)

**[II.6 Assemblies, manifests and modules](ii.6-assemblies-manifests-and-modules.md)**

 * [II.6.1 Overview of modules, assemblies, and files](ii.6.1-overview-of-modules-assemblies-and-files.md)
 * [II.6.2 Defining an assembly](ii.6.2-defining-an-assembly.md)
    * [II.6.2.1 Information about the assembly (AsmDecl)](ii.6.2.1-information-about-the-assembly-asmdecl.md)
    * [II.6.2.2 Manifest resources](ii.6.2.2-manifest-resources.md)
    * [II.6.2.3 Associating files with an assembly](ii.6.2.3-associating-files-with-an-assembly.md)
 * [II.6.3 Referencing assemblies](ii.6.3-referencing-assemblies.md)
 * [II.6.4 Declaring modules](ii.6.8-type-forwarders.md)
 * [II.6.5 Referencing modules](ii.6.5-referencing-modules.md)
 * [II.6.6 Declarations inside a module or assembly](ii.6.6-declarations-inside-a-module-or-assembly.md)
 * [II.6.7 Exported type definitions](ii.6.7-exported-type-definitions.md)
 * [II.6.8 Type forwarders](ii.6.8-type-forwarders.md)

**[II.7 Types and signatures](ii.7-types-and-signatures.md)**

 * [II.7.1 Types](ii.7.1-types.md)
    * [II.7.1.1 modreq and modopt](ii.7.1.1-modreq-and-modopt.md)
    * [II.7.1.2 pinned](ii.7.1.2-pinned.md)
 * [II.7.2 Built-in types](ii.7.2-built-in-types.md)
 * [II.7.3 References to user-defined types (TypeReference)](ii.7.3-references-to-user-defined-types-typereference.md)
 * [II.7.4 Native data types](ii.7.4-native-data-types.md)

**[II.8 Visibility, accessibility and hiding](ii.8-visibility-accessibility-and-hiding.md)**

 * [II.8.1 Visibility of top-level types and accessibility of nested types](ii.8.1-visibility-of-top-level-types-and-accessibility-of-nested-types.md)
 * [II.8.2 Accessibility](ii.8.2-accessibility.md)
 * [II.8.3 Hiding](ii.8.3-hiding.md)

**[II.9 Generics](ii.9-generics.md)**

 * [II.9.1 Generic type definitions](ii.9.1-generic-type-definitions.md)
 * [II.9.2 Generics and recursive inheritance graphs](ii.9.2-generics-and-recursive-inheritance-graphs.md)
 * [II.9.3 Generic method definitions](ii.9.3-generic-method-definitions.md)
 * [II.9.4 Instantiating generic types](ii.9.4-instantiating-generic-types.md)
 * [II.9.5 Generics variance](ii.9.5-generics-variance.md)
 * [II.9.6 Assignment compatibility of instantiated types](ii.9.6-assignment-compatibility-of-instantiated-types.md)
 * [II.9.7 Validity of member signatures](ii.9.7-validity-of-member-signatures.md)
 * [II.9.8 Signatures and binding](ii.9.8-signatures-and-binding.md)
 * [II.9.9 Inheritance and overriding](ii.9.9-inheritance-and-overriding.md)
 * [II.9.10 Explicit method overrides](ii.9.10-explicit-method-overrides.md)
 * [II.9.11 Constraints on generic parameters](ii.9.11-constraints-on-generic-parameters.md)
 * [II.9.12 References to members of generic types](ii.9.12-references-to-members-of-generic-types.md)

**[II.10 Defining types](ii.10-defining-types.md)**

 * [II.10.1 Type header (ClassHeader)](ii.10.1-type-header-classheader.md)
    * [II.10.1.1 Visibility and accessibility attributes](ii.10.1.1-visibility-and-accessibility-attributes.md)
    * [II.10.1.2 Type layout attributes](ii.10.1.2-type-layout-attributes.md)
    * [II.10.1.3 Type semantics attributes](ii.10.1.3-type-semantics-attributes.md)
    * [II.10.1.4 Inheritance attributes](ii.10.1.4-inheritance-attributes.md)
    * [II.10.1.5 Interoperation attributes](ii.10.1.5-interoperation-attributes.md)
    * [II.10.1.6 Special handling attributes](ii.10.1.6-special-handling-attributes.md)
    * [II.10.1.7 Generic parameters (GenPars)](ii.10.1.7-generic-parameters-genpars.md)
 * [II.10.2 Body of a type definition](ii.10.2-body-of-a-type-definition.md)
 * [II.10.3 Introducing and overriding virtual methods](ii.10.3-introducing-and-overriding-virtual-methods.md)
    * [II.10.3.1 Introducing a virtual method](ii.10.3.1-introducing-a-virtual-method.md)
    * [II.10.3.2 The .override directive](ii.10.3.2-the-override-directive.md)
    * [II.10.3.3 Accessibility and overriding](ii.10.3.3-accessibility-and-overriding.md)
    * [II.10.3.4 Impact of overrides on derived classes](ii.10.3.4-impact-of-overrides-on-derived-classes.md)
 * [II.10.4 Method implementation requirements](ii.10.4-method-implementation-requirements.md)
 * [II.10.5 Special members](ii.10.5-special-members.md)
    * [II.10.5.1 Instance constructor](ii.10.5.1-instance-constructor.md)
    * [II.10.5.2 Instance finalizer](ii.10.5.2-instance-finalizer.md)
    * [II.10.5.3 Type initializer](ii.10.5.3-type-initializer.md)
 * [II.10.6 Nested types](ii.10.6-nested-types.md)
 * [II.10.7 Controlling instance layout](ii.10.7-controlling-instance-layout.md)
 * [II.10.8 Global fields and methods](ii.10.8-global-fields-and-methods.md)

**[II.11 Semantics of classes](ii.11-semantics-of-classes.md)**

**[II.12 Semantics of interfaces](ii.12-semantics-of-interfaces.md)**

 * [II.12.1 Implementing interfaces](ii.12.1-implementing-interfaces.md)
 * [II.12.2 Implementing virtual methods on interfaces](ii.12.2-implementing-virtual-methods-on-interfaces.md)
    * [II.12.2.1 Interface Implementation Examples](ii.12.2.1-interface-implementation-examples.md)

**[II.13 Semantics of value types](ii.13-semantics-of-value-types.md)**

 * [II.13.1 Referencing value types](ii.13.1-referencing-value-types.md)
 * [II.13.2 Initializing value types](ii.13.2-initializing-value-types.md)
 * [II.13.3 Methods of value types](ii.13.3-methods-of-value-types.md)

**[II.14 Semantics of special types](ii.14-semantics-of-special-types.md)**

 * [II.14.1 Vectors](ii.14.1-vectors.md)
 * [II.14.2 Arrays](ii.14.2-arrays.md)
 * [II.14.3 Enums](ii.14.3-enums.md)
 * [II.14.4 Pointer types](ii.14.4-pointer-types.md)
    * [II.14.4.1 Unmanaged pointers](ii.14.4.1-unmanaged-pointers.md)
    * [II.14.4.2 Managed pointers](ii.14.4.2-managed-pointers.md)
 * [II.14.5 Method pointers](ii.14.5-method-pointers.md)
 * [II.14.6 Delegates](ii.14.6-delegates.md)
    * [II.14.6.1 Delegate signature compatibility](ii.14.6.1-delegate-signature-compatibility.md)
    * [II.14.6.2 Synchronous calls to delegates](ii.14.6.2-synchronous-calls-to-delegates.md)
    * [II.14.6.3 Asynchronous calls to delegates](ii.14.6.3-asynchronous-calls-to-delegates.md)

**[II.15 Defining, referencing, and calling methods](ii.15-defining-referencing-and-calling-methods.md)**

 * [II.15.1 Method descriptors](ii.15.1-method-descriptors.md)
    * [II.15.1.1 Method declarations](ii.15.1.1-method-declarations.md)
    * [II.15.1.2 Method definitions](ii.15.1.2-method-definitions.md)
    * [II.15.1.3 Method references](ii.15.1.3-method-references.md)
    * [II.15.1.4 Method implementations](ii.15.1.4-method-implementations.md)
 * [II.15.2 Static, instance, and virtual methods](ii.15.2-static-instance-and-virtual-methods.md)
 * [II.15.3 Calling convention](ii.15.3-calling-convention.md)
 * [II.15.4 Defining methods](ii.15.4-defining-methods.md)
    * [II.15.4.1 Method body](ii.15.4.1-method-body.md)
    * [II.15.4.2 Predefined attributes on methods](ii.15.4.2-predefined-attributes-on-methods.md)
    * [II.15.4.3 Implementation attributes of methods](ii.15.4.3-implementation-attributes-of-methods.md)
    * [II.15.4.4 Scope blocks](ii.15.4.4-scope-blocks.md)
    * [II.15.4.5 vararg methods](ii.15.4.5-vararg-methods.md)
 * [II.15.5 Unmanaged methods](ii.15.5-unmanaged-methods.md)
    * [II.15.5.1 Method transition thunks](ii.15.5.1-method-transition-thunks.md)
    * [II.15.5.2 Platform invoke](ii.15.5.2-platform-invoke.md)
    * [II.15.5.3 Method calls via function pointers](ii.15.5.3-method-calls-via-function-pointers.md)
    * [II.15.5.4 Data type marshaling](ii.15.5.4-data-type-marshaling.md)

**[II.16 Defining and referencing fields](ii.16-defining-and-referencing-fields.md)**

 * [II.16.1 Attributes of fields](ii.16.1-attributes-of-fields.md)
    * [II.16.1.1 Accessibility information](ii.16.1.1-accessibility-information.md)
    * [II.16.1.2 Field contract attributes](ii.16.1.2-field-contract-attributes.md)
    * [II.16.1.3 Interoperation attributes](ii.16.1.3-interoperation-attributes.md)
    * [II.16.1.4 Other attributes](ii.16.1.4-other-attributes.md)
 * [II.16.2 Field init metadata](ii.16.2-field-init-metadata.md)
 * [II.16.3 Embedding data in a PE file](ii.16.3-embedding-data-in-a-pe-file.md)
    * [II.16.3.1 Data declaration](ii.16.3.1-data-declaration.md)
    * [II.16.3.2 Accessing data from the PE file](ii.16.3.2-accessing-data-from-the-pe-file.md)
 * [II.16.4 Initialization of non-literal static data](ii.16.4-initialization-of-non-literal-static-data.md)
    * [II.16.4.1 Data known at link time](ii.16.4.1-data-known-at-link-time.md)
 * [II.16.5 Data known at load time](ii.16.5-data-known-at-load-time.md)
    * [II.16.5.1 Data known at run time](ii.16.5.1-data-known-at-run-time.md)

**[II.17 Defining properties](ii.17-defining-properties.md)**

**[II.18 Defining events](ii.18-defining-events.md)**

**[II.19 Exception handling](ii.19-exception-handling.md)**

 * [II.19.1 Protected blocks](ii.19.1-protected-blocks.md)
 * [II.19.2 Handler blocks](ii.19.2-handler-blocks.md)
 * [II.19.3 Catch blocks](ii.19.3-catch-blocks.md)
 * [II.19.4 Filter blocks](ii.19.4-filter-blocks.md)
 * [II.19.5 Finally blocks](ii.19.5-finally-blocks.md)
 * [II.19.6 Fault handlers](ii.19.6-fault-handlers.md)

**[II.20 Declarative security](ii.20-declarative-security.md)**

**[II.21 Custom attributes](ii.21-custom-attributes.md)**

 * [II.21.1 CLS conventions: custom attribute usage](ii.21.1-cls-conventions-custom-attribute-usage.md)
 * [II.21.2 Attributes used by the CLI](ii.21.2-attributes-used-by-the-cli.md)
    * [II.21.2.1 Pseudo custom attributes](ii.21.2.1-pseudo-custom-attributes.md)
    * [II.21.2.2 Custom attributes defined by the CLS](ii.21.2.2-custom-attributes-defined-by-the-cls.md)
    * [II.21.2.3 Custom attributes for security](ii.21.2.3-custom-attributes-for-security.md)
    * [II.21.2.4 Custom attributes for TLS](ii.21.2.4-custom-attributes-for-tls.md)
    * [II.21.2.5 Custom attributes, various](ii.21.2.5-custom-attributes-various.md)

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
 * [II.22.23 InterfaceImpl: 0x09](ii.22.23-interfaceimpl-0x09.md)
 * [II.22.24 ManifestResource: 0x28](ii.22.24-manifestresource-0x28.md)
 * [II.22.25 MemberRef: 0x0A](ii.22.25-memberref-0x0a.md)
 * [II.22.26 MethodDef: 0x06](ii.22.26-methoddef-0x06.md)
 * [II.22.27 MethodImpl: 0x19](ii.22.27-methodimpl-0x19.md)
 * [II.22.28 MethodSemantics: 0x18](ii.22.28-methodsemantics-0x18.md)
 * [II.22.29 MethodSpec: 0x2B](ii.22.29-methodspec-0x2b.md)
 * [II.22.30 Module: 0x00](ii.22.30-module_0x00.md)
 * [II.22.31 ModuleRef: 0x1A](ii.22.31-moduleref-0x1a.md)
 * [II.22.32 NestedClass: 0x29](ii.22.32-nestedclass-0x29.md)
 * [II.22.33 Param: 0x08](ii.22.33-param-0x08.md)
 * [II.22.34 Property: 0x17](ii.22.34-property-0x17.md)
 * [II.22.35 PropertyMap: 0x15](ii.22.35-propertymap-0x15.md)
 * [II.22.36 StandAloneSig: 0x11](ii.22.36-standalonesig-0x11.md)
 * [II.22.37 TypeDef: 0x02](ii.22.37-typedef-0x02.md)
 * [II.22.38 TypeRef: 0x01](ii.22.38-typeref-0x01.md)
 * [II.22.39 TypeSpec: 0x1B](ii.22.39-typespec-0x1b.md)

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
    * [II.23.1.10 Flags for methods \[MethodAttributes\]](ii.23.1.10-flags-for-methods-methodattributes.md)
    * [II.23.1.11 Flags for methods \[MethodImplAttributes\]](ii.23.1.11-flags-for-methods-methodimplattributes.md)
    * [II.23.1.12 Flags for MethodSemantics \[MethodSemanticsAttributes\]](ii.23.1.12-flags-for-methodsemantics-methodsemanticsattributes.md)
    * [II.23.1.13 Flags for params \[ParamAttributes\]](ii.23.1.13-flags-for-params-paramattributes.md)
    * [II.23.1.14 Flags for properties \[PropertyAttributes\]](ii.23.1.14-flags-for-properties-propertyattributes.md)
    * [II.23.1.15 Flags for types \[TypeAttributes\]](ii.23.1.15-flags-for-types-typeattributes.md)
    * [II.23.1.16 Element types used in signatures](ii.23.1.16-element-types-used-in-signatures.md)
 * [II.23.2 Blobs and signatures](ii.23.2-blobs-and-signatures.md)
    * [II.23.2.1 MethodDefSig](ii.23.2.1-methoddefsig.md)
    * [II.23.2.2 MethodRefSig](ii.23.2.2-methodrefsig.md)
    * [II.23.2.3 StandAloneMethodSig](ii.23.2.3-standalonemethodsig.md)
    * [II.23.2.4 FieldSig](ii.23.2.4-fieldsig.md)
    * [II.23.2.5 PropertySig](ii.23.2.5-propertysig.md)
    * [II.23.2.6 LocalVarSig](ii.23.2.6-localvarsig.md)
    * [II.23.2.7 CustomMod](ii.23.2.7-custommod.md)
    * [II.23.2.8 TypeDefOrRefOrSpecEncoded](ii.23.2.8-typedeforreforspecencoded.md)
    * [II.23.2.9 Constraint](ii.23.2.9-constraint.md)
    * [II.23.2.10 Param](ii.23.2.10-param.md)
    * [II.23.2.11 RetType](ii.23.2.11-rettype.md)
    * [II.23.2.12 Type](ii.23.2.12-type.md)
    * [II.23.2.13 ArrayShape](ii.23.2.13-arrayshape.md)
    * [II.23.2.14 TypeSpec](ii.23.2.14-typespec.md)
    * [II.23.2.15 MethodSpec](ii.23.2.15-methodspec.md)
    * [II.23.2.16 Short form signatures](ii.23.2.16-short-form-signatures.md)
 * [II.23.3 Custom attributes](ii.23.3-custom-attributes.md)
 * [II.23.4 Marshalling descriptors](ii.23.4-marshalling-descriptors.md)

**[II.24 Metadata physical layout](ii.24-metadata-physical-layout.md)**

 * [II.24.1 Fixed fields](ii.24.1-fixed-fields.md)
 * [II.24.2 File headers](ii.24.2-file-headers.md)
    * [II.24.2.1 Metadata root](ii.24.2.1-metadata-root.md)
    * [II.24.2.2 Stream header](ii.24.2.2-stream-header.md)
    * [II.24.2.3 #Strings heap](ii.24.2.3-strings-heap.md)
    * [II.24.2.4 #US and #Blob heaps](ii.24.2.4-us-and-blob-heaps.md)
    * [II.24.2.5 #GUID heap](ii.24.2.5-guid-heap.md)
    * [II.24.2.6 #~ stream](ii.24.2.6-metadata-stream.md)

**[II.25 File format extensions to PE](ii.25-file-format-extensions-to-pe.md)**

 * [II.25.1 Structure of the runtime file format](ii.25.1-structure-of-the-runtime-file-format.md)
 * [II.25.2 PE headers](ii.25.2-pe-headers.md)
    * [II.25.2.1 MS-DOS header](ii.25.2.1-ms-dos-header.md)
    * [II.25.2.2 PE file header](ii.25.2.2-pe-file-header.md)
    * [II.25.2.3 PE optional header](ii.25.2.3-pe-optional-header.md)
 * [II.25.3 Section headers](ii.25.3-section-headers.md)
    * [II.25.3.1 Import Table and Import Address Table (IAT)](ii.25.3.1-import-table-and-import-address-table-iat.md)
    * [II.25.3.2 Relocations](ii.25.3.2-relocations.md)
    * [II.25.3.3 CLI header](ii.25.3.3-cli-header.md)
 * [II.25.4 Common Intermediate Language physical layout](ii.25.4-common-intermediate-language-physical-layout.md)
    * [II.25.4.1 Method header type values](ii.25.4.1-method-header-type-values.md)
    * [II.25.4.2 Tiny format](ii.25.4.2-tiny-format.md)
    * [II.25.4.3 Fat format](ii.25.4.3-fat-format.md)
    * [II.25.4.4 Flags for method headers](ii.25.4.4-flags-for-method-headers.md)
    * [II.25.4.5 Method data section](ii.25.4.5-method-data-section.md)
    * [II.25.4.6 Exception handling clauses](ii.25.4.6-exception-handling-clauses.md)

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
 * [III.2.3 readonly. (prefix) &ndash; following instruction returns a controlled-mutability managed pointer](iii.2.3-readonly.md)
 * [III.2.4 tail. (prefix) &ndash; call terminates current method](iii.2.4-tail.md)
 * [III.2.5 unaligned. (prefix) &ndash; pointer instruction might be unaligned](iii.2.5-unaligned.md)
 * [III.2.6 volatile. (prefix) &ndash; pointer reference is volatile](iii.2.6-volatile.md)

**[III.3 Base instructions](iii.3-base-instructions.md)**

 * [III.3.1 add &ndash; add numeric values](iii.3.1-add.md)
 * [III.3.2 add.ovf.\<signed\> &ndash; add integer values with overflow check](iii.3.2-add.ovf.signed.md)
 * [III.3.3 and &ndash; bitwise AND](iii.3.3-and.md)
 * [III.3.4 arglist &ndash; get argument list](iii.3.4-arglist.md)
 * [III.3.5 beq.\<length\> &ndash; branch on equal](iii.3.5-beq.length.md)
 * [III.3.6 bge.\<length\> &ndash; branch on greater than or equal to](iii.3.6-bge.length.md)
 * [III.3.7 bge.un.\<length\> &ndash; branch on greater than or equal to, unsigned or unordered](iii.3.7-bge.un.length.md)
 * [III.3.8 bgt.\<length\> &ndash; branch on greater than](iii.3.8-bgt.length.md)
 * [III.3.9 bgt.un.\<length\> &ndash; branch on greater than, unsigned or unordered](iii.3.9-bgt.un.length.md)
 * [III.3.10 ble.\<length\> &ndash; branch on less than or equal to](iii.3.10-ble.length.md)
 * [III.3.11 ble.un.\<length\> &ndash; branch on less than or equal to, unsigned or unordered](iii.3.11-ble.un.length.md)
 * [III.3.12 blt.\<length\> &ndash; branch on less than](iii.3.12-blt.length.md)
 * [III.3.13 blt.un.\<length\> &ndash; branch on less than, unsigned or unordered](iii.3.13-blt.un.length.md)
 * [III.3.14 bne.un.\<length\> &ndash; branch on not equal or unordered](iii.3.14-bne.un.length.md)
 * [III.3.15 br.\<length\> &ndash; unconditional branch](iii.3.15-br.length.md)
 * [III.3.16 break &ndash; breakpoint instruction](iii.3.16-break.md)
 * [III.3.17 brfalse.\<length\> &ndash; branch on false, null, or zero](iii.3.17-brfalse.length.md)
 * [III.3.18 brtrue.\<length\> &ndash; branch on non-false or non-null](iii.3.18-brtrue.length.md)
 * [III.3.19 call &ndash; call a method](iii.3.19-call.md)
 * [III.3.20 calli &ndash; indirect method call](iii.3.20-calli.md)
 * [III.3.21 ceq &ndash; compare equal](iii.3.21-ceq.md)
 * [III.3.22 cgt &ndash; compare greater than](iii.3.22-cgt.md)
 * [III.3.23 cgt.un &ndash; compare greater than, unsigned or unordered](iii.3.23-cgt-un.md)
 * [III.3.24 ckfinite &ndash; check for a finite real number](iii.3.24-ckfinite.md)
 * [III.3.25 clt &ndash; compare less than](iii.3.25-clt.md)
 * [III.3.26 clt.un &ndash; compare less than, unsigned or unordered](iii.3.26-clt-un.md)
 * [III.3.27 conv.\<to type\> &ndash; data conversion](iii.3.27-conv-to-type.md)
 * [III.3.28 conv.ovf.\<to type\> &ndash; data conversion with overflow detection](iii.3.28-conv-ovf-to-type.md)
 * [III.3.29 conv.ovf.\<to type\>.un &ndash; unsigned data conversion with overflow detection](iii.3.29-conv-ovf-to-type-un.md)
 * [III.3.30 cpblk &ndash; copy data from memory to memory](iii.3.30-cpblk.md)
 * [III.3.31 div &ndash; divide values](iii.3.31-div.md)
 * [III.3.32 div.un &ndash; divide integer values, unsigned](iii.3.32-div-un.md)
 * [III.3.33 dup &ndash; duplicate the top value of the stack](iii.3.33-dup.md)
 * [III.3.34 endfilter &ndash; end exception handling filter clause](iii.3.34-endfilter.md)
 * [III.3.35 endfinally &ndash; end the finally or fault clause of an exception block](iii.3.35-endfinally.md)
 * [III.3.36 initblk &ndash; initialize a block of memory to a value](iii.3.36-initblk.md)
 * [III.3.37 jmp &ndash; jump to method](iii.3.37-jmp.md)
 * [III.3.38 ldarg.\<length\> &ndash; load argument onto the stack](iii.3.38-ldarg-length.md)
 * [III.3.39 ldarga.\<length\> &ndash; load an argument address](iii.3.39-ldarga-length.md)
 * [III.3.40 ldc.\<type\> &ndash; load numeric constant](iii.3.40-ldc-type.md)
 * [III.3.41 ldftn &ndash; load method pointer](iii.3.41-ldftn.md)
 * [III.3.42 ldind.\<type\> &ndash; load value indirect onto the stack](iii.3.42-ldind-type.md)
 * [III.3.43 ldloc &ndash; load local variable onto the stack](iii.3.43-ldloc.md)
 * [III.3.44 ldloca.\<length\> &ndash; load local variable address](iii.3.44-ldloca-length.md)
 * [III.3.45 ldnull &ndash; load a null pointer](iii.3.45-ldnull.md)
 * [III.3.46 leave.\<length\> &ndash; exit a protected region of code](iii.3.46-leave-length.md)
 * [III.3.47 localloc &ndash; allocate space in the local dynamic memory pool](iii.3.47-localloc.md)
 * [III.3.48 mul &ndash; multiply values](iii.3.48-mul.md)
 * [III.3.49 mul.ovf.\<type\> &ndash; multiply integer values with overflow check](iii.3.49-mul-ovf-type.md)
 * [III.3.50 neg &ndash; negate](iii.3.50-neg.md)
 * [III.3.51 nop &ndash; no operation](iii.3.51-nop.md)
 * [III.3.52 not &ndash; bitwise complement](iii.3.52-not.md)
 * [III.3.53 or &ndash; bitwise OR](iii.3.53-or.md)
 * [III.3.54 pop &ndash; remove the top element of the stack](iii.3.54-pop.md)
 * [III.3.55 rem &ndash; compute remainder](iii.3.55-rem.md)
 * [III.3.56 rem.un &ndash; compute integer remainder, unsigned](iii.3.56-rem-un.md)
 * [III.3.57 ret &ndash; return from method](iii.3.57-ret.md)
 * [III.3.58 shl &ndash; shift integer left](iii.3.58-shl.md)
 * [III.3.59 shr &ndash; shift integer right](iii.3.59-shr.md)
 * [III.3.60 shr.un &ndash; shift integer right, unsigned](iii.3.60-shr-un.md)
 * [III.3.61 starg.\<length\> &ndash; store a value in an argument slot](iii.3.61-starg-length.md)
 * [III.3.62 stind.\<type\> &ndash; store value indirect from stack](iii.3.62-stind-type.md)
 * [III.3.63 stloc &ndash; pop value from stack to local variable](iii.3.63-stloc.md)
 * [III.3.64 sub &ndash; subtract numeric values](iii.3.64-sub.md)
 * [III.3.65 sub.ovf.\<type\> &ndash; subtract integer values, checking for overflow](iii.3.65-sub-ovf-type.md)
 * [III.3.66 switch &ndash; table switch based on value](iii.3.66-switch.md)
 * [III.3.67 xor &ndash; bitwise XOR](iii.3.67-xor.md)

**[III.4 Object model instructions](iii.4-object-model-instructions.md)**

 * [III.4.1 box &ndash; convert a boxable value to its boxed form](iii.4.1-box.md)
 * [III.4.2 callvirt &ndash; call a method associated, at runtime, with an object](iii.4.2-callvirt.md)
 * [III.4.3 castclass &ndash; cast an object to a class](iii.4.3-castclass.md)
 * [III.4.4 cpobj &ndash; copy a value from one address to another](iii.4.4-cpobj.md)
 * [III.4.5 initobj &ndash; initialize the value at an address](iii.4.5-initobj.md)
 * [III.4.6 isinst &ndash; test if an object is an instance of a class or interface](iii.4.6-isinst.md)
 * [III.4.7 ldelem &ndash; load element from array](iii.4.7-ldelem.md)
 * [III.4.8 ldelem.\<type\> &ndash; load an element of an array](iii.4.8-ldelem-type.md)
 * [III.4.9 ldelema &ndash; load address of an element of an array](iii.4.9-ldelema.md)
 * [III.4.10 ldfld &ndash; load field of an object](iii.4.10-ldfld.md)
 * [III.4.11 ldflda &ndash; load field address](iii.4.11-ldflda.md)
 * [III.4.12 ldlen &ndash; load the length of an array](iii.4.12-ldlen.md)
 * [III.4.13 ldobj &ndash; copy a value from an address to the stack](iii.4.13-ldobj.md)
 * [III.4.14 ldsfld &ndash; load static field of a class](iii.4.14-ldsfld.md)
 * [III.4.15 ldsflda &ndash; load static field address](iii.4.15-ldsflda.md)
 * [III.4.16 ldstr &ndash; load a literal string](iii.4.16-ldstr.md)
 * [III.4.17 ldtoken &ndash; load the runtime representation of a metadata token](iii.4.17-ldtoken.md)
 * [III.4.18 ldvirtftn &ndash; load a virtual method pointer](iii.4.18-ldvirtftn.md)
 * [III.4.19 mkrefany &ndash; push a typed reference on the stack](iii.4.19-mkrefany.md)
 * [III.4.20 newarr &ndash; create a zero-based, one-dimensional array](iii.4.20-newarr.md)
 * [III.4.21 newobj &ndash; create a new object](iii.4.21-newobj.md)
 * [III.4.22 refanytype &ndash; load the type out of a typed reference](iii.4.22-refanytype.md)
 * [III.4.23 refanyval &ndash; load the address out of a typed reference](iii.4.23-refanyval.md)
 * [III.4.24 rethrow &ndash; rethrow the current exception](iii.4.24-rethrow.md)
 * [III.4.25 sizeof &ndash; load the size, in bytes, of a type](iii.4.25-sizeof.md)
 * [III.4.26 stelem &ndash; store element to array](iii.4.26-stelem.md)
 * [III.4.27 stelem.\<type\> &ndash; store an element of an array](iii.4.27-stelem-type.md)
 * [III.4.28 stfld &ndash; store into a field of an object](iii.4.28-stfld.md)
 * [III.4.29 stobj &ndash; store a value at an address](iii.4.29-stobj.md)
 * [III.4.30 stsfld &ndash; store a static field of a class](iii.4.30-stsfld.md)
 * [III.4.31 throw &ndash; throw an exception](iii.4.31-throw.md)
 * [III.4.32 unbox &ndash; convert boxed value type to its raw form](iii.4.32-unbox.md)
 * [III.4.33 unbox.any &ndash; convert boxed type to value](iii.4.33-unbox-any.md)

# Partition IV: Profiles and Libraries

**[IV.1 Overview](iv.1-overview.md)**

**[IV.2 Libraries and Profiles](iv.2-libraries-and-profiles.md)**

 * [IV.2.1 Libraries](iv.2.1-libraries.md)
 * [IV.2.2 Profiles](iv.2.2-profiles.md)
 * [IV.2.3 The relationship between Libraries and Profiles](iv.2.3-the-relationship-between-libraries-and-profiles.md)

**[IV.3 The Standard Profiles](iv.3-the-standard-profiles.md)**

 * [IV.3.1 The Kernel Profile](iv.3.1-the-kernel-profile.md)
 * [IV.3.2 The Compact Profile](iv.3.2-the-compact-profile.md)

**[IV.4 Kernel Profile feature requirements](iv.4-kernel-profile-feature-requirements.md)**

 * [IV.4.1 Features excluded from the Kernel Profile](iv.4.1-features-excluded-from-the-kernel-profile.md)
    * [IV.4.1.1 Floating point](iv.4.1.1-floating-point.md)
    * [IV.4.1.2 Non-vector arrays](iv.4.1.2-non-vector-arrays.md)
    * [IV.4.1.3 Reflection](iv.4.1.3-reflection.md)
    * [IV.4.1.4 Application domains](iv.4.1.4-application-domains.md)
    * [IV.4.1.5 Remoting](iv.4.1.5-remoting.md)
    * [IV.4.1.6 Vararg](iv.4.1.6-vararg.md)
    * [IV.4.1.7 Frame growth](iv.4.1.7-frame-growth.md)
    * [IV.4.1.8 Filtered exceptions](iv.4.1.8-filtered-exceptions.md)

**[IV.5 The standard libraries](iv.5-the-standard-libraries.md)**

 * [IV.5.1 General comments](iv.5.1-general-comments.md)
 * [IV.5.2 Runtime infrastructure library](iv.5.2-runtime-infrastructure-library.md)
 * [IV.5.3 Base Class Library (BCL)](iv.5.3-base-class-library-bcl.md)
 * [IV.5.4 Network library](iv.5.4-network-library.md)
 * [IV.5.5 Reflection library](iv.5.5-reflection-library.md)
 * [IV.5.6 XML library](iv.5.6-xml-library.md)
 * [IV.5.7 Extended numerics library](iv.5.7-extended-numerics-library.md)
 * [IV.5.8 Extended array library](iv.5.8-extended-array-library.md)
 * [IV.5.9 Vararg library](iv.5.9-vararg-library.md)
 * [IV.5.10 Parallel library](iv.5.10-parallel-library.md)

**[IV.6 Implementation-specific modifications to the system libraries](iv.6-implementation-specific-modifications-to-the-system-libraries.md)**

**[IV.7 The XML specification](iv.7-The-xml-specification.md)**

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

**[VI.Annex C CIL assembler implementation](vi.annex-c-cil-assembler-implementation.md)**

 * [VI.C.1 ILAsm keywords](vi.c.1-ilasm-keywords.md)
 * [VI.C.2 CIL opcode descriptions](vi.c.2-cil-opcode-descriptions.md)
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

**[VI.Annex E Portability considerations](vi.e-portability-considerations.md)**

 * [VI.E.1 Uncontrollable behavior](vi.e.1-uncontrollable-behavior.md)
 * [VI.E.2 Language- and compiler-controllable behavior](vi.e.2-language-and-compiler-controllable-behavior.md)
 * [VI.E.3 Programmer-controllable behavior](vi.e.3-programmer-controllable-behavior.md)

**[VI.Annex F Imprecise faults](vi.f-imprecise-faults.md)**

 * [VI.F.1 Instruction reordering](vi.f.1-instruction-reordering.md)
 * [VI.F.2 Inlining](vi.f.2-inlining.md)
 * [VI.F.3 Finally handlers still guaranteed once a try block is entered](vi.f.3-finally-handlers-still-guaranteed-once-a-try-block-is-entered.md)
 * [VI.F.4 Interleaved calls](vi.f.4-interleaved-calls.md)
    * [VI.F.4.1 Rejected notions for fencing](vi.f.4.1-rejected-notions-for-fencing.md)
 * [VI.F.5 Examples](vi.f.5-examples.md)
    * [VI.F.5.1 Hoisting checks out of a loop](vi.f.5.1-hoisting-checks-out-of-a-loop.md)
    * [VI.F.5.2 Vectorizing a loop](vi.f.5.2-vectorizing-a-loop.md)
    * [VI.F.5.3 Autothreading a loop](vi.f.5.3-autothreading-a-loop.md)

**[VI.Annex G Parallel library](vi-annex-g-parallel-library.md)**

 * [VI.G.1 Considerations](vi.g.1-considerations.md)
 * [VI.G.2 ParallelFor](vi.g.2-parallelfor.md)
 * [VI.G.3 ParallelForEach](vi.g.3-parallelforeach.md)
 * [VI.G.4 ParallelWhile](vi.g.4-parallelwhile.md)
 * [VI.G.5 Debugging](vi.g.5-debugging.md)

**Index**
