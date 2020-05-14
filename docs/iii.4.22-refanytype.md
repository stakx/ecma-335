### III.4.22 refanytype &ndash; load the type out of a typed reference

 | Format | Assembly Format | Description
 | ---- | ---- | ----
 | FE 1D | `refanytype` | Push the type token stored in a typed reference.

#### Stack Transition:

&hellip;, TypedRef_ &rarr; &hellip;, _type_

#### Description:

Retrieves the type token embedded in _TypedRef_. See the `mkrefany` instruction.

#### Exceptions:

None.

#### Correctness:

Correct CIL ensures that _TypedRef_ is a valid typed reference (created by a previous call to `mkrefany`).

#### Verifiability:

The `refanytype` instruction is always verifiable.
