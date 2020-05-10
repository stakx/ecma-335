## II.22.22 ImplMap: 0x1C

The _ImplMap_ table holds information about unmanaged methods that can be reached from managed code, using PInvoke dispatch. Each row of the _ImplMap_ table associates a row in the _MethodDef_ table (_MemberForwarded_) with the name of a routine (_ImportName_) in some unmanaged DLL (_ImportScope_).

_[Note:_ A typical example would be: associate the managed Method stored in row N of the _Method_ table (so _MemberForwarded_ would have the value N) with the routine called "`GetEnvironmentVariable`" (the string indexed by _ImportName_) in the DLL called "`kernel32`" (the string in the _ModuleRef_ table indexed by _ImportScope_). The CLI intercepts calls to managed Method number N, and instead forwards them as calls to the unmanaged routine called "`GetEnvironmentVariable`" in "`kernel32.dll`" (including marshalling any arguments, as required)

The CLI does not support this mechanism to access fields that are exported from a DLL, only methods. _end note]_

The _ImplMap_ table has the following columns:

 * _MappingFlags_ (a 2-byte bitmask of type _PInvokeAttributes_, §[23.1.8](#todo-missing-hyperlink))

 * _MemberForwarded_ (an index into the _Field_ or _MethodDef_ table; more precisely, a _MemberForwarded_  (§[II.24.2.6](#todo-missing-hyperlink)) coded index). However, it only ever indexes the _MethodDef_ table, since _Field_ export is not supported.

 * _ImportName_ (an index into the String heap)

 * _ImportScope_ (an index into the _ModuleRef_ table)

A row is entered in the _ImplMap_ table for each parent Method (§[II.15.5](#todo-missing-hyperlink)) that is defined with a **.pinvokeimpl** interoperation attribute specifying the _MappingFlags_, _ImportName_, and _ImportScope_.

> _This contains informative text only._

 1. _ImplMap_ can contain zero or more rows

 2. _MappingFlags_ shall have only those values set that are specified \[ERROR\]

 3. _MemberForwarded_ shall index a valid row in the _MethodDef_ table \[ERROR\]

 4. The _MappingFlags_.`CharSetMask` (§[II.23.1.7](#todo-missing-hyperlink)) in the row of the _MethodDef_ table indexed by _MemberForwarded_ shall have at most one of the following bits set: 
`CharSetAnsi`, `CharSetUnicode`, or `CharSetAuto` (if none is set, the default is `CharSetNotSpec`) \[ERROR\]

 5. _ImportName_ shall index a non-empty string in the String heap \[ERROR\]

 6. _ImportScope_ shall index a valid row in the _ModuleRef_ table \[ERROR\]

 7. The row indexed in the _MethodDef_ table by _MemberForwarded_ shall have its _Flags_.`PinvokeImpl` = 1, and _Flags_.`Static` = 1 \[ERROR\]

> _End informative text._
