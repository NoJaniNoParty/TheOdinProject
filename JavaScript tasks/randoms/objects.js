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
*/
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

 