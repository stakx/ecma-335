## II.15.4.2.6 Special handling attributes

 | _MethAttr_ ::= &hellip;
 | ----
 | \| `rtspecialname`
 | \| `specialname`

The attribute **rtspecialname** specifies that the method name shall be treated in a special way by the runtime. Examples of special names are `.ctor` (object constructor) and `.cctor` (type initializer).

**specialname** indicates that the name of this method has special meaning to some tools.
