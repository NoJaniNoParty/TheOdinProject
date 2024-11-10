



const Gameboard = (function(){
    let turnTracker = "p1";
    let noWinner = true;
    let box = document.querySelectorAll(".box");
    let popup = document.querySelector("#popup");
    const popupMessage = document.querySelector("#popup p:nth-child(2)");
    popup.style.visibility = "hidden";
    
    const gameboardAr = [1,2,3,4,5,6,7,8,9];
    const conditions = [
        [1,2,3],
        [4,5,6],
        [7,8,9],
        [1,4,7],
        [2,5,8],
        [3,6,9],
        [3,5,7],
        [1,5,9]
    ];

  
    function addingToBoard(e){
           
            if(turnTracker === "p1"){
                Players.player1.push(Number(e.getAttribute('value')));
                console.log(Players.player1);
                checkForWinner(turnTracker);
                e.innerHTML = "x";
                turnTracker = "p2";
                
                
                i++;
                e.classList.add("disabled");
                
            }
            else{
                Players.player2.push(Number(e.getAttribute('value')));
                console.log(Players.player2);
                checkForWinner(turnTracker);
                e.innerHTML = "o";
                
                turnTracker = "p1";
               
              
                i++;
                e.classList.add("disabled");
                
            }
    }
    let tempP1 =[];
    let tempP2 = [];
    function checkForWinner(turn){
       
       if(turn === "p1"){
        Players.player1.sort();
        
        for(let i = 0; i < conditions.length; i++){
            
            for(let j = 0; j < Players.player1.length;j++){
               
                tempP1 = Players.player1.slice(j,j+3);
                if(tempP1.length >= 3){
                    if(tempP1.every(value => conditions[i].includes(value))){
                        console.log("prvi dobio");
                        endGame("Player 1 has won!!!");
                        noWinner = false;
                    }
                }
               
            }
        }
       }
       else{
        Players.player2.sort();
        
        for(let i = 0; i < conditions.length; i++){
            
            for(let j = 0; j < Players.player2.length;j++){
               
                tempP2 = Players.player2.slice(j,j+3);
                if(tempP2.length >= 3){
                    if(tempP2.every(value => conditions[i].includes(value))){
                        console.log("drugi dobio");
                        endGame("Player 2 has won!!!");
                        noWinner = false;
                    }
                }
               
            }
        }
       }

    }

    function endGame(winner){
        box.forEach(e =>{
            e.classList.add("disabled");
            popup.style.visibility = "visible";
            popupMessage.innerHTML = winner;
            
        })
    }

  
    let i = 0;
       
        box.forEach(e => {
            e.addEventListener("click", function(){
                if(i === 8){
                    if(noWinner){
                        popupMessage.innerHTML = "It's a draw";
                    }
                    box.forEach(e =>{
                        e.classList.add("disabled");
                        popup.style.visibility = "visible";
                        
                        
                    })
                    popup.style.visibility = "visible";
                        addingToBoard(e);
                }
                else{
                    addingToBoard(e);
                    
                }
               
            })
        });
       
      
       

  

    


    return {gameboardAr};


})();

const Players = (function(){

    const player1 = [];
    const player2 = [];


    
    


    return {player1, player2};


})();


