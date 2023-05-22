/* • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • •
• • • • • JavaScript необходимые основы для начинающих • • • • •
• • • • • • • • • • • • практический курс • • • • • • • • • • •
• • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • •
• • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • */
// ================== 0. Настройка окружения ===============
/*
- Установка редактора
- Установка плагина liveServer
- Моя тема Ayu
- Создание проекта
*/

// =================== 1. Подключение ===================
/*
- index.html
- файл main.js
- тег <script src></script>
- Запуск в liveServer
- команда console.log для вывода информации в консоль браузера
- комментарии
*/


// NodeList - массиво-подобная колекция
// https://developer.mozilla.org/en-US/docs/Web/API/NodeList

// const inputText = document.querySelector('#input-text');
// const textBlock = document.querySelector('#text-block');

inputText.addEventListener(
	'input',
	function () {
		console.log(inputText.value);
		textBlock.innerText = inputText.value;
	},
	{ once: false }
);

inputText.addEventListener('input', inputHandler, { once: true });

function inputHandler() {
	console.log(inputText.value);
	textBlock.innerText = inputText.value;
}
