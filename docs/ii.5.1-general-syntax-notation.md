## II.5.1 General syntax notation

This partition uses a modified form of the BNF syntax notation. The following is a brief summary of this notation.

Terminals are written in a constant-width font (e.g., **.assembly**, **extern**, and **float64**); however, terminals consisting solely of punctuation characters are enclosed in single quotes (e.g., `':'`, `'['`, and `'('`). The names of syntax categories are capitalized and italicized (e.g. _ClassDecl_) and shall be replaced by actual instances of the category. Items placed in [ ] brackets (e.g., [ _Filename_ ] and [ _Float_ ]), are optional, and any item followed by \* (e.g., _HexByte_* and [ `'.'` _Id_ ]\*) can appear zero or more times. The character "|" means that the items on either side of it are acceptable (e.g., `true` | `false`). The options are sorted in alphabetical order (to be more specific: in ASCII order, and case-insensitive). If a rule starts with an optional term, the optional term is not considered for sorting purposes.

ILAsm is a case-sensitive language. All terminals shall be used with the same case as specified in this clause.

_[Example:_ A grammar such as

 _Top_ ::= _Int32_ \| `float` _Float_ \| `floats` [ _Float_ [ `','` _Float_ ]* ] \| `else` _QSTRING_

would consider all of the following to be valid:

    12
    float 3
    float –4.3e7
    floats
    floats 2.4
    floats 2.4, 3.7
    else "Something \t weird"

but all of the following to be invalid:

    else 3
    3, 4
    float 4.3, 2.4
    float else
    stuff

_end example]_
