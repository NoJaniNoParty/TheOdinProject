/*
let schedule = {};

//alert( isEmpty(schedule) ); // true

//schedule["8:30"] = "get up";

//alert( isEmpty(schedule) ); // false


function isEmpty(obj){
    for(let prop in schedule){
        return false;
    }
        return true;
}
schedule["8:30"] = "get up";
alert( isEmpty(schedule) ); // true



*/
//-----------------------
/*
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }

        let sum = 0;
    for(let prop in salaries){
        sum += salaries[prop];
    }
    console.log(sum);
*/


//--------------------------------

// before the call
/*
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };
  
  
  multiplyNumeric(menu);

  function multiplyNumeric(obj){
    for(let prop in obj){
        if(typeof obj[prop] == "number"){
            obj[prop] *= 2;
        }
    }
  }
 
  for(let prop in menu){
    console.log(prop + " " + menu[prop]);
  }
  *//*


function filterIt(num){
    return num % 2 === 0;
}

function multiplyIt(num){
    return num * 3;
}

function sumOfTripledEvens(myArray){
    const filteredArr = myArray.filter(filterIt);

    const mappedArr = filteredArr.map(multiplyIt);

    const finalArr = mappedArr.reduce((total, currentItem) => {
        return total + currentItem;
    });

    console.log(finalArr);
}
*//*
const myArray = [1,2,3,4,5];


function sumOfTripledEvensOptimized(array){
    return array
        .filter((num) => num % 2 === 0)
        .map((num) => num * 3)
        .reduce((total, currentItem) => 
            total + currentItem
        );
    
}

console.log(sumOfTripledEvensOptimized(myArray));
*/
/*
 
const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
  ];

  const people = [
    'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
    'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
    'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
    'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
    'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
  ];
  
  // Array.prototype.filter()
  // 1. Filter the list of inventors for those who were born in the 1500's
  const firstl = inventors.filter((inventor) => (inventor.year >= 1500 && inventor.year <= 1600));
  //console.table(firstl);



  // Array.prototype.map()
  // 2. Give us an array of the inventors first and last names
  const second = inventors.map((inventor) => `${inventor.first} ${inventor.last}`);
  //console.table(second);



  // Array.prototype.sort()
  // 3. Sort the inventors by birthdate, oldest to youngest
  const third = inventors.sort((a,b) => a.year -  b.year);
 // console.table(third);

  // Array.prototype.reduce()
  // 4. How many years did all the inventors live all together?

  const fourth = inventors.reduce((total, currentItem) => total + (currentItem.passed - currentItem.year),0);
  //console.log(fourth);


  // 5. Sort the inventors by years lived

  const fifth = inventors.sort((a,b) => {
    const aGuy = a.passed - a.year;
    const bGuy = b.passed - b.year;
    return aGuy > bGuy ? -1 : 1;
  });
  //console.table(fifth);
  // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
  // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris


  // 7. sort Exercise
  // Sort the people alphabetically by last name

  // 8. Reduce Exercise
  // Sum up the instances of each of these
  const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];
*/
/*
const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function() {
	Array.reduce((sum, num) =>{sum+num},0);
};

const multiply = function(a,b) {
    return a*b;
};

const power = function() {
	
};

const factorial = function() {
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

*/
/*
const Book = {
  title: "Hobbit",
  author: "Tolkien",
  pages: "214",
  read: "not read yet",

  info: function(){
    return (this.title + ", " + this.author + ", " + this.pages + ", " + this.read);
  }
 
};

console.log(Book.info());
*/
/*

function Player(name, marker) {
  this.name = name;
  this.marker = marker;
  this.sayName = function() {
    console.log(this.name)
  };
}

const player1 = new Player('steve', 'X');
const player2 = new Player('also steve', 'O');

Object.getPrototypeOf(Player.prototype) === Object.prototype; // true

// Output may slightly differ based on the browser
player1.valueOf(); // returns true
*/

/*
function Grade(age){
  this.age = age;
}

Grade.prototype.printAge = function(){
  console.log('Hey, my age is: ' + this.age);
};


function Student(name, age){
  this.name = name;
  this.age = age;
  
  }

Student.prototype.printName = function(){
  console.log('Hey, my name is ' + this.name);
};

function Teacher(name){
  this.name = name;
}
Student.prototype = Grade.prototype;
Teacher.prototype = Grade.prototype;
Teacher.prototype.printName = function() {
  console.log('The kid named ' + this.name + ' is terrible');
}
  
//Object.setPrototypeOf(Grade.prototype, Teacher.prototype);
//Object.setPrototypeOf(Student.prototype, Grade.prototype);





const student = new Student('luka', 50);
const student2 = new Student('ante', 20);

student.printName();
student2.printName();

student.printAge();
student2.printAge();

*/
/* destructuring with default value
const {a = 19} = {a:18};
console.log(a);

*/
/*
const fruit = {name : 'banana', weight : 15, color : 'red', postal : 10360};

const {name, color} = fruit;


console.log(name, color);

*/
//factory function
/*
function createProduct(name, price){
    const discoutPrice = price - 0.5;
    let timesBought = 0;

    const gettimesBought = () => timesBought;

    const addtimesBought = () => timesBought++;

    return {name, price, discoutPrice, gettimesBought, addtimesBought};
}

const milk = createProduct("milk", 25);

milk.addtimesBought();
milk.addtimesBought();

console.log({discoutPrice : milk.discoutPrice, timesBought : milk.gettimesBought(), price : milk.price  });

*/



/*
function Human(name, age){
    this.name = name;
    this.age = age;

}

const ante = new Human('ante', 17);

console.log(ante.name, ante.age);*/
/*
function makeStudent(name){

  const fullName = name + ' the student';

  let num = 0;


  const currentNum = function(){
     return num;
  }
  const raiseNum = function(){
    return ++num;
  }

  return{name, fullName, currentNum, raiseNum};

}

  const daniel = makeStudent('danci');

const carl = makeStudent('carl');


console.log(daniel.currentNum());
console.log(carl.currentNum());

daniel.raiseNum();
daniel.raiseNum();
carl.raiseNum();
daniel.fullName = carl.fullName;
console.log(daniel.currentNum());
console.log(carl.currentNum() + "/////////");

console.log(carl.raiseNum());


function createDumbStudent(name, age){
  const{currentNum, raiseNum} = makeStudent(name);
  const returnAge = function(){
    return age;
  }
  const increaseAge = function(){
    return ++age;
  }
  

  return {name, increaseAge, currentNum, raiseNum, returnAge };
}

const dumbdaniel = createDumbStudent('dumb_danci', 5);
dumbdaniel.increaseAge();
console.log(dumbdaniel.returnAge(), dumbdaniel.increaseAge(), dumbdaniel.currentNum(),  dumbdaniel.raiseNum(), dumbdaniel.currentNum());

*/
/*
const calculator = (function(){
  const add = (a,b) => a+b;

  return {add};

})();


const textCalculator = (function(){
  const add = (a,b) => a + " " + b;

  return {add}  ;
})();



console.log(calculator.add(2,7));

console.log(textCalculator.add(2,7));


const game = [0, 1, 2,
           3, 4, 5,
           6, 7 ,8
          ];

*/
// CLASSES
/*
class Student{
  constructor(name){this.name = name;}

   printName(){
      console.log(this.name);
   }
 }


let student = new Student("ante");

student.printName();

const Teacher = class klasa{
  constructor(name){this.name = name;}

  get name(){
    return this._name;
  }
  set name(value){
    if(value.length > 4){
      alert("Veci od 4");
      return;
    }
    this._name = value;
  }
  printName(){
     console.log(this.name);
  }
}
//reachable

let ivan = new Teacher("iva");
ivan.printName();
//not reachable
//console.log(klasa);


function makeClass(){
  //class declaration and return
  return class {
    classMade(){
      console.log("this shit has been made");
    }
  }

}
// this creates the new class
let Newclass = makeClass();


new Newclass().classMade();

class Movie{
  name = prompt("Give me your name!");
}

function giveMovie(){
  return new Movie;
}

let bumba = prompt("Give bumba");
if(bumba < 5){
  let bambi = giveMovie();
  console.log(bambi.name);
}


class Button {
  constructor(value) {
    this.value = value;
  }

  click = ()  => {
    alert(this.value);
  }
}

let button = new Button("hello");

setTimeout(button.click, 1000); // undefined
*/


class Clock{
 

  constructor({template}){
    this.template = template;
  }

  render() {
    let date = new Date();
  
    let hours = date.getHours();
    if (hours < 10) hours = '0' + hours;

    let mins = date.getMinutes();
    if (mins < 10) mins = '0' + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = '0' + secs;

    let output = this.template
          .replace('h', hours)
          .replace('m', mins)
          .replace('s', secs);

    console.log(output);
  }
    stop() {
      clearInterval(this.timer);
    }
  
    start() {
      this.render();
      this.timer = setInterval(() => this.render(), 1000);
    }
}

  
let clock = new Clock({template: 's:m:h'});
clock.start();



