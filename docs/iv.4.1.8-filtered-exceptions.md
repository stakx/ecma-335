## IV.4.1.8 Filtered exceptions

The **filtered exceptions feature set** supports user-supplied filters for exceptions.

**If omitted:** Methods using the CIL `endfilter` instruction or with an `exceptionentry` that contains a non-null `filterstart` (see [Partition I](#todo-missing-hyperlink)) shall throw the `System.NotImplementedException` exception. The precise timing of the exception is not specified.

**Part of Library:** (none)
