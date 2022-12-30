## I.10.6 Custom attributes

In order to allow languages to provide a consistent view of custom attributes across language boundaries, the Base Class Library provides support for the following rule defined by the CLS:

 > #### CLS Rule 41:
 >
 > Attributes shall be of type `System.Attribute`, or a type inheriting from it.
 >
 > _[Note:_
 >
 > **CLS (consumer):** Need not support attributes that are not of the specified type.
 >
 > **CLS (extender):** Must support the authoring of custom attributes.
 >
 > **CLS (framework):** Shall not publicly expose attributes that are not of type `System.Attribute` or a type inheriting from it. _end note]_

The use of a particular attribute class can be restricted in various ways by placing an attribute on the attribute class. The `System.AttributeUsageAttribute` is used to specify these restrictions. The restrictions supported by the `System.AttributeUsageAttribute` are:

 * What kinds of constructs (types, methods, assemblies, etc.) can have the attribute applied to them. By default, instances of an attribute class can be applied to any construct. This is specified by setting the value of the `ValidOn` property of `System.AttributeUsageAttribute`. Several constructs can be combined.

 * Multiple instances of the attribute class can be applied to a given piece of metadata. By default, only one instance of any given attribute class can be applied to a single metadata item. The `AllowMultiple` property of the attribute is used to specify the desired value.

 * Do not inherit the attribute when applied to a type. By default, any attribute attached to a type should be inherited to types that derive from it. If multiple instances of the attribute class are allowed, the inheritance performs a union of the attributes inherited from the base class and those explicitly applied to the derived class type. If multiple instances are not allowed, then an attribute of that type applied directly to the derived class overrides the attribute supplied by the base class. This is specified by setting the `Inherited` property of `System.AttributeUsageAttribute` to the desired value.

_[Note:_ Since these are CLS rules and not part of the CTS itself, tools are required to specify explicitly the custom attributes they intend to apply to any given metadata item.  That is, compilers or other tools that generate metadata must implement the `AllowMultiple` and `Inherit` rules.  The CLI does not supply attributes automatically. The usage of attributes in the CLI is further described in [Partition II](ii.5.9-attributes-and-metadata.md). _end note]_
