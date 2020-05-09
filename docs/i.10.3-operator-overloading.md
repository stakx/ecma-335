## I.10.3 Operator overloading

CLS-compliant consumer and extender tools are under no obligation to allow defining of operator overloading. CLS-compliant consumer and extender tools do not have to provide a special mechanism to call these methods.

_[Note:_ This topic is addressed by the CLS so that

 * languages that do provide operator overloading can describe their rules in a way that other languages can understand, and
 
 * languages that do not provide operator overloading can still access the underlying functionality without the addition of special syntax.

_end note]_

Operator overloading is described by using the names specified below, and by setting a special bit in the metadata (**SpecialName**) so that they do not collide with the user's name space. A CLS-compliant producer tool shall provide some means for setting this bit. If these names are used, they shall have precisely the semantics described here.
