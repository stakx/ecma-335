## I.8.2.5.2 Equality

For value types, the equality operator is part of the definition of the exact type. Definitions of equality should obey the following rules:

 * Equality should be an equivalence operator, as defined above.

 * Identity should imply equality, as stated earlier.

 * If either (or both) operand is a boxed value, equality should be computed by

     * first unboxing any boxed operand(s), and then

     * applying the usual rules for equality on the resulting values.

Equality is implemented on `System.Object` via the `Equals` method.

_[Note:_ Although two floating point NaNs are defined by IEC 60559:1989 to always compare as unequal, the contract for `System.Object.Equals` requires that overrides must satisfy the requirements for an equivalence operator.  Therefore, `System.Double.Equals` and `System.Single.Equals` return True when comparing two NaNs, while the equality operator returns False in that case, as required by the IEC standard. _end note]_
