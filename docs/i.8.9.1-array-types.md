## I.8.9.1 Array types

An **array type** shall be defined by specifying the element type of the array, the **rank** (number of dimensions) of the array, and the upper and lower bounds of each dimension of the array. Hence, no separate definition of the array type is needed. The bounds (as well as indices into the array) shall be signed integers. While the actual bounds for each dimension are known only at runtime, the signature can specify the information that is known at compile time (e.g., no bounds, a lower bound, or both an upper and a lower bound).

Array elements shall be laid out within the array object in row-major order (i.e., the elements associated with the rightmost array dimension shall be laid out contiguously from lowest to highest index). The actual storage allocated for each array element can include platform-specific padding. (The size of this storage, in bytes, is returned by the `sizeof` instruction when it is applied to the type of that array's elements.)

Values of an array type are objects; hence an array type is a kind of object type (see §[I.8.2.3](#todo-missing-hyperlink)). Array objects are defined by the CTS to be a repetition of locations where values of the array element type are stored. The number of repeated values is determined by the rank and bounds of the array.

Only type signatures, not location signatures, are allowed as array element types.

Exact array types are created automatically by the VES when they are required. Hence, the operations on an array type are defined by the CTS. These generally are: allocating the array based on size and lower-bound information, indexing the array to read and write a value, computing the address of an element of the array (a managed pointer), and querying for the rank, bounds, and the total number of values stored in the array.

Additionally, a created vector with element type `T`, implements the interface `System.Collections.Generic.IList<U>`, where `U` := `T`. (§[I.8.7](#todo-missing-hyperlink))

> #### CLS Rule 16:
>
> Arrays shall have elements with a CLS-compliant type, and all dimensions of the array shall have lower bounds of zero. Only the fact that an item is an array and the element type of the array shall be required to distinguish between overloads. When overloading is based on two or more array types the element types shall be named types.
>
> _[Note:_ So-called "jagged arrays" are CLS-compliant, but when overloading multiple array types they are one-dimensional, zero-based arrays of type `System.Array`.
>
> **CLS (consumer):** There is no need to support arrays of non-CLS types, even when dealing with instances of `System.Array.` Overload resolution need not be aware of the full complexity of array types. Programmers should have access to the `Get`, `Set`, and `Address` methods on instances of `System.Array` if there is no language syntax for the full range of array types.
>
> **CLS (extender):** There is no need to provide syntax to define non-CLS types of arrays or to extend interfaces or classes that use non-CLS array types. Shall provide access to the type `System.Array`, but can assume that all instances will have a CLS-compliant type. While the full array signature must be used to override an inherited method that has an array parameter, the full complexity of array types need not be made visible to programmers. Programmers should have access to the `Get`, `Set`, and `Address` methods on instances of `System.Array` if there is no language syntax for the full range of array types.
>
> **CLS (framework):** Non-CLS array types shall not appear in exported members. Where possible, use only one-dimensional, zero-based arrays (vectors) of simple named types, since these are supported in the widest range of programming languages. Overloading on array types should be avoided, and when used shall obey the restrictions. _end note]_

Array types form a hierarchy, with all array types inheriting from the type `System.Array`. This is an abstract class (see §[I.8.9.6.2](#todo-missing-hyperlink)) that represents all arrays regardless of the type of their elements, their rank, or their upper and lower bounds. The VES creates one array type for each distinguishable array type. In general, array types are only distinguished by the type of their elements and their rank.  However, the VES treats single dimensional, zero-based arrays (also known as **vectors**) specially. Vectors are also distinguished by the type of their elements, but a vector is distinct from a single-dimensional array of the same element type that has a non-zero lower bound. Zero-dimensional arrays are not supported. Consider the following examples, using the syntax of CIL as described in [Partition II Metadata](#todo-missing-hyperlink):

#### Table I.2: Array Examples

 | Static specification of type | Actual type constructed |  Allowed in CLS? |
 | ---- | ---- | ----
 | `int32[]` | vector of `int32` | Yes
 | `int32[0...5]` | vector of `int32` | Yes
 | `int32[1...5]` | array, rank 1, of `int32` | No
 | `int32[,]` | array, rank 2, of `int32` | Yes
 | `int32[0...3, 0...5]` | array, rank 2, of `int32` | Yes
 | `int32[0..., 0...]` | array, rank 2, of `int32` | Yes
 | `int32[1..., 0...]` | array, rank 2, of `int32` | No
