## VI.F.3 Finally handlers still guaranteed once a try block is entered

Because relaxed sequences cannot span across protected non-trivial region boundaries, this guarantee still holds. This is essential for preserving the usual idiom for acquiring and releasing a resource:

_[Example:_

 ```csharp
 bool acquired = false;
 try {
     acquire(ref acquired);
     S1;
 }
 finally {
     if (acquired) release resource;
 }
 ```

_end example]_

Quite often, the programmer knows little about how _S1_ might fail. If the "acquire", _S1_, and "release" were allowed to be part of the same relaxed sequence, and _S1_ failed, then the acquire and/or release portions could be suppressed at whim (by the rest of the rules). By forcing the three parts to be in three separate sequences, we eliminate problems with regard to _S1_ failing. Of course, we do not eliminate problems that might arise if something else in the sequence for "acquire" fails, but that is a problem that can't be dealt with at the CLI level, and must be left to the programmer.

Relaxed sequences are allowed to span trivial region boundaries because optimizers were already allowed to remove such regions even when strict exception handling is specified.
