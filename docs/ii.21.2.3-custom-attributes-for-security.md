## II.21.2.3 Custom attributes for security

The following custom attributes are defined in the `System.Net` and `System.Security.Permissions` namespaces. Note that these are all base classes; the actual instances of security attributes found in assemblies will be sub-classes of these.

 | Attribute | Description
 | ---- | ----
 | `CodeAccessSecurityAttribute` | This is the base attribute class for declarative security using custom attributes.
 | `DnsPermissionAttribute` | Custom attribute class for declarative security with `DnsPermission`
 | `EnvironmentPermissionAttribute` | Custom attribute class for declarative security with `EnvironmentPermission`.
 | `FileIOPermissionAttribute` | Custom attribute class for declarative security with `FileIOPermission`.
 | `ReflectionPermissionAttribute` | Custom attribute class for declarative security with `ReflectionPermission`.
 | `SecurityAttribute` | This is the base attribute class for declarative security from which `CodeAccessSecurityAttribute` is derived.
 | `SecurityPermissionAttribute` | Indicates whether the attributed method can affect security settings
 | `SocketPermissionAttribute` | Custom attribute class for declarative security with `SocketPermission`.
 | `WebPermissionAttribute` | Custom attribute class for declarative security with `WebPermission`.

Note that any other security-related custom attributes (i.e., any custom attributes that derive from `System.Security.Permissions.SecurityAttribute`) included into an assembly, can cause a conforming implementaion of the CLI to reject such an assembly when it is loaded, or throw an exception at runtime if any attempt is made to access those security-related custom attributes. (This statement holds true for any custom attributes that cannot be resolved; security-related custom attributes are just one particular case)
