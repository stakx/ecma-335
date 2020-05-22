## II.15.5 Unmanaged methods

In addition to supporting managed code and managed data, the CLI provides facilities for accessing pre-existing native code from the underlying platform, known as unmanaged code. These facilities are, by necessity, platform-specific and hence are only partially specified here.

This Standard specifies:

 * A mechanism in the file format for providing function pointers to managed code that can be called from unmanaged code (§[II.15.5.1](ii.15.5.1-method-transition-thunks.md)).

 * A mechanism for marking certain method definitions as being implemented in unmanaged code (called *platform invoke*, see §[II.15.5.2](ii.15.5.2-platform-invoke.md)).

 * A mechanism for marking call sites used with method pointers to indicate that the call is to an unmanaged method (§[II.15.5.3](ii.15.5.3-method-calls-via-function-pointers.md)).

 * A small set of pre-defined data types that can be passed (marshaled) using these mechanisms on all implementations of the CLI (§[II.15.5.4](ii.15.5.4-data-type-marshaling.md)). The set of types is extensible through the use of custom attributes and modifiers, but these extensions are platform-specific.
