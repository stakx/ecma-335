## II.10.1.7 Generic parameters (GenPars)

Generic parameters are included when defining a generic type.

 | _GenPars_ ::=
 | ----
 | _GenPar_ [ `','` _GenPars_ ]

The _GenPar_ non-terminal has the following production:

 | _GenPar_ ::=
 | ----
 | [ _GenParAttribs_ ]* [ `'('` [ _GenConstraints_ ] `')'` ] _Id_
 
 | _GenParAttribs_ ::=
 | ----
 | `'+'` \| `'-'` \| `class` \| `valuetype` \| `.ctor`

**`+`** denotes a covariant generic parameter (§[II.9.5](ii.9.5-generics-variance.md)).

**`-`** denotes a contravariant generic parameter (§[II.9.5](ii.9.5-generics-variance.md)).

**class** is a special-purpose constraint that constrains _Id_ to being a reference type. _[Note:_ This includes type parameters which are themselves constrained to be reference types through a class or base type constraint. _end note]_

**valuetype** is a special-purpose constraint that constrains _Id_ to being a value type, except that that type shall not be `System.Nullable<T>` or any concrete closed type of `System.Nullable<T>`. _[Note:_ This includes type parameters which are themselves constrained to be value types. _end note]_

**.ctor** is a special-purpose constraint that constrains _Id_ to being a concrete reference type (i.e., not abstract) that has a public constructor taking no arguments (the default constructor), or to being a value type. _[Note:_ This includes type parameters which are, themselves, constrained either to be concrete reference types, or to being a value type. _end note]_

**class** and **valuetype** shall not both be specified for the same _Id_.

_[Example:_

 ```ilasm
 .class C< + class .ctor (class System.IComparable`1<!0>) T > { … }
 ```

This declares a generic class `C<T>`, which has a covariant generic parameter named `T`. `T` is constrained such that it must implement ``System.IComparable`1<T>``, and must be a concrete class with a public default constructor. _end example]_

Finally, the _GenConstraints_ non-terminal has the following production: 

 | _GenConstraints_ ::=
 | ----
 | _Type_ [ `','` _GenConstraints_ ]

There shall be no duplicates of _Id_ in the _GenPars_ production.

_[Example:_ Given appropriate definitions for interfaces `I1` and `I2`, and for class `Base`, the following code defines a class `Dict` that has two generic parameters, `K` and `V`, where `K` is constrained to implement both interfaces `I1` and `I2`, and `V` is constrained to derive from class `Base`:

 ```ilasm
 .class Dict`2<(I1,I2)K, (Base)V> { … }
 ```

_end example]_

The following table shows the valid combinations of type and special constraints for a representative set of types. The first set of rows (Type Constraint `System.Object`) applies either when no base class constraint is specified or when the base class constraint is `System.Object`. The symbol &check; means "set", the symbol &cross; means "not set", and the symbol * means "either set or not set" or "don't care".
 
 | Type Constraint | Special Constraint | | | Meaning
 | ---- | ---- | ---- | ---- | ----
 | | **class** | **valuetype** | **.ctor**
 | (`System.Object`) | &cross; | &cross; | &cross; | Any type
 | | &check; | &cross; | &cross; | Any reference type
 | | &check; | &cross; | &check; | Any reference type having a default constructor
 | | &cross; | &check; | * | Any value type except `System.Nullable<T>`
 | | &cross; | &cross; | &check; | Any type with a public default constructor
 | | &check; | &check; | * | Invalid
 | `System.ValueType` | &cross; | &cross; | &check; | Any value type including `System.Nullable<T>`
 | | &cross; | &check; | * | Any value type except `System.Nullable<T>`
 | | &cross; | &cross; | &cross; | Any value type and `System.ValueType`, and `System.Enum`
 | | &check; | &cross; | &cross; | `System.ValueType` and `System.Enum` only
 | | &check; | &cross; | &check; | Not meaningful: Cannot be instantiated (no instantiable reference type can be derived from `System.ValueType`)
 | | &check; | &check; | * | Invalid
 | `System.Enum`  | &cross; | &cross; | &check; | Any enum type
 | | &cross; | &check; | * |
 | | &cross; | &cross; | &cross; | Any enum type and `System.Enum`
 | | &check; | &cross; | &cross; | `System.Enum` only
 | | &check; | &cross; | &check; | Not meaningful: Cannot be instantiated (no instantiable reference type can be derived from `System.Enum`)
 | | &check; | &check; | * | Invalid
 | `System.Exception` (an example of any non-special reference Type) | &cross; | &cross; | &cross; | `System.Exception`, or any class derived from `System.Exception`
 | | &cross; | &cross; | &check; | Any `System.Exception` with a public default constructor
 | | &check; | &cross; | &cross; | `System.Exception`, or any class derived from `System.Exception`. This is exactly the same result as if the class constraint was not specified
 | | &check; | &cross; | &check; | Any `Exception` with a public default constructor.
 | | &cross; | &check; | * | Not meaningful: Cannot be instantiated (a value type cannot be derived from a reference type)
 | | &check; | &check; | * | Invalid
 | `System.Delegate` | &cross; | &cross; | &cross; | `System.Delegate`, or any class derived from `System.Delegate`
 | | &cross; | &cross; | &check; | Not meaningful: Cannot be instantiated (there is no default constructor)
 | | &check; | &cross; | &cross; | `System.Delegate`, or any class derived from `System.Delegate`
 | | &check; | &cross; | &check; | Any `Delegate` with a public .ctor. Invalid for known delegates (`System.Delegate`)
 | | &cross; | &check; | * | Not meaningful: Cannot be instantiated (a value type cannot be derived from a reference type)
 | | &check; | &check; | * | Invalid
 | `System.Array` | &cross; | &cross; | &cross; | Any array
 | | * | &cross; | &check; | Not meaningful: Cannot be instantiated (no default constructor)
 | | &check; | &cross; | &cross; | Any array
 | | &cross; | &check; | * | Not meaningful: Cannot be instantiated (a value type cannot be derived from a reference type)
 | | &check; | &check; | * | Invalid
 
_[Example:_ The following instantiations are allowed or disallowed, based on the constraint. In all of these instances, the declaration itself is allowed. Items marked Invalid indicate where the attempt to instantiate the specified type fails verification, while those marked Valid do not.

 ```ilasm
 .class public auto ansi beforefieldinit Bar`1<valuetype T>
 ```

 | &nbsp; | &nbsp;
 | ---- | ----
 | Valid | ``ldtoken  class Bar`1<int32>``
 | Invalid | ``ldtoken  class Bar`1<class [mscorlib]System.Exception>``
 | Invalid | ``ldtoken  class Bar`1<Nullable`1<int32>>``
 | Invalid | ``ldtoken  class Bar`1<class [mscorlib]System.ValueType>``

 ```ilasm
 .class public auto ansi beforefieldinit 'Bar`1'<class T>
 ```

 | &nbsp; | &nbsp;
 | ---- | ----
 | Invalid | ``ldtoken  class Bar`1<int32>``
 | Valid | ``ldtoken  class Bar`1<class [mscorlib]System.Exception>``
 | Invalid | ``ldtoken  class Bar`1<valuetype [mscorlib]System.Nullable`1<int32>>``
 | Valid | ``ldtoken  class Bar`1<class [mscorlib]System.ValueType>``

 ```ilasm
 .class public auto ansi beforefieldinit Bar`1<(class  [mscorlib]System.ValueType) T>
 ```

 | &nbsp; | &nbsp;
 | ---- | ----
 | Valid | ``ldtoken  class Bar`1<int32>``
 | Invalid | ``ldtoken  class Bar`1<class [mscorlib]System.Exception>``
 | Valid | ``ldtoken  class Bar`1<valuetype [mscorlib]System.Nullable`1<int32>>``
 | Valid | ``ldtoken  class Bar`1<class [mscorlib]System.ValueType>``

 ```ilasm
 .class public auto ansi beforefieldinit Bar`1<class (int32)> T>
 ```

 | &nbsp; | &nbsp;
 | ---- | ----
 | Invalid | ``ldtoken  class Bar`1<int32>``
 | Invalid | ``ldtoken  class Bar`1<class [mscorlib]System.Exception>``
 | Invalid | ``ldtoken  class Bar`1<valuetype [mscorlib]System.Nullable`1<int32>>``
 | Invalid | ``ldtoken  class Bar`1<class [mscorlib]System.ValueType>``

Note: This type cannot be instantiated as no reference type can extend `int32`

 ```ilasm
 .class public auto ansi beforefieldinit Bar`1<valuetype (class [mscorlib]System.Exception)> T>
 ```

 | &nbsp; | &nbsp;
 | ---- | ----
 | Invalid | ``ldtoken  class Bar`1<int32>``
 | Invalid | ``ldtoken  class Bar`1<class [mscorlib]System.Exception>``
 | Invalid | ``ldtoken  class Bar`1<valuetype [mscorlib]System.Nullable`1<int32>>``
 | Invalid | ``ldtoken  class Bar`1<class [mscorlib]System.ValueType>``

Note: This type cannot be instantiated as no value type can extend `System.Exception`

 ```ilasm
 .class public auto ansi beforefieldinit Bar`1<.ctor (class Foo) T>
 ```

where Foo has no public .ctor, but `FooBar`, which derives from `Foo`, has a public .ctor:

 | &nbsp; | &nbsp;
 | ---- | ----
 | Invalid | ``ldtoken  class Bar`1<class Foo>``
 | Valid | ``ldtoken  class Bar`1<class FooBar>``

_end example]_
