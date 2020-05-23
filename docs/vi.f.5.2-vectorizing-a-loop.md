## VI.F.5.2 Vectorizing a loop

Vectorizing a loop usually requires knowing two things:

 1. The loop iterations are independent

 2. The number of loop iterations is known.

In a method relaxed for the checks that might fault, part 1 is frequently false, because the possibility of a fault induces a control dependence from each loop iteration to succeeding loop iterations. In a relaxed method, those control dependences can be ignored.

In most cases, relaxed methods simplify vectorization by allowing checks to be hoisted out of a loop.  Nevertheless, even when such hoisting is not possible, ignoring cross-iteration dependences implied by faults can be crucial to vectorization for "short vector" SIMD hardware such as IA-32 SSE or PowerPC Altivec.

For example, consider this loop:

 ```csharp
 for (k = 0; k < n; k++) {
     x[k] = x[k] + y[k] * s[k].a;
 }
 ```

where `s` is an array of references. The checks for null references cannot be hoisted out of the loop, even in a relaxed context. But relaxed does allow "unroll-and-jam" to be applied successfully. The loop can be unrolled by a factor of 4 to create aggregate iterations, and the checks hoisted to the top of each aggregate iteration.
