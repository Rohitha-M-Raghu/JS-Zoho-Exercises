let name = {
  firstname: "Rohitha",
  lastname: "M Raghu",
  printFullName: function() {
    console.log(this.firstname + " " + this.lastname);
  }
}

name.printFullName();

let name2 = {
  firstname: "Nirmala",
  lastname: "Joseph"
}

//function borrowing
name.printFullName.call(name2)

let printName = function() {
  console.log("Name: " +this.firstname+ " " + this.lastname);
}

printName.call(name2);

let name3 = {
  firstname: "Surumi",
  lastname: "Nazeer"
}

let personData = function(role) {
  console.log(`Name: ${this.firstname} ${this.lastname} (${role})`);
}

personData.call(name2, "project trainee");
personData.call(name3, "mentor");

let printLocation = function(district, state) {
  console.log(`District: ${district} 
State: ${state}`);
}

printLocation.call(name, "Alappuzha", "Kerala");
printLocation.apply(name, ["Alappuzha", "Kerala"]);

// bind method
let printMyName = printName.bind(name, "Alappuzha", "Kerala");
console.log(printMyName);
printMyName(); 
// to bind and keep a copy of the method 
// which can be invoked later