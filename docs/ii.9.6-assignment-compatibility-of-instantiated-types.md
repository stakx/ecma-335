## II.9.6 Assignment compatibility of instantiated types

 * Assignment compatibility is defined in [Partition I.8.7](#todo-missing-hyperlink).

_[Example:_

Assuming `Employee` := `Manager`,

 ```csharp
 IEnumerable<Manager> eManager = ...
 IEnumerable<Employee> eEmployee = eManager;               // Covariance

 IComparer<object> objComp = ...
 IComparer<string> strComp = objComp;                      // Contravariance

 EventHandler<Employee> employeeHandler = ...
 EventHandler<Manager> managerHandler = employeeHandler;   // Contravariance
 ```

_end example]_

_[Example:_

Given the following:

 ```csharp
 interface IConverter<-T,+U> {
   U Convert(T x);
 }

 IConverter<string, object> := IConverter<object, string>
 ```

Given the following:

 ```csharp
 delegate U Function<-T,+U>(T arg);
 Function<string, object> := Function<object, string>.
 ```

_end example]_

_[Example:_

 ```csharp
 IComparer<object> objComp = ...
 // Contravariance and interface inheritance
 IKeyComparer<string> strKeyComp = objComp; 

 IEnumerable<string[]> strArrEnum = …
 // Covariance on IEnumerable and covariance on arrays
 IEnumerable<object[]> objArrEnum = strArrEnum;

 IEnumerable<string>[] strEnumArr = ...
 // Covariance on IEnumerable and covariance on arrays
 IEnumerable<object>[] objEnumArr = strEnumArr; 

 IComparer<object[]> objArrComp = ...
 // Contravariance on IComparer and covariance on arrays
 IComparer<string[]> strArrComp = objArrComp; 

 IComparer<object>[] objCompArr = ...
 // Contravariance on IComparer and covariance on arrays
 IComparer<string>[] strCompArr = objCompArr;
 ```

_end example]_
