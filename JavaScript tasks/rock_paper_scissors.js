const cpu = ["rock", "paper","scissors"];



let computer;
function game(){
    let player = prompt("Choose");
    let random =  Math.floor(Math.random()*3);
    computer = cpu[random];

    if(player === "rock"){
        if(computer === "rock"){
            console.log("draw -- computer threw " + cpu[random]);
            game();
        }
        else if(computer === "paper"){
            console.log("computer wins -- computer threw " + cpu[random]);
            game();
        }
        else if(computer === "scissors"){
            console.log("player wins -- computer threw " + cpu[random]);
            game();
        }
    }
    else if(player === "paper"){
        if(computer === "rock"){
            console.log("player wins -- computer threw " + cpu[random]);
            game();
        }
        else if(computer === "paper"){
            console.log("draw -- computer threw " + cpu[random]);
            game();
        }
        else if(computer === "scissors"){
            console.log("computer wins -- computer threw " + cpu[random]);
            game();
        }
    }
    else if(player === "scissors"){
        if(computer === "rock"){
            console.log("computer wins -- computer threw " + cpu[random]);
            game();
        }
        else if(computer === "paper"){
            console.log("player wins -- computer threw " + cpu[random]);
            game();
        }
        else if(computer === "scissors"){
            console.log("draw -- computer threw " + cpu[random]);
            game();
        }
    }
    else{
        console.log("wrong answer type again");
        game();
    }

}

