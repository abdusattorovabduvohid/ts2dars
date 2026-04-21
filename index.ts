// // 1.
// interface User {
//   id: number;
//   username: string;
//   email: string;
// }

// let user: User = {
//   id: 101,
//   username: "abdu_dev",
//   email: "dev@mail.uz"
// };

// // 2.
// interface Product {
//   name: string;
//   price: number;
//   description?: string;
// }

// let myProduct: Product = {
//   name: "Monitor",
//   price: 200

// };

// // 3.
// interface Config {
//   readonly apiKey: string;
// }

// let settings: Config = {
//   apiKey: "API-KEY-9989"
// };

// // 4.
// interface MathOp {
//   (a: number, b: number): number;
// }

// const add: MathOp = (x, y) => x + y;

// const multiply: MathOp = (x, y) => x * y;

// console.log(add(5, 3));

// // 5.
// class Car {
//   brand: string;
//   model: string;
//   year: number;

//   constructor(b: string, m: string, y: number) {
//     this.brand = b;
//     this.model = m;
//     this.year = y;
//   }
// }

// const myCar = new Car("Chevrolet", "Gentra", 2024);

// // 6.
// class Circle {
//   radius: number;

//   constructor(r: number) {
//     this.radius = r;
//   }

//   getArea(): number {
//     return Math.PI * this.radius ** 2;
//   }
// }

// const myCircle = new Circle(10);
// console.log(myCircle.getArea());

// // 7.
// class Employee {
//   public name: string;
//   private salary: number;
//   protected department: string;

//   constructor(n: string, s: number, d: string) {
//     this.name = n;
//     this.salary = s;
//     this.department = d;
//   }

//   showSalary() {
//     console.log(`Maosh: ${this.salary}`);
//   }
// }

// // 8.
// interface IShape {
//   draw(): void;
// }

// class Square implements IShape {
//   draw() {
//     console.log("Kvadrat chizildi");
//   }
// }

// //  9.
// class Animal {
//   move() {
//     console.log("Hayvon harakatlanmoqda...");
//   }
// }

// class Dog extends Animal {
//   bark() {
//     console.log("Vov-vov!");
//   }
// }

// const myDog = new Dog();
// myDog.move();
// myDog.bark();

// // 10.
// class Person {
//   constructor(public name: string) {}
// }

// class Student extends Person {
//   constructor(name: string, public studentId: number) {
//     super(name);
//   }
// }

// const s1 = new Student("Abduvohid", 55);

// // 11.
// class Temperature {
//   constructor(public celsius: number) {}

//   get fahrenheit(): number {
//     return (this.celsius * 9/5) + 32;
//   }

//   set fahrenheit(f: number) {
//     this.celsius = (f - 32) * 5/9;
//   }
// }

// const temp = new Temperature(25);
// console.log(temp.fahrenheit);

// // 12.
// abstract class Vehicle {
//   abstract startEngine(): void;
// }

// class Bike extends Vehicle {
//   startEngine() { console.log("Oyoq bilan haydash"); }
// }

// class Bus extends Vehicle {
//   startEngine() { console.log("Kalit bilan o't oldirish"); }
// }

// // 13.
// interface Person {
//   name: string;
// }

// interface Employee extends Person {
//   salary: number;
// }

// let worker: Employee = { name: "Ali", salary: 1000 };

// // 14.
// class Calculator {
//   static add(a: number, b: number): number {
//     return a + b;
//   }
// }

// console.log(Calculator.add(10, 20));

// // 15.
// interface IBook {
//   title: string;
//   author: string;
//   isAvailable: boolean;
// }

// class Library {
//   books: IBook[] = [];

//   addBook(book: IBook) {
//     this.books.push(book);
//     console.log(`${book.title} qo'shildi.`);
//   }

//   findBook(title: string) {
//     const book = this.books.find(b => b.title === title);
//     return book ? `Topildi: ${book.author}` : "Kitob topilmadi";
//   }
// }

// const myLib = new Library();
// myLib.addBook({ title: "Sariq devni minib", author: "X. To'xtaboyev", isAvailable: true });
// console.log(myLib.findBook("Sariq devni minib"));
