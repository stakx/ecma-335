## II.14.3 Enums

An *enum* (short for *enumeration*) defines a set of symbols that all have the same type. A type shall be an enum if and only if it has an immediate base type of `System.Enum`.  Since `System.Enum` itself has an immediate base type of `System.ValueType`, (see [Partition IV](#todo-missing-hyperlink)) enums are value types (§[II.13](ii.13-semantics-of-value-types.md)) The symbols of an enum are represented by an *underlying* integer type: one of { `bool`, `char`, `int8`, `unsigned int8`, `int16`, `unsigned int16`, `int32`, `unsigned int32`, `int64`, `unsigned int64`, `native int`, `unsigned native int` }

_[Note:_ Unlike Pascal, the CLI does *not* provide a guarantee that values of the enum type are integers corresponding to one of the symbols. In fact, the CLS (see [Partition I](#todo-missing-hyperlink), CLS) defines a convention for using enums to represent bit flags which can be combined to form integral value that are not named by the enum type itself. _end note]_

Enums obey additional restrictions beyond those on other value types. Enums shall contain only fields as members (they shall not even define type initializers or instance constructors); they shall not implement any interfaces; they shall have auto field layout (§[II.10.1.2](#todo-missing-hyperlink)); they shall have exactly one instance field and it shall be of the underlying type of the enum; all other fields shall be static and literal (§[II.16.1](#todo-missing-hyperlink)); and they shall not be initialized with the `initobj` instruction.

_[Rationale:_ These restrictions allow a very efficient implementation of enums. _end rationale]_

The single, required, instance field stores the value of an instance of the enum. The static literal fields of an enum declare the mapping of the symbols of the enum to the underlying values. All of these fields shall have the type of the enum and shall have field init metadata that assigns them a value (§[II.16.2](#todo-missing-hyperlink)).

For binding purposes (e.g., for locating a method definition from the method reference used to call it) enums shall be distinct from their underlying type.  For all other purposes, including verification and execution of code, an unboxed enum freely interconverts with its underlying type.  Enums can be boxed (§[II.13](ii.13-semantics-of-value-types.md)) to a corresponding boxed instance type, but this type is *not* the same as the boxed type of the underlying type, so boxing does not lose the original type of the enum.

_[Example:_ Declare an enum type and then create a local variable of that type. Store a constant of the underlying type into the enum (showing automatic coersion from the underlying type to the enum type). Load the enum back and print it as the underlying type (showing automatic coersion back). Finally, load the address of the enum and extract the contents of the instance field and print that out as well.

 ```ilasm
 assembly Test { }
 .assembly extern mscorlib { }

 .class sealed public ErrorCodes extends [mscorlib]System.Enum
 { .field public unsigned int8 MyValue
   .field public static literal valuetype ErrorCodes no_error = int8(0)
   .field public static literal valuetype ErrorCodes format_error = int8(1)
   .field public static literal valuetype ErrorCodes overflow_error = int8(2)
   .field public static literal valuetype ErrorCodes nonpositive_error = int8(3)
 }

 .method public static void Start()
 { .maxstack 5
   .entrypoint
   .locals init (valuetype ErrorCodes errorCode)

   ldc.i4.1           // load 1 (= format_error)
   stloc errorCode    // store in local, note conversion to enum
   ldloc errorCode
   call void [mscorlib]System.Console::WriteLine(int32)
   ldloca errorCode   // address of enum
   ldfld unsigned int8 valuetype ErrorCodes::MyValue
   call void [mscorlib]System.Console::WriteLine(int32)
   ret
 }
 ```

_end example]_
