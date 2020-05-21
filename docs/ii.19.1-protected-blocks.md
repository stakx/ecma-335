## II.19.1 Protected blocks

A *try*, or *protected*, or *guarded*, block is declared with the **.try** directive.

 | _TryBlock_ ::= | Descriptions
 | ---- | ----
 | `.try` _Label_ `to` _Label_ | Protect region from first label to prior to second.
 | \| `.try` _ScopeBlock_ | _ScopeBlock_ is protected

In the first case, the protected block is delimited by two labels. The first label is the first instruction to be protected, while the second label is the instruction just beyond the last one to be protected. Both labels shall be defined prior to this point.

The second case uses a scope block (§[II.15.4.4](#todo-missing-hyperlink)) after the **.try** directive&mdash;the instructions within that scope are the ones to be protected.
