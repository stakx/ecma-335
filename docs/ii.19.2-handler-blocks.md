## II.19.2 Handler blocks

 | _HandlerBlock_ ::= | Description
 | ---- | ----
 | \| `handler` _Label_ `to` _Label_ | Handler range is from first label to prior to second
 | \| _ScopeBlock_ | _ScopeBlock_ is the handler block

In the first case, the labels enclose the instructions of the handler block, the first label being the first instruction of the handler while the second is the instruction immediately after the handler. In the second case, the handler block is just a scope block.
