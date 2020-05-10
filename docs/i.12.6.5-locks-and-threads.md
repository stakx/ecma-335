## I.12.6.5 Locks and threads

The logical abstraction of a thread of control is captured by an instance of the `System.Threading.Thread` object in the class library.  Classes beginning with the prefix "`System.Threading`" (see [Partition IV](#todo-missing-hyperlink)) provide much of the user visible support for this abstraction. To create consistency across threads of execution, the CLI provides the following mechanisms:

1. **Synchronized methods.** A lock that is visible across threads controls entry to the body of a synchronized method. For instance and virtual methods the lock is associated with the this pointer.  For static methods the lock is associated with the type to which the method belongs. The lock is taken by the logical thread (see `System.Threading.Thread` in [Partition IV](#todo-missing-hyperlink)) and can be entered any number of times by the same thread; entry by other threads is prohibited while the first thread is still holding the lock. The CLI shall release the lock when control exits (by any means) the method invocation that first acquired the lock.

2. **Explicit locks and monitors.** These are provided in the class library, see `System.Threading.Monitor.` Many of the methods in the `System.Threading.Monitor` class accept an `Object` as argument, allowing direct access to the same lock that is used by synchronized methods. While the CLI is responsible for ensuring correct protocol when this lock is only used by synchronized methods, the user must accept this responsibility when using explicit monitors on these same objects.

3. **Volatile reads and writes.** The CIL includes a prefix, `volatile.`, that specifies that the subsequent operation is to be performed with the cross-thread visibility constraints described in §[I.12.6.7]](#todo-missing-hyperlink). In addition, the class library provides methods to perform explicit volatile reads (`System.Thread.VolatileRead`) and writes (`System.Thread.VolatileWrite`), as well as barrier synchronization (`System.Thread.MemoryBarrier`).

4. **Built-in atomic reads and writes.** All reads and writes of certain properly aligned data types are guaranteed to occur atomically. See §[I.12.6.6]](#todo-missing-hyperlink).

5. **Explicit atomic operations.** The class library provides a variety of atomic operations in the `System.Threading.Interlocked` class. These operations (e.g., `Increment`, `Decrement`, `Exchange`, and `CompareExchange`) perform implicit acquire/release operations.

Acquiring a lock (`System.Threading.Monitor.Enter` or entering a synchronized method) shall implicitly perform a volatile read operation, and releasing a lock (`System.Threading.Monitor.Exit` or leaving a synchronized method) shall implicitly perform a volatile write operation. See §[I.12.6.7](#todo-missing-hyperlink).
