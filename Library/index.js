const library=[];


function Book(title, author, pages, wasRead){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.wasRead = wasRead;


    this.info = function(){
        return (this.title + ", " + this.author + ", " + this.pages + ", " + this.wasRead);
    }
}
const harryPotter = new Book("Harry Potter", "J.K.Rowling", 256, "not read yet");

library.push(harryPotter);

library.forEach(e => {
    console.log(e);
});

function addToLibrary(){
    
    
}

addToLibrary();