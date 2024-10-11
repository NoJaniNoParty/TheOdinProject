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
    return aGuy > bGuy ? 1 : -1;
  });
  console.table(fifth);
  // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
  // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris


  // 7. sort Exercise
  // Sort the people alphabetically by last name

  // 8. Reduce Exercise
  // Sum up the instances of each of these
  const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];
