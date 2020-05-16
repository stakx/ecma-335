## II.9.5 Generics variance

The CLI supports covariance and contravariance of generic parameters, but only in the signatures of interfaces and delegate classes. The symbol "`+`" is used in the syntax of §[II.10.1.7](#todo-missing-hyperlink) to denote a covariant generic parameter, while "`-`" is used to denote a contravariant generic parameter

> _This block contains only informative text._

Suppose we have a generic interface, which is covariant in its one generic parameter; e.g., ``IA`1<+T>``. Then all instantiations satisfy ``IA`1<GenArgB>`` := ``IA`1<GenArgA>``, so long as ``GenArgB`` := ``GenArgA`` using the notion from assignment compatibility. So, for example, an instance of type ``IA`1<string>`` can be assigned to a local of type type ``IA`1<object>``.

Generic contravariance operates in the opposite sense: supposing that we have a contravariant interface ``IB`1<-T>``, then ``IB`1<GenArgB>`` := ``IB`1<GenArgA>``, so long as ``GenArgA`` := ``GenArgB``. 

_[Example:_ (The syntax used is illustrative of a high-level language.)

 ```csharp
 // Covariant parameters can be used as result types
 interface IEnumerator<+T> {
   T Current { get; }
   bool MoveNext();
 }

 // Covariant parameters can be used in covariant result types
 interface IEnumerable<+T> {
   IEnumerator<T> GetEnumerator();
 }

 // Contravariant parameters can be used as argument types
 interface IComparer<-T> {
   bool Compare(T x, T y);
 }

 // Contravariant parameters can be used in contravariant interface types
 interface IKeyComparer<-T> : IComparer<T> {
  bool Equals(T x, T y);
  int GetHashCode(T obj);
 }

 // A contravariant delegate type
 delegate void EventHandler<-T>(T arg);

 // No annotation indicates non-variance. Non-variant parameters can be used anywhere.
 // The following type shall be non-variant because T appears in as a method argument as
 // well as in a covariant interface type
 interface ICollection<T> : IEnumerable<T> {
  void CopyTo(T[] array, int index);
   int Count { get; }
 }
 ```

_end example]_

> _End informative text._
