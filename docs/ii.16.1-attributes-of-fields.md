## II.16.1 Attributes of fields

Attributes of a field specify information about accessibility, contract information, interoperation attributes, as well as information on special handling.

The following subclauses contain additional information on each group of predefined attributes of a field.

 | _FieldAttr_ ::= | Description | Clause
 | ---- | ---- | ----
 | `assembly` | Assembly accessibility. | §[II.16.1.1](ii.16.1.1-accessibility-information.md)
 | \| `famandassem` | Family and Assembly accessibility. | §[II.16.1.1](ii.16.1.1-accessibility-information.md)
 | \| `family` | Family accessibility. | §[II.16.1.1](ii.16.1.1-accessibility-information.md)
 | \| `famorassem` | Family or Assembly accessibility. | §[II.16.1.1](ii.16.1.1-accessibility-information.md)
 | \| `initonly` | Marks a constant field. | §[II.16.1.2](ii.16.1.2-field-contract-attributes.md)
 | \| `literal` | Specifies metadata field. No memory is allocated at runtime for this field. | §[II.16.1.2](ii.16.1.2-field-contract-attributes.md)
 | \| `marshal` `'('` _NativeType_ `')'` | Marshaling information. | §[II.16.1.3](ii.16.1.3-interoperation-attributes.md)
 | \| `notserialized` | Reserved (indicates this field is not to be serialized). | §[II.16.1.2](ii.16.1.2-field-contract-attributes.md)
 | \| `private` | Private accessibility. | §[II.16.1.1](ii.16.1.1-accessibility-information.md)
 | \| `compilercontrolled` | Compiler controlled accessibility. | §[II.16.1.1](ii.16.1.1-accessibility-information.md)
 | \| `public` | Public accessibility. | §[II.16.1.1](ii.16.1.1-accessibility-information.md)
 | \| `rtspecialname` | Special treatment by runtime. | §[II.16.1.4](ii.16.1.4-other-attributes.md)
 | \| `specialname` | Special name for other tools. | §[II.16.1.4](ii.16.1.4-other-attributes.md)
 | \| `static` | Static field. | §[II.16.1.2](ii.16.1.2-field-contract-attributes.md)
