const content = document.querySelector(".content");
const author = document.querySelector(".author");

async function randomQuote() {
	const response = await fetch("https://api.quotable.io/random");
	const data = await response.json();
	content.innerHTML = data.content;
	author.innerHTML = `-- ${data.author}`;
}
randomQuote();

const btn = document.querySelector(".btn");
btn.addEventListener("click", randomQuote);
