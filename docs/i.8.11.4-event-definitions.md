## I.8.11.4 Event definitions

The CTS supports events in precisely the same way that it supports properties (see §[I.8.11.3](i.8.11.3-property-definitions.md)). The conventional methods, however, are different and include means for subscribing and unsubscribing to events as well as for firing the event.

> #### CLS Rule 29:
>
> The methods that implement an event shall be marked `SpecialName` in the metadata.
>
> #### CLS Rule 30:
>
> The accessibility of an event and of its accessors shall be identical.
>
> #### CLS Rule 31:
>
> The `add` and `remove` methods for an event shall both either be present or absent.
>
> #### CLS Rule 32:
>
> The `add` and `remove` methods for an event shall each take one parameter whose type defines the type of the event and that shall be derived from `System.Delegate`.
>
> #### CLS Rule 33:
>
> Events shall adhere to a specific naming pattern. See §[I.10.4](i.10.4-naming-patterns.md). The `SpecialName` attribute referred to in CLS rule 29 shall be ignored in appropriate name comparisons and shall adhere to identifier rules.
>
> _[Note:_
>
> **CLS (consumer):** Shall ignore the `SpecialName` bit in appropriate name comparisons and shall adhere to identifier rules. Otherwise, no direct support other than the usual access to the methods that define the event.
>
> **CLS (extender):** Shall ignore the `SpecialName` bit in appropriate name comparisons and shall adhere to identifier rules. Otherwise, no direct support other than the usual access to the methods that define the event. In particular, an extender need not be able to define events.
>
> **CLS (framework):** Shall design based on the understanding that not all CLS languages will access the event using special syntax. _end note]_
