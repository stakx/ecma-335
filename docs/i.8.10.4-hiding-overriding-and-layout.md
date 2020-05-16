## I.8.10.4 Hiding, overriding, and layout

There are two separate issues involved in inheritance. The first is which contracts a type shall implement and hence which member names and signatures it shall provide. The second is the layout of the instance so that an instance of a derived type can be substituted for an instance of any of its base types. Only the non-static fields and the virtual methods that are part of the derived type affect the layout of an object.

The CTS provides independent control over both the names that are visible from a base type (**hiding**) and the sharing of layout slots in the derived class (**overriding**). Hiding is controlled by marking a member in the derived class as either **hide by name** or **hide by name-and-signature**. Hiding is always performed based on the kind of member, that is, derived field names can hide base field names, but not method names, property names, or event names. If a derived member is marked **hide by name**, then members of the same kind in the base class with the same name are not visible in the derived class; if the member is marked **hide by name-and-signature** then only a member of the same kind with exactly the same name and type (for fields) or method signature (for methods) is hidden from the derived class. Implementation of the distinction between these two forms of hiding is provided entirely by source language compilers and the reflection library; it has no direct impact on the VES itself.

_[Example:_ For example:

 ```ilasm
 class Base
 { field  int32         A;
   field  System.String A;
   method int32         A();
   method int32         A(int32);
 }
 class Derived inherits from Base
 { field  int32 A;
   hidebysig method int32 A();
 }
 ```

The member names available in type `Derived` are:

#### Table I.3: Member names

 | Kind of member | Type / Signature of member | Name of member
 | ---- | ---- | ----
 | Field | `int32` | `A`
 | Method | `() -> int32` | `A`
 | Method | `(int32) -> int32` | `A`

_end example]_

While hiding applies to all members of a type, overriding deals with object layout and is applicable only to instance fields and virtual methods. The CTS provides two forms of member overriding, **new slot** and **expect existing slot**. A member of a derived type that is marked as a new slot will always get a new slot in the object’s layout, guaranteeing that the base field or method is available in the object by using a qualified reference that combines the name of the base type with the name of the member and its type or signature. A member of a derived type that is marked as expect existing slot will re-use (i.e., share or override) a slot that corresponds to a member of the same kind (field or method), name, and type if one already exists from the base type; if no such slot exists, a new slot is allocated and used.

The general algorithm that is used for determining the names in a type and the layout of objects of the type is roughly as follows:

 * Flatten the inherited names (using the **hide by name** or **hide by name-and-signature** rule) ignoring accessibility rules.

 * For each new member that is marked "expect existing slot", look to see if an exact match on kind (i.e., field or method), name, and signature exists and use that slot if it is found, otherwise allocate a new slot.

 * After doing this for all new members, add these new member-kind/name/signatures to the list of members of this type

 * Finally, remove any inherited names that match the new members based on the **hide by name** or **hide by name-and-signature** rules.
