## II.20 Declarative security

Many languages that target the CLI use attribute syntax to attach declarative security attributes to items in the metadata. This information is actually converted by the compiler into an XML-based representation that is stored in the metadata, see §[II.22.11](ii.22.11-declsecurity-0x0e.md). By contrast, *ilasm* requires the conversion information to be represented in its input.

 | _SecurityDecl_ ::=
 | ----
 | `.permissionset` _SecAction_ = `'('` _Bytes_ `')'`
 | \| `.permission` _SecAction_ _TypeReference_ `'('` _NameValPairs_ `')'`

 | _NameValPairs_ ::=
 | ----
 | _NameValPair_ [ `','` _NameValPair_ ]*

 | _NameValPair_ ::=
 | ----
 | _SQSTRING_ `'='` _SQSTRING_

In **.permission**, _TypeReference_ specifies the permission class and *NameValPair*s specifies the settings. See §[II.22.11](ii.22.11-declsecurity-0x0e.md)

In **.permissionset** the bytes specify the encoded version of the security settings:

 | _SecAction_ ::= | Description
 | ---- | ----
 | `assert` | Assert permission so that callers do not need it.
 | \| `demand` | Demand permission of all callers.
 | \| `deny` | Deny permission so checks will fail.
 | \| `inheritcheck` | Demand permission of a derived class.
 | \| `linkcheck` | Demand permission of caller.
 | \| `permitonly` | Reduce permissions so check will fail.
 | \| `reqopt` | Request optional additional permissions.
 | \| `reqrefuse` | Refuse to be granted these permissions.
