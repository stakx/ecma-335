## IV.7.2.3 Properties

The standard library contains many types that have properties. However, as recorded in the XML, their ILAsm signatures are incomplete. Consider the read-write instance property `System.Collections.ArrayList.Capacity`. Its ILAsm signature is defined in the XML as follows:

 ```ilasm
 .property int32 Capacity {
   public hidebysig virtual specialname int32 get_Capacity()
   public hidebysig virtual specialname void set_Capacity(int32 value)
 }
 ```

However, this is an abbreviation of the ILAsm syntax. The complete (and correct) signature for this property is as follows:

 ```ilasm
 .property instance int32 Capacity() {
   .get instance int32 ArrayList::get_Capacity()
   .set instance void ArrayList::set_Capacity(int32)
 }
 .method public hidebysig newslot specialname virtual instance int32
        get_Capacity() { … }
 .method public hidebysig newslot specialname virtual instance void
        set_Capacity(int32 'value') { … }
 ```

As a second example, consider the readonly static property `System.DateTime.Now`; its ILAsm signature is defined in the XML as follows:

 ```ilasm
 .property valuetype System.DateTime Now {
   public hidebysig static specialname valuetype System.DateTime
     get_Now()
 }
 ```

However, the complete (and correct) signature for this property is:

 ```ilasm
 .property valuetype System.DateTime Now() {
   .get valuetype System.DateTime DateTime::get_Now()
 }
 .method public hidebysig specialname static valuetype System.DateTime
    get_Now() { ... }
 ```

All other properties (including those that are indexed) are formatted in the XML in a similar abbreviated manner.
