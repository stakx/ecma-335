### III.2.4 tail. (prefix) &mdash; call terminates current method

 Format | Assembly Format | Description
 ---- | ---- | ----
 FE 14 | `tail.` | Subsequent call terminates current method 

#### Description:

The `tail.` prefix shall immediately precede a `call`, `calli`, or `callvirt` instruction. It indicates that the current method's stack frame is no longer required and thus can be removed before the call instruction is executed. Because the value returned by the call will be the value returned by this method, the call can be converted into a cross-method jump.

The evaluation stack shall be empty except for the arguments being transferred by the following call. The instruction following the call instruction shall be a `ret`. Thus the only valid code sequence is

 `tail.` `call` (or `calli` or `callvirt`) *somewhere*  
 `ret`

Correct CIL shall not branch to the `call` instruction, but it is permitted to branch to the `ret`. The only values on the stack shall be the arguments for the method being called.

The `tail.` `call` (or `calli` or `callvirt`) instruction cannot be used to transfer control out of a try, filter, catch, or finally block. See [Partition I](#todo-missing-hyperlink).

The current frame cannot be discarded when control is transferred from untrusted code to trusted code, since this would jeopardize code identity security. Security checks can therefore cause the `tail.` to be ignored, leaving a standard call instruction.

Similarly, in order to allow the exit of a synchronized region to occur after the call returns, the `tail.` prefix is ignored when used to exit a method that is marked synchronized.

There can also be implementation-specific restrictions that prevent the `tail.` prefix from being obeyed in certain cases. While an implementation is free to ignore the `tail.` prefix under these circumstances, they should be clearly documented as they can affect the behavior of programs.

CLI implementations are required to honor `tail.` call requests where caller and callee methods can be statically determined to lie in the same assembly; and where the caller is not in a synchronized region; and where caller and callee satisfy all conditions listed in the "Verifiability" rules below. (To "honor" the `tail.` prefix means to remove the caller's frame, rather than revert to a regular call sequence). Consequently, a CLI implementation need not honor `tail.` `calli` or `tail.` `callvirt` sequences.

_[Rationale:_ `tail.` calls allow some linear space algorithms to be converted to constant space algorithms and are required by some languages. In the presence of `ldloca` and `ldarga` instructions it isn't always possible for a compiler from CIL to native code to optimally determine when a tail. can be automatically inserted. _end rationale]_

#### Exceptions:

None.

#### Correctness:

Correct CIL obeys the control transfer constraints listed above. In addition, no managed pointers can be passed to the method being called if they point into the stack frame that is about to be removed. The return type of the method being called shall be *assignable-to* (§[I.8.7.3](i.8.7.3-general-assignment-compatibility.md)) the return type of the current method.

#### Verifiability:

Verification requires that no managed pointers are passed to the method being called, since it does not track pointers into the current frame.
