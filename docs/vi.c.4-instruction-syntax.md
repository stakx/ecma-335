## VI.C.4 Instruction syntax

While each subclause specifies the exact list of instructions that are included in a grammar class, this information is subject to change over time. The precise format of an instruction can be found by combining the information in §[VI.C.1](vi.c.1-ilasm-keywords.md) with the information in the following table:

#### Table 10: Instruction Syntax classes

 | Grammar Class | Format(s) Specified in §[VI.C.1](vi.c.1-ilasm-keywords.md)
 | ---- | ----
 | _\<instr_brtarget\>_ | `InlineBrTarget`, `ShortInlineBrTarget`
 | _\<instr_field\>_ | `InlineField`
 | _\<instr_i\>_ | `InlineI`, `ShortInlineI`
 | _\<instr_i8\>_ | `InlineI8`
 | _\<instr_method\>_ | `InlineMethod`
 | _\<instr_none\>_ | `InlineNone`
 | _\<instr_phi\>_ | `InlinePhi`
 | _\<instr_r\>_ | `InlineR`, `ShortInlineR`
 | _\<instr_rva\>_ | `InlineRVA`
 | _\<instr_sig\>_ | `InlineSig`
 | _\<instr_string\>_ | `InlineString`
 | _\<instr_switch\>_ | `InlineSwitch`
 | _\<instr_tok\>_ | `InlineTok`
 | _\<instr_type\>_ | `InlineType`
 | _\<instr_var\>_ | `InlineVar`, `ShortInlineVar`
