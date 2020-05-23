## III.4.31 throw &ndash; throw an exception

 | Format | Assembly Format | Description
 | ---- | ---- | ----
 | 7A | `throw` | Throw an exception.

#### Stack Transition:

&hellip;, _object_ &rarr; &hellip;,

#### Description:

The `throw` instruction throws the exception _object_ (type `O`) on the stack and empties the stack. For details of the exception mechanism, see [Partition I](#todo-missing-hyperlink).

_[Note:_ While the CLI permits any object to be thrown, the CLS describes a specific exception class that shall be used for language interoperability. _end note]_

#### Exceptions:

`System.NullReferenceException` is thrown if _obj_ is null.

#### Correctness:

Correct CIL ensures that _object_ is always either null or an object reference (i.e., of type `O`).

#### Verifiability:

There are no additional verification requirements.
