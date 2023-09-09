const myLibrary = [];

const openButton = document.querySelector('.openButton');
const massDeleteBtn = document.querySelector('.massDelete');
const dialogBox = document.querySelector('.dialogBox');
const confirmBtn = document.querySelector('.confirmBtn');
const cancelBtn = document.querySelector('.cancelBtn');

openButton.addEventListener('click', () => {
    dialogBox.showModal();
});

cancelBtn.addEventListener('click', () => {
    dialogBox.close();
});

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = function() {
        console.log(title);
        console.log(author);
        console.log(pages);
        console.log(read);

        return 'Title:' + (title) +'\n'+ 'Author:'+ (author) +'\n'+ 'Pages:' + (pages) +'\n'+ 'Read:' +(read)
    };
};

const newContainerDiv = document.createElement('div');
newContainerDiv.classList.add('bigBoyDiv');
const newDiv = document.createElement('div');
const output = document.querySelector('.output');

document.body.insertBefore(newContainerDiv, output)

function addLibraryToPage(myLibrary) {
    for (let index = 0; index < myLibrary.length; ++index) {
        console.log(index);
        
        const newDiv = document.createElement('div');
        newDiv.classList.add('container')
        const bookBox = document.createElement('span');
        bookBox.classList.add('library-books');
        bookBox.textContent = myLibrary[index].info();
        newDiv.appendChild(bookBox);
        newContainerDiv.appendChild(newDiv);

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'X';
        deleteBtn.classList.add('delete-button');
        newDiv.appendChild(deleteBtn);

        deleteBtn.addEventListener('click', function() {
            bookBox.remove();
            newDiv.remove();
        });

        const checkBox = document.createElement('input');
        checkBox.classList.add('checkBox');

        // Assigning values to the checkbox
        checkBox.type = 'checkbox';
        checkBox.name = 'deleteSelector';
        checkBox.value = 'value';
        checkBox.id = 'deleteSelector';

        let label = document.createElement('label');
        label.htmlFor = 'deleteSelector';
        newDiv.appendChild(label);
        newDiv.appendChild(checkBox);

        massDeleteBtn.addEventListener('click', function() {
            console.log('Last thing to add')
            if (checkBox.checked) {
                bookBox.remove();
                newDiv.remove();
            }
        });
    }
};

function addBookToLibrary(element) {
    const newLibrary = myLibrary.push(element);
}

function removeBook(el) {
    let element = el;
    element.remove();
}

function addEntryToPage(bookData) {
    for (let i = 0; i < 1; i++) {
        const newDiv = document.createElement('div');
        const newEntryDiv = document.createElement('div');
        newEntryDiv.classList.add('container');

        const newEntry = document.createElement('span');
        newEntry.classList.add('library-books');
        newEntry.textContent = bookData.info();

        newEntryDiv.appendChild(newEntry);
        newDiv.appendChild(newEntryDiv);
        newContainerDiv.appendChild(newDiv);

        const checkBox = document.createElement('input');
        checkBox.classList.add('checkBox');
        newEntryDiv.appendChild(checkBox);

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'X';
        deleteBtn.classList.add('delete-button');
        newEntryDiv.appendChild(deleteBtn);

        deleteBtn.addEventListener('click', function() {
            newEntry.remove();
            newEntryDiv.remove();
        });

        massDeleteBtn.addEventListener('click', function() {
            console.log('Last thing to add')
            if (checkBox.checked) {
                newEntry.remove();
                newEntryDiv.remove();
            }
        });

        // Assigning values to the checkbox
        checkBox.type = 'checkbox';
        checkBox.name = 'deleteSelector';
        checkBox.value = 'value';
        checkBox.id = 'deleteSelector';

        let label = document.createElement('label');
        label.htmlFor = 'deleteSelector';
        newEntryDiv.appendChild(label);

        document.body.insertBefore(newContainerDiv, output);
    };
    return bookData.info();
};

const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('select').value;

    const bookData = new Book(title, author, pages, read);

    addEntryToPage(bookData);
    console.log(bookData);
    console.log(myLibrary);
});

const toSleep = new Book("To Sleep in a Sea of Stars", "Christopher Paolini", "400", "No")
console.log(toSleep.title)

const king = new Book("Return of the King", "Tolkein", "300", "No")

const dragon = new Book('Eragon', 'Christopher Paolini', '250', 'Yes');

addLibraryToPage(myLibrary);

console.log(myLibrary);