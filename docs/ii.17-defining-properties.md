## II.17 Defining properties

A Property is declared by the using the **.property** directive. Properties shall only be declared inside of types (i.e., global properties are not supported).

 | _ClassMember_ ::=
 | ----
 | **.property** _PropHeader_ `'{'` _PropMember_* `'}'`

See §[II.22.34](ii.22.34-property-0x17.md) and §[II.22.35](ii.22.35-propertymap-0x15.md) for how property information is stored in metadata.

 | _PropHeader_ ::=
 | ----
 | \[ `specialname` \] \[ `rtspecialname` \] _CallConv_ _Type_ _Id_ `'('` _Parameters_ `')'`

The **.property** directive specifies a calling convention (§[II.15.3](ii.15.3-calling-convention.md)), type, name, and parameters in parentheses. `specialname` marks the property as *special* to other tools, while `rtspecialname` marks the property as *special* to the CLI. The signature for the property (i.e., the _PropHeader_ production) shall match the signature of the property's **.get** method (see below)

_[Rationale:_ There are currently no property names that are required to be marked with `rtspecialname`. It is provided for extensions, future standardization, and to increase consistency between the declaration of properties and methods (instance and type initializer methods shall be marked with this attribute). _end rationale]_

While the CLI places no constraints on the methods that make up a property, the CLS (see [Partition I](#todo-missing-hyperlink)) specifies a set of consistency constraints. A property can contain any number of methods in its body. The following table shows how these methods are identified, and provides short descriptions of each kind of item:

 | _PropMember_ ::= | Description | Clause
 | ---- | ---- | ----
 | \| `.custom` _CustomDecl_ | Custom attribute. | §[II.21](ii.21-custom-attributes.md)
 | \| `.get` _CallConv_ _Type_ [ _TypeSpec_ `'::'` ] _MethodName_ `'('` _Parameters_ `')'` | Specifies the getter for the property.
 | \| `.other` _CallConv_ _Type_ [ _TypeSpec_ `'::'` ] _MethodName_ `'('` _Parameters_ `')'` | Specifies a method for the property other than the getter or setter.
 | \| `.set` _CallConv_ _Type_ [ _TypeSpec_ `'::'` ] _MethodName_ `'('` _Parameters_ `')'` | Specifies the setter for the property. 
 | \| _ExternSourceDecl_ | `.line` or `#line` | §[II.5.7](ii.5.7-source-line-information.md)

**.get** specifies the *getter* for this property. The _TypeSpec_ defaults to the current type. Only one getter can be specified for a property. To be CLS-compliant, the definition of getter shall be marked `specialname`.

**.set** specifies the *setter* for this property. The _TypeSpec_ defaults to the current type. Only one setter can be specified for a property. To be CLS-compliant, the definition of setter shall be marked `specialname`.

**.other** is used to specify any other methods that this property comprises.

In addition, custom attributes (§[II.21](ii.21-custom-attributes.md)) or source line declarations can be specified.

_[Example:_ This shows the declaration of the property called `count`.

 ```ilasm
 .class public auto autochar MyCount extends [mscorlib]System.Object {
   .method virtual hidebysig public specialname instance int32 get_Count() {
   // body of getter
   }

   .method virtual hidebysig public specialname instance void set_Count(
       int32 newCount) {
   // body of setter
   } 

   .method virtual hidebysig public instance void reset_Count() {
   // body of refresh method
   } 

   // the declaration of the property
   .property int32 Count() {
     .get instance int32 MyCount::get_Count()
     .set instance void MyCount::set_Count(int32)
     .other instance void MyCount::reset_Count()
   }
 }
 ```

_end example]_
