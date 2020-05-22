## II.15.4 Defining methods

 | _MethodHeader_ ::=
 | ----
 | _MethAttr_* [ _CallConv_ ] _Type_ [ `marshal` `'('` [ _NativeType_ ] `')'` ] _MethodName_ [ `'<'` _GenPars_ `'>'` ] `'('` _Parameters_ `')'` _ImplAttr_*

The method head (see also §[II.10](#todo-missing-hyperlink)) consists of

 * the calling convention (_CallConv_, see §[II.15.3](ii.15.3-calling-convention.md))

 * any number of predefined method attributes (_MethAttr_, see §[II.15.4.1.5](ii.15.4.1.5-the-param-type_directive.md))

 * a return type with optional attributes

 * optional marshalling information (§[II.7.4](ii.7.4-native-data-types.md))

 * a method name

 * optional generic parameters (when defining generic methods, see §[II.10.1.7](#todo-missing-hyperlink))

 * a signature

 * and any number of implementation attributes (_ImplAttr_, see §[II.15.4.3](ii.15.4.3-implementation-attributes-of-methods.md))

Methods that do not have a return value shall use **void** as the return type.

 | _MethodName_ ::=
 | ----
 | `.cctor`
 | \| `.ctor`
 | \| _DottedName_

Method names are either simple names or the special names used for instance constructors and type initializers.

 | _Parameters_ ::=
 | -----
 | [ _Param_ [ `','` _Param_ ]* ]

 | _Param_ ::=
 | `...`
 | \| [ _ParamAttr_* ] _Type_ [ `marshal` `'('` [ _NativeType_ ] `')'` ] [ _Id_ ]
 
The _Id_, if present, is the name of the parameter. A parameter can be referenced either by using its name or the zero-based index of the parameter. In CIL instructions it is always encoded using the zero-based index (the name is for ease of use in ILAsm).

Note that, in contrast to calling a **vararg** method, the definition of a **vararg** method does not include any ellipsis ("`…`")

 | _ParamAttr_ ::=
 | ----
 | `'['` `in` `']'`
 | \| `'['` `opt` `']'`
 | \| `'['` `out` `']'`

The parameter attributes shall be attached to the parameters (§[II.22.33](ii.22.33-param-0x08.md)) and hence are not part of a method signature.

_[Note:_ Unlike parameter attributes, custom modifiers (**modopt** and **modreq**) *are* part of the signature. Thus, modifiers form part of the method's contract while parameter attributes do not. _end note]_

**in** and **out** shall only be attached to parameters of pointer (managed or unmanaged) type. They specify whether the parameter is intended to supply input to the method, return a value from the method, or both.  If neither is specified **in** is assumed. The CLI itself does not enforce the semantics of these bits, although they can be used to optimize performance, especially in scenarios where the call site and the method are in different application domains, processes, or computers.

**opt** specifies that this parameter is intended to be optional from an end-user point of view. The value to be supplied is stored using the **.param** syntax (§[II.15.4.1.4](ii.15.4.1.4-the-param-directive.md)).
