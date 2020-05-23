## IV.5.10 Parallel library

This Library is not part of any Profile, but can be supplied as part of any CLI implementation. The purpose of the extended threading library is twofold:

 1. Provide easy parallelism for non-expert programmers, so that multithreaded CPUs can be exploited. The Profile stresses simplicity over large scalability.

 2. Not require changing the virtual machine or source languages. All features of the Profile can be implemented as a library on top of the existing CLI. The Profile can be used in conjunction with any CLI language that supports delegates.

The loop class hierarchy is summarized below:

 ```
 ParallelLoop
        ParallelWhile
        ParallelForEach
        ParallelFor
 ```

The base class `ParallelLoop` factors out common functionality for parallel looping over a collection of values. The three derived classes distinguish three common kinds of parallel looping.  If the collection might grow while being processed, then use ParallelWhile.  Otherwise, if the collection implements `IEnumerable`, use `ParallelForEach`. If the collection or collections are indexible by `int32`, use `ParallelFor`. To choose the kind of loop to use in a specific situation, consider how the loop could be written sequentially. If the loop could be written using "`for (int i=0; i<n; ++i )`", and `n` is known before the loop executes, use `ParallelFor`. If the loop could be written with a `foreach` statement, over collection that does not change while the foreach is running, use `ParallelForEach`. If the loop could be written "`while (collection is not yet empty) {remove item from collection and process it}`", use `ParallelWhile`. When there is a choice, use `ParallelFor` if possible, because it is significantly more efficient.

**Name used in XML:** Parallel

**CLI Feature Requirement:** BCL
