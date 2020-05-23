## IV.4.1.2 Non-vector arrays

The **non-vector arrays feature set** includes support for arrays with more than one dimension or with lower bounds other than zero. This includes support for signatures referencing such arrays, runtime representations of such arrays, and marshalling of such arrays to and from native data types.

**If omitted:** Any attempt to reference a signature including a non-vector array shall throw the `System.NotImplementedException` exception. The precise timing of the exception is not specified.

_[Note:_ The type `System.Array` is part of the Kernel Profile and is available in all conforming implementations of the CLI. An implementation that does not provide the non-vector array feature set can correctly assume that all instances of that type are vectors. _end note]_

**Part of Library:** Extended Arrays (see §[IV.5.8](iv.5.8-extended-array-library.md)).
