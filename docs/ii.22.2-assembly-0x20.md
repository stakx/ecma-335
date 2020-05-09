## II.22.2 Assembly: 0x20

The _Assembly_ table has the following columns:

 * _HashAlgId_ (a 4-byte constant of type _AssemblyHashAlgorithm_, §[II.23.1.1](#todo-missing-hyperlink))

 * _MajorVersion_, _MinorVersion_, _BuildNumber_, _RevisionNumber_ (each being 2-byte constants)

 * _Flags_ (a 4-byte bitmask of type _AssemblyFlags_, §[II.23.1.2](#todo-missing-hyperlink))

 * _PublicKey_ (an index into the Blob heap)

 * _Name_ (an index into the String heap)

 * _Culture_ (an index into the String heap)

The _Assembly_ table is defined using the **.assembly** directive (§[II.6.2](#todo-missing-hyperlink)); its columns are obtained from the respective **.hash** algorithm, **.ver**, **.publickey**, and **.culture** (§[II.6.2.1](#todo-missing-hyperlink)). (For an example, see §[II.6.2](#todo-missing-hyperlink).)

> _This contains informative text only._

 1. The _Assembly_ table shall contain zero or one row \[ERROR\]

 2. _HashAlgId_ shall be one of the specified values \[ERROR\]

 3. _MajorVersion_, _MinorVersion_, _BuildNumber_, and _RevisionNumber_ can each have any value

 4. _Flags_ shall have only those values set that are specified \[ERROR\]

 5. _PublicKey_ can be null or non-null

 6. _Name_ shall index a non-empty string in the String heap \[ERROR\]

 7. The string indexed by _Name_ can be of unlimited length

 8. _Culture_ can be null or non-null

 9. If _Culture_ is non-null, it shall index a single string from the list specified (§[II.23.1.3](#todo-missing-hyperlink)) \[ERROR\]

_[Note:_ _Name_ is a simple name (e.g., "Foo", with no drive letter, no path, and no file extension); on POSIX-compliant systems, Name contains no colon, no forward-slash, no backslash, and no period. _end note]_

> _End informative text._
