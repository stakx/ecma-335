## II.22.26 MethodDef: 0x06

The _MethodDef_ table has the following columns:

 * _RVA_ (a 4-byte constant)

 * _ImplFlags_ (a 2-byte bitmask of type _MethodImplAttributes_, §[II.23.1.11](ii.23.1.11-flags-for-methods-methodimplattributes.md))

 * _Flags_ (a 2-byte bitmask of type _MethodAttributes_, §[II.23.1.10](ii.23.1.10-flags-for-methods-methodattributes.md))

 * _Name_ (an index into the String heap)

 * _Signature_ (an index into the Blob heap)

 * _ParamList_ (an index into the Param table). It marks the first of a contiguous run of Parameters owned by this method. The run continues to the smaller of:

     * the last row of the _Param_ table

     * the next run of Parameters, found by inspecting the _ParamList_ of the next row in the _MethodDef_ table

Conceptually, every row in the _MethodDef_ table is owned by one, and only one, row in the _TypeDef_ table.

The rows in the _MethodDef_ table result from **.method** directives (§[II.15](ii.15-defining-referencing-and-calling-methods.md)). The RVA column is computed when the image for the PE file is emitted and points to the `COR_ILMETHOD` structure for the body of the method (§[II.25.4](ii.25.4-common-intermediate-language-physical-layout.md))

_[Note:_ If _Signature_ is `GENERIC` (0x10), the generic arguments are described in the _GenericParam_ table (§[II.22.20](ii.22.20-genericparam-0x2a.md)). _end note]_

> _This contains informative text only._

 1. The _MethodDef_ table can contain zero or more rows

 2. Each row shall have one, and only one, owner row in the _TypeDef_ table \[ERROR\]

 3. _ImplFlags_ shall have only those values set that are specified \[ERROR\]

 4. _Flags_ shall have only those values set that are specified \[ERROR\]

 5. If _Name_ is `.ctor` and the method is marked `SpecialName`, there shall not be a row in the _GenericParam_ table which has this _MethodDef_ as its owner. \[ERROR\]

 6. The `MemberAccessMask` (§[II.23.1.10](ii.23.1.10-flags-for-methods-methodattributes.md)) subfield of _Flags_ shall contain precisely one of `CompilerControlled`, `Private`, `FamANDAssem`, `Assem`, `Family`, `FamORAssem`, or `Public` \[ERROR\]

 7. The following combined bit settings in _Flags_ are invalid \[ERROR\]

     1. `Static` | `Final`

     2. `Static` | `Virtual`

     3. `Static` | `NewSlot`

     4. `Final` | `Abstract`

     5. `Abstract` | `PinvokeImpl`

     6. `CompilerControlled` | `SpecialName`

     7. `CompilerControlled` | `RTSpecialName`

 8. An abstract method shall be virtual. So, if _Flags_.`Abstract` = 1 then _Flags_.`Virtual` shall also be 1 \[ERROR\]

 9. If _Flags_.`RTSpecialName` = 1 then _Flags_.`SpecialName` shall also be 1 \[ERROR\]

 10. If _Flags_.`HasSecurity` = 1, then at least one of the following conditions shall be true: \[ERROR\]

     * this Method owns at least row in the _DeclSecurity_ table

     * this Method has a custom attribute called `SuppressUnmanagedCodeSecurityAttribute`

 11. If this Method owns one (or more) rows in the _DeclSecurity_ table then _Flags_.`HasSecurity` shall be 1 \[ERROR\]

 12. If this Method has a custom attribute called `SuppressUnmanagedCodeSecurityAttribute` then _Flags_.`HasSecurity` shall be 1 \[ERROR\]

 13. A Method can have a custom attribute called `DynamicSecurityMethodAttribute`, but this has no effect whatsoever upon the value of its _Flags_.`HasSecurity`

 14. _Name_ shall index a non-empty string in the String heap \[ERROR\]

 15. Interfaces cannot have instance constructors. So, if this Method is owned by an Interface, then its _Name_ cannot be `.ctor` \[ERROR\]

 16. The _Name_ string shall be a valid CLS identifier (unless _Flags_.`RTSpecialName` is set - for example, `.cctor` is valid) \[CLS\]

 17. _Signature_ shall index a valid method signature in the Blob heap  \[ERROR\]

 18. If _Flags_.`CompilerControlled` = 1, then this row is ignored completely in duplicate checking

 19. If the owner of this method is the internally-generated type called `<Module>`, it denotes that this method is defined at module scope. _[Note:_ In C++, the method is called global and can be referenced only within its compilation unit, from its point of declaration forwards. _end note]_ In this case:

     1. _Flags_.`Static` shall be 1 \[ERROR\]

     2. _Flags_.`Abstract` shall be 0 \[ERROR\]

     3. _Flags_.`Virtual` shall be 0 \[ERROR\]

     4. _Flags_.`MemberAccessMask` subfield shall be one of `CompilerControlled`, `Public`, or `Private` \[ERROR\]

     5. module-scope methods are not allowed \[CLS\]

 20. It makes no sense for ValueTypes, which have no identity, to have synchronized methods (unless they are boxed). So, if the owner of this method is a ValueType then the method cannot be synchronized. That is, _ImplFlags_.`Synchronized` shall be 0 \[ERROR\]

 21. There shall be no duplicate rows in the _MethodDef_ table, based upon owner + _Name_ + _Signature_ (where owner is the owning row in the _TypeDef_ table). (Note that the _Signature_ encodes whether or not the method is generic, and for generic methods, it encodes the number of generic parameters.)  (Note, however, that if _Flags_.`CompilerControlled` = 1, then this row is excluded from duplicate checking) \[ERROR\]

 22. There shall be no duplicate rows in the _MethodDef_ table, based upon owner + _Name_ + _Signature_, where _Name_ fields are compared using CLS conflicting-identifierrules; also, the Type defined in the signatures shall be different. So, for example, `int i` and `float i` would be considered CLS duplicates; also, the return type of the method is ignored (Note, however, that if _Flags_.`CompilerControlled` = 1, this row is excluded from duplicate checking as explained above.) \[CLS\]

 23. If `Final`, `NewSlot`, or `Strict` are set in _Flags_, then _Flags_.`Virtual` shall also be set \[ERROR\]

 24. If _Flags_.`PInvokeImpl` is set, then _Flags_.`Virtual` shall be 0 \[ERROR\]

 25. If _Flags_.`Abstract` &ne; 1 then exactly one of the following shall also be true: \[ERROR\]

     * RVA &ne; 0

     * _Flags_.`PInvokeImpl` = 1

     * _ImplFlags_.`Runtime` = 1

 26. If the method is `CompilerControlled`, then the RVA shall be non-zero or marked with `PinvokeImpl` = 1 \[ERROR\]

 27. _Signature_ shall have exactly one of the following managed calling conventions \[ERROR\]

     1. `DEFAULT` (0x0)

     2. `VARARG` (0x5)

     3. `GENERIC` (0x10)

 28. _Signature_ shall have the calling convention `DEFAULT` (0x0) or `GENERIC` (0x10). \[CLS\]

 29. _Signature_: If and only if the method is not `Static` then the calling convention byte in _Signature_ has its `HASTHIS` (0x20) bit set \[ERROR\]

 30. _Signature_: If the method is `static`, then the `HASTHIS` (0x20) bit in the calling convention shall be 0  \[ERROR\]

 31. If `EXPLICITTHIS` (0x40) in the signature is set, then `HASTHIS` (0x20) shall also be set (note that if `EXPLICITTHIS` is set, then the code is not verifiable) \[ERROR\]

 32. The `EXPLICITTHIS` (0x40) bit can be set only in signatures for function pointers: signatures whose MethodDefSig is preceded by `FNPTR` (0x1B) \[ERROR\]

 33. If _RVA_ = 0, then either: \[ERROR\]

     * _Flags_.`Abstract` = 1, or

     * _ImplFlags_.`Runtime` = 1, or

     * _Flags_.`PinvokeImpl` = 1, or

 34. If _RVA_ &ne; 0, then: \[ERROR\]

     1. _Flags_.`Abstract` shall be 0, and

     2. _ImplFlags_.`CodeTypeMask` shall have exactly one of the following values: `Native`, `CIL`, or `Runtime`, and

     3. _RVA_ shall point into the CIL code stream in this file

 35. If _Flags_.`PinvokeImpl` = 1 then  \[ERROR\]

     * _RVA_ = 0 and the method owns a row in the _ImplMap_ table

 36. If _Flags_.`RTSpecialName` = 1 then _Name_ shall be one of: \[ERROR\]

     1. `.ctor` (an object constructor method)

     2. `.cctor` (a class constructor method)

 37. Conversely, if _Name_ is any of the above special names then _Flags_.`RTSpecialName` shall be set \[ERROR\]

 38. If _Name_ = `.ctor` (an object constructor method) then:

     1. return type in _Signature_ shall be `ELEMENT_TYPE_VOID` (§[II.23.1.16](ii.23.1.16-element-types-used-in-signatures.md)) \[ERROR\]

     2. _Flags_.`Static` shall be 0  \[ERROR\]

     3. _Flags_.`Abstract` shall be 0  \[ERROR\]

     4. _Flags_.`Virtual` shall be \[ERROR\]

     5. 'Owner' type shall be a valid Class or ValueType (not `<Module>` and not an Interface) in the _TypeDef_ table \[ERROR\]

     6. there can be zero or more `.ctor`s for any given 'owner'

 39. If _Name_ = `.cctor` (a class constructor method) then:

     1. the return type in _Signature_ shall be `ELEMENT_TYPE_VOID` (§[II.23.1.16](ii.23.1.16-element-types-used-in-signatures.md)) \[ERROR\]

     2. _Signature_ shall have `DEFAULT` (0x0) for its calling convention \[ERROR\]

     3. there shall be no parameters supplied in _Signature_ \[ERROR\]

     4. _Flags_.`Static` shall be set  \[ERROR\]

     5. _Flags_.`Virtual` shall be clear \[ERROR\]

     6. _Flags_.`Abstract` shall be clear \[ERROR\]

 40. Among the set of methods owned by any given row in the _TypeDef_ table there can only be 0 or 1 methods named `.cctor` \[ERROR\]

> _End informative text._
