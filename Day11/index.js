const questionsArray = [
	{
		que: "Who made JS?",
		option1: "Brendan Eich",
		option2: "Mark Zuckerberg",
		option3: "Steve Jobs",
		option4: "I'm not a weeb developer",
		ans: "Brendan Eich",
	},
	{
		que: "JS was created in ____",
		option1: "10 months",
		option2: "10 hours",
		option3: "10 days",
		option4: "10 weeks",
		ans: "10 days",
	},
	{
		que: "JS is same as Java.",
		option1: "True",
		option2: "Join WhiteHat Jr.",
		option3: "False",
		option4: "You are not a developer",
		ans: "False",
	},
];
const quesLen = questionsArray.length;
const question = document.querySelector(".question-h1");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
const options = document.querySelectorAll(".options");

let questionsCount = -1;
let validAnswer = "";
let score = 0;
let currentQuestion = {};

let render = () => {
	questionsCount++;
	currentQuestion = questionsArray[questionsCount];
	question.innerHTML = currentQuestion.que;
	option1.innerHTML = currentQuestion.option1;
	option2.innerHTML = currentQuestion.option2;
	option3.innerHTML = currentQuestion.option3;
	option4.innerHTML = currentQuestion.option4;
};
let flag = false;
options.forEach((option) => {
	option.addEventListener("click", (e) => {
		if (!flag) {
			if (e.target.innerHTML === currentQuestion.ans) {
				e.target.classList.add("correct");
				score++;
			} else {
				if (!e.target.classList.contains("correct")) {
					e.target.classList.add("wrong");
				}
			}
			flag = true;
		}
	});
});
render();
let submitClicked = 1;
const submitBtn = document.querySelector("#submit-btn");
submitBtn.addEventListener("click", () => {
	flag = false;
	submitClicked++;
	if (submitClicked > quesLen) {
		alert(`Your score is ${score}`);
		location.reload();
	}
	options.forEach((option) => {
		option.classList.remove("correct");
		option.classList.remove("wrong");
	});
	render();
});
