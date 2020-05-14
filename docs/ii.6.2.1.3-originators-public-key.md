## II.6.2.1.3 Originator's public key

 | _AsmDecl_ ::=
 | ----
 | `.publickey` `'='` `'('` _Bytes_ `')'`
 | \| &hellip; 
 
The CLI metadata allows the producer of an assembly to compute a cryptographic hash of that assembly (using the SHA-1 hash function) and then to encrypt it using the RSA algorithm (see [Partition I](#todo-missing-hyperlink)) and a public/private key pair of the producer's choosing. The results of this (an "SHA1/RSA digital signature") can then be stored in the metadata (§[II.25.3.3](ii.25.3.3-cli-header.md)) along with the public part of the key pair required by the RSA algorithm. The **.publickey** directive is used to specify the public key that was used to compute the signature. To calculate the hash, the signature is zeroed, the hash calculated, and then the result is stored into the signature.

> All of the assemblies in the Standard Library (see Partition IV) use the public key `00 00 00 00 00 00 00 00 04 00 00 00 00 00 00 00`. This key is known as the *Standard Public Key* in this standard.

A reference to an assembly (§[II.6.3](ii.6.3-referencing-assemblies.md)) captures some of this information at compile time. At runtime, the information contained in the assembly reference can be combined with the information from the manifest of the assembly located at runtime to ensure that the same private key was used to create both the assembly seen when the reference was created (compile time) and when it is resolved (runtime).

The Strong Name (SN) signing process uses standard hash and cipher algorithms for Strong name signing. An SHA-1 hash over most of the PE file is generated. That hash value is RSA-signed with the SN private key. For verification purposes the public key is stored into the PE file as well as the signed hash value.

Except for the following, all portions of the PE File are hashed:

 * The *Authenticode Signature entry*: PE files can be authenticode signed. The authenticode signature is contained in the 8-byte entry at offset 128 of the PE Header Data Directory ("Certificate Table" in §[II.25.2.3.3](ii.25.2.3.3-pe-header-data-directories.md)) and the contents of the PE File in the range specified by this directory entry. _[Note:_ In a PE File conforming to this specification, this entry shall be zero. _end note]_

 * The *Strong Name Blob*: The 8-byte entry at offset 32 of the CLI Header ("StrongNameSignature" in §[II.25.3.3](ii.25.3.3-cli-header.md)) and the contents of the hash data contained at this RVA in the PE File. If the 8-byte entry is 0, there is no associated strong name signature.

 * The *PE Header Checksum*: The 4-byte entry at offset 64 of the PE Header Windows NT-Specific Fields ("File Checksum" in §[II.25.2.3.2](ii.25.2.3.2-pe-header-windows-nt-specific-fields.md)). _[Note:_ In a PE File conforming to this specification, this entry shall be zero. _end note]_
