## II.5.4 Labels and lists of labels

Labels are provided as a programming convenience; they represent a number that is encoded in the metadata. The value represented by a label is typically an offset in bytes from the beginning of the current method, although the precise encoding differs depending on where in the logical metadata structure or CIL stream the label occurs. For details of how labels are encoded in the metadata, see clauses §[II.22](ii.22-metadata-logical-format-tables.md) through §[II.25](ii.25-file-format-extensions-to-pe.md); for their encoding in CIL instructions see [Partition III](#todo-missing-hyperlink).

A simple label is a special name that represents an address. Syntactically, a label is equivalent to an _Id_. Thus, labels can be single quoted and can contain Unicode characters.

A list of labels is comma separated, and can be any combination of simple labels.

 | _LabelOrOffset_ ::=
 | ----
 | _Id_

 | _Labels_ ::=
 | ----
 | _LabelOrOffset_ [ `','` _LabelOrOffset_ ]*

_[Note:_ In a real assembler the syntax for _LabelOrOffset_ might allow the direct specification of a number rather than requiring symbolic labels. _end note]_

ILAsm distinguishes between two kinds of labels: code labels and data labels. Code labels are followed by a colon ("`:`") and represent the address of an instruction to be executed. Code labels appear before an instruction and they represent the address of the instruction that immediately follows the label. A particular code label name shall not be declared more than once in a method.

In contrast to code labels, data labels specify the location of a piece of data and do not include the colon character. A data label shall not be used as a code label, and a code label shall not be used as a data label. A particular data label name shall not be declared more than once in a module.

 | _CodeLabel_ ::=
 | ----
 | _Id_ `':'`

 | _DataLabel_ ::=
 | ----
 | _Id_

_[Example:_ The following defines a code label, `ldstr_label`, that represents the address of the `ldstr` instruction:

 ```ilasm
 ldstr_label: ldstr "A label"
 ```

_end example]_
