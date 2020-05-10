# Contribution guidelines

ECMA-335 is a large document, and transcribing it in its entirety will take time. If you would like to help and transcribe one or more parts of the document, simply submit a pull request.

## File organization

At the moment, all Markdown transcription files of ECMA-335 are found in the `docs/` folder. There is one Markdown file (having a `.md` suffix) per document heading.

Sections vary greatly in length, but I have chosen not to put several sections in one file, even when they're only a single sentence long, since I don't want to have to think about which sections to group, and which ones to keep separate.

The file name of each document corresponds closely to the heading of the section it contains. File names are all lower-case, and whitespace has been replaced with a dash (`-`). Special characters are either removed completely or, in a few cases, rephrased (e.g. `ref` instead of `&`).

## Formatting guidelines

For the most part, I have tried to stay as close to the original document with respect to formatting. However, in some cases, this either isn't possible (due to the limited formatting possible with Markdown) or not ideal, since the original document contains a lot of inconsistencies regarding formatting. I have therefore chosen to follow these principles:

#### Headings:

 * All section headings are level-2 headings (`##`) and, as mentioned above, there should only be one of those per Markdown file.

 * Table and figure captions, where present, use level-4 headings (`####`). They always precede the table or figure (which is a departure from the original document, where figure captions succeed the figure, not vice versa). The rationale behind this decision is to make hyperlinks to such content elements work better (you typically want to jump to the beginning of such content, not to its end).

#### Fonts:

 * Single words may be in _italic_ or **bold** for emphasis. I'm mostly following the original document here.

 * Metadata table names (such as _Assembly_ or _TypeDef_) and table row names (such as _Flags_, _Parent_, _Name_) are also in italic.

 * ILAsm instruction mnemonics (such as `nop` or `ldc.i4.1`) are in a `fixed-width` code font. (In the original document, a slightly enlarged sans-serif font is used; we don't have that much flexibility in Markdown.)

 * ILAsm keywords and directives (such as **.assembly**, **.maxstack** or **prejitgrant**) are in bold.

#### Illustrations:

 * Since they're already quite low-quality even in the original document, I'm creating screenshots of them. I'm viewing those in Firefox (set to 125 % zoom) on a notebook with a 1920&times;1080 screen resolution and 150% OS font zoom.

 * All screenshots are stored as non-transparent PNG image files, preserving the white background that results from viewing the original PDF file.

 * The image files are usually named like the Markdown file from where they will be referenced, with a `-figure-X.png` suffix added to it.

#### Tables:

 * No initial or trailing `|` delimiters are used.

 * No padding is applied to table cell content so that columns would be neatly aligned... for now.

 * `|` however is surrounded on both sides with a single whitespace.
