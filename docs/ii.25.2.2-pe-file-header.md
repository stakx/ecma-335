## II.25.2.2 PE file header

Immediately after the PE signature is the PE File header consisting of the following:

 Offset | Size | Field | Description
 ---- | ---- | ---- | ----
 0 | 2 | Machine | Always 0x14c.
 2 | 2 | Number of Sections | Number of sections; indicates size of the Section Table, which immediately follows the headers.
 4 | 4 | Time/Date Stamp | Time and date the file was created in seconds since January 1<sup>st</sup> 1970 00:00:00 or 0.
 8 | 4 | Pointer to Symbol Table | Always 0 (§[II.24.1](ii.24.1-fixed-fields.md)).
 12 | 4 | Number of Symbols | Always 0 (§[II.24.1](ii.24.1-fixed-fields.md)).
 16 | 2 | Optional Header Size | Size of the optional header, the format is described below.
 18 | 2 | Characteristics | Flags indicating attributes of the file, see §[II.25.2.2.1](ii.25.2.2.1-characteristics.md).
