## II.25.4 Common Intermediate Language physical layout

This section contains the layout of the data structures used to describe a CIL method and its exceptions. Method bodies can be stored in any read-only section of a PE file. The _MethodDef_ (§[II.22.26](#todo-missing-hyperlink)) records in metadata carry each method's RVA.

A method consists of a method header immediately followed by the method body, possibly followed by extra method data sections (§[II.25.4.5](#todo-missing-hyperlink)), typically exception handling data.  If exception-handling data is present, then `CorILMethod_MoreSects` flag (§[II.25.4.4](#todo-missing-hyperlink)) shall be specified in the method header and for each chained item after that.

There are two flavors of method headers &ndash; tiny (§[II.25.4.2](#todo-missing-hyperlink)) and fat (§[II.25.4.3](#todo-missing-hyperlink)). The two least significant bits in a method header indicate which type is present (§[II.25.4.1](#todo-missing-hyperlink)). The tiny header is 1 byte long and stores only the method's code size. A method is given a tiny header if it has no local variables, maxstack is 8 or less, the method has no exceptions, the method size is less than 64 bytes, and the method has no flags above 0x7. Fat headers carry full information &ndash; local vars signature token, maxstack, code size, flag. Tiny method headers can start on any byte boundary. Fat method headers shall start on a 4-byte boundary.

