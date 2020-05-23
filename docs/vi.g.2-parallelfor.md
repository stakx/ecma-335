## VI.G.2 ParallelFor

`ParallelFor` should be used when parallelizing a loop whose index takes on values from 0 to _n_-1. Below is an example of how `ParallelFor` might be used in C# to parallelize the iterations in a cellular automaton on a grid. The variables `oldState` and `newState` are two-dimensional arrays the respectively hold the old and new states of the cells.

_[Example:_

 ```csharp
 int n = oldState.GetLength(0);
 new ParallelFor(n-2).Run(delegate(int iteration) {
     int i = iteration+1;
     for (int j = 1; j < n-1; j++){
         int count =
             (oldState[i-1,j-1] + oldState[i-1,j] + oldState[i-1,j+1] +
              oldState[  i,j-1] +                   oldState[  i,j+1] +
              oldState[i+1,j-1] + oldState[i+1,j] + oldState[i+1,j+1]);
              byte s = (count | oldState[i, j]) == 3 ? Live : Dead;
              newState[i, j] = s;
     }
 });
 ```

_end example]_ There are two key points to notice. First, the outer loop logically iterates `i` from 1 to _n_-1. However, the `ParallelFor` class always iterates starting at 0. Hence the desired logical value of `i` is computed from the physical loop iteration number iteration. Second, outer loop is parallel; the inner loop is sequential. In general, if the loop iterations are independent for both inner and outer loops, it is better to parallelize the outer loop because doing so yields the largest grain size.
