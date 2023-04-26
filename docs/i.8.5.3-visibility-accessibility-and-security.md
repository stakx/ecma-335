## I.8.5.3 Visibility, accessibility, and security

To refer to a named entity in a scope, both the scope and the name in the scope shall be **visible** (see §[I.8.5.3.1](i.8.5.3.1-visibility-of-types.md)). Visibility is determined by the relationship between the entity that contains the reference (the **referent**) and the entity that contains the name being referenced. Consider the following pseudo-code:

 ```
 class A
 { int32 IntInsideA;
 }
 class B inherits from A
 { method X(int32, int32)
   { IntInsideA := 15;
   }
 } 
 ```

If we consider the reference to the field `IntInsideA` in class `A`:

 * We call class `B` the **referent** because it has a method that refers to that field,

 * We call `IntInsideA` in class `A` the **referenced entity**.

There are two fundamental questions that need to be answered in order to decide whether the referent is allowed to access the referenced entity. The first is whether the name of the referenced entity is **visible** to the referent. If it is visible, then there is a separate question of whether the referent is **accessible** (see §[I.8.5.3.2](i.8.5.3.2-accessibility-of-members-and-nested-types.md)).

Access to a member of a type is permitted only if all three of the following conditions are met:

 1. The type is visible and, in the case of a nested type, accessible.

 2. The member is accessible.

 3. All relevant security demands (see §[I.8.5.3.3](i.8.5.3.3-security-permissions.md)) have been granted.

An instantiated generic type is visible from some assembly if and only if the generic type itself and each of its component parts (generic type definition and generic arguments) are visible.  For example, if `List` is exported from assembly `A` (i.e., declared "public") and `MyClass` is defined in assembly `B` but not exported, then `List<MyClass>` is visible only from within assembly `B`.

Accessibility of members of instantiated generic types is independent of instantiation.

Access to a member _C_\<_T_<sub>1</sub>,&hellip;_T_<sub>_n_</sub>\>._m_ is therefore permitted if the following conditions are met:

 * _C_\<_T_<sub>1</sub>,&hellip;_T_<sub>_n_</sub>\> is visible. 

 * Member _m_ within generic type _C_ (i.e., _C_._m_) is accessible.

 * Security permissions have been granted.
