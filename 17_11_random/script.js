//homework
// ДЗ. При нажатии на кнопку случайный цвет, менять цвет фона на случайный.

const randomBtn = document.querySelector('#random');

function randInt(min, max) {
	let rand = min + Math.random() * (max + 1 - min);
	return Math.floor(rand);
}
randomBtn.addEventListener('click', function () {
	document.body.style.backgroundColor = `rgb(${randInt(0, 255)}, 
	${randInt(0, 255)},${randInt(0, 255)})`;
});
