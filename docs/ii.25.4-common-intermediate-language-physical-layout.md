## II.25.4 Common Intermediate Language physical layout

This section contains the layout of the data structures used to describe a CIL method and its exceptions. Method bodies can be stored in any read-only section of a PE file. The _MethodDef_ (§[II.22.26](ii.22.26-methoddef-0x06.md)) records in metadata carry each method's RVA.

A method consists of a method header immediately followed by the method body, possibly followed by extra method data sections (§[II.25.4.5](ii.25.4.5-method-data-section.md)), typically exception handling data.  If exception-handling data is present, then `CorILMethod_MoreSects` flag (§[II.25.4.4](ii.25.4.4-flags-for-method-headers.md)) shall be specified in the method header and for each chained item after that.

There are two flavors of method headers &ndash; tiny (§[II.25.4.2](ii.25.4.2-tiny-format.md)) and fat (§[II.25.4.3](ii.25.4.3-fat-format.md)). The two least significant bits in a method header indicate which type is present (§[II.25.4.1](ii.25.4.1-method-header-type-values.md)). The tiny header is 1 byte long and stores only the method's code size. A method is given a tiny header if it has no local variables, maxstack is 8 or less, the method has no exceptions, the method size is less than 64 bytes, and the method has no flags above 0x7. Fat headers carry full information &ndash; local vars signature token, maxstack, code size, flag. Tiny method headers can start on any byte boundary. Fat method headers shall start on a 4-byte boundary.

