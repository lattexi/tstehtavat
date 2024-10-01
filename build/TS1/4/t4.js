;
// Implement instances of the 'Product' type
function createElectronicDevice() {
    const brand = prompt('Enter brand:') || "";
    const model = prompt('Enter model:') || "";
    return {
        type: 'electronic',
        brand: brand,
        model: model
    };
}
function createBook() {
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
