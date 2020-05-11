## II.23.1.12 Flags for MethodSemantics [MethodSemanticsAttributes]

 Flag | Value | Description
 ---- | ---- | ----
 `Setter` | 0x0001 | Setter for property
 `Getter` | 0x0002 | Getter for property
 `Other` | 0x0004 | Other method for property or event
 `AddOn` | 0x0008 | AddOn method for event. This refers to the required `add_` method for events. (§[22.13](#todo-missing-hyperlink))
 `RemoveOn` | 0x0010 | RemoveOn method for event. This refers to the required `remove_` method for events. (§[22.13](#todo-missing-hyperlink))
 `Fire` | 0x0020 | Fire method for event. This refers to the optional `raise_` method for events. (§[22.13](#todo-missing-hyperlink))
