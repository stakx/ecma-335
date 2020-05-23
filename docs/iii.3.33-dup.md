## III.3.33 dup &ndash; duplicate the top value of the stack

 | Format | Assembly Format | Description
 | ---- | ---- | ----
 | 25 | `dup` | Duplicate the value on the top of the stack.

#### Stack Transition:

&hellip;, _value_ &rarr; &hellip;, _value_, _value_

#### Description:

The `dup` instruction duplicates the top element of the stack.

#### Exceptions:

None.

#### Correctness and Verifiability:

No additional requirements.
