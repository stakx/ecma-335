## I.10.7.6 Frameworks and abstract or virtual methods

CLS Frameworks shall not expose libraries that require CLS Extenders to override or implement generic methods to use the framework. This does not imply that virtual or abstract generic methods are non-compliant; rather, the framework shall also provide concrete implementations with appropriate default behavior. 

> #### CLS Rule 47:
>
> For each abstract or virtual generic method, there shall be a default concrete (nonabstract) implementation.
>
> _[Note:_
>
> **CLS (consumer):** No impact.
>
> **CLS (extender):** Need not provide syntax for overriding generic methods.
>
> **CLS (framework):** Shall not expose generic methods that violate this rule without also providing appropriate concrete implementations. _end note]_
