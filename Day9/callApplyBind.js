let name = {
	firstName: "Abhinav",
	lastName: "Mukherjee",
	printFullName: function () {
		console.log(this.firstName + " " + this.lastName);
	},
};

let printFullNameGCP = function () {
	console.log(this.firstName + " " + this.lastName);
};

let printFullNameGCPwithArgs = function (hometown, state) {
	console.log(
		this.firstName + " " + this.lastName + " " + hometown + ", " + state
	);
};

let nameTwo = {
	firstName: "ABCD",
	lastName: "XYZ",
};

// function borrowing (First argument points/maps to the this keyword in the method)
name.printFullName.call(nameTwo);
printFullNameGCP.call(nameTwo);
printFullNameGCPwithArgs.call(nameTwo, "EFGH", "IJKL");
printFullNameGCPwithArgs.apply(nameTwo, ["EFGH", "IJKL"]);

// binds both methods
let printMyName = printFullNameGCPwithArgs.bind(nameTwo, "MNOP", "QRST");
console.log(printMyName);
printMyName();
