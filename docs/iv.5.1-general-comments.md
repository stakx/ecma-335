## IV.5.1 General comments

Unless stated otherwise in the documentation of a method, all copy operations are shallow, not deep. Some methods traffic in "default values". For a reference type, the default value is null; for a nullable value type, the default value is `HasValue` returns false; for a non-nullable value type, the default value is all-bits-zero (which for Boolean represents false, and for all arithmetic types represents zero).
