## II.22.11 DeclSecurity: 0x0E

Security attributes, which derive from `System.Security.Permissions.SecurityAttribute` (see [Partition IV](#todo-missing-hyperlink)), can be attached to a _TypeDef_, a _Method_, or an _Assembly_. All constructors of this class shall take a `System.Security.Permissions.SecurityAction` value as their first parameter, describing what should be done with the permission on the type, method or assembly to which it is attached. Code access security attributes, which derive from `System.Security.Permissions`. `CodeAccessSecurityAttribute`, can have any of the security actions.

These different security actions are encoded in the _DeclSecurity_ table as a 2-byte enum (see below). All security custom attributes for a given security action on a method, type, or assembly shall be gathered together, and one `System.Security.PermissionSet` instance shall be created, stored in the Blob heap, and referenced from the _DeclSecurity_ table.

_[Note:_ The general flow from a compiler's point of view is as follows. The user specifies a custom attribute through some language-specific syntax that encodes a call to the attribute's constructor. If the attribute's type is derived (directly or indirectly) from `System.Security.Permissions.SecurityAttribute` then it is a security custom attribute and requires special treatment, as follows (other custom attributes are handled by simply recording the constructor in the metadata as described in §[II.22.10](#todo-missing-hyperlink)). The attribute object is constructed, and provides a method (`CreatePermission`) to convert it into a security permission object (an object derived from `System.Security.Permission`). All the permission objects attached to a given metadata item with the same security action are combined together into a `System.Security.PermissionSet`. This permission set is converted into a form that is ready to be stored in XML using its `ToXML` method to create a `System.Security.SecurityElement`. Finally, the XML that is required for the metadata is created using the `ToString` method on the security element. _end note]_

The _DeclSecurity_ table has the following columns:

 * _Action_ (a 2-byte value)

 * _Parent_ (an index into the _TypeDef_, _MethodDef_, or _Assembly_ table; more precisely, a _HasDeclSecurity_ (§[II.24.2.6](#todo-missing-hyperlink)) coded index)

 * _PermissionSet_ (an index into the Blob heap)

_Action_ is a 2-byte representation of Security Actions (see `System.Security.SecurityAction` in [Partition IV](#todo-missing-hyperlink)). The values 0&ndash;0xFF are reserved for future standards use. Values 0x20&ndash;0x7F and 0x100&ndash;0x07FF are for uses where the action can be ignored if it is not understood or supported. Values 0x80–0xFF and 0x0800&ndash;0xFFFF are for uses where the action shall be implemented for secure operation; in implementations where the action is not available, no access to the assembly, type, or method shall be permitted.

 Security Action | Note | Explanation of behavior | Valid Scope
 ---- | ---- | ---- | ----
 Assert | 1 | Without further checks, satisfy Demand for the specified permission. | Method, Type
 Demand | 1 | Check that all callers in the call chain have been granted specified permission, throw `SecurityException` (see [Partition IV](#todo-missing-hyperlink)) on failure. | Method, Type
 Deny | 1 | Without further checks refuse Demand for the specified permission. | Method, Type
 InheritanceDemand | 1 | The specified permission shall be granted in order to inherit from class or override virtual method. | Method, Type
 LinkDemand | 1 | Check that the immediate caller has been granted the specified permission; throw `SecurityException` (see [Partition IV](#todo-missing-hyperlink)) on failure. | Method, Type  
 NonCasDemand | 2 | Check that the current assembly has been granted the specified permission; throw `SecurityException` (see [Partition IV](#todo-missing-hyperlink)) otherwise. | Method, Type
 NonCasLinkDemand | 2 | Check that the immediate caller has been granted the specified permission; throw `SecurityException` (see [Partition IV](#todo-missing-hyperlink)) otherwise. | Method, Type
 PrejitGrant | &nbsp; | Reserved for implementation-specific use. |Assembly
 PermitOnly | 1 | Without further checks, refuse Demand for all permissions other than those specified. | Method, Type
 RequestMinimum | &nbsp; | Specify the minimum permissions required to run. | Assembly
 RequestOptional | &nbsp; | Specify the optional permissions to grant. | Assembly
 RequestRefuse | &nbsp; | Specify the permissions not to be granted. | Assembly

**Note 1:** The specified attribute shall derive from `System.Security.Permissions.CodeAccessSecurityAttribute`

**Note 2:** The attribute shall derive from `System.Security.Permissions.SecurityAttribute`, but shall not derive from `System.Security.Permissions.CodeAccessSecurityAttribute`

_Parent_ is a metadata token that identifies the _Method_, _Type_, or _Assembly_ on which security custom attributes encoded in _PermissionSet_ was defined.

_PermissionSet_ is a 'blob' having the following format:

 * A byte containing a period (.).

 * A compressed unsigned integer containing the number of attributes encoded in the blob.

 * An array of attributes each containing the following:

    * A String, which is the fully-qualified type name of the attribute. (Strings are encoded as a compressed unsigned integer to indicate the size followed by an array of UTF8 characters.)

    * A set of properties, encoded as the named arguments to a custom attribute would be (as in §[II.23.3](#todo-missing-hyperlink), beginning with _NumNamed_).

The permission set contains the permissions that were requested with an _Action_ on a specific _Method_, _Type_, or _Assembly_ (see _Parent_). In other words, the blob will contain an encoding of all the attributes on the _Parent_ with that particular _Action_.

_[Note:_ The first edition of this standard specified an XML encoding of a permission set. Implementations should continue supporting this encoding for backward compatibility. _end note]_

The rows of the _DeclSecurity_ table are filled by attaching a **.permission** or **.permissionset** directive that specifies the _Action_ and _PermissionSet_ on a parent assembly (§[II.6.6](#todo-missing-hyperlink)) or parent type or method (§[II.10.2](#todo-missing-hyperlink)).

> _This contains informative text only._

 1. _Action_ shall have only those values set that are specified  \[ERROR\]

 2. _Parent_ shall be one of _TypeDef_, _MethodDef_, or _Assembly_. That is, it shall index a valid row in the _TypeDef_ table, the _MethodDef_ table, or the _Assembly_ table. \[ERROR\]

 3. If _Parent_ indexes a row in the _TypeDef_ table, that row should not define an Interface. The security system ignores any such parent; compilers should not emit such permissions sets.  \[WARNING\]

 4. If _Parent_ indexes a _TypeDef_, then its _TypeDef_._Flags_.**HasSecurity** bit shall be set \[ERROR\]

 5. If _Parent_ indexes a _MethodDef_, then its _MethodDef_._Flags_.**HasSecurity** bit shall be set \[ERROR\]

 6. _PermissionSet_ shall index a 'blob' in the Blob heap  \[ERROR\]

 7. The format of the 'blob' indexed by _PermissionSet_ shall represent a valid, encoded CLI object graph. (The encoded form of all standardized permissions is specified in [Partition IV](#todo-missing-hyperlink).) \[ERROR\]

> _End informative text._
