## I.12.4.1.5.4 Parameter interactions

A given parameter can be passed using any one of the parameter passing conventions: by-value, by-reference, or typed reference. No combination of these is allowed for a single parameter, although a method can have different parameters with different calling mechanisms.

A parameter that has been passed in as typed reference shall not be passed on as by-reference or by-value without a runtime type check and (in the case of by-value) a copy.

A byref parameter can be passed on as a typed reference by attaching the static type.

[Table I.9: Parameter Passing Conventions](#todo-missing-hyperlink) illustrates the parameter passing convention used for each data type.

#### Table I.9: Parameter Passing Conventions

 Type of data | Pass By | How data is sent
 ---- | ---- | ----
 Built-in value type (int, float, etc.) | Value | Copied to called method, type statically known at both sides
 &nbsp; | Reference | Address sent to called method, type statically known at both sides
 &nbsp; | Typed reference | Address sent along with type information to called method
 User-defined value type | Value | Called method receives a copy; type statically known at both sides
 &nbsp; | Reference | Address sent to called method, type statically known at both sides
 &nbsp; | Typed reference | Address sent along with type information to called method
 Object | Value | Reference to data sent to called method, type statically known and class available from reference
 &nbsp; | Reference | Address of reference sent to called method, type statically known and class available from reference
 &nbsp; | Typed reference | Address of reference sent to called method along with static type information, class (i.e., dynamic type) available from reference
