## II.6.2.1 Information about the assembly (AsmDecl)

The following grammar shows the information that can be specified about an assembly: 

 | _AsmDecl_ ::= | Description | Clause
 | ---- | ---- | ----
 | `.custom` _CustomDecl_ | Custom attributes | §[II.21](#todo-missing-hyperlink)
 | \| `.hash algorithm` _Int32_ | Hash algorithm used in the **.file** directive | §[II.6.2.1.1](ii.6.2.1.1-hash-algorithm.md)
 | \| `.culture` _QSTRING_ | Culture for which this assembly is built | §[II.6.2.1.2](ii.6.2.1.2-culture.md)
 | \| `.publickey` `'='` `'('` _Bytes_ `')'` | The originator's public key. | §[II.6.2.1.3](ii.6.2.1.3-originators-public-key.md)
 | \| `.ver` _Int32_ `':'` _Int32_ `':'` _Int32_ `':'` _Int32_ | Major version, minor version, build, and revision | §[II.6.2.1.4](ii.6.2.1.4-version-numbers.md)
 | \| _SecurityDecl_ | Permissions needed, desired, or prohibited | §[II.20](#todo-missing-hyperlink)
