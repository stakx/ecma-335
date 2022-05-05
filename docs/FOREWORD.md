## Foreword

This sixth edition cancels and replaces the fifth edition which has been technically revised

This Standard is fully aligned with ISO/IEC 23271:2012.

The following features have been added, extended or clarified in the Standard:

 * The presentation of the rules for assignment compatibility (§[I.8.7](i.8.7-assignment-compatibility.md), §[III.1.8.1.2.3](iii.1.8.1.2.3-verification-type-compatibility.md)) has been extensively revised to a more precise and clearer relation-based format.

 * The presentation of the verification rules for many IL instructions has been revised to be more precise and clearer by building upon the revisions to the presentation of assignment compatibility.

 * The presentation of delegate signature compatibility has been revised along the same lines as assignment compatibility.

 * The verification rules for the IL `newobj` instruction have been extended to cover general delegate creation.

 * The dispatch rules for variance (§[II.12.2](ii.12.2-implementing-virtual-methods-on-interfaces.md)) have been extended to define resolutions for the ambiguities that can arise.

 * Type forwarders have been added to support the relocation of types between libraries (§[II.6.8](ii.6.8-type-forwarders.md))

The following changes of behavior have been made to the Standard:

 * The semantics of variance has been redefined making it a core feature of the CLI. In the previous edition of the Standard variance could be ignored by languages not wishing to support it (§[I.1.8](#todo-missing-hyperlink)); as exact type matches always took precedence over *matches-by-variance*. In this edition the dispatch rules for interfaces (§[II.12.2](ii.12.2-implementing-virtual-methods-on-interfaces.md)) allow a *match-by-variance* to take precedence over an exact match, so all language implementation targeting the CLI must be aware of the behavior even if it is not supported in the language (§[I.1.8](#todo-missing-hyperlink)).

 * Additional requirements on ilasm to metadata conversion. The left-to-right order of interfaces listed in a type header (§[II.10.2](ii.10.2-body-of-a-type-definition.md)) must now be preserved as a top-to-bottom order in the _InterfaceImpl_ table (§[II.22.23](ii.22.23-interfaceimpl-0x09.md)); and the top-to-bottom of method definitions (§[II.10.2](ii.10.2-body-of-a-type-definition.md), §[II.25](ii.25-file-format-extensions-to-pe.md)) must now be preserved as a top-to-bottom order in the _MethodDef_ table (§[II.22.26](ii.22.26-methoddef-0x06.md)). Both these additional requirements are required to support the revised variance semantics.

 * `System.Math` and `System.Double` have been modified to better conform to IEEE (see [Partition IV](#todo-missing-hyperlink) and IEC 60559:1989)

The following types have been added to the Standard or have been significantly updated (* represents an update).

 Type | Library
 ---- | ----
 `System.Action` | BCL
 ``System.Action`1<-T>``* &hellip; ``System.Action`8<-T1..-T8>`` | BCL
 ``System.Comparison`1<-T>``* | BCL
 ``System.Converter`2<-T,+U>``* | BCL
 ``System.IComparable`1<-T>``* | BCL
 ``System.Predicate`1<-T>``* | BCL
 ``System.Collections.Generic.IComparer`1<-T>``* | BCL
 ``System.Collections.Generic.IEnumerable`1<+T>``* | BCL
 ``System.Collections.Generic.IEqualityComparer`1<-T>``* | BCL
 `System.Guid` | BCL
 `System.MulticastDelegate` | BCL
 `System.Reflection.CallingConventions` | Runtime Infrastructure
 `System.Runtime.InteropServices.GuidAttribute` | Runtime Infrastructure
 ``System.Func`1<+TResult>…System.Func`9<-T1..-T8, +TResult>`` | BCL
 ``System.Collections.Generic.Comparer`1<T>`` | BCL
 ``System.Collections.Generic.EqualityComparer`1<T>`` | BCL
 ``System.Collections.Generic.ISet`1<T>`` | BCL
 ``System.Collections.Generic.LinkedList`1<T>`` | BCL
 ``System.Collections.Generic.LinkedList`1<T>.Enumerator`` | BCL
 ``System.Collections.Generic.LinkedListNode`1<T>`` | BCL
 ``System.Collections.Generic.Queue`1<T>`` | BCL
 ``System.Collections.Generic.Stack`1<T>`` | BCL
 ``System.Collections.Generic.Stack`1<T>.Enumerator`` | BCL
 `System.Collections.Stack` | BCL
 `System.DBNull` | BCL
 `System.Runtime.InteropServices.Marshal` | Runtime Infrastructure
 `System.Runtime.InteropServices.SafeBuffer` | Runtime Infrastructure
 `System.Runtime.InteropServices.SafeHandle` | Runtime Infrastructure
 `System.Threading.AutoResetEvent` | BCL
 `System.Threading.EventWaitHandle` | BCL
 `System.Threading.ManualResetEvent` | BCL
 `System.WeakReference` | BCL
 `System.Runtime.CompilerServices.TypeForwardedToAttribute` | BCL
 `System.Runtime.CompilerServices.TypeForwardedFromAttribute` | BCL
 `System.Threading.EventResetMode` | BCL
 `System.Runtime.InteropServices.DllAttribute`* | Runtime Infrastructure
 `System.Math`* | BCL
 
One type, `INullableValue`, has been removed from the Standard. `INullableValue` is incompatible with the semantics of boxing as defined in the previous edition of the Standard. The references to it were included in error from an earlier draft and no implementations are known to have ever included it. 

Technical Report 89 (TR89), which was submitted during the third edition of this Ecma standard, will no longer be part of the submission. TR89 specified a collection of generic types, to help enhance inter-language interoperability, under consideration for inclusion in a future version of the standard. That consideration has now occurred and TR89 has fulfilled its role. A selection of the types covered in TR89 has been introduced into this edition of the standard. An archive version of TR89 will continue to be available from Ecma.

The following companies and organizations have participated in the development of this standard, and their contributions are gratefully acknowledged: Eiffel Software, Kahu Research, Microsoft Corporation, Novell Corporation, Twin Roots. For previous editions, the following companies and organizations are also acknowledged: Borland, Fujitsu Software Corporation, Hewlett-Packard, Intel Corporation, IBM Corporation, IT University of Copenhagen, Jagger Software Ltd., Monash University, Netscape, Phone.Com, Plum Hall, and Sun Microsystems.
