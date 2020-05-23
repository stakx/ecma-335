## VI.F.5.1 Hoisting checks out of a loop

In a relaxed method, bounds checks for arithmetically progressing indices can be hoisted out of a loop, and only the extremes are checked. For example, consider:

 ```csharp
 for( int i=lower; i<upper; ++i ) {
     a[i] = b[i];
     c[i] = d[i];
 }
 ```

In a strict method, the bounds checks on `a` and `b` are difficult to hoist, because the assignment to `c[i]` is control-dependent on success of all the bounds checks in the loop. If a fault causes the loop to end prematurely, the initial prefixes of `a` and `c` must be written up to where the fault occurred. The hoisting can be of course done via "two versioning", but that would double the size of the generated code.

In relaxed methods, the bounds checks can easily be hoisted without resorting to two-versioning, so that the code executes as if written:

 ```csharp
 if(lower < upper) {
     // “Landing pad” in compiler parlance.
     if( lower < 0 || upper > a.Length || upper > b.Length || upper > c.Length
         || upper > d.Length)
         throw IndexOutOfRangeException; 
     int i=lower;
     do {
         a[i] = b[i]; // Unchecked
         c[i] = d[i]; // Unchecked
     }
     while( ++i<upper );
 }
 ```

Notice that the rewrite implicitly hoists the check for `NullReferenceException` too. With strict exceptions, that hoisting would not be valid, because perhaps `a[0]=b[0]` succeeds but then `c` is null. For similar reasons, relaxed exceptions (specifically, with the exceptions indicated by `CompilationRelaxations.RelaxedArrayExceptions` and `CompilationRelaxations.RelaxedNullReferenceException` relaxed) enables the hoisting of the checks for `ArrayTypeMismatchException` for both assignments. Notice that relaxation allows the checks to be hoisted, not removed.
