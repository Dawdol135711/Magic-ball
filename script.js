const ball = document.querySelector(".ball-img");
const question = document.querySelector("input");
const answer = document.querySelector(".answer");
const error = document.querySelector(".error");

const answer_1 = "Glupie pytanie, zadaj inne!";
const answer_2 =
	"Na pewno chcesz wiedziec? Chyba jednak Ci podaruje i nie odpowiem";
const answer_3 = "Nie chcesz znac odpowiedz na to pytanie, zaufaj mi!";
const answer_4 = "No, powiedzmy ze tak";
const answer_5 = "Zdecydowanie nie";
const answer_6 = "Ale ze o co Ci wlasciwie chodzi?";
const answer_7 = "A wez sobie chataGPT zapytaj";
const answer_8 = "A po co Ci to wlasciwie wiedziec co?";
const answerArray = [
	answer_1,
	answer_2,
	answer_3,
	answer_4,
	answer_5,
	answer_6,
	answer_7,
	answer_8,
];
answerArray.forEach(answer, i => {
    answer= i+1;
    console.log("answer");
});