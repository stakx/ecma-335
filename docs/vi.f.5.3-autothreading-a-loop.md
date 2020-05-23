## VI.F.5.3 Autothreading a loop

Below is a C# rendition of the key routine for a sparse matrix multiply from the SciMark 2.0 suite:

 ```csharp
 int M = row.Length - 1;
 for (int r=0; r<M; r++) {
     double sum = 0.0;
     int rowR = row[r];
     int rowRp1 = row[r + 1];
     for (int i = rowR; i < rowRp1; i++)
         sum += x[ col[i] ] * val[i];
     y[r] = sum;
 }
 ```

This is an attractive candidate for parallelizing the outer loop. In a strict method, doing so is quite difficult; either we have to know `x[col[i]]` never faults, or have a way to make the writes to `y[r]` speculative.

If the method is relaxed for the possible faults, parallelizing the outer loop is only a matter of solving the usual data dependence problem ("Does `y[r]` ever alias `x[col[i]]`"). If any iteration of the loop faults, the relaxed exceptions allows the other iterations to quit early or keep going without concern for what state they leave `y` in.
