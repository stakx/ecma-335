## II.14.6.3 Asynchronous calls to delegates

In the asynchronous mode, the call is dispatched, and the caller shall continue execution without waiting for the method to return. The called method shall be executed on a separate thread.

To call delegates asynchronously, the `BeginInvoke` and `EndInvoke` methods are used.

**Note:** if the caller thread terminates before the callee completes, the callee thread is unaffected. The callee thread continues execution and terminates silently

**Note:** the callee can throw exceptions. Any unhandled exception propagates to the caller via the `EndInvoke` method.
