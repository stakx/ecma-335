## II.10.1.3 Type semantics attributes

 | _ClassAttr_ ::= &hellip;
 | ----
 | \| `interface`
 
The type semantic attributes specify whether an interface, class, or value type shall be defined. The interface attribute specifies an interface. If this attribute is not present and the definition extends (directly or indirectly) `System.ValueType`, and the definition is not for `System.Enum`, a value type shall be defined (§[II.13](ii.13-semantics-of-value-types.md)). Otherwise, a class shall be defined (§[II.11](ii.11-semantics-of-classes.md)).

_[Example:_

 ```ilasm
 .class interface public abstract auto ansi 'System.IComparable' { … }
 ```

`System.IComparable` is an interface because the interface attribute is present.

 ```ilasm
 .class public sequential ansi serializable sealed beforefieldinit
     'System.Double' extends System.ValueType implements System.IComparable,
      … { … }
 ```

`System.Double` directly extends `System.ValueType`; `System.Double` is not the type `System.Enum`; so `System.Double` is a value type.

 ```ilasm
 .class public abstract auto ansi serializable beforefieldinit 'System.Enum'
     extends System.ValueType implements System.IComparable, … { … }
 ```

Although `System.Enum` directly extends `System.ValueType`, `System.Enum` is not a value type, so it is a class.

 ```ilasm
 .class public auto ansi serializable beforefieldinit 'System.Random'
     extends System.Object { … }
 ```

`System.Random` is a class because it is not an interface or a value type. _end example]_

Note that the runtime size of a value type shall not exceed 1 MByte (0x100000 bytes).
