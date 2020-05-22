## II.15.1.3 Method references

A _MethodRef_, or method reference, is a reference to a method. It is used when a method is called and that method's definition lies in another module or assembly. A _MethodRef_ shall be resolved by the VES into a _Method_ before the method is called at runtime. If a matching _Method_ cannot be found, the VES shall throw a `System.MissingMethodException`. See §[II.22.25](ii.22.25-memberref-0x0a.md).
