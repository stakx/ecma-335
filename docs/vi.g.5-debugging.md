## VI.G.5 Debugging

During initial debugging, set `System.Threading.Parallel.ParallelEnvironment.MaxThreads` to 1, which causes sequential execution of the parallel loop classes. Once your code runs correctly sequentially, experiment with setting `System.Threading.Parallel.ParallelEnvironment.MaxThreads` to higher values. In final production code, it is preferable to not set it at all, because it affects parallel loops everywhere in the application domain.
