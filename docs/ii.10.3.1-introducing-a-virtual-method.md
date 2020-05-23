## II.10.3.1 Introducing a virtual method

A virtual method is introduced in the inheritance hierarchy by defining a virtual method (§[II.15.4](ii.15.4-defining-methods.md)). The definition can be marked **newslot** to always create a new virtual method for the defining class and any classes derived from it:

 * If the definition is marked **newslot**, the definition always creates a new virtual method, even if a base class provides a matching virtual method. A reference to the virtual method via the class containing the method definition, or via a class derived from that class, refers to the new definition (unless hidden by a **newslot** definition in a derived class). Any reference to the virtual method not via the class containing the method definition, nor via its derived classes, refers to the original definition.

 * If the definition is not marked **newslot**, the definition creates a new virtual method only if there is not virtual method of the same name and signature inherited from a base class. It follows that when a virtual method is marked **newslot**, its introduction will not affect any existing references to matching virtual methods in its base classes.
