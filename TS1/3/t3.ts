export { }; // hack to ignore Book from task 4  
// TODO: Define a type alias named 'Book' with appropriate properties
type Book = {
    title: string | null;
    author: string | null;
    publicationYear: number | null;
};

function promptForBook() {
    const bookTitle = prompt("Enter the book title:");
    const bookAuthor = prompt("Enter the book author:");
    const bookPublicationYear = prompt("Enter the publication year:");

    // TODO: Create an object of type 'Book' with the entered values
    const book: Book = {
        title: bookTitle,
        author: bookAuthor,
        publicationYear: bookPublicationYear ? parseInt(bookPublicationYear) : null
    };

    return book;
}

// TODO: Call the promptForBook function to get the book details
const bookDetails = promptForBook();

// TODO: Display the details of the book object to the user
console.log("Book Details:");
console.log(`Title: ${bookDetails.title}`);
console.log(`Author: ${bookDetails.author}`);
console.log(`Publication Year: ${bookDetails.publicationYear}`);

const targetElement = document.getElementById('target');
if (targetElement) {
    targetElement.innerHTML = `<h2>Book Details:</h2>
    <p>Title: ${bookDetails.title}</p>
    <p>Author: ${bookDetails.author}</p>
    <p>Publication Year: ${bookDetails.publicationYear}</p>`;
}