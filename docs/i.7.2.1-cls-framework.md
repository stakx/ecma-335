## I.7.2.1 CLS framework

A library consisting of CLS-compliant code is herein referred to as a *framework*. Frameworks are designed for use by a wide range of programming languages and tools, including both CLS consumer and extender languages. By adhering to the rules of the CLS, authors of libraries ensure that the libraries will be usable by a larger class of tools than if they chose not to adhere to the CLS rules. The following are some additional guidelines that CLS-compliant frameworks should follow:

 * Avoid the use of names commonly used as keywords in programming languages.

 * Not expect users of the framework to be able to author nested types.

 * Assume that implementations of methods of the same name and signature on different interfaces are independent.

 * Not rely on initialization of value types to be performed automatically based on specified initializer values.

 * Assume users can instantiate and use generic types and methods, but do not require them to define new generic types or methods, or deal with partially constructed generic types.

Frameworks shall not:

 * Require users to define new generic types/methods, override existing generic methods, or deal with partially constructed generics in any way.

 A CLS Rule applies to this topic; see the normative text at the end of §[7.2](#todo-missing-hyperlink).
