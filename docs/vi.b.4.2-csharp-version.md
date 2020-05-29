## VI.B.4.2 C# version

 ```csharp
 using System;

 class Phone<K,V> {
    private int hi = -1;
    private K[] keys;
    private V[] vals;
    public Phone() { keys = new K[10]; vals = new V[10]; }
    public void Add(K k, V v) { keys[++hi] = k; vals[hi] = v; }
 }

 class App {
    static void AddOne<KK,VV>(Phone<KK,VV> phone, KK kk, VV vv) {
       phone.Add(kk, vv);
    }
    static void Main() {
       Phone<string, int> d = new Phone<string, int>();
       d.Add("Jim", 7);
       AddOne(d, "Joe", 8);
    }
 }
 ```
