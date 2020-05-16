## I.8.9.7 Value type definition

Not all types defined by a class definition are object types (see §[I.8.2.3](i.8.2.3-classes-interfaces-and-objects.md)); in particular, value types are not object types, but they are defined using a class definition. A class definition for a value type defines both the (unboxed) value type and the associated boxed type (see §[I.8.2.4](i.8.2.4-boxing-and-unboxing-of-values.md)). The members of the class definition define the representation of both:

 1. When a non-static method (i.e., an instance or virtual method) is called on the value type, its **this** pointer is a managed reference to the instance, whereas when the method is called on the associated boxed type, the **this** pointer is an object reference.

     Instance methods on value types receive a **this** pointer that is a managed pointer to the unboxed type whereas virtual methods (including those on interfaces implemented by the value type) receive an instance of the boxed type.

 2. Value types do not support interface contracts, but their associated boxed types do.

 3. A value type does not inherit; rather the base type specified in the class definition defines the base type of the boxed type.

 4. The base type of a boxed type shall not have any fields.

 5. Unlike object types, instances of value types do not require a constructor to be called when an instance is created. Instead, the verification rules require that verifiable code initialize instances to zero (null for object fields).
