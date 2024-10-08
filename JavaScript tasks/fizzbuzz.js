//TASK: Write a program that allows the user to enter a number, print each number between one and the number the user entered, but for numbers that divide by 3 without a remainder print Fizz instead. For numbers that divide by 5 without a remainder print Buzz and finally for numbers that divide by both 3 and 5 without a remainder print FizzBuzz.

let input = prompt("Write your number");


for(i=1;i<=input;i++){
    if(i % 3 ===0 & i % 5 === 0){
        console.log("fizzbuzz");
    }
    else if(i % 3 === 0){
        console.log("fizz");
    }
    else if(i % 5 === 0){
        console.log("buzz");
    }
    else{
        console.log(i);
    }
}

