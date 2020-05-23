## VI.E.1 Uncontrollable behavior

The following aspects of program behavior are implementation dependent. Many of these items will be familiar to programmers used to writing code designed for portability (for example, the fact that the CLI does not impose a minimum size for heap or stack).

 * Size of heap and stack aren't required to have minimum sizes

Behavior relative to asynchronous exceptions (see `System.Thread.Abort`)

 * Globalization is not supported, so every implementation specifies its culture information including such user-visible features as sort order for strings.

 * Threads cannot be assumed to be either pre-emptively or non-pre-emptively scheduled. This decision is implementation specific.

 * Locating assemblies is an implementation-specific mechanism.

 * Security policy is an implemenation-specific mechanism.

 * File names are implementation-specific.
 
 * Timer resolution (granularity) is implementation-specific, although the unit is specified.
