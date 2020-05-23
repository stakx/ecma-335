## VI.E.2 Language- and compiler-controllable behavior

The following aspects of program behavior can be controlled through language design or careful generation of CIL by a language-specific compiler. The CLI provides all the support necessary to control the behavior, but the default is to allow implementation-specific optimizations.

 1. Unverifiable code can access arbitrary memory and cannot be guaranteed to be portable

 2. Floating point &ndash; compiler can force all intermediate values to known precision

 3. Integer overflow &ndash; compiler can force overflow checking

 4. Native integer type need not be exposed, or can be exposed for opaque handles only, or can reliably recast with overflow check to known size values before use. Note that "free conversion" between native integer and fixed-size integer without overflow checks will not be portable.

 5. Deterministic initialization of types is portable, but "before first reference to static variable" is not. Language design can either force all initialization to be deterministic (cf. Java) or can restrict initialization to deterministic cases (i.e., simple static assignments).
