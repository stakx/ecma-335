## III.3.47 localloc &ndash; allocate space in the local dynamic memory pool

 | Format | Assembly Format | Description
 | ---- | ---- | ----
 | FE 0F | `localloc` | Allocate space from the local memory pool.

#### Stack Transition:

_size_ &rarr; _address_

#### Description:

The `localloc` instruction allocates _size_ (type `native unsigned int` or `U4`) bytes from the local dynamic memory pool and returns the address (an unmanaged pointer, type `native int`) of the first allocated byte. If the **localsinit** flag on the method is true, the block of memory returned is initialized to 0; otherwise, the initial value of that block of memory is unspecified. The area of memory is newly allocated. When the current method returns, the local memory pool is available for reuse.

_address_ is aligned so that any built-in data type can be stored there using the `stind` instructions and loaded using the `ldind` instructions.

The `localloc` instruction cannot occur within an exception block: **filter**, **catch**, **finally**, or **fault**.

_[Rationale:_ `localloc` is used to create local aggregates whose size shall be computed at runtime. It can be used for C's intrinsic `alloca` method. _end rationale]_

#### Exceptions:

`System.StackOverflowException` is thrown if there is insufficient memory to service the request.

#### Correctness:

Correct CIL requires that the evaluation stack be empty, apart from the _size_ item

#### Verifiability:

This instruction is never verifiable.
