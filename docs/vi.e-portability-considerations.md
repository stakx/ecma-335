## VI.Annex E Portability considerations

This clause gathers together information about areas where this Standard deliberately leaves leeway to implementations. This leeway is intended to allow compliant implementations to make choices that provide better performance or add value in other ways. But this leeway inherently makes programs non-portable. This clause describes the techniques that can be used to ensure that programs operate the same way independent of the particular implementation of the CLI.

Note that code can be portable even though the data is not, both due to size of integer type and direction of bytes in words. Read/write invariance holds provided the read method corresponds to the write method (i.e., write as int read as int works, but write as string read as int might not).
