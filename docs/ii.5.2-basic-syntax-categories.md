## II.5.2 Basic syntax categories

These categories are used to describe syntactic constraints on the input intended to convey logical restrictions on the information encoded in the metadata.

_Int32_ is either a decimal number or "`0x`" followed by a hexadecimal number, and shall be represented in 32 bits. _[Note:_ ILAsm has no concept of 8- or 16-bit integer constants. Instead, situations requiring such a constant (such as `int8(...)` and `int16(...)` in §[II.16.2](ii.16.2-field-init-metadata.md)) accept an _Int32_ instead, and use only the least-significant bytes. _end note]_

_Int64_ is either a decimal number or "`0x`" followed by a hexadecimal number, and shall be represented in 64 bits.

_HexByte_ is a hexadecimal number that is a pair of characters from the set `0`&ndash;`9`, `a`&ndash;`f`, and `A`&ndash;`F`.

_RealNumber_ is any syntactic representation for a floating-point number that is distinct from that for all other syntax categories. In this partition, a period (`.`) is used to separate the integer and fractional parts, and "`e`" or "`E`" separates the mantissa from the exponent. Either of the period or the mantissa separator (but not both) can be omitted.

_[Note:_ A complete assembler might also provide syntax for infinities and **NaN**s. _end note]_

_QSTRING_ is a string surrounded by double quote (`"`) marks. Within the quoted string the character "`\`" can be used as an escape character, with "`\t`" representing a tab character, "`\n`" representing a newline character, and "`\`" followed by three octal digits representing a byte with that value. The "`+`" operator can be used to concatenate string literals. This way, a long string can be broken across multiple lines by using "`+`" and a new string on each line. An alternative is to use "`\`" as the last character in a line, in which case, that character and the line break following it are not entered into the generated string. Any white space characters (space, line-feed, carriage-return, and tab) between the "`\`" and the first non-white space character on the next line are ignored. _[Note:_ To include a double quote character in a _QSTRING_, use an octal escape sequence. _end note]_

_[Example:_ The following result in strings that are equivalent to "`Hello World from CIL!`":

 ```ilasm
 ldstr "Hello " + "World " +
 "from CIL!"
 ```

and

 ```ilasm
 ldstr "Hello World\
       \040from CIL!"
 ```

_end example]_

_[Note:_ A complete assembler will need to deal with the full set of issues required to support Unicode encodings, see [Partition I](#todo-missing-hyperlink) (especially CLS Rule 4). _end note]_

_SQSTRING_ is just like _QSTRING_ except that the former uses single quote (`'`) marks instead of double quote. _[Note:_ To include a single quote character in an _SQSTRING_, use an octal escape sequence. _end note]_

_ID_ is a contiguous string of characters which starts with either an alphabetic character (`A`&ndash;`Z`, `a`&ndash;`z`) or one of "`_`", "`$`", "`@`", "`` ` ``" (grave accent), or "`?`", and is followed by any number of alphanumeric characters (`A`&ndash;`Z`, `a`&ndash;`z`, `0`&ndash;`9`) or the characters "`_`", "`$`", "`@`", "`` ` ``" (grave accent), and "`?`". An _ID_ is used in only two ways:

 * As a label of a CIL instruction (§[II.5.4](ii.5.4-labels-and-lists-of-labels.md)).

 * As an _Id_ (§[II.5.3](ii.5.3-identifiers.md)).
