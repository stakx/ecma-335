## II.5.9 Attributes and metadata

Attributes of types and their members attach descriptive information to their definition. The most common attributes are predefined and have a specific encoding in the metadata associated with them (§[II.23](ii.23-metadata-logical-format-other-structures.md)). In addition, the metadata provides a way of attaching user-defined attributes to metadata, using several different encodings.

From a syntactic point of view, there are several ways for specifying attributes in ILAsm:

 * Using special syntax built into ILAsm. For example, the keyword **private** in a _ClassAttr_ specifies that the visibility attribute on a type shall be set to allow access only within the defining assembly.

 * Using a general-purpose syntax in ILAsm. The non-terminal _CustomDecl_ describes this grammar (§[II.21](#todo-missing-hyperlink)). For some attributes, called pseudo-custom attributes, this grammar actually results in setting special encodings within the metadata (§[II.21.2.1](#todo-missing-hyperlink)).

 * Security attributes are treated specially. There is special syntax in ILAsm that allows the XML representing security attributes to be described directly (§[II.20](#todo-missing-hyperlink)). While all other attributes defined either in the standard library or by user-provided extension are encoded in the metadata using one common mechanism described in §[II.22.10](ii.22.10-customattribute-0x0c.md), security attributes (distinguished by the fact that they inherit, directly or indirectly from `System.Security.Permissions.SecurityAttribute`, see [Partition IV](#todo-missing-hyperlink)) shall be encoded as described in §[II.22.11](ii.22.11-declsecurity-0x0e.md).
