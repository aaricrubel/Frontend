/* Question 1. Write a JavaScript program to list the properties of a JavaScript object. Sample object: var student = { name : "David Rayy", sclass : "VI", rollno : 12 }; Sample Output: name,sclass,rollno */

var student = {
	name: "David Rayy",
	sclass: "VI",
	rollno: 12,
};

// console.log(`${student.name},${student.sclass},${student.rollno}`); // Prints the values of keys

// Object.keys(student).forEach((key) => {
// 	console.log(`${key},`); // Prints the keys in different lines
// });

// console.log(...Object.keys(student)); // Prints the keys with a space between them
var arr = [];
for (var i in student) {
	arr.push(i);
}
console.log(arr.join(",")); // Produces the actual desired result.
