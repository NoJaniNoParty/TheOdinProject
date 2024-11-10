    const Gameboard = (function(){
        let turnTracker = "p1";
        let resetButton = document.querySelector("#playAgain");
        let gameOver = false;
        let box = document.querySelectorAll(".box");
        let popup = document.querySelector("#popup");
        const popupMessage = document.querySelector("#popup p:nth-child(2)");
        popup.style.visibility = "visible";
        
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

        const GameStatus = {noWinner : true};
        function addingToBoard(e){
            
                if(turnTracker === "p1"){
                    Players.player1.push(Number(e.getAttribute('value')));
                    console.log(Players.player1);
                    if(checkForWinner(Players.player1)){
                        Players.winTracker = 0;
                        endGame("Player 1 has won!!!");
                       
                        GameStatus.noWinner = false;
                        gameOver = true;
                    }
                    else{
                        turnTracker = "p2";
                    }
                    
                    e.innerHTML = "x";
                    i++;
                    e.classList.add("disabled");
                    
                    
                }
                else{
                    Players.player2.push(Number(e.getAttribute('value')));
                    console.log(Players.player2);
                    if(checkForWinner(Players.player2)){
                        endGame("Player 2 has won!!!");
                        Players.winTracker = 1;
                        GameStatus.noWinner = false;
                        gameOver = true;
                       
                    }
                    else{
                        turnTracker = "p1";
                    }
                    
                    e.innerHTML = "o";              
                    i++;
                    e.classList.add("disabled");

                    
                    
                }
                if(gameOver){
                    Players.printResult(gameOver);
                }
            
        }

    //CHECKFORWINNER WARNING - the commented part worked mostly, but fell short when the game went on to 4 array items on some occasion it would not end the game
    // let tempP1 =[];
        //let tempP2 = [];
        function checkForWinner(playerMoves){
            playerMoves.sort();

            return conditions.some(condition => condition.every(value => playerMoves.includes(value)));



        /*
        if(turn === "p1"){
            Players.player1.sort();
            
            for(let i = 0; i < conditions.length; i++){
                
                for(let j = 0; j < Players.player1.length;j++){
                
                    tempP1 = Players.player1.slice(j,j+3);
                    if(Players.player1.length >= 3){
                        if(Players.player1.every(value => conditions[i].includes(value))){
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
            */
        }

        function endGame(winner){
            box.forEach(e =>{
                e.classList.add("disabled");
                popup.style.visibility = "visible";
                popupMessage.innerHTML = winner;
                
            })
        }

    
        let i = 0;
    // no winner at the end finishing the game
            box.forEach(e => {
                e.addEventListener("click", function(){
                
                    if(i === 8){
                        if(GameStatus.noWinner){
                            popupMessage.innerHTML = "It's a draw";
                            
                        }
                        gameOver = true;
                        popup.style.visibility = "visible";
                            addingToBoard(e);
                    }
                    else{
                        addingToBoard(e);
                        
                    }
                
                })
            });
    // reseting the game to the start
            resetButton.addEventListener("click", function(){
                i = 0;
                popup.style.visibility = "hidden";
                Players.player1.length = 0;
                Players.player2.length = 0;
                turnTracker = "p1";
                GameStatus.noWinner = true;
                gameOver = false;
                Players.winTracker = null;
                box.forEach(e => {
                    e.classList.remove("disabled");
                    e.innerHTML = "";
                });
            });
        
        return {gameboardAr, GameStatus};


    })();

    const Players = (function(){

        const player1 = [];
        const player2 = [];


        let p1Wins = 0;
        let p2Wins = 0;
        let winTracker = null;
        let round = 1;


        function printResult(detectGameover){
            console.log(detectGameover);
            if(Players.winTracker === 0){
                if(round % 2 === 1){
                    p1Wins++;
                }
                else{
                    p2Wins++;
                }
                
            }
            if(Players.winTracker === 1){
                if(round % 2 === 1){
                    p2Wins++;
                }
                else{
                    p1Wins++;
                }
            }
            round++;
            winTracker = null;
            console.log("Player 1 wins:" + p1Wins);
            console.log("Player 2 wins:" + p2Wins);

        }

        return {player1, player2, winTracker,  printResult};


    })();


