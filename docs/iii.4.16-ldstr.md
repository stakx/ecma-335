## III.4.16 ldstr &ndash; load a literal string

 | Format | Assembly Format | Description
 | ---- | ---- | ----
 | 72 _\<T\>_ | `ldstr` _string_ | Push a string object for the literal _string_.

#### Stack Transition:

&hellip;, &rarr; &hellip;, `string`

#### Description:

The `ldstr` instruction pushes a new string object representing the literal stored in the metadata as _string_ (which is a string literal).

By default, the CLI guarantees that the result of two `ldstr` instructions referring to two metadata tokens that have the same sequence of characters, return precisely the same string object (a process known as "string interning"). This behavior can be controlled using the `System.Runtime.CompilerServices.CompilationRelaxationsAttribute` and the `System.Runtime.CompilerServices.CompilationRelaxations.NoStringInterning` (see [Partition IV](#todo-missing-hyperlink)).

#### Exceptions:

None.

#### Correctness:

Correct CIL requires that _string_ is a valid string literal metadata token.

#### Verifiability:

There are no additional verification requirements.
