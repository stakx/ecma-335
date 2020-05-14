## III.1.8.1.3 Merging stack states

As the verification algorithm simulates all control flow paths it shall merge the simulated stack state with any existing stack state at the next CIL instruction in the flow. If there is no existing stack state, the simulated stack state is stored for future use. Otherwise the merge shall be computed as follows and stored to replace the existing stack state for the CIL instruction. If the merge fails, the verification algorithm shall fail.

The merge shall be computed by comparing the number of slots in each stack state. If they differ, the merge shall fail. If they match, then the overall merge shall be computed by merging the states slot-by-slot as follows. Let `T` be the type from the slot on the newly computed state and S be the type from the corresponding slot on the previously stored state. The merged type, `U`, shall be computed as follows (recall that `S` := `T` is the compatibility function defined in §[III.1.8.1.2.2](iii.1.8.1.2.2-controlled-mutability-managed-pointers.md)):

 1. if `S` := `T` then `U`=`S`

 2. Otherwise, if `T` := `S` then `U`=`T`

 3. Otherwise, if `S` and `T` are both object types, then let `V` be the closest common supertype of `S` and `T` then `U`=`V`.

 4. Otherwise, the merge shall fail.

Merging a controlled-mutability managed pointer with an ordinary (that is, non-controlled-mutability) managed pointer to the same type results in a controlled-mutability managed pointer to that type.
