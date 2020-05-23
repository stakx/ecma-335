## VI.G.4 ParallelWhile

Use `ParallelWhile` to parallelize a loop over a collection that grows while it is being processed. Below is an excerpt showing how `ParallelWhile` might be used for parallel update of cells in a spreadsheet. Each cell is presumed to have a set `Successors` of cells that depend upon it, and a field `PredecessorCount` that is initially zero. Each cell must be updated before any of its successors is updated.

_[Example:_

 ```csharp
 void UpdateAll() {
     // Phase 1: Count predecessors
     foreach (Cell c in SetOfAllCells)
         foreach (Cell dependent in currentCell.Sucessors)
             ++dependent.PredecessorCount 

    // Phase 2: Find cells with no predecessors
     ParallelWhile<Cell> parallelWhile = new ParallelWhile<Cell>();
     foreach (Cell c in SetOfAllCells)
         if (c.PredecessorCount]==0)
             parallelWhile.Add(c); 

    // Phase 3: Do the updating
     parallelWhile.Run( delegate(Cell c) {
         ....update value of cell c...
         foreach (Cell dependent in c.Sucessors)
             if (Interlocked.Decrement(ref dependent.PredecessorCount)==0)
                 parallelWhile.Add(dependent);
     });
 }
 ```

_end example]_

The example is structured as a classic topological sort. Phases 1 and 2 are sequential code. Because they are sequential, they do not have to update `PredecessorCount` in a thread-safe manner. Phase 3 is parallel: it starts processing all cells that phase 2 found were ready to update, and any cells found by phase 3 itself that were found ready to run. Because phase 3 is parallel, it updates `PredecessorCount` in a thread-safe manner.
