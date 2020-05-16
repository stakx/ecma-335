## I.7.3 CLS compliance

As these rules are introduced in detail, they are described in a common format. For an example, see the first rule below. The first paragraph specifies the rule itself. This is then followed by an informative description of the implications of the rule from the three different viewpoints as described above.

The CLS defines language interoperability rules, which apply only to "externally visible" items. The CLS unit of that language interoperability is the assembly&mdash;that is, within a single assembly there are no restrictions as to the programming techniques that can be used. Thus, the CLS rules apply only to items that are visible (see §[I.8.5.3](i.8.5.3-visibility-accessibility-and-security.md)) outside of their defining assembly and have **public**, **family**, or **family-or-assembly** accessibility (see §[I.8.5.3.2](i.8.5.3.2-accessibility-of-members-and-nested-types.md)).

> #### CLS Rule 1:
>
> CLS rules apply only to those parts of a type that are accessible or visible outside of the defining assembly.
>
> _[Note:_
>
> **CLS (consumer):** no impact.
>
> **CLS (extender):** when checking CLS compliance at compile time, be sure to apply the rules only to information that will be exported outside the assembly.
>
> **CLS (framework):** CLS rules do not apply to internal implementation within an assembly. A type is CLS-compliant if all its publicly accessible parts (those classes, interfaces, methods, fields, properties, and events that are available to code executing in another assembly) either
>
>  * have signatures composed only of CLS-compliant types, or
>  * are specifically marked as not CLS-compliant. _end note]_

Any construct that would make it impossible to rapidly verify code is excluded from the CLS. This allows all CLS-compliant language translators to produce verifiable code if they so choose.
