## I.8.5.3.3 Security permissions

Access to members is also controlled by security demands that can be attached to an assembly, type, method, property, or event. Security demands are not part of a type contract (see §[I.8.6](#todo-missing-hyperlink)), and hence are not inherited. There are two kinds of demands:

 * An **inheritance demand**. When attached to a type, it requires that any type that wishes to inherit from this type shall have the specified security permission.  When attached to a non-final virtual method, it requires that any type that wishes to override this method shall have the specified permission.  It shall not be attached to any other member.

 * A ***reference demand**.  Any attempt to resolve a reference to the marked item shall have specified security permission.

Only one demand of each kind can be attached to any item. Attaching a security demand to an assembly implies that it is attached to all types in the assembly unless another demand of the same kind is attached to the type. Similarly, a demand attached to a type implies the same demand for all members of the type unless another demand of the same kind is attached to the member.  For additional information, see Declarative Security in [Partition II](#todo-missing-hyperlink), and the classes in the `System.Security` namespace in [Partition IV](#todo-missing-hyperlink).
