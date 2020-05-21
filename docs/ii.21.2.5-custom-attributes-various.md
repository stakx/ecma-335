## II.21.2.5 Custom attributes, various

The following custom attributes control various aspects of the CLI:

 | Attribute | Namespace | Description
 | ---- | ---- | ----
 | `ConditionalAttribute` | `System.Diagnostics` | Used to mark methods as callable, based on some compile-time condition. If the condition is false, the method will not be called
 | `DecimalConstantAttribute` | `System.Runtime.CompilerServices` | Stores the value of a decimal constant in metadata
 | `DefaultMemberAttribute` | `System.Reflection` | Defines the member of a type that is the default member used by reflection's `InvokeMember`.
 | `CompilationRelaxationsAttribute` | `System.Runtime.CompilerServices` | Indicates whether exceptions from instruction checks are strict or relaxed.
 | `FlagsAttribute` | `System` | Custom attribute indicating an enumeration should be treated as a bitfield; that is, a set of flags
 | `IndexerNameAttribute` | `System.Runtime.CompilerServices` | Indicates the name by which a property having one or more parameters will be known in programming languages that do not support such a facility directly
 | `ParamArrayAttribute` | `System` | Indicates that the method will allow a variable number of arguments in its invocation
