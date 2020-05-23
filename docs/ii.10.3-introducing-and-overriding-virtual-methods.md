## II.10.3 Introducing and overriding virtual methods

A virtual method of a base type is overridden by providing a direct implementation of the method (using a method definition, see §[II.15.4](ii.15.4-defining-methods.md)) and not specifying it to be **newslot** (§[II.15.4.2.3](ii.15.4.2.3-overriding-behavior.md)). An existing method body can also be used to implement a given virtual declaration using the **.override** directive (§[II.10.3.2](ii.10.3.2-the-override-directive.md)).
