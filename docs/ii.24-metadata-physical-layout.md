## II.24 Metadata physical layout

The physical on-disk representation of metadata is a direct reflection of the logical representation described in §[II.22](#todo-missing-hyperlink) and §[II.23](#todo-missing-hyperlink). That is, data is stored in streams representating the metadata tables and heaps. The main complication is that, where the logical representation is abstracted from the number of bytes needed for indexing into tables and columns, the physical representation has to take care of that explicitly by defining how to map logical metadata heaps and tables into their physical representations.

Unless stated otherwise, all binary values are stored in little-endian format.
