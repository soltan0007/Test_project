/*let me = {
    name: 'Roman',
    age: 19,
    street: 'Bazarna 37'
}

me.car = "Porsce";
delete me.street;

console.log(me)
 */
/* Task1
let firstName = "Roman";
let middleName = "Nazarovych";
let lastName = "Soltan";

let person = firstName + " " + middleName + " " + lastName;
console.log(person);
 */
/*Task2
let i1= "hello";
let i2= "owu";
let i3= "com";
let i4= "ua";
let i5= 1;
let i6= 10;
let i7= -999;
let i8= 123;
let i9= 3.14;
let i10= 2.7;
let i11= 16;
let i12= true;
let i13= false;

console.log(i1);
console.log(i2);
console.log(i3);
console.log(i4);
console.log(i5);
console.log(i6);
console.log(i7);
console.log(i8);
console.log(i9);
console.log(i10);
console.log(i11);
console.log(i12);
console.log(i13);
 */
/*Task3
let a = 100;
let b = '100';
let c = true;

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
 */
/*Task 4
let a = prompt("Введіть ваше ім'я");
let b = prompt("Введіть ваше прізвище");
let c = prompt("Введіть ваше побатькові");

console.log("Ім'я:", a);
console.log("Прізвище:", b);
console.log("По-батькові:", c);
 */
/*Task5
const user = ['ivan', 12, 23, {list: 23}, "string", true, false, 3.14, ["Array", 25]];

for (let i = 0; i < user.length; i++) {
    console.log(user[i]);
}
 */

/*Task6
let obj1 = {
    title: "Harry Potter",
    pageCount: 240,
    genre: "drama"
}
let obj2 = {
    title: "Cat",
    pageCount: 50,
    genre: "comedic"
}
let obj3 = {
    title: "Dog",
    pageCount: 56,
    genre: "crying"
}

console.log(obj1);
console.log(obj2);
console.log(obj3);
*/

/*Task7
let obj1 = {
    title: "Harry Potter",
    pageCount: 240,
    genre: "drama",
    authors: [{
        name: "Taras",
        age: 23
    }]
}
let obj2 = {
    title: "Cat",
    pageCount: 50,
    genre: "comedic",
    authors: [{
        name: "Oleg",
        age: 23
    }]

}
let obj3 = {
    title: "Dog",
    pageCount: 56,
    genre: "crying",
    authors: [{
        name: "Ivan",
        age: 23
    }]

}

console.log(obj1);
console.log(obj2);
console.log(obj3);
*/

/*Task8*/
const user = [
    {name: "Pavlo", username: "pavlo22", password: "234567"},
    {name: "Ivan", username: "ivan22", password: "134567"},
    {name: "Max", username: "max22", password: "123567"},
    {name: "Roman", username: "roman22", password: "23456"},
    {name: "Katya", username: "katya22", password: "123467"},
    {name: "Oleg", username: "oleg22", password: "123537"},
    {name: "Nazar", username: "nazar22", password: "1334567"},
    {name: "Bogdan", username: "bogdan22", password: "133234567"},
    {name: "Marko", username: "marko22", password: "1234333567"},
    {name: "Illya", username: "illya22", password: "123455733"},
]

for (let i=0; i < user.length; i++) {
    console.log(user[i].password);
}

