const library=[];


let newBookButton = document.querySelector("#newFormButton");
let hidden = true;
newBookButton.addEventListener("click",  function(){
    
    if (hidden === true){
        let newBookForm = document.querySelector("#book-form");
        newBookForm.style.display = "block";
        hidden = false;
    }
    else{
        newBookForm.style.display = "none";
        hidden = true;
    }
    
})

function Book(title, author, pages, wasRead){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.wasRead = wasRead;

}

Book.prototype.toggleRead = function(){
    this.wasRead = !this.wasRead;
}

function toggleRead(i){
    library[i].toggleRead();
    render();
}


function render(){
   
    let libraryBook = document.querySelector("#library");
    libraryBook.innerHTML = "";
    for(let i = 0; i < library.length; i++){

        let book = library[i];
        let readButtonStyle = book.wasRead ? "background-color: red;" : "background-color: green;";
        let readButtonText = book.wasRead ? "Read" : "Not Read Yet";
        let libEl = document.createElement("div");
        libEl.setAttribute("class", "book");
        libEl.innerHTML = `  
                    <div class="title">${book.title}</div>
                    <div class="author">${book.author}</div>
                    <div class="pages">${book.pages}</div>
                    <button type="button" class="wasRead" onclick="toggleRead(${i})" style="${readButtonStyle}">${readButtonText    }</button>
                     <button onclick="removeBook(${i})" class="delete">Delete</button> 
                 `;
        libraryBook.appendChild(libEl);
    }
}

function addToLibrary(){
    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let pages = document.querySelector("#pages").value;
    let wasRead = document.querySelector("#wasRead").checked;

    if(wasRead.checked){
        console.log("provjerena");
    }
    else{
        console.log("nije dobra");
    }


    let newBook = new Book(title, author, pages, wasRead);
    
    library.push(newBook);
    console.log(library);
    render();

   

}

let newBookForm = document.querySelector("#book-form");
newBookForm.addEventListener("submit", function (event){
    event.preventDefault();
   addToLibrary();
   
});

function removeBook(index){
    library.splice(index, 1);
    render();
}