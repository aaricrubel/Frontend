// Write a simple JavaScript program to join all elements of the following array into a string.
// Sample array : myColor = ["Red", "Green", "White", "Black"];
// Expected Output :
// "Red,Green,White,Black"
// "Red,Green,White,Black"
// "Red+Green+White+Black"

function joiner(params) {
	const first = params.join(",");
	const second = params.join("+");
	return {first, second};
}

console.log(joiner(["Red", "Green", "White", "Black"]));
