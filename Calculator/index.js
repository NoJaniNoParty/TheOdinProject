let firstNum = null;
let secondNum = null;
let firstOperator = null;
let secondOperator = null;
let isOpActive = false;

const buttons = document.querySelectorAll('.but');
let display = document.querySelector('.numDisplay');



function buttonClick(){
    buttons.forEach(e => {
        e.addEventListener("click", function (){
            if(e.classList.contains('num')){
                inputNumber(Number(e.value));
                charLimit();
              
                
            }
            else if(e.classList.contains('op')){
                if(display.value !== ''){
                    isOpActive = true;
                    inputOperator(e.value);
                    charLimit();
                }
               
            }
            else if(e.classList.contains('dot')){
                inputDot(e.value);
                charLimit();
               
            }
            else if(e.classList.contains('equals')){
                inputEquals(e.value);
                charLimit();
              
            }
            else if(e.classList.contains('sign')){
                inputSign(e.value);
                charLimit();
              
            }
            else if(e.classList.contains('clear')){
                inputClear(e.value);
                charLimit();
                
            }
        })
        
    });
}
buttonClick();


function inputNumber(number){
    
    if(isOpActive === true){
        display.value = '';
    }
    else{

    }
    isOpActive = false;
    if(firstOperator === null){

        display.value += number;
        firstNum = display.value;
        
    }
    else{
        
        display.value += number;
        
        secondNum = display.value;
        
        

    }
  
}

function inputOperator(operator){
    if(operator === '='){
        secondOperator = null;
        operator = null;
      
    }
   
    if(firstOperator === null){
        firstOperator = operator;
        console.log('first operator:' + firstOperator)
    }
    else{
        secondOperator = operator;
        firstNum = operate(Number(firstNum), Number(secondNum), firstOperator);
        display.value = firstNum;
        firstOperator = secondOperator;
    }
  
    
    
}

function inputDot(){
    display.value += '.';
}

function inputEquals(){
    if(secondNum !== null){
        firstNum = operate(Number(firstNum), Number(secondNum), firstOperator);
    }
    
}

function inputSign(){
    display.value *= -1;    
    if(firstOperator === null){
        firstNum = display.value;
    }
    else{
        secondNum = display.value;
    }
    
}

function inputClear(){
     firstNum = null;
     secondNum = null;
     firstOperator = null;
     secondOperator = null;
     display.value = '';
     isOpActive = false;
    
}






function operate(a, b, op){
    switch(op){
        case '+':
            return a + b;
            break;
        case '-':
            return a - b;
            break;
        case '*':
            return a * b;
            break;
        case '/':
            if(b === 0){
                buttons.forEach(e => {
                    if(e.classList.contains('clear')){

                    }
                    else{
                        e.style.pointerEvents = 'none';
                    }
                  
                    
                });

                return 'wtf tebra';
            }
            else{
                return a / b;
            }
          
            break;
        default:
            break;
    }
}

function charLimit(){
    if(display.value.length > 3){
        display.value = display.value.substr(0, 3);
    }
}