## I.10.2 Overloading

_[Note:_ Although the CTS describes inheritance, object layout, name hiding, and overriding of virtual methods, it does not discuss overloading at all. While this is surprising, it arises from the fact that overloading is entirely handled by compilers that target the CTS and not the type system itself. In the metadata, all references to types and type members are fully resolved and include the precise signature that is intended. This choice was made since every programming language has its own set of rules for coercing types and the VES does not provide a means for expressing those rules. _end note]_

Following the rules of the CTS, it is possible for duplicate names to be defined in the same scope as long as they differ in either kind (field, method, etc.) or signature. The CLS imposes a stronger restriction for overloading methods. Within a single scope, a given name can refer to any number of methods provided they differ in any of the following:

 * Number of parameters

 * Type of any parameter

Notice that the signature includes more information, but CLS-compliant languages need not produce or consume classes that differ only by that additional information (see [Partition II](#todo-missing-hyperlink) for the complete list of information carried in a signature):

 * Calling convention

 * Custom modifiers

 * Return type

 * Whether a parameter is passed by value or by reference

There is one exception to this rule. For the special names `op_Implicit` and `op_Explicit`, described in §[I.10.3.3](i.10.3.3-conversion-operators.md), methods can be provided that differ only by their return type. These are marked specially and can be ignored by compilers that don’t support operator overloading.

Properties shall not be overloaded by type (that is, by the return type of their **getter** method), but they can be overloaded with different number or types of indices (that is, by the number and types of the parameters of their **getter** methods). The overloading rules for properties are identical to the method overloading rules.

> #### CLS Rule 37:
>
> Only properties and methods can be overloaded.
>
> #### CLS Rule 38:
>
> Properties and methods can be overloaded based only on the number and types of their parameters, except the conversion operators named `op_Implicit` and `op_Explicit`, which can also be overloaded based on their return type.
>
> _[Note:_
>
> **CLS (consumer):** Can assume that only properties and methods are overloaded, and need not support overloading based on return type unless providing special syntax for operator overloading. If return type overloading isn’t supported, then the `op_Implicit` and `op_Explicit` can be ignored since the functionality shall be provided in some other way by a CLS-compliant framework. Consumers must first apply the hide-by-name and hide-by-signature-and-name rules (§[I.8.10.4](i.8.10.4-hiding-overriding-and-layout.md)) to avoid any ambiguity.
>
> **CLS (extender):** Should not permit the authoring of overloads other than those specified here. It is not necessary to support operator overloading at all, hence it is possible to entirely avoid support for overloading on return type.
>
> **CLS (framework):** Shall not publicly expose overloading except as specified here. Frameworks authors should bear in mind that many programming languages, including object-oriented languages, do not support overloading and will expose overloaded methods or properties through mangled names. Most languages support neither operator overloading nor overloading based on return type, so `op_Implicit` and `op_Explicit` shall always be augmented with some alternative way to gain the same functionality. _end note]_

_[Note:_ The names visible on any class `C`, are the names visible in that class and its base classes. As a consequence, the names of methods on interfaces implemented by `C` that are only implemented via MethodImpls (see [Partition II](ii.25-file-format-extensions-to-pe.md)) are not visible on class `C`. The names visible on an interface `I`, consist only of the names directly defined on this interface. As a consequence, the names of methods from other interfaces (which `I` requires be implemented) are not visible on `I` itself. _end note]_
