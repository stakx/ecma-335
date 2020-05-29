## VI.B.3 Custom attributes

_[Example:_

This subclause includes many example uses of custom attributes to help clarify the grammar and rules described above.  The examples are written in C#, and each one shows a collection of one or more attributes, applied to a class (called "`App`"). The hex and 'translation' of the custom attribute blobs are shown as comments. The following abbreviations are used:

 * `FIELD` = `ELEMENT_TYPE_FIELD`
 * `PROPERTY` = 0x54
 * `STRING` = `ELEMENT_TYPE_STRING`
 * `SZARRAY` = `ELEMENT_TYPE_SZARRAY`
 * `U1` = `ELEMENT_TYPE_U1`
 * `I4` = `ELEMENT_TYPE_I4`
 * `OBJECT` = 0x51

```csharp
 // ********************************************************************************
 // CustomSimple.cs
 using System;
 [AttributeUsage(AttributeTargets.Class, AllowMultiple=true)]
 class B : Attribute { public B(int i, ushort u) {} }

 [B(7,9)]    // 01 00          // Prolog
             // 07 00 00 00    // 0x00000007
             // 09 00          // 0x0009
             // 00 00          // NumNamed
 class App { static void Main() {} }

 // ********************************************************************************
 // CustomString.cs
 using System;
 [AttributeUsage(AttributeTargets.Class, AllowMultiple=true)]
 class A : Attribute {
    public  string field;        // field
    private string back;         // backing field for property
    public  string prop {        // property
       get { return back;  }
       set { back = value; }
    }
    public  A(string x) {}       // ctor
 }

 [A(null)]   // 01 00           // Prolog
             // FF              // null
             // 00 00           // NumNamed

 [A("")]     // 01 00           // Prolog
             // 00              // zero-length string
             // 00 00           // NumNamed

 [A("ab",field="cd",prop="123")]  // 01 00             // Prolog
                                  // 02 61 62          // "ab"
                                  // 02 00             // NumNamed
                                  // 53 0e             // FIELD, STRING
                                  // 05 66 69 65 6c 64 // "field" as counted-UTF8
                                  // 02 63 64          // "cd" as counted-UTF8
                                  // 54 0e             // PROPERTY, STRING
                                  // 04 70 72 6f 70    // "prop" as counted-UTF8
                                  // 03 31 32 33       // "123" as counted-UTF8
 class App { static void Main() {} }

 // ********************************************************************************
 // CustomType.cs
 using System;
 [AttributeUsage(AttributeTargets.Class, AllowMultiple=true)]
 class C : Attribute {
    public C(Type t) {}
 }

 [C(typeof(C))]
 // 01 00                                              // Prolog
 // 01 43                                              // "C" as counted-UTF8
 // 00 00                                              // NumNamed

 [C(typeof(string))]
 // 01 00                                              // Prolog
 // 0d 53 79 73 74 65 6d 2e 53 74 72 69 6e 67          // "System.String" as counted-UTF8
 // 00 00                                              // NumNamed

 [C(typeof(System.Windows.Forms.Button))]
 // 01 00                                              // Prolog
 // 76 53 79 73 74 65 6d 2e 57 69 6e 64 6f 77          // "System.Window
 // 73 2e 46 6f 72 6d 73 2e 42 75 74 74 6f 6e 2c 53    // s.Forms.Button,S
 // 79 73 74 65 6d 2e 57 69 6e 64 6f 77 73 2e 46 6f    // ystem.Windows.Fo
 // 72 6d 73 2c 20 56 65 72 73 69 6f 6e 3d 32 2e 30    // rms, Version=2.0
 // 2e 33 36 30 30 2e 30 2c 20 43 75 6c 74 75 72 65    // .3600.0, Culture
 // 3d 6e 65 75 74 72 61 6c 2c 20 50 75 62 6c 69 63    // =neutral, Public
 // 4b 65 79 54 6f 6b 65 6e 3d 62 37 37 61 35 63 35    // KeyToken=b77a5c5
 // 36 31 39 33 34 65 30 38 39 00 00                   // 61934e089"
 // 00 00                                              // NumNamed
 class App { static void Main() {} }
 ```

Notice how various types are 'stringified': if the type is defined in the local assembly, or in mscorlib, then only its full name is required; if the type is defined in a different assembly, then its fully-qualified assembly name is required, includeing Version, Culture and PublicKeyToken, if non-defaulted.

 ```csharp
 // ********************************************************************************
 // CustomByteArray.cs
 using System;
 class D : Attribute {
    public  byte[] field;                             // field
    private byte[] back;                              // backing field for property
    public  byte[] prop {                             // property
       get { return back;  }
       set { back = value; }
    }
    public D(params byte[] bs) {}                     // ctor
 }

 [D(1,2, field=new byte[]{3,4},prop=new byte[]{5})]
 // 01 00                                             // Prolog
 // 02 00 00 00                                       // NumElem
 // 01 02                                             // 1,2
 // 02 00                                             // NumNamed
 // 53 1d 05                                          // FIELD, SZARRAY, U1
 // 05 66 69 65 6c 64                                 // "field" as counted-UTF8
 // 02 00 00 00                                       // NumElem = 0x00000002
 // 03 04                                             // 3,4
 // 54 1d 05                                          // PROPERTY, SZARRAY, U1
 // 04 70 72 6f 70                                    // "prop" as counted-UTF8
 // 01 00 00 00                                       // NumElem = 0x00000001
 // 05                                                // 5
 class App { static void Main() {} }

 // ********************************************************************************
 // CustomBoxedValuetype.cs
 using System;
 [AttributeUsage(AttributeTargets.Class, AllowMultiple=true)]
 class E : Attribute {
    public object obj;                           // field called "obj"
    public object o {                            // property called "o"
       get { return o; }
       set { o = value; }
    }
    public E() {}                                // default ctor
    public E(object x) {}
 }

 [E(42)]                                         // boxed 42
 // 01 00                                        // Prolog
 // 08                                           // I4
 // 2a 00 00 00                                  // 0x0000002A
 // 00 00                                        // NumNamed

 [E(obj=7)]                                      // named field
 // 01 00                                        // Prolog
 // 01 00                                        // NumNamed
 // 53 51                                        // FIELD, OBJECT
 // 03 6f 62 6a                                  // "obj" as counted-UTF8
 // 08                                           // I4
 // 07 00 00 00                                  // 0x00000007

 [E(o=0xEE)]                                     // named property
 // 01 00                                        // Prolog
 // 01 00                                        // NumNamed
 // 54 51                                        // PROPERTY, OBJECT
 // 01 6f                                        // "o" as counted-UTF8
 // 08                                           // I4
 // ee 00 00 00                                  // 0x000000EE
 class App { static void Main() {} }
 ```

This example illustrates how to construct blobs for a custom attribute that accepts a `System.Object` in its constructor, as a named field, and as a named property. In each case, the argument given is an `int32`, which is boxed automatically by the C# compiler.

Notice the `OBJECT` = 0x51 byte. This is emitted for "named" fields or properties of type `System.Object`.

 ```csharp
 // ********************************************************************************
 // CustomShortArray.cs
 using System;
 [AttributeUsage(AttributeTargets.Class, AllowMultiple=true)]
 class F : Attribute {
     public F(params short[] cs) {}    // ctor
 }

 [F()]
 // 01 00                            // Prolog
 // 00 00 00 00                      // NumElem
 // 00 00                            // NumNamed

 [F(null)]
 // 01 00                            // Prolog
 // ff ff ff ff                      // NumElem = -1 => null
 // 00 00                            // NumNamed

 [F(1,2)]
 // 01 00                            // Prolog
 // 02 00 00 00                      // NumElem
 // 01 00 02 00                      // 0x0001, 0x0002
 // 00 00                            // NumNamed
 class App { static void Main() {} }
 ```

_end example]_
