## II.7 Types and signatures

The metadata provides mechanisms to both define and reference types. §[II.10](#todo-missing-hyperlink) describes the metadata associated with a type definition, regardless of whether the type is an interface, class, or value type. The mechanism used to reference types is divided into two parts:

 * A logical description of user-defined types that are referenced, but (typically) not defined in the current module.  This is stored in a table in the metadata (§[II.22.38](#todo-missing-hyperlink)).

 * A signature that encodes one or more type references, along with a variety of modifiers. The grammar non-terminal *Type* describes an individual entry in a signature.  The encoding of a signature is specified in §[II.23.1.16](#todo-missing-hyperlink).
