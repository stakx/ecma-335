## II.21 Custom attributes

Custom attributes add user-defined annotations to the metadata. Custom attributes allow an instance of a type to be stored with any element of the metadata. This mechanism can be used to store applicationspecific information at compile time, and to access it either at runtime or when another tool reads the metadata. While any user-defined type can be used as an attribute, CLS compliance requires that attributes will be instances of types whose base class is `System.Attribute`. The CLI predefines some attribute types and uses them to control runtime behavior. Some languages predefine attribute types to represent language features not directly represented in the CTS. Users or other tools are welcome to define and use additional attribute types.

Custom attributes are declared using the directive **.custom**, followed by the method declaration for a type constructor, optionally followed by a _Bytes_ in parentheses:

 | _CustomDecl_ ::=
 | ----
 | _Ctor_ [ `'='` `'('` _Bytes_ `')'` ]

The _Ctor_ item represents a method declaration (§[II.15.4](ii.15.4-defining-methods.md)), specific for the case where the method's name is `.ctor`. _[Example:_

 ```ilasm
 custom instance void myAttribute::.ctor(bool, bool) = ( 01 00 00 01 00 00 )
 ```

_end example]_

Custom attributes can be attached to any item in metadata, except a custom attribute itself. Commonly, custom attributes are attached to assemblies, modules, classes, interfaces, value types, methods, fields, properties, generic parameters, and events (the custom attribute is attached to the immediately preceding declaration)

The _Bytes_ item is not required if the constructor takes no arguments. In such cases, all that matters is the presence of the custom attribute.

If the constructor takes parameters, their values shall be specified in the _Bytes_ item. The format for this ‘blob’ is defined in §[II.23.3](ii.23.3-custom-attributes.md).

_[Example:_ The following shows a class that is marked with the attribute called `System.CLSCompliantAttribute` and a method that is marked with the attribute called `System.ObsoleteAttribute`.

 ```ilasm
 class public MyClass extends [mscorlib]System.Object
 { .custom instance void [mscorlib]System.CLSCompliantAttribute::.ctor(bool) =
     ( 01 00 01 00 00 )
   .method public static void CalculateTotals() cil managed
 { .custom instance void [mscorlib]System.ObsoleteAttribute::.ctor() =
     ( 01 00 00 00 )
   ret
 }
 ```

_end example]_
