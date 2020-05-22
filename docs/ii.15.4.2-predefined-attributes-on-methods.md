## II.15.4.2 Predefined attributes on methods

 | _MethAttr_ ::= | Description | Clause
 | ---- | ---- | ----
 | `abstract` | The method is abstract (shall also be virtual). | §II.15.4.2.4
 | \| `assembly` | Assembly accessibility | §II.15.4.2.1
 | \| `compilercontrolled` | Compiler-controlled accessibility. | §II.15.4.2.1
 | \| `famandassem` | Family and Assembly accessibility | §II.15.4.2.1
 | \| `family` | Family accessibility | §II.15.4.2.1
 | \| `famorassem` | Family or Assembly accessibility | §II.15.4.2.1
 | \| `final` | This virtual method cannot be overridden by derived classes. | §II.15.4.2.2
 | \| `hidebysig` | Hide by signature. Ignored by the runtime. | §II.15.4.2.2
 | \| `newslot` | Specifies that this method shall get a new slot in the virtual method table. | §II.15.4.2.3
 | \| `pinvokeimpl` `'('` _QSTRING_ [ `as` _QSTRING_ ] _PinvAttr_* `')'` | Method is actually implemented in native code on the underlying platform | §II.15.4.2.5
 | \| `private` | Private accessibility | §II.15.4.2.1
 | \| `public` | Public accessibility. | §II.15.4.2.1
 | \| `rtspecialname` | The method name needs to be treated in a special way by the runtime. | §II.15.4.2.6
 | \| `specialname` | The method name needs to be treated in a special way by some tool. | §II.15.4.2.6
 | \| `static` | Method is static. | §II.15.4.2.2
 | \| `virtual` | Method is virtual. | §II.15.4.2.2
 | \| `strict` | Check accessibility on override | §II.15.4.2.2

The following combinations of predefined attributes are invalid:

 * **static** combined with any of **final**, **newslot**, or **virtual**

 * **abstract** combined with any of **final** or **pinvokeimpl**

 * **compilercontrolled** combined with any of **final**, **rtspecialname**, **specialname**, or **virtual**
