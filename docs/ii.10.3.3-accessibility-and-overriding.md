## II.10.3.3 Accessibility and overriding

If the **strict** flag (§[II.23.1.10](ii.23.1.10-flags-for-methods-methodattributes.md)) is specified then only accessible virtual methods can be overridden.

If a type overrides an inherited method through means other than a _MethodImpl_, it can widen, but it shall not narrow, the accessibility of that method. As a principle, if a client of a type is allowed to access a method of that type, then it should also be able to access that method (identified by name and signature) in any derived type. [Table 7.1](#todo-missing-hyperlink) specifies *narrow* and *widen* in this context&mdash;a "Yes" denotes that the derived class can apply that accessibility, a "No" denotes it is invalid.

If a type overrides an inherited method via a _MethodImpl_, it can *widen* or *narrow* the accessibility of that method.

#### Table II.1: Valid Widening of Access to a Virtual Method

 | Derived class\Base type Accessibility | Compiler-controlled | private | family | assembly | famandassem | famorassem | public
 | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ----
 | **Compiler-controlled** | See note 3 | No | No | No | No | No | No
 | **private** | See note 3 | Yes | No | No | No | No | No
 | **family** | See note 3 | Yes | Yes | No | Yes | See note 1 | No
 | **assembly** | See note 3 | Yes | No | See note 2 | See note 2 | No | No
 | **famandassem** | See note 3 | Yes | No | No | See note 2 | No | No
 | **famorassem** | See note 3 | Yes | Yes | See note 2 | Yes | Yes | No
 | **public** | See note 3 | Yes | Yes | Yes | Yes | Yes | Yes

 1. Yes, provided both are in different assemblies; otherwise, No.

 2. Yes, provided both are in the same assembly; otherwise, No.

 3. Yes, provided both are in the same module; otherwise, No.

_[Note:_ A method can be overridden even if it might not be accessed by the derived class.

If a method has **assembly** accessibility, then it shall have **public** accessibility if it is being overridden by a method in a different assembly. A similar rule applies to **famandassem**, where also **famorassem** is allowed outside the assembly. In both cases **assembly** or **famandassem**, respectively, can be used inside the same assembly. _end note]_

A special rule applies to **famorassem**, as shown in the table. This is the only case where the accessibility is apparently narrowed by the derived class. A **famorassem** method can be overridden with **family** accessibility by a type in another assembly.

_[Rationale:_ Because there is no way to specify "family or specific other assembly" it is not possible to specify that the accessibility should be unchanged. To avoid narrowing access, it would be necessary to specify an accessibility of **public**, which would force widening of access even when it is not desired. As a compromise, the minor narrowing of "family" alone is permitted. _end rationale]_
