## I.12.6.6 Atomic reads and writes

A conforming CLI shall guarantee that read and write access to *properly aligned* memory locations no larger than the native word size (the size of type `native int`) is atomic (see §[I.12.6.2](i.12.6.2-alignment.md)) when all the write accesses to a location are the same size.  Atomic writes shall alter no bits other than those written.  Unless explicit layout control (see [Partition II (Controlling Instance Layout)](ii.10.7-controlling-instance-layout.md)) is used to alter the default behavior, data elements no larger than the natural word size (the size of a `native int`) shall be properly aligned. Object references shall be treated as though they are stored in the native word size. 

_[Note:_ There is no guarantee about atomic update (read-modify-write) of memory, except for methods provided for that purpose as part of the class library (see [Partition IV](#todo-missing-hyperlink)). An atomic write of a "small data item" (an item no larger than the native word size) *is* required to do an atomic read/modify/write on hardware that does not support direct writes to small data items. _end note]_

_[Note:_ There is no guaranteed atomic access to 8-byte data when the size of a `native int` is 32 bits even though some implementations might perform atomic operations when the data is aligned on an 8-byte boundary. _end note]_
