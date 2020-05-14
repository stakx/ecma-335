## I.8.2 Values and types

Types describe *values*. Any value described by a type is called an *instance* of that type. Any use of a value&mdash;storing it, passing it as an argument, operating on it&mdash;requires a type. This applies in particular to all variables, arguments, evaluation stack locations, and method results. The type defines the allowable values and the allowable operations supported by the values of the type. All operators and functions have expected types for each of the values accessed or used.

Every value has an exact type that fully describes its type properties. Every value is an instance of its exact type, and can be an instance of other types as well. In particular, if a value is an instance of a type that inherits from another type, it is also an instance of that other type.
