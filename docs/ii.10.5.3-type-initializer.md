## II.10.5.3 Type initializer

A type (class, interface, or value type) can contain a special method called a *type initializer*, which is used to initialize the type itself. This method shall be static, take no parameters, return no value, be marked with **rtspecialname** and **specialname** (§[II.15.4.2.6](ii.15.4.2.6-special-handling-attributes.md)), and be named `.cctor`.

Like instance constructors, type initializers can write into static fields of their type that are marked with the **initonly** attribute (§[II.16.1.2](ii.16.1.2-field-contract-attributes.md)).

_[Example:_ The following shows the definition of a type initializer:

 ```ilasm
 .class public EngineeringData extends [mscorlib]System.Object
 {
 .field private static initonly float64[] coefficient
 .method private specialname rtspecialname static void .cctor() cil managed
   {
   .maxstack 1 

  // allocate array of 4 Double
   ldc.i4.4
   newarr     [mscorlib]System.Double
   // point initonly field to new array
   stsfld     float64[] EngineeringData::coefficient
   // code to initialize array elements goes here
   ret
   }
 }
 ```

_end example]_

_[Note:_ Type initializers are often simple methods that initialize the type's static fields from stored constants or via simple computations. There are, however, no limitations on what code is permitted in a type initializer. _end note]_
