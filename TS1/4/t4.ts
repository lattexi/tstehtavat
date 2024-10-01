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
function createElectronicDevice(): ElectronicDevice {
    const brand = prompt('Enter brand:') || "";
    const model = prompt('Enter model:') || "";
    return {
        type: 'electronic',
        brand: brand,
        model: model
    };
}

function createBook(): Book {
    const name = prompt('Enter name:') || "";
    const author = prompt('Enter author:') || "";
    return {
        type: 'book',
        name: name,
        author: author
    };
}

// Create instances of 'Product'
const electronicProduct = createElectronicDevice();
const bookProduct = createBook();

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