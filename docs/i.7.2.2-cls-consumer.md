## I.7.2.2 CLS consumer

A CLS consumer is a language or tool that is designed to allow access to all of the features supplied by CLS-compliant frameworks, but not necessarily be able to produce them. The following is a partial list of things CLS consumer tools are expected to be able to do:

 * Support calling any CLS-compliant method or delegate.

 * Have a mechanism for calling methods whose names are keywords in the language.

 * Support calling distinct methods supported by a type that have the same name and signature, but implement different interfaces.

 * Create an instance of any CLS-compliant type.

 * Read and modify any CLS-compliant field.

 * Access nested types.

 * Access any CLS-compliant property. This does not require any special support other than the ability to call the getter and setter methods of the property.

 * Access any CLS-compliant event. This does not require any special support other than the ability to call methods defined for the event.

 * Have a mechanism to import, instantiate, and use generic types and methods.

_[Note:_ Consumers should consider supporting:

 * Type inferencing over generic methods with language-defined rules for matching.

 * Casting syntax to clarify ambiguous casts to a common supertype. _end note]_

The following is a list of things CLS consumer tools need not support:

 * Creation of new types or interfaces.

 * Initialization metadata (see [Partition II](ii.16.2-field-init-metadata.md)) on fields and parameters other than static literal fields. Note that consumers can choose to use initialization metadata, but can also safely ignore such metadata on anything other than static literal fields.
