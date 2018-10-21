var nounsCount = +prompt('Введите колличество слов для тренировки: ', '');
var nouns = document.querySelector('.data').dataset.nouns.split('\n');
var testGrounp = [];
var nounsList = document.querySelector('.nouns_list');
var check = document.querySelector('.check');
var result = document.querySelector('.result');
var cx = 0;

function getRandom(min, max) {
	return Math.round((Math.random() * max - min) + min);
}

for (let i = 0; i < nounsCount; i++) {
	testGrounp.push(nouns[getRandom(0, 999)]);
	var li = document.createElement('li');
	li.innerHTML = testGrounp[i];
	li.onclick = function() {
		var input = document.createElement('input');
		input.dataset.noun = this.innerHTML;
		input.placeholder = i + 1;
		nounsList.insertBefore(input, this);
		this.style.display = 'none';
	}
	nounsList.appendChild(li);
}

check.onclick = function() {
	var inputs = Array.from(document.querySelectorAll('input'));
	inputs.forEach((inp, i) => {
		if (testGrounp[i] === inp.value) {
			inp.style.backgroundColor = 'lime';
			cx++;
		} else {
			inp.style.backgroundColor = 'red';
		}
	});

	result.innerHTML = 'Статистика правильных ответов: ' + cx + ' из ' + nounsCount;
}
