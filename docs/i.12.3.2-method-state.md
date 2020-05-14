## I.12.3.2 Method state

Method state describes the environment within which a method executes. (In conventional compiler terminology, it corresponds to a superset of the information captured in the "invocation stack frame"). The CLI method state consists of the following items:

 * An _instruction pointer_ (**IP**) &mdash; This points to the next CIL instruction to be executed by the CLI in the present method.

 * An _evaluation stack_ &mdash; The stack is empty upon method entry. Its contents are entirely local to the method and are preserved across call instructions (that's to say, if this method calls another, once that other method returns, our evaluation stack contents are "still there"). The evaluation stack is not addressable. At all times it is possible to deduce which one of a reduced set of types is stored in any stack location at a specific point in the CIL instruction stream (see §[I.12.3.2.1](i.12.3.2.1-the-evaluation-stack.md)).

 * A _local variable array_ (starting at index 0) &mdash; Values of local variables are preserved across calls (in the same sense as for the evaluation stack).  A local variable can hold any data type. However, a particular slot shall be used in a type consistent way (where the type system is the one described in §[I.12.3.2.1](i.12.3.2.1-the-evaluation-stack.md)). Local variables are initialized to 0 before entry if the **localsinit** flag for the method is set (see §[I.12.2](i.12.2-module-information.md)). The address of an individual local variable can be taken using the `ldloca` instruction.

 * An _argument array_ &mdash; The values of the current method's incoming arguments (starting at index 0). These can be read and written by logical index. The address of an argument can be taken using the `ldarga` instruction. The address of an argument is also implicitly taken by the `arglist` instruction for use in conjunction with type-safe iteration through variable-length argument lists.

 * A _methodInfo_ handle &mdash; This contains read-only information about the method. In particular it holds the signature of the method, the types of its local variables, and data about its exception handlers.

 * A _local memory pool_ &mdash; The CLI includes instructions for dynamic allocation of objects from the local memory pool (`localloc`). Memory allocated in the local memory pool is addressable. The memory allocated in the local memory pool is reclaimed upon method context termination.

 * A _return state_ handle &mdash; This handle is used to restore the method state on return from the current method. Typically, this would be the state of the method's caller. This corresponds to what in conventional compiler terminology would be the _dynamic link_.

 * A _security descriptor_ &mdash; This descriptor is not directly accessible to managed code but is used by the CLI security system to record security overrides (**assert**, **permit-only**, and **deny**).

The four areas of the method state&mdash;incoming arguments array, local variables array, local memory pool and evaluation stack&mdash;are specified as if logically distinct areas. A conforming implementation of the CLI can map these areas into one contiguous array of memory, held as a conventional stack frame on the underlying target architecture, or use any other equivalent representation technique.
