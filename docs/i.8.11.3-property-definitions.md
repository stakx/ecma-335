## I.8.11.3 Property definitions

A property definition defines a named value and the methods that access the value. A property definition defines the accessing contracts on that value. Hence, the property definition specifies which accessing methods exist and their respective method contracts. An implementation of a type that declares support for a property contract shall implement the accessing methods required by the property contract. The implementation of the accessing methods defines how the value is retrieved and stored.

A property definition is always part of either an interface definition or a class definition. The name and value of a property definition is scoped to the type that includes the property definition. The CTS requires that the method contracts that comprise the property shall match the method implementations, as with any other method contract. There are no CIL instructions associated with properties, just metadata.

By convention, properties define a **getter** method (for accessing the current value of the property) and optionally a **setter** method (for modifying the current value of the property). The CTS places no restrictions on the set of methods associated with a property, their names, or their usage.

> #### CLS Rule 24:
>
> The methods that implement the getter and setter methods of a property shall be marked SpecialName in the metadata.
>
> #### CLS Rule 25:
>
> No longer used. _[Note:_ In an earlier version of this standard, this rule stated "The accessibility of a property and of its accessors shall be identical." The removal of this rule allows, for example, public access to a getter while restricting access to the setter. _end note]_
>
> #### CLS Rule 26:
>
> A property's accessors shall all be static, all be virtual, or all be instance.
>
> #### CLS Rule 27:
>
> The type of a property shall be the return type of the getter and the type of the last argument of the **setter**. The types of the parameters of the property shall be the types of the parameters to the getter and the types of all but the final parameter of the setter. All of these types shall be CLS-compliant, and shall not be managed pointers (i.e., shall not be passed by reference).
>
> #### CLS Rule 28:
>
> Properties shall adhere to a specific naming pattern. See §[I.10.4](i.10.4-naming-patterns.md). The `SpecialName` attribute referred to in CLS rule 24 shall be ignored in appropriate name comparisons and shall adhere to identifier rules. A property shall have a getter method, a setter method, or both.
>
> _[Note:_
>
> **CLS (consumer):** Shall ignore the `SpecialName` bit in appropriate name comparisons and shall adhere to identifier rules. Otherwise, no direct support other than the usual access to the methods that define the property.
>
> **CLS (extender):** Shall ignore the `SpecialName` bit in appropriate name comparisons and shall adhere to identifier rules. Otherwise, no direct support other than the usual access to the methods that define the property. In particular, an extender need not be able to define properties.
>
> **CLS (framework):** Shall design understanding that not all CLS languages will access the property using special syntax. _end note]_
