## II.12.1 Implementing interfaces

Classes and value types shall *implement* zero or more interfaces. Implementing an interface implies that all concrete instances of the class or value type shall provide an implementation for each **abstract** virtual method declared in the interface. In order to implement an interface, a class or value type shall either explicitly declare that it does so (using the **implements** attribute in its type definition, see §[II.10.1](ii.10.1-type-header-classheader.md)) or shall be derived from a base class that implements the interface.

_[Note:_ An **abstract** class (since it cannot be instantiated) need not provide implementations of the virtual methods of interfaces it implements, but any concrete class derived from it shall provide the implementation.

Merely providing implementations for all of the **abstract** methods of an interface is not sufficient to have a type implement that interface. Conceptually, this represents the fact that an interface represents a contract that can have more requirements than are captured in the set of **abstract** methods. From an implementation point of view, this allows the layout of types to be constrained only by those interfaces that are explicitly declared. _end note]_

Interfaces shall declare that they require the implementation of zero or more other interfaces. If one interface, _A_, declares that it requires the implementation of another interface, _B_, then _A_ implicitly declares that it requires the implementation of all interfaces required by _B_. If a class or value type declares that it implements _A_, then all concrete instances shall provide implementations of the virtual methods declared in _A_ and all of the interfaces _A_ requires.

_[Note:_ The class need not explicitly declare that it implements the interfaces required by _A_. _end note]_

_[Example:_ The following class implements the interface `IStartStopEventSource` defined in the module `Counter`.

 ```ilasm
 .class private auto autochar StartStopButton
        extends [System.Windows.Forms]System.Windows.Forms.Button
        implements [.module Counter]IstartStopEventSource
 { // body of class
 }
 ```

_end example]_
