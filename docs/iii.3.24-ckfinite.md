## III.3.24 ckfinite &ndash; check for a finite real number

 | Format | Assembly Format | Description
 | ---- | ---- | ----
 | C3 | `ckfinite` | Throw `ArithmeticException` if _value_ is not a finite number.

#### Stack Transition:

&hellip;, _value_  &hellip;, _value_

#### Description:

The `ckfinite` instruction throws `ArithmeticException` if _value_ (a floating-point number) is either a "not a number" value (**NaN**) or +/- infinity value. `ckfinite` leaves the value on the stack if no exception is thrown. Execution behavior is unspecified if _value_ is not a floating-point number.

#### Exceptions:

`System.ArithmeticException` is thrown if _value_ is a **NaN** or an infinity.

#### Correctness:

Correct CIL guarantees that _value_ is a floating-point number.

#### Verifiability:

There are no additional verification requirements.
