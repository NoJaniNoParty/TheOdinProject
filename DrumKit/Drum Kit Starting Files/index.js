var numofbuttons = document.querySelectorAll(".drum").length;

for(var i =0; i< numofbuttons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        audio.play();
    })
}


var audio = new Audio('./sounds/tom-1.mp3');