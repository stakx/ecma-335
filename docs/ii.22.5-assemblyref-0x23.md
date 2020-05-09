## II.22.5 AssemblyRef: 0x23

The _AssemblyRef_ table has the following columns:

 * _MajorVersion_, _MinorVersion_, _BuildNumber_, _RevisionNumber_ (each being 2-byte constants)

 * _Flags_ (a 4-byte bitmask of type _AssemblyFlags_, §[II.23.1.2](#todo-missing-hyperlink))

 * _PublicKeyOrToken_ (an index into the Blob heap, indicating the public key or token that identifies the author of this Assembly)

 * _Name_ (an index into the String heap)

 * _Culture_ (an index into the String heap)

 * _HashValue_ (an index into the Blob heap)

The table is defined by the **.assembly extern** directive (§[II.6.3](#todo-missing-hyperlink)). Its columns are filled using directives similar to those of the _Assembly_ table except for the _PublicKeyOrToken_ column, which is defined using the **.publickeytoken** directive. (For an example, see §[II.6.3](#todo-missing-hyperlink).)

> _This contains informative text only._

 1. _MajorVersion_, _MinorVersion_, _BuildNumber_, and _RevisionNumber_ can each have any value

 2. _Flags_ shall have only one bit set, the **PublicKey** bit (§[II.23.1.2](#todo-missing-hyperlink)). All other bits shall be zero. \[ERROR\]

 3. _PublicKeyOrToken_ can be null, or non-null (note that the _Flags_.**PublicKey** bit specifies whether the 'blob' is a full public key, or the short hashed token)

 4. If non-null, then _PublicKeyOrToken_ shall index a valid offset in the Blob heap \[ERROR\]

 5. _Name_ shall index a non-empty string, in the String heap (there is no limit to its length) \[ERROR\]

 6. _Culture_ can be null or non-null.

 7. If non-null, it shall index a single string from the list specified (§[II.23.1.3](#todo-missing-hyperlink)) \[ERROR\]

 8. _HashValue_ can be null or non-null

 9. If non-null, then _HashValue_ shall index a non-empty 'blob' in the Blob heap \[ERROR\]

 10. The _AssemblyRef_ table shall contain no duplicates (where duplicate rows are deemed to be those having the same _MajorVersion_, _MinorVersion_, _BuildNumber_, _RevisionNumber_, _PublicKeyOrToken_, _Name_, and _Culture_) \[WARNING\]

_[Note:_ _Name_ is a simple name (e.g., "Foo", with no drive letter, no path, and no file extension); on POSIX-compliant systems Name contains no colon, no forward-slash, no backslash, and no period. _end note]_

> _End informative text._
