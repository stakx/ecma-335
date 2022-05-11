## III.4.23 refanyval &ndash; load the address out of a typed reference

 | Format | Assembly Format | Description
 | ---- | ---- | ---
 | C2 _\<T\>_ | `refanyval` _type_ | Push the address stored in a typed reference.

#### Stack Transition:

&hellip;, _TypedRef_ &rarr; &hellip;, _address_

#### Description:

Retrieves the address (of type `&`) embedded in _TypedRef_. The type of reference in _TypedRef_ shall match the type specified by _type_ (a metadata token, either a `typedef`, `typeref` or a `typespec`; see [Partition II](ii.22-metadata-logical-format-tables.md)). See the `mkrefany` instruction.

#### Exceptions:

`System.InvalidCastException` is thrown if _type_ is not identical to the type stored in the _TypedRef_ (ie, the class supplied to the `mkrefany` instruction that constructed that _TypedRef_)

`System.TypeLoadException` is thrown if _type_ cannot be found.

#### Correctness:

Correct CIL ensures that _TypedRef_ is a valid typed reference (created by a previous call to `mkrefany`).

#### Verifiability:

The `refanyval` instruction is always verifiable.
