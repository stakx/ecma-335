## II.16.1.4 Other attributes

The attribute **rtspecialname** indicates that the field name shall be treated in a special way by the runtime.

_[Rationale:_ There are currently no field names that are required to be marked with **rtspecialname**. It is provided for extensions, future standardization, and to increase consistency between the declaration of fields and methods (instance and type initializer methods shall be marked with this attribute). By convention, the single instance field of an enumeration is named "`value__`" and marked with **rtspecialname**. _end rationale]_

The attribute **specialname** indicates that the field name has special meaning to tools other than the runtime, typically because it marks a name that has meaning for the CLS (see [Partition I](#todo-missing-hyperlink)).
