## II.22.28 MethodSemantics: 0x18

The _MethodSemantics_ table has the following columns:

 * _Semantics_ (a 2-byte bitmask of type _MethodSemanticsAttributes_, §[II.23.1.12](#todo-missing-hyperlink))

 * _Method_ (an index into the _MethodDef_ table)

 * _Association_ (an index into the _Event_ or _Property_ table; more precisely, a _HasSemantics_ (§[II.24.2.6](#todo-missing-hyperlink)) coded index)

The rows of the _MethodSemantics_ table are filled by **.property** (§[II.17](#todo-missing-hyperlink)) and **.event** directives (§[II.18](#todo-missing-hyperlink)). (See §[II.22.13](#todo-missing-hyperlink) for more information.)

> _This contains informative text only._

 1. _MethodSemantics_ table can contain zero or more rows

 2. _Semantics_ shall have only those values set that are specified \[ERROR\]

 3. _Method_ shall index a valid row in the _MethodDef_ table, and that row shall be for a method defined on the same class as the Property or Event this row describes  \[ERROR\]

 4. All methods for a given Property or Event shall have the same accessibility (ie the `MemberAccessMask` subfield of their _Flags_ row) and cannot be `CompilerControlled` \[CLS\]

 5. _Semantics_: constrained as follows:

     * If this row is for a Property, then exactly one of `Setter`, `Getter`, or `Other` shall be set \[ERROR\]

     * If this row is for an Event, then exactly one of `AddOn`, `RemoveOn`, `Fire`, or `Other` shall be set \[ERROR\]

 6. If this row is for an Event, and its _Semantics_ is `Addon` or `RemoveOn`, then the row in the _MethodDef_ table indexed by _Method_ shall take a Delegate as a parameter, and return `void` \[ERROR\]

 7. If this row is for an Event, and its _Semantics_ is `Fire`, then the row indexed in the _MethodDef_ table by _Method_ can return any type

 8. For each property, there shall be a setter, or a getter, or both \[CLS\]

 9. Any getter method for a property whose _Name_ is `xxx` shall be called `get_xxx` \[CLS\]

 10. Any setter method for a property whose _Name_ is `xxx` shall be called `set_xxx` \[CLS\]

 11. If a property provides both getter and setter methods, then these methods shall have the same value in the _Flags_.`MemberAccessMask` subfield \[CLS]

 12. If a property provides both getter and setter methods, then these methods shall have the same value for their _Method_._Flags_.`Virtual` \[CLS\]

 13. Any getter and setter methods shall have _Method_._Flags_.`SpecialName` = 1 \[CLS\]

 14. Any getter method shall have a return type which matches the signature indexed by the _Property_._Type_ field \[CLS\]

 15. The last parameter for any setter method shall have a type which matches the signature indexed by the _Property_._Type_ field \[CLS\]

 16. Any setter method shall have return type `ELEMENT_TYPE_VOID` (§[II.23.1.16](#todo-missing-hyperlink)) in _Method_._Signature_ \[CLS\]

 17. If the property is indexed, the indexes for getter and setter shall agree in number and type \[CLS\]

 18. Any *AddOn* method for an event whose _Name_ is `xxx` shall have the signature: `void add_xxx (`\<DelegateType\>`handler)` (§[I.10.4](#todo-missing-hyperlink)) \[CLS\]

 19. Any *RemoveOn* method for an event whose _Name_ is `xxx` shall have the signature: `void remove_xxx(`\<DelegateType\>` handler)` (§[I.10.4](#todo-missing-hyperlink)) \[CLS\]

 20. Any *Fire* method for an event whose _Name_ is `xxx` shall have the signature: `void raise_xxx(Event e)` (§[I.10.4](#todo-missing-hyperlink)) \[CLS\]

> _End informative text._
