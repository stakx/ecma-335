## VI.C.4.1 Top-level instruction syntax

 | _\<instr\>_ ::= | &nbsp;
 | ---- | ----
 | _\<instr_brtarget\>_ _\<int32\>_
 | \| _\<instr_brtarget\>_ _\<label\>_
 | \| _\<instr_field\>_ _\<type\>_ [ _\<typeSpec\>_ `::` ] _\<id\>_
 | \| _\<instr_i\>_ _\<int32\>_
 | \| _\<instr_i8\>_ _\<int64\>_
 | \| _\<instr_method\>_ _\<callConv\>_ _\<type\>_ [ _\<typeSpec\>_ `::` ] _\<methodName\>_ `(` _\<parameters\>_ `)`
 | \| _\<instr_none\>_
 | \| _\<instr_phi\>_ _\<int16\>_*
 | \| _\<instr_r\>_ `(` _\<bytes\>_ `)` | _\<bytes\>_ represent the binary image of float or double (4 or 8 bytes, respectively)
 | \| _\<instr_r\>_ _\<float64\>_
 | \| _\<instr_r\>_ _\<int64\>_ | integer is converted to float with possible loss of precision
 | \| _\<instr_sig\>_ _\<callConv\>_ _\<type\>_ `(` _\<parameters\>_ `)`
 | \| _\<instr_string\>_ `bytearray` `(` _\<bytes\>_ `)`
 | \| _\<instr_string\>_ _\<QSTRING\>_
 | \| _\<instr_switch\>_ `(` _\<labels\>_ `)`
 | \| _\<instr_tok\>_ `field` _\<type\>_ [ _\<typeSpec\>_ `::` ] _\<id\>_
 | \| _\<instr_tok\>_ b _\<callConv\>_ _\<type\>_ [ _\<typeSpec\>_ `::` ] _\<methodName\>_ `(` _\<parameters\>_ `)`
 | \| _\<instr_tok\>_ _\<typeSpec\>_
 | \| _\<instr_type\>_ _\<typeSpec\>_
 | \| _\<instr_var\>_ _\<int32\>_
 | \| _\<instr_var\>_ _\<localname\>_
