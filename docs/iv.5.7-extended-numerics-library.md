## IV.5.7 Extended numerics library

The Extended Numerics Library is not part of any Profile, but can be supplied as part of any CLI implementation. It provides the support for floating-point (`System.Single`, `System.Double`) and extended-precision (`System.Decimal`) data types. Like the Base Class Library, this Library is directly referenced by the C# Standard.

_[Note:_ Programmers who use this library will benefit if implementations specify which arithmetic operations on these data types are implemented primarily through hardware support. _end note]_

_[Rationale:_ The Extended Numerics Library is kept separate because some commonly available processors do not provide direct support for the data types. While software emulation can be provided, the performance difference is often so large (1,000-fold or more) that it is unreasonable to build software using floating-point operations without being aware of whether the underlying implementation is hardware-based. _end rationale]_

**Name used in XML:** ExtendedNumerics

**CLI Feature Requirement:** Floating Point, see §[IV.4.1.1](iv.4.1.1-floating-point.md).
