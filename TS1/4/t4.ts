export { }; // hack to ignore Book from task 3
// TODO Define the 'ElectronicDevice' interface (or type)
interface ElectronicDevice {
    type: 'electronic';
    brand: string | null;
    model: string | null;
};

interface Book {
    type: 'book';
    name: string | null;
    author: string | null;
}

// Define the 'Product' type alias that can represent either 'ElectronicDevice' or 'Book'
type Product = ElectronicDevice | Book;

// Implement instances of the 'Product' type
function createElectronicDevice(brand: string | null, model: string | null): ElectronicDevice {
    return {
        type: 'electronic',
        brand: brand,
        model: model
    };
}

function createBook(name: string | null, author: string | null): Book {
    return {
        type: 'book',
        name: name,
        author: author
    };
}

// Create instances of 'Product'
const electronicProduct = createElectronicDevice('Sony', 'X123');
const bookProduct = createBook('The Great Gatsby', 'F. Scott Fitzgerald');

// Display the details of each product
function displayProductDetails(product: Product) {
    if (product.type === 'electronic') {
        console.log(`Brand: ${product.brand}`);
        console.log(`Model: ${product.model}`);
    } else {
        console.log(`Name: ${product.name}`);
        console.log(`Author: ${product.author}`);
    }
}

console.log('Electronic Device Details:');
displayProductDetails(electronicProduct);

console.log('-------------------');

console.log('Book Details:');
displayProductDetails(bookProduct);
