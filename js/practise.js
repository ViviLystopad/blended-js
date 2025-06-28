// 🔧 Завдання:
// Використай call, щоб user1 сказав:
// Привіт, мене звати Марія!

// Використай apply, щоб user2 сказав:
// Добрий день, мене звати Іван.

// Створи нову функцію за допомогою bind, яка завжди вітається від імені user1, зі словом "Хай".
// Використай її, щоб вивести:
// Хай, мене звати Марія!!!



// const user1 = {
//     name: "Марія"
//   };
  
//   const user2 = {
//     name: "Іван"
//   };
  
//   function sayHello(greeting, punctuation) {
//     console.log(`${greeting}, мене звати ${this.name}${punctuation}`);
//   }
  

// sayHello.call(user1, 'Привіт', '!');

// sayHello.apply(user2, ['Добрий день', '.']);

// const lastGreeting = sayHello.bind(user1, 'Хай', '!!!');
// lastGreeting();

// class User {
//     constructor(name, email) {
//       // Ініціалізація властивостей екземпляра
//       this.name = name;
//       this.email = email;
//     }
//   }
  
//   const mango = new User("Mango", "mango@mail.com");
//   console.log(mango); // { name: 'Mango', email: 'mango@mail.com' }
  
//   const poly = new User("Poly", "poly@mail.com");
//   console.log(poly); // { name: 'Poly', email: 'poly@mail.com' }
  