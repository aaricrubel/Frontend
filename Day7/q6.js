/* Question 6. Write a JavaScript program to sort an array of JavaScript objects.  Sample Object : var library = [ { title: 'The Road Ahead', author: 'Bill Gates', libraryID: 1254 }, { title: 'Walter Isaacson', author: 'Steve Jobs', libraryID: 4264 }, { title: 'Mockingjay: The Final Book of The Hunger Games', author: 'Suzanne Collins', libraryID: 3245 }];  */

var library = [
	{
		title: "The Road Ahead",
		author: "Bill Gates",
		libraryID: 1254,
	},
	{
		title: "Walter Isaacson",
		author: "Steve Jobs",
		libraryID: 4264,
	},
	{
		title: "Mockingjay: The Final Book of The Hunger Games",
		author: "Suzanne Collins",
		libraryID: 3245,
	},
];

/* library.forEach((val) => {
        console.table(Object.assign(Object.keys(val).sort(), Object.values(val)));
}); */

library.sort((a, b) => {
	return a.title > b.title;
});

console.table(library);
