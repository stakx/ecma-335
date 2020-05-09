## I.12.1.6.1 Homes for values

The **home** of a data value is where it is stored for possible reuse. The CLI directly supports the following home locations:

 * An incoming **argument**

 * A **local variable** of a method

 * An instance **field** of an object or value type

 * A **static** field of a class, interface, or module

 * An **array element**

For each home location, there is a means to compute (at runtime) the address of the home location and a means to determine (at JIT compile time) the type of a home location. These are summarized in [Table I.8: Address and Type of Home Locations](#todo-missing-hyperlink).

#### Table I.8: Address and Type of Home Locations

 Type of Home | Runtime Address Computation | JIT compile time Type Determination
 ---- | ---- | ----
 Argument | `ldarga` for by-value arguments or `ldarg` for by-reference (byref) arguments | Method signature
 Local Variable | `ldloca` for by-value locals or `ldloc` for byreference (byref) byref locals | Locals signature in method header
 Field | `ldflda` | Type of field in the class, interface, or module
 Static | `ldsflda` | Type of field in the class, interface, or module
 Array Element | `ldelema` for single-dimensional zero-based arrays or call the instance method **Address** | Element type of array

In addition to homes, built-in values can exist in two additional ways (i.e., without homes):

 1. as constant values (typically embedded in the CIL instruction stream using `ldc.*` instructions)

 2. as an intermediate value on the evaluation stack, when returned by a method or CIL instruction.
