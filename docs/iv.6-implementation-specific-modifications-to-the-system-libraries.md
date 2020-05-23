## IV.6 Implementation-specific modifications to the system libraries

Implementers are encouraged to extend or modify the types specified in this Standard to provide additional functionality. Implementers should notice, however, that type names beginning with "`System.`" and bearing the special Standard Public Key are intended for use by the Standard Libraries: such names not currently in use might be defined in a future version of this Standard.

To allow programs compiled against the Standard Libraries to work when run on implementations that have extended or modified the Standard Libraries, such extensions or modifications shall obey the following rules:

 * The contract specified by virtual methods shall be maintained in new classes that override them.

 * New exceptions can be thrown, but where possible these should be derived classes of the exceptions already specified as thrown rather than entirely new exception types. Exceptions initiated by methods of types defined in the Standard Libraries shall be derived from `System.Exception`.

 * Interfaces and virtual methods shall not be added to an existing interface. Nor shall they be added to an abstract class unless that class provides an implementation.

   _[Rationale:_ An interface or virtual method can be added only where it carries an implementation. This allows programs written when the interface or method was not present to continue to work. _end rationale]_

 * Instance methods shall not be implemented as virtual methods.

   _[Rationale:_ Methods specified as instance (non-static, non-virtual) in this standard are not permitted to be implemented as virtual methods in order to reduce the likelihood of creating non-portable files by using implementation-supplied libraries at compile time. Even though a compiler need not take a dependence on the distinction between virtual and instance methods, it is easy for a user to inadvertently override a virtual method and thus create non-portable code. The alternative of providing special files corresponding to this Standard for use at compile time is prone to user error. _end rationale]_

 * The accessibility of fields and non-virtual methods can be widened from than specified in this Standard.

_[Note:_ The following common extensions are permitted by these rules.

 * Adding new members to existing types.

 * Concrete (non-abstract) classes can implement interfaces not defined in this standard.

 * Adding fields (values) to enumerations.

 * An implementation can insert a new type into the hierarchy between a type specified in this standard and the type specified as its base type. That is, this standard specifies an inheritance relation between types but does not specify the immediate base type.

 * Implementations can add overrides to existing virtual methods, provided the new overrides satisfy the existing contract. _end note]_

_[Rationale:_ An implementation might wish to split functionality across several types in order to provide non-standard extension mechanisms, or might wish to provide additional non-standard functionality through the new base type. As long as programs do not reference these nonstandard types, they will remain portable across conforming implementations of the CLI. _end rationale]_
