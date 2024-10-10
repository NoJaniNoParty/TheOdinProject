const gridContainer = document.querySelector(".main");

const regenButton = document.getElementById("regenButton");
let opaci = 1;
let gridNumber;
regenButton.addEventListener("click", function (){
     gridNumber = prompt("Enter the number of cells in a row");

     generate();
});

let isMouseDown;

function generate(){
       let gridItems = document.querySelectorAll(".gridItem");
       gridItems.forEach(element => {
        element.remove();
       });
    
    
    let size = 600 / gridNumber;
    for(let i = 0; i < Math.pow(gridNumber,2); i++){
            let gridItem;
            gridItem = document.createElement("div");
            gridItem.classList.add("gridItem");
            gridItem.style.width = `${size}px`;
            gridItem.style.height = `${size}px`;
            gridContainer.appendChild(gridItem);
            

           
    }
    gridItems = document.querySelectorAll(".gridItem");


    gridItems.forEach(element => {
        element.addEventListener("mousedown", function(){
        isMouseDown = true;
    })
});

    
    gridItems.forEach(element => {
            element.addEventListener("mouseup", function(){
            isMouseDown = false;
        })
    });


    gridItems.forEach(element => {
        element.addEventListener("mousemove", function (){
            if(isMouseDown === true){
                const randomColor = `rgb(${Math.floor(Math.random() * 256)}, 
                                            ${Math.floor(Math.random() * 256)}, 
                                            ${Math.floor(Math.random() * 256)})`;
                 this.style.backgroundColor = randomColor;
                
              
                
        
                
        
               
            }
           
        });
       
    });
            
}