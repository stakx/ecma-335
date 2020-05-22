## II.15.3 Calling convention

 | _CallConv_ ::=
 | ----
 | [ `instance` [ `explicit` ]] [ _CallKind_ ]
 
A calling convention specifies how a method expects its arguments to be passed from the caller to the called method. It consists of two parts: the first deals with the existence and type of the *this* pointer, while the second relates to the mechanism for transporting the arguments.

If the attribute **instance** is present, it indicates that a *this* pointer shall be passed to the method. This attribute shall be used for both instance and virtual methods.

Normally, a parameter list (which always follows the calling convention) does not provide information about the type of the *this* pointer, since this can be deduced from other information. When the combination **instance explicit** is specified, however, the first type in the subsequent parameter list specifies the type of the *this* pointer and subsequent entries specify the types of the parameters themselves.

 | _CallKind_ ::=
 | ----
 | `default`
 | \| `unmanaged cdecl`
 | \| `unmanaged fastcall`
 | \| `unmanaged stdcall`
 | \| `unmanaged thiscall`
 | \| `vararg`

Managed code shall have only the **default** or **vararg** calling kind. **default** shall be used in all cases except when a method accepts an arbitrary number of arguments, in which case **vararg** shall be used. When dealing with methods implemented outside the CLI it is important to be able to specify the calling convention required. For this reason there are 16 possible encodings of the calling kind. Two are used for the managed calling kinds. Four are reserved with defined meaning across many platforms, as follows:

 * **unmanaged cdecl** is the calling convention used by Standard C

 * **unmanaged stdcall** specifies a standard C++ call

 * **unmanaged fastcall** is a special optimized C++ calling convention

 * **unmanaged thiscall** is a C++ call that passes a *this* pointer to the method

Four more are reserved for existing calling conventions, but their use is not maximally portable. Four more are reserved for future standardization, and two are available for non-standard experimental use. (In this context, "portable" means a feature that is available on all conforming implementations of the CLI.)
