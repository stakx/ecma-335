## III.1.8.1.5 Delegate construction

Verification of delegate construction is based on code sequences rather than individual instructions. These are detailed in the description of the `newobj` instruction (§[III.4.21](#todo-missing-hyperlink)).

The verification algorithm shall fail if a branch target is within these instruction sequences (other than at the start of the sequence).

_[Note:_ See [Partition II](#todo-missing-hyperlink) for the signature of delegates and a validity requirement regarding the signature of the method used in the constructor and the signature of Invoke and other methods on the delegate class. _end note]_
