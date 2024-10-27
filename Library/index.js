const library=[];


let newBookButton = document.querySelector("#newFormButton");

newBookButton.addEventListener("click",  function(){
    let newBookForm = document.querySelector("#book-form");
    newBookForm.style.display = "block";
})

function Book(title, author, pages, wasRead){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.wasRead = wasRead;

}
function render(){
    let libraryBook = document.querySelector("#library");
    libraryBook.innerHTML = "";
    for(let i = 0; i < library.length; i++){

        let book = library[i];
        let libEl = document.createElement("div");
        libEl.setAttribute("class", "book");
        libEl.innerHTML = `  
                    <div class="title">${book.title}</div>
                    <div class="author">${book.author}</div>
                    <div class="pages">${book.pages}</div>
                    <button type="button" class="wasRead">${book.wasRead}</button>
                     <button type="button" class="delete">sasas</button> 
                 `;
        libraryBook.appendChild(libEl);
    }
}

function addToLibrary(){
    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let pages = document.querySelector("#pages").value;
    let wasRead = document.querySelector("#wasRead").value;

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

