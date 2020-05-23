## VI.G.3 ParallelForEach

`ParallelForEach` should be used to parallelize a loop that iterates over a collection that supports the usual enumerator pattern. Below is an example that iterates over a list of file names.

_[Example:_

 ```csharp
 List<string> files = ...;
 new ParallelForEach(files).Run( delegate(filename) {
     FileStream f = new FileStream( filename, FileMode.Open );
     ...read file f and process it...
     f.Close();
 });
 ```

_end example]_
