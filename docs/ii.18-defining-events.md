## II.18 Defining events

Events are declared inside types, using the **.event** directive; there are no global events.

 | _ClassMember_ ::= | Clause
 | ---- | ----
 | **.event** _EventHeader_ `'{'` _EventMember_* `'}'`
 | \| &hellip; | §[II.9](ii.9-generics.md)
 
See §[II.22.13](#todo-missing-hyperlink) and §[II.22.11](ii.22.11-declsecurity-0x0e.md)

 | _EventHeader_ ::=
 | ----
 | [ `specialname` ] [ `rtspecialname` ] [ _TypeSpec_ ] _Id_
 
In typical usage, the _TypeSpec_ (if present) identifies a delegate whose signature matches the arguments passed to the event's fire method.

The event head can contain the keywords **specialname** or **rtspecialname**. **specialname** marks the name of the property for other tools, while **rtspecialname** marks the name of the event as special for the runtime.

_[Rationale:_ There are currently no event names that are required to be marked with **rtspecialname**. It is provided for extensions, future standardization, and to increase consistency between the declaration of events and methods (instance and type initializer methods shall be marked with this attribute). _end rationale]_

 | _EventMember_ ::= | Description | Clause
 | ---- | ---- | ----
 | `.addon` _CallConv_ _Type_ [ _TypeSpec_ `'::'` ] _MethodName_ `'('` _Parameters_ `')'` | Add method for event.
 | \| `.custom` _CustomDecl_ | Custom attribute. | §[II.21](ii.21-custom-attributes.md)
 | \| `.fire` _CallConv_ _Type_ [ _TypeSpec_ `'::'` ] _MethodName_ `'('` _Parameters_ `')'` | Fire method for event.
 | \| `.other` _CallConv_ _Type_ [ _TypeSpec_ `'::'` ] _MethodName_ `'('` _Parameters_ `')'` | Other method.
 | \| `.removeon` _CallConv_ _Type_ [ _TypeSpec_ `'::'` ] _MethodName_ `'('` _Parameters_ `')'` | Remove method for event.
 | \| _ExternSourceDecl_ | `.line` or `#line` | §[II.5.7](ii.5.7-source-line-information.md)

The **.addon** directive specifies the *add* method, and the _TypeSpec_ defaults to the same type as the event. The CLS specifies naming conventions and consistency constraints for events, and requires that the definition of the *add* method be marked with **specialname**. (§[I.10.4](i.10.4-naming-patterns.md))

The **.removeon** directive specifies the *remove* method, and the _TypeSpec_ defaults to the same type as the event. The CLS specifies naming conventions and consistency constraints for events, and requires that the definition of the *remove* method be marked with **specialname**. (§[I.10.4](i.10.4-naming-patterns.md))

The **.fire** directive specifies the *fire* method, and the _TypeSpec_ defaults to the same type as the event. The CLS specifies naming conventions and consistency constraints for events, and requires that the definition of the *fire* method be marked with **specialname**. (§[I.10.4](i.10.4-naming-patterns.md))

An event can contain any number of other methods specified with the **.other** directive. From the point of view of the CLI, these methods are only associated with each other through the event. If they have special semantics, this needs to be documented by the implementer. Events can also have custom attributes (§[II.21](ii.21-custom-attributes.md)) associated with them and they can declare source line information.

_[Example:_ This shows the declaration of an event, its corresponding delegate, and typical implementations of the *add*, *remove*, and *fire* method of the event. The event and the methods are declared in a class called `Counter`.

 ```ilasm
 // the delegate
 .class private sealed auto autochar TimeUpEventHandler extends
      [mscorlib]System.Delegate {

   .method public hidebysig specialname rtspecialname instance void .ctor(object
       'object', native int 'method') runtime managed {}

  .method public hidebysig virtual instance void Invoke() runtime managed {}

  .method public hidebysig newslot virtual instance class
     [mscorlib]System.IAsyncResult BeginInvoke(class
     [mscorlib]System.AsyncCallback callback, object 'object') runtime managed {}

  .method public hidebysig newslot virtual instance void EndInvoke(class
      [mscorlib]System.IAsyncResult result) runtime managed {}
 }

 // the class that declares the event
 .class public auto autochar Counter extends [mscorlib]System.Object {

   // field to store the handlers, initialized to null
   .field private class TimeUpEventHandler timeUpEventHandler

   // the event declaration
   .event TimeUpEventHandler startStopEvent {
     .addon instance void Counter::add_TimeUp(class TimeUpEventHandler 'handler')
     .removeon instance void Counter::remove_TimeUp(class TimeUpEventHandler 'handler')
     .fire instance void Counter::fire_TimeUpEvent()
   }

   // the add method, combines the handler with existing delegates
   .method public hidebysig virtual specialname instance void add_TimeUp(class TimeUpEventHandler 'handler') {
     .maxstack 4
     ldarg.0
     dup
     ldfld class TimeUpEventHandler Counter::TimeUpEventHandler
     ldarg 'handler'
     call class[mscorlib]System.Delegate
        [mscorlib]System.Delegate::Combine(class [mscorlib]System.Delegate, class
        [mscorlib]System.Delegate)
     castclass TimeUpEventHandler
     stfld class TimeUpEventHandler Counter::timeUpEventHandler
     ret
   }

   // the remove method, removes the handler from the delegate
   .method virtual public specialname void remove_TimeUp(class TimeUpEventHandler 'handler') {
     .maxstack 4
     ldarg.0
     dup
     ldfld class TimeUpEventHandler Counter::timeUpEventHandler
     ldarg 'handler'
     call class[mscorlib]System.Delegate
        [mscorlib]System.Delegate::Remove(class
        [mscorlib]System.Delegate, class [mscorlib]System.Delegate)
     castclass TimeUpEventHandler
     stfld class TimeUpEventHandler Counter::timeUpEventHandler
     ret
   }

   // the fire method
   .method virtual family specialname void fire_TimeUpEvent() {
     .maxstack 3
     ldarg.0
     ldfld class TimeUpEventHandler Counter::timeUpEventHandler
     callvirt instance void TimeUpEventHandler::Invoke()
     ret
   }
 } // end of class Counter
 ```

_end example]_
