## I.8.2.5.1 Identity

The identity operator is defined by the CTS as follows.

 * If the values have different exact types, then they are not identical. 

 * Otherwise, if their exact type is a value type, then they are identical if and only if the bit sequences of the values are the same, bit by bit.

 * Otherwise, if their exact type is a reference type, then they are identical if and only if the locations of the values are the same.

Identity is implemented on `System.Object` via the `ReferenceEquals` method.
