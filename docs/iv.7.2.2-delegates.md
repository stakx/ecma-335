## IV.7.2.2 Delegates

The standard library contains a number of delegate types. However, as recorded in the XML, their ILAsm signatures are incomplete. Consider `System.EventHandler` as an example; its ILAsm signature is defined in the XML as follows:

 ```ilasm
 .class public sealed serializable EventHandler extends System.Delegate
 {
 .method public hidebysig newslot virtual instance void Invoke(object
    sender, class System.EventArgs e) }
 ```

However, this type also has a constructor and two optional asynchronous methods, `BeginInvoke` and `EndInvoke`, all of which are described in [Partition II, "Delegates"](#todo-missing-hyperlink). The signatures for these three members for `System.EventHandler` are as follows:

 ```ilasm
 .method public hidebysig specialname rtspecialname void .ctor(object
    'object', native int 'method')
 .method public hidebysig newslot virtual class System.IAsyncResult
    BeginInvoke(object sender, class System.EventArgs e, class
    System.AsyncCallback callback, object 'object')
 .method public hidebysig newslot virtual void EndInvoke(
        class System.IAsyncResult result)
 ```

The other standard delegate types have a corresponding constructor and method pair whose signatures can be deduced from the ILAsm in the XML and the information in [Partition II, "Delegates"](#todo-missing-hyperlink). Unless stated otherwise, a standard delegate type provides the two optional asynchronous methods, `BeginInvoke` and `EndInvoke`.
