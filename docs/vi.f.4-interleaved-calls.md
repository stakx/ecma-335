## VI.F.4 Interleaved calls

One potential hazard that users should look out for is that when a relaxed method calls another relaxed method, checks can appear to migrate from callee to caller and vice versa. Thus, methods that enforce program invariants that must be maintained in spite of faults should be marked as being strict for faults whose retiming may break the invariant.

For example, the method `T.M` below keeps `x`+`y` invariant.

_[Example:_

 ```ilasm
 .class M {
   .field public int32 x;
   .field public int32 y;
   .method public void T() cil managed {
     .maxstack 2
     ldarg.0   // Compute x=x-1

     dup
     ldfld x
     ldc.i4.1
     sub
     stfld x

     ldarg.0   // Compute y=y+1 

     dup
     ldfld y
     ldc.i4.1
     add
     stfld y
   }
   ...
 }
 ```

_end example]_

If this method is relaxed, and the caller is also relaxed, then the caller would be allowed, in the absence of constraining data or control dependences, to interleave the call with other instructions in the caller. If one of those other interleaved instructions faults, then any or all of `M`'s side effects might be suppressed. Thus, method `M` should be marked as strict if it is important to prevent a fault from destroying the invariant.

This "interference" from the caller is potentially annoying, but seems to be intrinsic to any definition of relaxed exceptions that permits both:

 1. instruction reordering and

 2. inlined method calls are at least as fast as manual inlining.
