## III.1.3 Stack transition diagram

The stack transition diagram displays the state of the evaluation stack before and after the instruction is executed. Below is a typical stack transition diagram.

&hellip;, _value1_, _value2_ &rarr; &hellip;, _result_

This diagram indicates that the stack shall have at least two elements on it, and in the definition the topmost value ("top-of-stack" or "most-recently-pushed") will be called _value2_ and the value 
underneath (pushed prior to _value2_) will be called _value1_. (In diagrams like this, the stack grows to the right, across the page). The instruction removes these values from the stack and replaces them by another value, called _result_ in the description.
