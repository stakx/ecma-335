## I.10.4 Naming patterns

See also [Partition VI](#todo-missing-hyperlink).

While the CTS does not dictate the naming of properties or events, the CLS does specify a pattern to be observed.

For Events:

An individual event is created by choosing or defining a delegate type that is used to indicate the event. Then, three methods are created with names based on the name of the event and with a fixed signature. For the examples below we define an event named `Click` that uses a delegate type named `EventHandler`.

 ```
 EventAdd, used to add a handler for an event
         Pattern: void add_<EventName> (<DelegateType> handler)
         Example: void add_Click (EventHandler handler);
 
 EventRemove, used to remove a handler for an event
         Pattern: void remove_<EventName> (<DelegateType> handler)
         Example: void remove_Click (EventHandler handler); 
 
 EventRaise, used to indicate that an event has occurred
         Pattern: void family raise_<EventName> (Event e)
 ```

For Properties:

An individual property is created by deciding on the type returned by its getter method and the types of the getter’s parameters (if any). Then, two methods are created with names based on the name of the property and these types. For the examples below we define two properties: `Name` takes no parameters and returns a `System.String`, while `Item` takes a `System.Object` parameter and returns a `System.Object`. `Item` is referred to as an indexed property, meaning that it takes parameters and thus can appear to the user as through it were an array with indices.

 ```
 PropertyGet, used to read the value of the property
         Pattern: <PropType> get_<PropName> (<Indices>)
         Example: System.String get_Name ();
         Example: System.Object get_Item (System.Object key); 
 
 PropertySet, used to modify the value of the property
         Pattern: void set_<PropName> (<Indices>, <PropType>)
         Example: void set_Name (System.String name);
         Example: void set_Item (System.Object key, System.Object value);
 ```
