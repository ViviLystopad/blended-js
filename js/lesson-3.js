// // Дано масив чисел [1, 2, 3, 4, 5]. Створіть новий масив, що містить
// // квадрати кожного елементу вхідного масиву.
// // Очікуваний результат: [1, 4, 9, 16, 25].

// const numbers = [1, 2, 3, 4, 5]

// const mult = numbers => numbers.map(number => number * number)
// console.log(mult(numbers));


// Дано масив об'єктів. Створіть новий масив, що містить всі значення
// з масивів values кожного об'єкту, збережених в одному масиві.
// Очікуваний результат: [1, 2, 3, 4, 5, 6, 7, 8, 9].

// const data = [
//  { id: 1, values: [1, 2, 3] },
//  { id: 2, values: [4, 5, 6] },
//  { id: 3, values: [7, 8, 9] },
// ];

// const allValues = arr => {
//     return arr.flatMap(value => value.values)
// }
// console.log(allValues(data));


// Дано масив об'єктів.
// Перевірте, чи є хоча б один об'єкт з віком менше 20 років.
// Очікуваний результат: true.

// const people = [
//  { name: 'John', age: 27 },
//  { name: 'Jane', age: 31 },
//  { name: 'Bob', age: 19 },
// ];

// const youngPerson = arr => arr.some(person => person.age < 20);

// console.log(youngPerson(people));

// Дано масив чисел [2, 4, 6, 8, 10].
// Перевірте, чи є кожен елемент масиву парним. Очікуваний результат: true.

// const numbers = [2, 4, 6, 8, 10];

// const requiredNumber = arr => arr.every(number => number % 2 === 0);

// console.log(requiredNumber(numbers));

// // Знайдіть перше непарне число

// const numbs = [2, 1, 6, 8, 9, 10, 12];

// const requiredNumb = arr => {
//     return arr.find(num => num%2 !== 0)
// }

// console.log(requiredNumb(numbs));

// // Відсортуйте масив чисел [4, 2, 5, 1, 3]
// // у порядку зростання. Очікуваний результат: [1, 2, 3, 4, 5].

// const numbersArray = [4, 2, 5, 1, 3, 11];

// const newArr = arr => {
//     return arr.toSorted((a, b) => {
//         return b - a;
//     });
// }
// console.log(newArr(numbersArray))

 // Розроби клас Calculator, який дозволяє виконувати арифметичні 
 //  операції над числом за допомогою методів класу, підтримуючи  
 // ланцюжковий виклик (method chaining).
 //
 // Вимоги до класу Calculator
 // - Метод number(value)
 // Встановлює початкове значення для наступних обчислень.
 // Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.
 
 // - метод getResult, Повертає поточний результат усіх операцій.
 // Не змінює значення, просто повертає його.
 
 // - метод add - Додає value до поточного значення.
 // Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.
 
 // - метод substruct - Віднімає value від поточного значення. Повертає this.
 
// - метод divide - Ділить поточне значення на value, якщо value не дорівнює 0.
// Якщо value === 0, викидає помилку з повідомленням про неможливість ділення.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.
 
 // - метод multiply -Множить поточне значення на value. Повертає this.
 
 // Об'єкт класу може проводити послідовні операції у вигляді ланцюжка
 

// class Calculator {
//     number(value) {
//         this.total = value;
//         return this;
//     }
//     getResult(){
//     return this.total;
//     }
//     add(value) {
//         this.total += value;
//         return this;
//     }
//     subtract(value) {
//         this.total -= value;
//         return this;
//     }
//     divide(value) {
//         if (value === 0) {
//             console.log('bla bla');
//             return this;
//         } else {
//             this.total /= value;
//             return this;
//         }
//     }
//     multiply(value) {
//         this.total *= value;
//         return this;
//     }
// }

// // Приклад використання:
// const calc = new Calculator();


// const result = calc
// .number(10)   // Встановлюємо початкове значення 10
// .add(5)       // Додаємо 5 (10 + 5 = 15)
// .subtract(3)  // Віднімаємо 3 (15 - 3 = 12)
// .multiply(4)  // Множимо на 4 (12 * 4 = 48)
// .divide(2)    // Ділимо на 2 (48 / 2 = 24)
// .getResult(); // Отримуємо результат: 24


// console.log(result); // 24
