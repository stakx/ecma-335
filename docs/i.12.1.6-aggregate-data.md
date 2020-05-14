## I.12.1.6 Aggregate data

> _This subclause contains only informative text._

The CLI supports _aggregate data_, that is, data items that have sub-components (arrays, structures, or object instances) but are passed by copying the value. The sub-components can include references to managed memory. Aggregate data is represented using a value type, which can be instantiated in two different ways:

 * **Boxed:** as an object, carrying full type information at runtime, and typically allocated on the heap by the CLI memory manager.

 * **Unboxed:** as a "value type instance" that does *not* carry type information at runtime and that is never allocated directly on the heap. It can be part of a larger structure on the heap&mdash;a field of a class, a field of a boxed value type, or an element of an array. Or it can be in the local variables or incoming arguments array (see §[I.12.3.2](i.12.3.2-method-state.md)). Or it can be allocated as a static variable or static member of a class or a static member of another value type.

Because value type instances, specified as method arguments, are copied on method call, they do not have "identity" in the sense that objects (boxed instances of classes) have.
