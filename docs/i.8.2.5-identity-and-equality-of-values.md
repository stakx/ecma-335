## I.8.2.5 Identity and equality of values

There are two binary operators defined on all pairs of values: **identity** and **equality**. They return a Boolean result, and are mathematical **equivalence** operators; that is, they are:

 * Reflexive &ndash; `a op a` is true.

 * Symmetric &ndash; `a op b` is true if and only if `b op a` is true.

 * Transitive &ndash; if `a op b` is true and `b op c` is true, then `a op c` is true.

In addition, while identity always implies equality, the reverse is not true. To understand the difference between these operations, consider three variables, A, B, and C, whose type is `System.String`, where the arrow is intended to mean "is a reference to":

 ![](i.8.2.5-identity-and-equality-of-values-figure-1.png)

The values of the variables are **identical** if the locations of the sequences of characters are the same (i.e., there is, in fact, only one string in memory). The values stored in the variables are **equal** if the sequences of characters are the same. Thus, the values of variables A and B are identical, the values of variables A and C as well as B and C are not identical, and the values of all three of A, B, and C are equal.
