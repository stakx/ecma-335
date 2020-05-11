## II.25.4.3 Fat format

The fat format is used whenever the tiny format is not sufficient. This can be true for one or more of the following reasons:

 * The method is too large to encode the size (i.e., at least 64 bytes)

 * There are exceptions

 * There are extra data sections

 * There are local variables

 * The operand stack needs more than 8 entries

A fat header has the following structure

 Offset | Size | Field | Description
 ---- | ---- | ---- | ---- 
 0 | 12 (bits) | **Flags** | Flags (`CorILMethod_FatFormat` shall be set in bits 0:1, see §[II.25.4.4](#todo-missing-hyperlink))
 12 (bits) | 4 (bits) | **Size** | Size of this header expressed as the count of 4-byte integers occupied (currently 3)
 2 | 2 | **MaxStack** | Maximum number of items on the operand stack
 4 | 4 | **CodeSize** | Size in bytes of the actual method body
 8 | 4 | **LocalVarSigTok** | Meta Data token for a signature describing the layout of the local variables for the method. 0 means there are no local variables present
