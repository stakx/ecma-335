## III.4.17 ldtoken &ndash; load the runtime representation of a metadata token

 | Format | Assembly Format | Description
 | ---- | ---- | ----
 | D0 _\<T\>_ | `ldtoken` _token_ | Convert metadata token to its runtime representation.

#### Stack Transition:

&hellip; &rarr; &hellip;, `RuntimeHandle`

#### Description:

The `ldtoken` instruction pushes a `RuntimeHandle` for the specified metadata token. The token shall be one of:

 * A `methoddef`, `methodref` or `methodspec`: pushes a `RuntimeMethodHandle`

 * A `typedef`, `typeref`, or `typespec`: pushes a `RuntimeTypeHandle`

 * A `fielddef` or `fieldref`: pushes a `RuntimeFieldHandle`

The value pushed on the stack can be used in calls to reflection methods in the system class library

#### Exceptions:

None.

#### Correctness:

Correct CIL requires that _token_ describes a valid metadata token of the kinds listed above

#### Verifiability:

There are no additional verification requirements.
