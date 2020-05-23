## VI.Annex G Parallel library

> _This clause contains only informative text_

This Annex shows several complete examples written using the parallel library

The classes in `System.Threading.Parallel` enable you to write parallel loops that take advantage of hardware that can execute multiple threads in parallel, without having to get involved in the details of dispatching and synchronizing multiple threads.

_[Example:_ The library lets you take an ordinary sequential loop like this:

 ```csharp
 for( int i=0; i<n; ++i ) {
     loop body
 }
 ```

and rewrite it as a parallel loop like this:

 ```csharp
 new ParallelFor().Run( delegate( int i ) {
     loop body
 });
 ```

_end example]_
