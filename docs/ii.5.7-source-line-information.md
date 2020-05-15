## II.5.7 Source line information

The metadata does not encode information about the lexical scope of variables or the mapping from source line numbers to CIL instructions. Nonetheless, it is useful to specify an assembler syntax for providing this information for use in creating alternate encodings of the information.

**.line** takes a line number, optionally followed by a column number (preceded by a colon), optionally followed by a single-quoted string that specifies the name of the file to which the line number is referring:

 | _ExternSourceDecl_ ::=
 | ----
 | `.line` _Int32_ [ `':'` _Int32_ ] [ _SQSTRING_ ]
