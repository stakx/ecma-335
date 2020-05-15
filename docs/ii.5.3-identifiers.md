## II.5.3 Identifiers

Identifiers are used to name entities. Simple identifiers are equivalent to an _ID_. However, the ILAsm syntax allows the use of any identifier that can be formed using the Unicode character set (see [Partition I](#todo-missing-hyperlink)). To achieve this, an identifier shall be placed within single quotation marks. This is summarized in the following grammar.

 | _Id_ ::=
 |:----
 | _ID_
 | \| _SQSTRING_

A keyword shall only be used as an identifier if that keyword appears in single quotes (see [Partition VI](#todo-missing-hyperlink) for a list of all keywords). Several *Id*s can be combined to form a larger _Id_, by separating adjacent pairs with a dot (`.`). An _Id_ formed in this way is called a _DottedName_.

 | _DottedName_ ::=
 |:----
 | _Id_ [ `'.'` _Id_ ]*
 
_[Rationale:_ _DottedName_ is provided for convenience, since "`.`" can be included in an _Id_ using the _SQSTRING_ syntax. _DottedName_ is used in the grammar where `'.'` is considered a common character (e.g., in fully qualified type names) _end rationale]_

_[Example:_ The following are simple identifiers:

 ```
 A   Test   $Test   @Foo?   ?_X_   MyType`1
 ```

The following are identifiers in single quotes:

 ```
 'Weird Identifier'   'Odd\102Char'   'Embedded\nReturn'
 ```

The following are dotted names:

 ```
 System.Console   'My Project'.'My Component'.'My Name'   System.IComparable`1
 ```

_end example]_