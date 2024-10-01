










function calc(){
    var p1 = document.getElementById('number1');
    var p2 = document.getElementById('number2');
    var p3;
    var p4;
    var result = document.getElementById('result');

    p3 = Math.floor(Math.random() * 6 + 1);
    p4 = Math.floor(Math.random() * 6 + 1);
    p1.textContent = p3;
    p2.textContent = p4;

    if(p3 > p4){
         result.textContent = 'PLAYER 1 WINS !!!';
    }
    else if(p3 < p4){
         result.textContent = 'PLAYER 2 WINS !!!';
    }
    else{
         result.textContent = 'ITS A DRAW';
    }
}

onload = calc();