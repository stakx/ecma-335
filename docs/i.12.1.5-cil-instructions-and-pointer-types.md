## I.12.1.5 CIL instructions and pointer types

> _This subclause contains only informative text._

_[Rationale:_ Some implementations of the CLI will require the ability to track pointers to objects and to collect objects that are no longer reachable (thus providing memory management by "garbage collection"). This process moves objects in order to reduce the working set and thus will modify all pointers to those objects as they move. For this to work correctly, pointers to objects can only be used in certain ways. The `O` (object reference) and `&` (managed pointer) data types are the formalization of these restrictions. _end rationale]_

The use of object references is tightly restricted in the CIL. They are used almost exclusively with the "virtual object system" instructions, which are specifically designed to deal with objects. In addition, a few of the base instructions of the CIL handle object references. In particular, object references can be:

 1. Loaded onto the evaluation stack to be passed as arguments to methods (`ldloc`, `ldarg`), and stored from the stack to their home locations (`stloc`, `starg`)

 2. Duplicated or popped off the evaluation stack (`dup`, `pop`)

 3. Tested for equality with one another, but not other data types (`beq`, `beq.s`, `bne`, `bne.s`, `ceq`)

 4. Loaded-from / stored-into unmanaged memory, in type unmanaged code only (`ldind.ref`, `stind.ref`)

 5. Created as a null reference (`ldnull`)

 6. Returned as a value (`ret`)

Managed pointers have several additional base operations.

 1. Addition and subtraction of integers, in units of bytes, returning a managed pointer (`add`, `add.ovf.u`, `sub`, `sub.ovf.u`)

 2. Subtraction of two managed pointers to elements of the same array, returning the number of bytes between them (`sub`, `sub.ovf.u`)

 3. Unsigned comparison and conditional branches based on two managed pointers (`bge.un`, `bge.un.s`, `bgt.un`, `bgt.un.s`, `ble.un`, `ble.un.s`, `blt.un`, `blt.un.s`, `cgt.un`, `clt.un`)

Arithmetic operations upon managed pointers are intended only for use on pointers to elements of the same array. If other uses of arithmetic on managed pointers are made, the behavior is unspecified.

_[Rationale:_ Since the memory manager runs asynchronously with respect to programs and updates managed pointers, both the distance between distinct objects and their relative position can change. _end rationale]_

> _End informative text._