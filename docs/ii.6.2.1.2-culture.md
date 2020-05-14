## II.6.2.1.2 Culture

 | _AsmDecl_ ::=
 | ----
 | `.culture` _QSTRING_
 | \| &hellip; 

When present, this indicates that the assembly has been customized for a specific culture. The strings that shall be used here are those specified in [Partition IV](#todo-missing-hyperlink) as acceptable with the class `System.Globalization.CultureInfo`. When used for comparison between an assembly reference and an assembly definition these strings shall be compared in a case-insensitive manner. (See §[II.23.1.3](ii.23.1.3-values-for-culture.md).)

_[Note:_ The culture names follow the IETF RFC1766 names. The format is "_\<language\>\<country/region\>_", where _\<language\>_ is a lowercase two-letter code in ISO 639-1. _\<country/region\>_ is an uppercase two-letter code in ISO 3166. _end note]_
