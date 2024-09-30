;
// Implement instances of the 'Product' type
function createElectronicDevice(brand, model) {
    return {
        type: 'electronic',
        brand: brand,
        model: model
    };
}
function createBook(name, author) {
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
function displayProductDetails(product) {
    if (product.type === 'electronic') {
        console.log(`Brand: ${product.brand}`);
        console.log(`Model: ${product.model}`);
    }
    else {
        console.log(`Name: ${product.name}`);
        console.log(`Author: ${product.author}`);
    }
}
console.log('Electronic Device Details:');
displayProductDetails(electronicProduct);
console.log('-------------------');
console.log('Book Details:');
displayProductDetails(bookProduct);
export {};
