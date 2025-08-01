// 1 - отримай body елемент і виведи його в консоль;
// 2 - отримай елемент id="title" і виведи його в консоль;
// 3 - отримай елемент class="list" і виведи його в консоль;
// 4 - отримай всі елементи з атрибутом data-topic і виведи їх в консоль;
// 5 - отримай перший елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
// 6 - отримай останній елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
// 7 - який елемент є сусідом для h1? Знайти і виведи його в консоль;
// 8 - по тегу h3 знайти всі заголовки та виведи їх у консоль;
// 9 - для кожного елмента h3 додай class="active", який змінить колір заголовка на червоний колір
// 10 - знайти елемент li який має атрибут data-topic з значенням "navigation" і виведи його в консоль;
// 11 - додай для знайденого елемента data-topic="navigation" атрибут style і зроби його backgroundColor жовтим
// 12 - у елемента data-topic="navigation" знайди елемент р і зміни його текст на "Я змінив тут текст!".
// 13 - створи const currentTopic = "manipulation"; після цього знайди елемент у якогоо атрибут data-topic має значення, 
// яке зберігається у змінній currentTopic і виведи його в консоль;
// 14 - додай до знайденого елемента атрибут style і зроби його backgroundColor блакитним;
// 15 - знайти в документі заголовок, який має class="completed" і виведи його в консоль;
// 16 - видали елемент li в якому знаходиться заголовок, який має class="completed"
// 17 - після заголовка h1 (перед списком) додай новий елемент p 
// і задай йому наступний текст: "Об'єктна модель документа (Document Object Model)"
// 18 - додай новий елемент списку у кінець списка, 
// його заголовок це - "Властивість innerHTML" а опис (р) - "Ще один спосіб створити DOM-елементи 
// і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу". 
// тобто, потрібно створити елемент LI потім наповнити H3 та P і готову LI закинути у кінець списку
// 19 - зроби це саме, але використовуй шаблонні рядки та метод insertAdjacentHTML()
// 20 - очисти список



// const bodyEl = document.querySelector("body");
// console.log(bodyEl);
// const titleEl = document.querySelector("#title");
// console.log(titleEl);
// const listEl = document.querySelector(".list");
// console.log(listEl);
// const topicsEl = document.querySelectorAll("[data-topic]");
// console.log(topicsEl);
// const firstTopicEl = topicsEl[0];
// console.log(firstTopicEl);
// const lastTopicEl = topicsEl[topicsEl.length - 1];
// console.log(lastTopicEl);
// const headingSiblEl = titleEl.nextElementSibling;
// console.log(headingSiblEl);
// const subTitlesEl = document.querySelectorAll("h3");
// console.log(subTitlesEl);

// subTitlesEl.forEach(title => title.classList.add('active'));
// console.log(subTitlesEl);

// const navListItemEl = document.querySelector('[data-topic = "navigation"]');
// console.log(navListItemEl);

// navListItemEl.style.backgroundColor = "yellow";

// const navTextEl = navListItemEl.lastElementChild;
// console.log(navTextEl);
// navTextEl.textContent = "Я змінив тут текст!";

// const currentTopic = "manipulation";
// const currentTopicEl = document.querySelector(`[data-topic=${currentTopic}]`);
// console.log(currentTopicEl);

// currentTopicEl.style.backgroundColor = "blue";

// const completedHeadingEl = document.querySelector(".completed")
// console.log(completedHeadingEl);

// ----з 16 до 20----

// Створіть контейнер div (з класом number-container) в HTML-документі
// та динамічно створіть 100 блоків (з класом number) наповнивши їх рандомними
// числами від 1 до 100 і додайте їх до контейнера div(numberContainer).
// Парні числа повинні мати зелений фон (додати клас even),
// Непарні числа - жовтий фон (додати клас odd).

const randomNumber = () => Math.floor(Math.random() * 100) + 1;

const numberContainer = document.querySelector(".number-container");
const elements = [];
for (let i = 0; i < 100; i++){
    const div = document.createElement("div");
    div.classList.add("number");
    const randomNum = randomNumber();
    div.textContent = randomNum;
    if (randomNum % 2 === 0) {
        div.classList.add("even");
    } else {
        div.classList.add("odd");
    }
    elements.push(div);
}
numberContainer.append(...elements);