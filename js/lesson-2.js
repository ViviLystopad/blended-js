// Створіть масив styles з елементами 'jazz' і 'blues'
// Додайте до кінця масиву елемент 'rock-n-roll' за допомогою відповідного методу масивів
// Знайдіть елемент 'blues' у масиві та замініть його на 'classic', використовуючи JavaScript-код

// Напишіть функцію logItems(array), яка приймає масив як аргумент
// і виводить у консоль кожен його елемент у форматі:
// "<номер елемента> - <значення елемента>".
// Використайте цикл for для перебору елементів масиву.
// Нумерація елементів повинна починатися з 1 (а не з 0).

// const styles = ['jazz', 'blues'];
// styles.push('rock-n-roll');
// // console.log(styles)
// const index = styles.indexOf('blues');
// // console.log(index)
// if (index !== -1) {
//     // styles[index] = 'classic';
//     styles.splice(index, 1, 'classic');
// }
// // console.log(styles)

// function logItems(array) {
//     for (let i = 0; i < array.length; i++){
//     console.log(`${i+1} - ${array[i]}`)
// }
// }
// logItems(styles)

// Напишіть функцію caclculateAverage(),
// яка приймає довільну кількість
// аргументів і повертає їхнє середнє значення.
// Додайте перевірку, що аргументи - це числа.

// function caclculateAverage(...numbers) {
//     let sum = 0;
//     let count = 0;
//     for (const number of numbers){
//     if (typeof number === 'number') {
//         sum += number;
//         count += 1;
//     }
//     }
//     return sum / count;
// }
// console.log(caclculateAverage(3, 6, 18, 'hello'))

// Напишіть функцію, яка сумуватиме сусідні числа
// і пушитиме їх в новий масив.
// уточнення: складати необхідно перше число з другим, потім друге - з третім,
// третє - з четвертим і так до кінця.
// В результаті функція має повертати масив [33, 45, 39, 17, 25, 27, 29].

// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

// console.log(calculateSum(someArr))

// function calculateSum(numbers) {
//     const sumArray = [];

//     for (let i = 0; i < numbers.length - 1; i++) {
//         sumArray.push(numbers[i] + numbers[i + 1]);
// }
//     return sumArray;
// }

// Напишіть функцію calcTotalPrice(fruits, fruitName),
// яка приймає массив об'єктів (fruits) і рядок з назвою фрукта (fruitName).
// Функція рахує і повертає загальну вартість фрукта
// з таким ім'ям, ціною та кількістю з об'єкта.

// Зверніть увагу, що в масиві може бути кілька обʼєктів з однаковою
// назвою фрукта, це також треба урахувати.

// const fruits = [
//     { name: "Яблуко", price: 45, quantity: 7 },
//     { name: "Апельсин", price: 60, quantity: 4 },
//     { name: "Банан", price: 125, quantity: 8 },
//     { name: "Груша", price: 350, quantity: 2 },
//     { name: "Виноград", price: 440, quantity: 3 },
//     { name: "Банан", price: 125, quantity: 3 },
// ];
  
// console.log(calcTotalPrice(fruits, "Банан"))

// function calcTotalPrice(fruits, fruitName) {
//     let totalPrice = 0;
//     for (const fruit of fruits) {
//         if (fruit.name === fruitName) {
//             totalPrice += fruit.price * fruit.quantity;
//         }
//     }
//     return totalPrice;
// }

// function filterArray(numbers, value) {
//     let newArr = [];
//     numbers.forEach(function (number){
//       if(number>value){
//          newArr.push(number);
//       }
//     })
//     return newArr;
//   }
// console.log(filterArray([12, 24, 8, 41, 76], 38));
  
// const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;
// console.log(calculateTotalPrice(5, 5));

// function changeEven(numbers, value) {
//     let newArr = [];
//     for (let i = 0; i < numbers.length; i += 1) {
//       if (numbers[i] % 2 === 0) {
//     newArr.push(numbers[i] + value);
//       } else {
//         newArr.push(numbers[i]);
//       }
//     }
//     return newArr;
//   }
// console.log(changeEven([1, 2, 3, 4, 5], 10));
  
// const planets = ["Earth", "Mars", "Venus", "Jupiter"];

// const planetsLengths = planets.map(planet => planet.length);
// console.log(planetsLengths);

// const books = [
//     {
//       title: "The Last Kingdom",
//       author: "Bernard Cornwell",
//       rating: 8.38,
//     },
//     {
//       title: "Beside Still Waters",
//       author: "Robert Sheckley",
//       rating: 8.51,
//     },
//     {
//       title: "The Dream of a Ridiculous Man",
//       author: "Fyodor Dostoevsky",
//       rating: 7.75,
//     },
//     { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//     { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
//   ];
  
//   const titles = books.map(book => book.title);

// const books = [
//     {
//       title: "The Last Kingdom",
//       author: "Bernard Cornwell",
//       genres: ["adventure", "history"],
//     },
//     {
//       title: "Beside Still Waters",
//       author: "Robert Sheckley",
//       genres: ["fiction"],
//     },
//     {
//       title: "Redder Than Blood",
//       author: "Tanith Lee",
//       genres: ["horror", "mysticism"],
//     },
//   ];
  
//   const genres = books.flatMap(book => book.genres);
// console.log(genres);
  
// const total = [0, 1, 5].reduce((previousValue, number) => {
//     return previousValue + number;
//   }, 1);
  
//   console.log(total); // 12
  


