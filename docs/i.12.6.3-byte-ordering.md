## I.12.6.3 Byte ordering

For data types larger than 1 byte, the byte ordering is dependent on the target CPU. Code that depends on byte ordering might not run on all platforms. The PE file format (see §[I.12.2](#todo-missing-hyperlink)) allows the file to be marked to indicate that it depends on a particular type ordering.
