## I.8.9.10 Value type inheritance

In their unboxed form value types do not inherit from any type. Boxed value types shall inherit directly from `System.ValueType` unless they are enumerations, in which case, they shall inherit from `System.Enum`. Boxed value types shall be sealed.

Logically, the boxed type corresponding to a value type

 * Is an object type.
 
 * Will specify which object type is its base type (i.e., the object type from which it inherits).

 * Will have a base type that has no fields defined.

 * Will be sealed to avoid dealing with the complications of value slicing.

The more restrictive rules specified here allow for more efficient implementation without severely compromising functionality.
