## IV.7.2.4 Nested types

With one exception, the definitions of all members of any given type are contained in the XML for that type. The exception is for nested types. Nested types have their own definition in the XML, where their names are qualified by the name of the type in which they are nested. _[Example:_ The type `System.Collections.Generic.List<T>` contains the nested type `Enumerator`. These types are described in the BCL library of the XML under the names `List<T>` and `List<T>.Enumerator`, respectively. _end example]_
