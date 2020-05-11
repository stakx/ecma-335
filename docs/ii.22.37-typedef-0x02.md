## II.22.37 TypeDef: 0x02

The _TypeDef_ table has the following columns: 

 * _Flags_ (a 4-byte bitmask of type _TypeAttributes_, §[II.23.1.15](#todo-missing-hyperlink))

 * _TypeName_ (an index into the String heap)
 
 * _TypeNamespace_ (an index into the String heap)
 
 * _Extends_ (an index into the _TypeDef_, _TypeRef_, or _TypeSpec_ table; more precisely, a _TypeDefOrRef_ (§[II.24.2.6](#todo-missing-hyperlink)) coded index)

 * _FieldList_ (an index into the _Field_ table; it marks the first of a contiguous run of Fields owned by this Type). The run continues to the smaller of:

   * the last row of the _Field_ table

   * the next run of Fields, found by inspecting the _FieldList_ of the next row in this _TypeDef_ table

 * _MethodList_ (an index into the _MethodDef_ table; it marks the first of a continguous run of Methods owned by this Type). The run continues to the smaller of:

   * the last row of the _MethodDef_ table

   * the next run of Methods, found by inspecting the _MethodList_ of the next row in this _TypeDef_ table

   The first row of the _TypeDef_ table represents the pseudo class that acts as parent for functions and variables defined at module scope.

Note that any type shall be one, and only one, of

 * Class (_Flags_._Interface_ = 0, and derives ultimately from `System.Object`)

 * Interface (_Flags_._Interface_ = 1)

 * Value type, derived ultimately from `System.ValueType`

For any given type, there are two separate and distinct chains of pointers to other types (the pointers are actually implemented as indexes into metadata tables). The two chains are:

 * Extension chain &ndash; defined via the _Extends_ column of the _TypeDef_ table. Typically, a derived Class extends a base Class (always one, and only one, base Class)

 * Interface chains &ndash; defined via the _InterfaceImpl_ table. Typically, a Class implements zero, one or more Interfaces

These two chains (extension and interface) are always kept separate in metadata. The _Extends_ chain represents one-to-one relations&mdash;that is, one Class extends (or 'derives from') exactly one other Class (called its immediate base class). The _Interface_ chains can represent one-to-many relations&mdash;that is, one Class might well implement two or more Interfaces.

An interface can also implement one or more other interfaces&mdash;metadata stores those links via the _InterfaceImpl_ table (the nomenclature is a little inappropriate here&mdash;there is no "implementation" involved; perhaps a clearer name might have been _Interface_ table, or _InterfaceInherit_ table)

Another slightly specialized type is a *nested* type which is declared in ILAsm as lexically nested within an enclosing type declaration. Whether a type is nested can be determined by the value of its _Flags_._Visibility_ sub-field &ndash; it shall be one of the set {_NestedPublic_, _NestedPrivate_, _NestedFamily_, _NestedAssembly_, _NestedFamANDAssem_, _NestedFamORAssem_}.

If a type is generic, its parameters are defined in the _GenericParam_ table (§[II.22.20](#todo-missing-hyperlink)). Entries in the _GenericParam_ table reference entries in the _TypeDef_ table; there is no reference from the _TypeDef_ table to the _GenericParam_ table. 

> _This contains informative text only._

The roots of the inheritance hierarchies look like this: 

 ![Roots of the inheritance hierarchies](ii.22.37-typedef-0x02-figure-1.png)

There is one system-defined root, `System.Object`. All Classes and ValueTypes shall derive, ultimately, from `System.Object`; Classes can derive from other Classes (through a single, non-looping chain) to any depth required. This _Extends_ inheritance chain is shown with heavy arrows.

(See below for details of the `System.Delegate` Class)

Interfaces do not inherit from one another; however, they can have zero or more required interfaces, which shall be implemented. The _Interface_ requirement chain is shown as light, dashed arrows. This includes links between Interfaces and Classes/ValueTypes &ndash; where the latter are said to *implement* that interface or interfaces. Regular ValueTypes (i.e., excluding Enums &mdash; see later) are defined as deriving directly from `System.ValueType`. Regular ValueTypes cannot be derived to a depth of more than one. (Another way to state this is that user-defined ValueTypes shall be *sealed*.) User-defined Enums shall derive directly from `System.Enum`. Enums cannot be derived to a depth of more than one below `System.Enum`.  (Another way to state this is that user-defined Enums shall be *sealed*.) `System.Enum` derives directly from `System.ValueType`.

User-defined delegates derive from `System.Delegate`. Delegates cannot be derived to a depth of more than one.

For the directives to declare types see §[II.9](#todo-missing-hyperlink).

 1. A _TypeDef_ table can contain one or more rows.

 2. _Flags:_

     1. _Flags_ shall have only those values set that are specified \[ERROR\]

     2. can set 0 or 1 of `SequentialLayout` and `ExplicitLayout` (if none set, then defaults to `AutoLayout`) \[ERROR\]

     3. can set 0 or 1 of `UnicodeClass` and `AutoClass` (if none set, then defaults to `AnsiClass`) \[ERROR\]

     4. If _Flags_.`HasSecurity` = 1, then at least one of the following conditions shall be true: \[ERROR]

        * this Type owns at least one row in the _DeclSecurity_ table

        * this Type has a custom attribute called `SuppressUnmanagedCodeSecurityAttribute`

     5. If this Type owns one (or more) rows in the _DeclSecurity_ table then _Flags_.`HasSecurity` shall be 1 \[ERROR\]

     6. If this Type has a custom attribute called `SuppressUnmanagedCodeSecurityAttribute` then _Flags_.`HasSecurity` shall be 1 \[ERROR\]

     7. Note that it is valid for an Interface to have `HasSecurity` set. However, the security system ignores any permission requests attached to that Interface

 3. _Name_ shall index a non-empty string in the String heap \[ERROR\]

 4. The _TypeName_ string shall be a valid CLS identifier \[CLS\]

 5. _TypeNamespace_ can be null or non-null

 6. If non-null, then _TypeNamespace_ shall index a non-empty string in the String heap \[ERROR\]

 7. If non-null, _TypeNamespace_'s string shall be a valid CLS Identifier \[CLS\]

 8. Every Class (with the exception of `System.Object` and the special class `<Module>`) shall extend one, and only one, other Class &ndash; so _Extends_ for a Class shall be non-null \[ERROR\]

 9. `System.Object` shall have an _Extends_ value of null [ERROR]

 10. `System.ValueType` shall have an _Extends_ value of `System.Object` \[ERROR\]

 11. With the exception of `System.Object` and the special class `<Module>`, for any Class, _Extends_ shall index a valid row in the _TypeDef_, _TypeRef_, or _TypeSpec_ table, where valid means 1 &le; row &le; rowcount. In addition, that row itself shall be a Class (not an Interface or ValueType) In addition, that base Class shall not be sealed (its _Flags_.`Sealed` shall be 0) \[ERROR\]

 12. A Class cannot extend itself, or any of its children (i.e., its derived Classes), since this would introduce loops in the hierarchy tree \[ERROR\] (For generic types, see §[II.9.1](#todo-missing-hyperlink) and §[II.9.2](#todo-missing-hyperlink).)

 13. An Interface never extends another Type &ndash; so _Extends_ shall be null (Interfaces do implement other Interfaces, but recall that this relationship is captured via the _InterfaceImpl_ table, rather than the _Extends_ column) \[ERROR\]

 14. _FieldList_ can be null or non-null

 15. A Class or Interface can 'own' zero or more fields

 16. A ValueType shall have a non-zero size &ndash; either by defining at least one field, or by providing a non-zero _ClassSize_ \[ERROR\]

 17. If _FieldList_ is non-null, it shall index a valid row in the _Field_ table, where valid means 1 &le; row &le; rowcount+1 \[ERROR\]

 18. _MethodList_ can be null or non-null

 19. A Type can 'own' zero or more methods

 20. The runtime size of a ValueType shall not exceed 1 MByte (0x100000 bytes) \[ERROR\]

 21. If _MethodList_ is non-null, it shall index a valid row in the _MethodDef_ table, where valid means 1 &le; row &le; rowcount+1 \[ERROR\]

 22. A Class which has one or more abstract methods cannot be instantiated, and shall have _Flags_.`Abstract` = 1. Note that the methods owned by the class include all of those inherited from its base class and interfaces it implements, plus those defined via its _MethodList_. (The CLI shall analyze class definitions at runtime; if it finds a class to have one or more abstract methods, but has _Flags_.`Abstract` = 0, it will throw an exception) \[ERROR\]

 23. An Interface shall have _Flags_.`Abstract` = 1 \[ERROR\]

 24. It is valid for an abstract Type to have a constructor method (ie, a method named `.ctor`)

 25. Any non-abstract Type (ie _Flags_.`Abstract` = 0) shall provide an implementation (body) for every method its contract requires. Its methods can be inherited from its base class, from the interfaces it implements, or defined by itself. The implementations can be inherited from its base class, or defined by itself \[ERROR\]

 26. An Interface (_Flags_.`Interface` = 1) can own static fields (_Field_.`Static` = 1) but cannot own instance fields (_Field_.`Static` = 0) \[ERROR\]

 27. An Interface cannot be sealed (if _Flags_.`Interface` = 1, then _Flags_.`Sealed` shall be 0) \[ERROR\]

 28. All of the methods owned by an Interface (_Flags_.`Interface` = 1) shall be abstract (_Flags_.`Abstract` = 1) \[ERROR\]

 29. There shall be no duplicate rows in the _TypeDef_ table, based on _TypeNamespace_+_TypeName_ (unless this is a nested type &ndash; see below) \[ERROR\]

 30. If this is a nested type, there shall be no duplicate row in the _TypeDef_ table, based upon _TypeNamespace_+_TypeName_+_OwnerRowInNestedClassTable_ \[ERROR\]

 31. There shall be no duplicate rows, where _TypeNamespace_+_TypeName_ fields are compared using CLS conflicting-identifier-rules (unless this is a nested type &ndash; see below) \[CLS\]

 32. If this is a nested type, there shall be no duplicate rows, based upon _TypeNamespace_+_TypeName_+_OwnerRowInNestedClassTable_ and where _TypeNamespace_+_TypeName_ fields are compared using CLS conflicting-identifier-rules \[CLS\]

 33. If _Extends_ = `System.Enum` (i.e., type is a user-defined Enum) then:

     1. shall be sealed (`Sealed` = 1) \[ERROR\]

     2. shall not have any methods of its own (_MethodList_ chain shall be zero length) \[ERROR\]

     3. shall not implement any interfaces (no entries in _InterfaceImpl_ table for this type) \[ERROR\]

     4. shall not have any properties \[ERROR\]

     5. shall not have any events \[ERROR\]

     6. any static fields shall be literal (have _Flags_.`Literal` = 1) \[ERROR\]

     7. shall have one or more static, literal fields, each of which has the type of the Enum \[CLS\]

     8. shall be exactly one instance field, of built-in integer type \[ERROR\]

     9. the _Name_ string of the instance field shall be "`value__`", the field shall be marked `RTSpecialName`, and that field shall have one of the CLS integer types \[CLS\]

     10. shall not have any static fields unless they are literal \[ERROR\]

 34. A Nested type (defined above) shall own exactly one row in the _NestedClass_ table, where 'owns' means a row in that _NestedClass_ table whose _NestedClass_ column holds the _TypeDef_ token for this type definition \[ERROR\]

 35. A ValueType shall be sealed \[ERROR\]

> _End informative text._
