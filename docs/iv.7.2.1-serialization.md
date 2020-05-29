## IV.7.2.1 Serialization

As shown in the ILAsm signatures, many of the types in the standard library have the predefined attribute **serializable** attached. A type that is marked with this attribute is to be serialized as part of the persistent state of a value of the type. This standard does not require that a conforming implementation provide support for serialization (or its counterpart, deserialization), nor does it specify the mechanism by which these operations might be accomplished.

Consider the ILAsm and C# signatures in the XML for `System.String`:

 ```
 [ILAsm]
 .class public sealed serializable String …

 [C#]
 public sealed class String …
 ```

Although the C# standard does not address the issue of serialization, if this library type is written in C#, when the C# declaration above is compiled, the intent is that the code generated for the class contains the **serializable** attribute as shown. _[Note:_ Some implementations provide an attribute type, `System.SerializableAttribute`, for this purpose. _end note]_
