## IV.7.1 Semantics

The XML specification conforms to the Document Type Definition (DTD) in [Figure 0-4](#todo-missing-hyperlink). Only types that are included in a specified library are included in the XML.

There are three types of elements/attributes:

 * Normative: An element or attribute is normative such that the XML specification would be incomplete without it.

 * Informative: An element or attribute is informative if it specifies information that helps clarify the XML specification, but without it the specification still stands alone.

 * Rendering/Formatting: An element or attribute is for rendering or formatting if it specifies information to help an XML rendering tool.

 Unless explicitly stated otherwise, the text associated with an element or an attribute (e.g., `#PCDATA`, `#CDATA`) is normative or informative depending on the element or attribute with which it is associated, as described in the figure.

 _[Note:_ Many of the elements and attributes in the DTD are for rendering purposes. _end note]_

#### Figure 0-4: XML DTD

> ```xml
> <?xml version="1.0" encoding="UTF-8"?>
> <!ELEMENT AssemblyCulture (#PCDATA)>
> ```
> 
> (Normative) Specifies the culture of the assembly that defines the current type. Currently this value is always "none". It is reserved for future use.
> 
> ```xml
> <!ELEMENT AssemblyInfo (AssemblyName, ((AssemblyPublicKey, AssemblyVersion) | (AssemblyVersion, AssemblyPublicKey)), AssemblyCulture, Attributes)>
> ```
> 
> (Normative) Specifies information about the assembly of a given type. This information corresponds to sections of the metadata of an assembly as described in Partition II, and includes information from the `AssemblyName`, `AssemblyPublicKey`, `AssemblyVersion`, `AssemblyCulture` and `Attributes` elements.
> 
> ```xml
> <!ELEMENT AssemblyName (#PCDATA)>
> ```
> 
> (Normative) Specifies the name of the assembly to which a given type belongs. For example, all of the types in the BCL are members of the "mscorlib" assembly.
> 
> ```xml
> <!ELEMENT AssemblyPublicKey (#PCDATA)>
> ```
> 
> (Normative) Specifies the public key of the assembly. The public key is represented as a 128-bit value.
> 
> ```xml
> <!ELEMENT AssemblyVersion (#PCDATA)>
> ```
> 
> (Normative) Specifies the version of the assembly in the form 2.0.x.y, where x is a build number and y is a revision number.
> 
> ```xml
> <!ELEMENT Attribute (AttributeName, Excluded?, ExcludedTypeName?, ExcludedLibraryName?)>
> ```
> 
> (Normative) Specifies the text for a custom attribute on a type or a member of a type. This includes the attribute name and whether or not the attribute type itself is contained in another library. If the `Excluded` element is omitted, it is assumed to have a value of 0.
> 
> ```xml
> <!ELEMENT AttributeName (#PCDATA)>
> ```
> 
> (Normative) Specifies the name of the custom attribute associated with a type or member of a type. Also contains the data needed to instantiate the attribute.
> 
> ```xml
> <!ELEMENT Attributes (Attribute*)>
> ```
> 
> (Normative) Specifies the list of the attributes on a given type or member of a type.
> 
> ```xml
> <!ELEMENT Base (BaseTypeName?, ExcludedBaseTypeName?, ExcludedLibraryName?)>
> ```
> 
> (Normative) Specifies the information related to the base type of the current type. Although the `ExcludedBaseTypeName` and `ExcludedLibraryName` elements are rarely found within this element, they are required when a type inherits from a type not found in the current library.
> 
> ```xml
> <!ELEMENT BaseTypeName (#PCDATA)>
> ```
> 
> (Normative) Specifies the fully qualified name of the class from which a type inherits (i.e., the type's base class).
> 
> ```xml
> <!ELEMENT Constraints (ParameterAttribute+, BaseTypeName?) >
> ```
> 
> (Normative) Specifies the constraints for a covariant or contravariant type parameter.
> 
> ```xml
> <!ELEMENT Docs ((summary?, altmember?, altcompliant?, typeparam*, param*, returns?, value?, exception*, threadsafe?, remarks?, example?, permission?) | (typeparam*, param*, summary?, altmember?, altcompliant?, returns?, value?, exception*, threadsafe?, remarks?, example?, permission?) | (summary?, altmember?, altcompliant?, typeparam*, param*, returns?, value?, remarks?, threadsafe?, exception*, example?, permission?) | (typeparam*, param*, summary?, altmember?, altcompliant?, returns?, value?, remarks?, threadsafe?, exception*, example?, permission?))>
> ```
> 
> (Normative) Specifies the textual documentation of a given type or member of a type.
> 
> ```xml
> <!ELEMENT Excluded (#PCDATA)>
> ```
> 
> (Normative) Specifies, by a '0' or '1', whether a given member can be excluded from the current type in the absence of a given library. '0' specifies that it cannot be excluded.
> 
> ```xml
> <!ELEMENT ExcludedBaseTypeName (#PCDATA)>
> ```
> 
> (Normative) Specifies the fully qualified name of the type that the current type must inherit from if a given library were present in an implementation. The library name is specified in the `ExcludedLibraryName` element. An example is the `System.Type` class that inherits from `System.Object`, but if the Reflection library is present, it must inherit from `System.Reflection.MemberInfo`.
> 
> ```xml
> <!ELEMENT ExcludedLibrary (#PCDATA)>
> ```
> 
> (Normative) Specifies the library that must be present in order for a given member of a type to be required to be implemented. For example, `System.Console.WriteLine(double)` need only be implemented if the ExtendedNumerics library is available.
> 
> ```xml
> <!ELEMENT ExcludedLibraryName (#PCDATA)>
> ```
> 
> (Normative) This element appears only in the description of custom attributes. It specifies the name of the library that defines the described attribute. For example, the member that is invoked when no member name is specified for `System.Text.StringBuilder` (in C#, this is the indexer) is called "`Chars`". The attribute needed for this is `System.Reflection.DefaultMemberAttribute`. This is found in the RuntimeInfrastructure library. This element is used with the `ExcludedTypeName` element.
> 
> ```xml
> <!ELEMENT ExcludedTypeName (#PCDATA)>
> ```
> 
> (Normative) Specifies the fully qualified name of the attribute that is needed for a member to succesfully specify the given attribute. This element is related to the `ExcludedLibraryName` element and is used for attributes.
> 
> ```xml
> <!ELEMENT Interface (InterfaceName, Excluded?)>
> ```
> 
> (Normative) Specifies information about an interface that a type implements. This element contains subelements specifying the interface name and whether another library is needed for the interface to be required in the current library. If the `Excluded` element is omitted, it is assumed to have a value of 0.
> 
> ```xml
> <!ELEMENT InterfaceName (#PCDATA)>
> ```
> 
> (Normative) Represents the fully-qualified interface name that a type implements.
> 
> ```xml
> <!ELEMENT Interfaces (Interface*)>
> ```
> 
> (Normative) Specifies information on the interfaces, if any, a type implements. There is one `Interface` element for each interface implemented by the type.
> 
> ```xml
> <!ELEMENT Libraries (Types+)>
> ```
> 
> (Normative) This is the root element. Specifies all of the information necessary for all of the class libraries of the standard. This includes all of the types and all children elements underneath.
> 
> ```xml
> <!ELEMENT Member (MemberSignature+, MemberType, Attributes?, ReturnValue, TypeParameters?, Parameters, MemberValue?, Docs, Excluded?, ExcludedLibrary*)>
> ```
> 
> (Normative) Specifies information about a member of a type. This information includes the signatures, type of the member, co/contra-variant type parameters, parameters, etc., all of which are elements in the XML specification. If the `Excluded` element is omitted, it is assumed to have a value of 0.
> 
> ```xml
> <!ATTLIST Member
>   MemberName NMTOKEN #REQUIRED
> ```
> 
> &emsp;&emsp;(Normative) `MemberName` specifies the name of the current member.
> 
> ```xml
> >
> 
> <!ELEMENT MemberOfLibrary (#PCDATA)>
> ```
> 
> (Normative) `PCDATA` is the name of the library containing the type.
> 
> ```xml
> <!ELEMENT MemberSignature EMPTY>
> ```
> 
> (Normative) Specifies the text (in source code format) for the signature of a given member of a type.
> 
> ```xml
> <!ATTLIST MemberSignature
>   Language CDATA #REQUIRED
> ```
> 
> &emsp;&emsp;(Normative) CDATA is the programming language in which the signature is written. All members are described in both ILAsm and C#.
> 
> ```xml
>   Value CDATA #REQUIRED
> ```
> 
> &emsp;&emsp;(Normative) CDATA is the text of the member signature in a given language.
> 
> ```xml
> >
> 
> <!ELEMENT MemberType (#PCDATA)>
> ```
> 
> (Normative) Specifies the kind of the current member. The member kinds are: method, property, constructor, field, and event.
> 
> ```xml
> <!ELEMENT MemberValue (#PCDATA)>
> ```
> 
> (Normative) Specifies the value of a static literal field.
> 
> ```xml
> <!ELEMENT Members (Member*)>
> ```
> 
> (Normative) Specifies information about all of the members of a given type.
> 
> ```xml
> <!ELEMENT PRE EMPTY>
> ```
> 
> (Rendering/Formatting) This element exists for rendering purposes only to specify, for example, that future text should be separated from the previous text
> 
> ```xml
> <!ELEMENT Parameter (Attributes?)>
> ```
> 
> (Normative) Specifies the information about a specific parameter of a method or property.
> 
> ```xml
>   <!ATTLIST Parameter
>     Name NMTOKEN #REQUIRED
> ```
> 
> &emsp;&emsp;&emsp;(Normative) Specifies the name of the parameter.
> 
> ```xml
>     Type CDATA #REQUIRED
> ```
> 
> &emsp;&emsp;&emsp;(Normative) Specifies the fully-qualified name of the type of the parameter.
> 
> ```xml
>     RefType CDATA #IMPLIED
> ```
> 
> &emsp;&emsp;&emsp;(Informative) Specifies whether the parameter is a ref, out or in parameter.
> 
> ```xml
> >
> 
> <!ELEMENT ParameterAttribute (#PCDATA) >
> ```
> 
> (Normative) Specifies the constraint attribute for a type parameter.
> 
> ```xml
> <!ELEMENT Parameters (Parameter*)>
> ```
> 
> (Normative) Specifies information for the parameters of a given method or property. The information specified is included in each Parameter element of this element. This element will contain one `Parameter` for each parameter of the method or property.
> 
> ```xml
> <!ELEMENT ReturnType (#PCDATA)>
> ```
> 
> (Normative) Specifies the fully-qualified name of the type that the current member returns.
> 
> ```xml
> <!ELEMENT ReturnValue (ReturnType?)>
> ```
> 
> (Normative) Specifies the return type of a member. `ReturnType` shall be present for all kinds of members except constructors.
> 
> ```xml
> <!ELEMENT SPAN (#PCDATA | para | paramref | SPAN | see | block)*>
> ```
> 
> (Rendering/Formatting) This element specifies that the text should be segmented from other text (e.g., with a carriage return). References to parameters, other types, and even blocks of text can be included within a `SPAN` element.
> 
> ```xml
> <!ELEMENT ThreadingSafetyStatement (#PCDATA)>
> ```
> 
> (Normative) Specifies a thread safety statement for a given type.
> 
> ```xml
> <!ELEMENT Type (TypeSignature+, MemberOfLibrary, AssemblyInfo, ThreadingSafetyStatement?, TypeParameters?, ((Docs, Parameters?, ReturnValue?, Base, Interfaces?) | (Base, Interfaces?, Parameters?, ReturnValue?, Docs)) , Attributes?, Members?, TypeExcluded)>
> ```
> 
> (Normative) Specifies all of the information for a given type.
> 
> ```xml
> <!ATTLIST Type
>   Name CDATA #REQUIRED
> ```
> 
> &emsp;&emsp;(Informative) Specifies the simple name (e.g., "`String`" rather than "`System.String`") of a given type.
> 
> ```xml
>   FullName CDATA #REQUIRED
> ```
> 
> &emsp;&emsp;(Normative) Specifies the fully-qualified name of a given type. For generic types, this includes the spelling of generic parameter names.
> 
> ```xml
>   FullNameSP CDATA #REQUIRED
> ```
> 
> &emsp;&emsp;(Informative) Specifies the fully-qualified name with each '`.`' of the fully qualified name replaced by an '`_`'.
> 
> ```xml
> >
> 
> <!ELEMENT TypeExcluded (#PCDATA)>
> ```
> 
> (Normative) `PCDATA` shall be '`0`'.
> 
> ```xml
> <!ELEMENT TypeParameter (Constraints*) >
> ```
> 
> (Normative) Specifies information about a specific type parameter in a class member.
> 
> ```xml
> <!ATTLIST TypeParameter
>   Name CDATA #REQUIRED
>  >
> ```
> 
> (Normative) Specifies the name of a specific type parameter.
> 
> ```xml
> <!ELEMENT TypeParameters (TypeParameter*)>
> ```
> 
> (Normative) Specifies information about all of the type parameters in a class member.
> 
> ```xml
> <!ELEMENT TypeSignature EMPTY>
> ```
> 
> (Normative) Specifies the text for the signature (in code representation) of a given type.
> 
> ```xml
> <!ATTLIST TypeSignature
>   Language CDATA #REQUIRED
> ```
> 
> &emsp;&emsp;(Normative) Specifies the language the specified type signature is written in. All type signatures are specified in both ILAsm and C#.
> 
> ```xml
>   Value CDATA #REQUIRED
> ```
> 
> &emsp;&emsp;(Normative) `CDATA` is the type signature in the specified language.
> 
> ```xml
> >
> 
> <!ELEMENT Types (Type+)>
> ```
> 
> (Normative) Specifies information about all of the types of a library.
> 
> ```xml
> <!ATTLIST Types
>   Library NMTOKEN #REQUIRED
> ```
> 
> &emsp;&emsp;(Normative) Specifies the library in which all of the types are defined. An example of such a library is "BCL".
> 
> ```xml
> >
> 
> <!ELEMENT altcompliant EMPTY>
> ```
> 
> (Informative) Specifies that an alternative, CLS compliant method call exists for the current non-CLS compliant method. For example, this element exists in the `System.IO.TextWriter.WriteLine(ulong)` method to show that `System.IO.TextWriter.WriteLine(long)` is an alternative, CLS compliant method.
> 
> ```xml
> <!ATTLIST altcompliant
>   cref CDATA #REQUIRED
> ```
> 
> &emsp;&emsp;(Informative) Specifies the link to the actual documentation for the alternative CLS compliant method. _[Note:_ In this specification, `CDATA` matches the documentation comment format specified in Appendix E of the C# language standard.]
> 
> ```xml
> >
> 
> <!ELEMENT altmember EMPTY>
> ```
> 
> element is used for operator overloads.
> 
> ```xml
> <!ATTLIST altmember
>   cref CDATA #REQUIRED
> ```
> 
> &emsp;&emsp;(Informative) Specifies the link to the actual documentation for the alternative member call. _[Note:_ In this specification, `CDATA` matches the documentation comment format specified in Appendix E of the C# language standard.]
> 
> ```xml
> >
> 
> <!ELEMENT block (#PCDATA | see | para | paramref | list | block | c | subscript | code | sup | pi)*>
> ```
> 
> (Rendering/Formatting) Specifies that the children should be formatted according to the type specified as an attribute.
> 
> ```xml
> <!ATTLIST block
>   subset CDATA #REQUIRED
> ```
> 
> &emsp;&emsp;(Rendering/Formatting) This attribute is reserved for future use and currently only has the value of 'none'.
> 
> ```xml
>   type NMTOKEN #REQUIRED
> ```
> 
> &emsp;&emsp;(Rendering/Formatting) Specifies the type of block that follows, one of: usage, overrides, note, example, default, behaviors.
> 
> ```xml
> >
> 
> <!ELEMENT c (#PCDATA | para | paramref | code | see)*>
> ```
> 
> (Rendering/Formatting) Specifies that the text is the output of a code sample.
> 
> ```xml
> <!ELEMENT code (#PCDATA)>
> ```
> 
> (Informative) Specifies the text is a code sample.
> 
> ```xml
> <!ATTLIST code
>   lang CDATA #IMPLIED
> ```
> 
> &emsp;&emsp;(Informative) Specifies the programming language of the code sample. This specification uses C# as the language for the samples.
> 
> ```xml
> >
> 
> <!ELEMENT codelink EMPTY>
> ```
> 
> (Informative) Specifies a piece of code to which a link might be made from another sample. _[Note:_ the XML format specified here does not provide a means of creating such a link.]
> 
> ```xml
> <!ATTLIST codelink
>   SampleID CDATA #REQUIRED
> ```
> 
> &emsp;&emsp;(Informative) `SampleID` is the unique id assigned to this code sample.
> 
> ```xml
>   SnippetID CDATA #REQUIRED
> ```
> 
> &emsp;&emsp;(Informative) `SnippetID` is the unique id assigned to a section of text within the sample code.
> 
> ```xml
> >
> 
> <!ELEMENT description (#PCDATA | SPAN | paramref | para | see | c | permille | block | sub)*>
> ```
> 
> (Normative) Specifies the text for a description for a given term element in a list or table. This element also specifies the text for a column header in a table.
> 
> ```xml
> <!ELEMENT example (#PCDATA | para | code | c | codelink | see)*>
> ```
> 
> (Informative) Specifies that the text will be an example on the usage of a type or a member of a given type.
> 
> ```xml
> <!ELEMENT exception (#PCDATA | paramref | see | para | SPAN | block)*>
> ```
> 
> (Normative) Specifies text that provides the information for an exception that shall be thrown by a member of a type, unless specified otherwise. This element can contain just text or other rendering options such as blocks, etc.
> 
> ```xml
> <!ATTLIST exception
>   cref CDATA #REQUIRED
> ```
> 
> &emsp;&emsp;(Rendering/Formatting) Specifies a link to the documentation of the exception. _[Note:_ In this specification, `CDATA` matches the documentation comment format specified in Appendix E of the C# language standard.]
> 
> ```xml
> >
> 
> <!ELEMENT i (#PCDATA)>
> ```
> 
> (Rendering/Formatting) Specifies that the text should be italicized.
> 
> ```xml
> <!ELEMENT item (term, description*)>
> ```
> 
> (Rendering/Formatting) Specifies a specific item of a list or a table.
> 
> ```xml
> <!ELEMENT list (listheader?, item*)>
> ```
> 
> (Rendering/Formatting) Specifies that the text should be displayed in a list format.
> 
> ```xml
> <!ATTLIST list
>   type NMTOKEN #REQUIRED
> ```
> 
> &emsp;&emsp;(Rendering/Formatting) Specifies the type of list in which the following text will be represented. Values in the specification are: bullet, number and table.
> 
> ```xml
> >
> 
> <!ELEMENT listheader (term, description+)>
> ```
> 
> (Rendering/Formatting) Specifies the header of all columns in a given list or table.
> 
> ```xml
> <!ELEMENT onequarter EMPTY>
> ```
> 
> (Rendering/Formatting) Specifies that text, in the form of &frac14;, is to be displayed.
> 
> ```xml
> <!ELEMENT para (#PCDATA | see | block | paramref | c | onequarter | superscript | sup | permille | SPAN | list | pi | theta | sub)*>
> ```
> 
> (Rendering/Formatting) Specifies that the text is part of what can be considered a paragraph of its own.
> 
> ```xml
> <!ELEMENT param (#PCDATA | c | paramref | see | block | para | SPAN)*>
> ```
> 
> (Normative) Specifies the information on the meaning or purpose of a parameter. The name of the parameter and a textual description will be associated with this element.
> 
> ```xml
> <!ATTLIST param
>   name CDATA #REQUIRED
> ```
> 
> &emsp;&emsp;(Nomrative) Specifies the name of the parameter being described.
> 
> ```xml
> >
> 
> <!ELEMENT paramref EMPTY>
> ```
> 
> (Rendering/Formatting) Specifies a reference to a parameter of a member of a type.
> 
> ```xml
> <!ATTLIST paramref
>   name CDATA #REQUIRED
> ```
> 
> &emsp;&emsp;(Rendering/Formatting) Specifies the name of the parameter to which the paramref element is referring.
> 
> ```xml
> >
> 
> <!ELEMENT permille EMPTY>
> ```
> 
> (Rendering/Formatting) Represents the current text is to be displayed as the '&permil;' symbol.
> 
> ```xml
> <!ELEMENT permission (#PCDATA | see | paramref | para | block)*>
> ```
> 
> (Normative) Specifies the permission, given as a fully-qualified type name and supportive text, needed to call a member of a type.
> 
> ```xml
> <!ATTLIST permission
>   cref CDATA #REQUIRED
> ```
> 
> &emsp;&emsp;(Rendering/Formatting) Specifies a link to the documentation of the permission. _[Note:_ In this specification, `CDATA` matches the documentation comment format specified in Appendix E of the C# language standard.]
> 
> ```xml
> >
> 
> <!ELEMENT pi EMPTY>
> ```
> 
> (Rendering/Fomatting) Represents the current text is to be displayed as the '&pi;' symbol
> 
> ```xml
> <!ELEMENT pre EMPTY>
> ```
> 
> (Rendering/Formatting) Specifies a break between the preceding and following text.
> 
> ```xml
> <!ELEMENT remarks (#PCDATA | para | block | list | c | paramref | see | pre | SPAN | code | PRE)*>
> ```
> 
> (Normative) Specifies additional information, beyond that supplied by the summary, on a type or member of a type.
> 
> ```xml
> <!ELEMENT returns (#PCDATA | para | list | paramref | see)*>
> ```
> 
> (Normative) Specifies text that describes the return value of a given type member.
> 
> ```xml
> <!ELEMENT see EMPTY>
> ```
> 
> (Informative) Specifies a link to another type or member.
> 
> ```xml
> <!ATTLIST see
>   cref CDATA #IMPLIED
> ```
> 
> &emsp;&emsp;(Informative) `cref` specifies the fully-qualified name of the type or member to link to. _[Note:_ In this specification, `CDATA` matches the documentation comment format specified in Appendix E of the C# language standard.]
> 
> ```xml
>   langword CDATA #IMPLIED
> ```
> 
> &emsp;&emsp;(Informative) `langword` specifies that the link is to a language agnostic keyword such as "null".
> 
> ```xml
>   qualify CDATA #IMPLIED
> ```
> 
> &emsp;&emsp;(Informative) `qualify` indicates that the type or member specified in the link must be displayed as fully-qualified. Value of this attribute is 'true' or 'false', with a default value of 'false'
> 
> ```xml
> >
> 
> <!ELEMENT sub (#PCDATA | paramref)*>
> ```
> 
> (Rendering/Formatting) Specifies that current piece of text is to be displayed in subscript notation.
> 
> ```xml
> <!ELEMENT subscript EMPTY>
> ```
> 
> (Rendering/Formatting) Specifies that current piece of text is to be displayed in subscript notation.
> 
> ```xml
> <!ATTLIST subscript
>   term CDATA #REQUIRED
> ```
> 
> &emsp;&emsp;(Rendering/Formatting) Specifies the value to be rendered as a subscript.
> 
> ```xml
> >
> 
> <!ELEMENT summary (#PCDATA | para | see | block | list)*>
> ```
> 
> (Normative) Specifies a summary description of a given type or member of a type.
> 
> ```xml
> <!ELEMENT sup (#PCDATA | i | paramref)*>
> ```
> 
> (Rendering/Formatting) Specifies that the current piece of text is to be displayed in superscript notation.
> 
> ```xml
> <!ELEMENT superscript EMPTY>
> ```
> 
> (Rendering/Formatting) Specifies that current piece of text is to be displayed in superscript notation.
> 
> ```xml
> <!ATTLIST superscript
>   term CDATA #REQUIRED
> ```
> 
> &emsp;&emsp;(Rendering/Formatting) Specifies the value to be rendered as a superscript.
> 
> ```xml
> >
> 
> <!ELEMENT term (#PCDATA | block | see | paramref | para | c | sup | pi | theta)*>
> ```
> 
> (Rendering/Formatting) Specifies the text is a list item or an item in the primary column of a table.
> 
> ```xml
> <!ELEMENT theta EMPTY>
> ```
> 
> (Rendering/Formatting) Specifies that text, in the form of '&theta;', is to be displayed.
> 
> ```xml
> <!ELEMENT threadsafe (para+)>
> ```
> 
> (Normative) Specifies that the text describes additional detail, beyond that specified by `ThreadingSafetyStatement`, the thread safety implications of the current type. For example, the text will describe what an implementation must do in terms of synchronization.
> 
> ```xml
> <!ELEMENT typeparam (#PCDATA | c | paramref | see | block | para | SPAN | geq | leq | whitespace)*>
> ```
> 
> (Normative) Specifies description information on a given type parameter for a class member.
> 
> ```xml
> <!ATTLIST typeparam
>   name CDATA #REQUIRED
> >
> ```
> 
> (Normative) Specifies the name of the type parameter that will be described.
> 
> ```xml
> <!ELEMENT value (#PCDATA | para | list | see)*>
> ```
> 
> (Normative) Specifies description information on the "value" passed into the set method of a property.
