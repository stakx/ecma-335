## II.6.3 Referencing assemblies

 | _Decl_ ::= | Clause
 | ---- | ----
 | \| `.assembly extern` _DottedName_ [ `as` _DottedName_ ] `'{'` _AsmRefDecl_* `'}'` | &nbsp;
 | \| &hellip; | §[II.5.10](ii.5.10-ilasm-source-files.md)

An assembly mediates all accesses to other assemblies from the files that it contains. This is done through the metadata by requiring that the manifest for the executing assembly contain a declaration for any assembly referenced by the executing code. A top-level **.assembly extern** declaration is used for this purpose. The optional as clause provides an alias, which allows ILAsm to address external assemblies that have the same name, but differing in version, culture, etc.

The dotted name used in **.assembly extern** shall exactly match the name of the assembly as declared with an **.assembly** directive, in a case-sensitive manner. (So, even though an assembly might be stored within a file, within a file system that is case-insensitive, the names stored internally within metadata are case-sensitive, and shall match exactly.)

 | _AsmRefDecl_ ::= | Description | Clause
 | ---- | ---- | ----
 | `.hash` `'='` `'('` _Bytes_ `')'` | Hash of referenced assembly | §[II.6.2.3](ii.6.2.3-associating-files-with-an-assembly.md)
 | \| `.custom` _CustomDecl_ | Custom attributes | §[II.21](#todo-missing-hyperlink)
 | \| `.culture` _QSTRING_ | Culture of the referenced assembly | §[II.6.2.1.2](ii.6.2.1.2-culture.md)
 | \| `.publickeytoken` `'='` `'('` _Bytes_ `')'` | The low 8 bytes of the SHA-1 hash of the originator's public key. | §[II.6.3](ii.6.3-referencing-assemblies.md)
 | \| `.publickey` `'='` `'('` _Bytes_ `')'` | The originator's full public key | §[II.6.2.1.3](ii.6.2.1.3-originators-public-key.md)
 | \| `.ver` _Int32_ `':'` _Int32_ `':'` _Int32_ `':'` _Int32_ | Major version, minor version, build, and revision | §[II.6.2.1.4](ii.6.2.1.4-version-numbers.md)

These declarations are the same as those for **.assembly** declarations (§[II.6.2.1](ii.6.2.1-information-about-the-assembly-asmdecl.md)), except for the addition of **.publickeytoken**. This declaration is used to store the low 8 bytes of the SHA-1 hash of the originator's public key in the assembly reference, rather than the full public key.

An assembly reference can store either a full public key or an 8-byte "public key token." Either can be used to validate that the same private key used to sign the assembly at compile time also signed the assembly used at runtime. Neither is required to be present, and while both can be stored, this is not useful.

A conforming implementation of the CLI need not perform this validation, but it is permitted to do so, and it can refuse to load an assembly for which the validation fails. A conforming implementation of the CLI can also refuse to permit access to an assembly unless the assembly reference contains either the public key or the public key token. A conforming implementation of the CLI shall make the same access decision independent of whether a public key or a token is used.

_[Rationale:_ The public key or public key token stored in an assembly reference is used to ensure that the assembly being referenced and the assembly actually used at runtime were produced by an entity in possession of the same private key, and can therefore be assumed to have been intended for the same purpose. While the full public key is cryptographically safer, it requires more storage in the reference. The use of the public key token reduces the space required to store the reference while only weakening the validation process slightly. _end rationale]_

_[Note:_ To validate that an assembly's contents have not been tampered with since it was created, the full public key in the assembly's own identity is used, not the public key or public key token stored in a reference to the assembly. _end note]_

_[Example:_

 ```ilasm
 .assembly extern MyComponents 
 { .publickeytoken = (BB AA BB EE 11 22 33 00)
   .hash = (2A 71 E9 47 F5 15 E6 07 35 E4 CB E3 B4 A1 D3 7F 7F A0 9C 24)
   .ver 2:10:2002:0
 }
 ```

_end example]_
