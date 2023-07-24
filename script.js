const ball = document.querySelector("img");
const question = document.querySelector("input");
const answer = document.querySelector(".answer");

const answer_1 = "Glupie pytanie, zadaj inne!";
const answer_2 =
	"Na pewno chcesz wiedziec? Chyba jednak Ci podaruje i nie odpowiem";
const answer_3 = "Nie chcesz znac odpowiedz na to pytanie, zaufaj mi!";
const answer_4 = "No, powiedzmy ze tak";
const answer_5 = "Zdecydowanie nie";
const answer_6 = "Ale ze o co Ci wlasciwie chodzi?";
const answer_7 = "A wez sobie chataGPT zapytaj";
const answer_8 = "A po co Ci to wlasciwie wiedziec co?";
const answer_9 = "Beznadzieja.. zapytaj o cos ciekawszego";
const answer_10 = "Tobie to serio brak 5 klepki";
const answer_11 = "A jak myslisz?";
const answer_12 = "No wez, serio? Nie no, kurde, nie wiem..";
const answer_13 = "Nie rozumiem pytania";
const answerArray = [
	answer_1,
	answer_2,
	answer_3,
	answer_4,
	answer_5,
	answer_6,
	answer_7,
	answer_8,
	answer_9,
	answer_10,
	answer_11,
	answer_12,
	answer_13,
];

function answerHandler(text) {
	ball.classList.add("rotate-animation");
	setTimeout(() => {
		ball.classList.remove("rotate-animation");
	}, 1000);
	function getRandomIndex(answerArray) {
		const maxIndex = answerArray.length - 1;
		return Math.floor(Math.random() * (maxIndex + 1));
	}

	const randomIndex = getRandomIndex(answerArray);
	const randomElement = answerArray[randomIndex];

	if (question.value === "") {
		text = "Zadaj pytanie";
	} else if (question.value.charAt(question.value.length - 1) != "?") {
		text = "Pytanie powinno kończyć się znakiem ?";
	} else {
		text = randomElement;
	}
	answer.innerHTML = text;
}

ball.addEventListener("click", answerHandler);
