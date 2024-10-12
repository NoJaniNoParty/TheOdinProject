let num1=0, num2=0, operator;


let tempoperator = document.querySelectorAll(".op");


tempoperator.forEach(e => {
    e.addEventListener("click", function(){
        operator = this.innerHTML;
        console.log(operator);
    })
    
});


function operate(num1, num2, operator){
    switch(operator){
        case '+':
            console.log(add(num1,num2));
            break;
        case '-':
            sub(num1,num2);
            break;
        case '*':
            multiply(num1,num2);
            break;
        case '/':
            divide(num1,num2);
            break;
        default:
            break;
    }
}


function add(num1, num2){
    return num1 + num2;
}

function sub(num1, num2){

}

function multiply(num1, num2){

}

function divide(num1, num2){

}

operate(num1,num2,operator);