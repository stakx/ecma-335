## II.4.1 "Hello world!"

To get the general feel of ILAsm, consider the following simple example, which prints the well known "Hello world!" salutation. The salutation is written by calling `WriteLine`, a static method found in the class `System.Console` that is part of the standard assembly `mscorlib` (see [Partition IV](#todo-missing-hyperlink)).

_[Example:_

 ```il
 .assembly extern mscorlib {}
 .assembly hello {}
 .method static public void main() cil managed
 { .entrypoint
   .maxstack 1
   ldstr "Hello world!"
   call void [mscorlib]System.Console::WriteLine(class System.String)
   ret
 }
 ```

_end example]_

The **.assembly extern** declaration references an external assembly, `mscorlib`, which contains the definition of `System.Console`. The **.assembly** declaration in the second line declares the name of the assembly for this program. (Assemblies are the deployment unit for executable content for the CLI.)  The **.method** declaration defines the global method `main`, the body of which follows, enclosed in braces. The first line in the body indicates that this method is the entry point for the assembly (**.entrypoint**), and the second line in the body specifies that it requires at most one stack slot (**.maxstack**).

Method `main` contains only three instructions: `ldstr`, `call`, and `ret`. The `ldstr` instruction pushes the string constant "`Hello world!`" onto the stack and the `call` instruction invokes `System.Console::WriteLine`, passing the string as its only argument. (Note that string literals in CIL are instances of the standard class `System.String`.) As shown, `call` instructions shall include the full signature of the called method. Finally, the last instruction, `ret`, returns from `main`.
