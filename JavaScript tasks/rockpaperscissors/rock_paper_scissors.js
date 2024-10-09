const cpu = ["rock", "paper","scissors"];
const buttons = document.querySelectorAll(".choiceButtons");
const playerScore = document.querySelector("#playerScore");
const computerScore = document.querySelector("#computerScore");


let playerMove;
let computer;

let playerScoreNumber = 0;
let computerScoreNumber = 0;


buttons.forEach( function(button){
    button.addEventListener("click", play)
})


function randomizer(){
    let random =  Math.floor(Math.random()*3);
    return cpu[random];
}



function blinking(){
    
    if(".rock" === "." + computer){
        document.querySelector(".rock").style.background = "red";
    } 
    else if(".paper" === "." + computer){
        document.querySelector(".paper").style.background = "red";
    } 
    else
        document.querySelector(".scissors").style.background = "red";


}



function play(){
    computer = randomizer();
    playerMove = (this.innerHTML).toLowerCase(); 
    game();
    blinking();
}

function game(){
    
    if(playerMove == "rock"){
        if(computer === "rock"){
            console.log("draw -- computer threw " + computer);
            
            
        }
        else if(computer === "paper"){
            console.log("computer wins -- computer threw " + computer);
            computerScore.innerHTML = computerScoreNumber++;
        }
        else if(computer === "scissors"){
            console.log("player wins -- computer threw " + computer);
            playerScore.innerHTML = playerScoreNumber++;
        }
    }
    else if(playerMove == "paper"){
        if(computer === "rock"){
            console.log("player wins -- computer threw " + computer);
            playerScore.innerHTML = playerScoreNumber++;
        }
        else if(computer === "paper"){
            console.log("draw -- computer threw " + computer);
           
        }
        else if(computer === "scissors"){
            console.log("computer wins -- computer threw " + computer);
            computerScore.innerHTML = computerScoreNumber++;
        }
    }
    //scissors no need for else if
    else{
        if(computer === "rock"){
            console.log("computer wins -- computer threw " + computer);
            computerScore.innerHTML = computerScoreNumber++;
        }
        else if(computer === "paper"){
            console.log("player wins -- computer threw " + computer);
            playerScore.innerHTML = playerScoreNumber++;
        }
        else if(computer === "scissors"){
            console.log("draw -- computer threw " + computer);
            
        }
    }
}

