## III.4 Object model instructions

The instructions described in the base instruction set are independent of the object model being executed. Those instructions correspond closely to what would be found on a real CPU. The object model instructions are less built-in than the base instructions in the sense that they could be built out of the base instructions and calls to the underlying operating system.

_[Rationale:_ The object model instructions provide a common, efficient implementation of a set of services used by many (but by no means all) higher-level languages. They embed in their operation a set of conventions defined by the CTS. This include (among other things):

 * Field layout within an object

 * Layout for late bound method calls (vtables)

 * Memory allocation and reclamation

 * Exception handling

 * Boxing and unboxing to convert between reference-based objects and value types For more details, see [Partition I](#todo-missing-hyperlink). _end rationale]_
