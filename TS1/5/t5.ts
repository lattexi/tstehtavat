// TODO: Implement the lengthOrSquare function
// define the type(s) for 'value'
function lengthOrSquare(value: string | number | undefined): string | number | undefined {
    // TODO: Use a type guard to check the actual type of 'value'
    // if type is string, retrurn the length of the string
    if (typeof value === 'string') {
        return value.length;
    }
    // if type is number return the square of the number
    if (typeof value === 'number') {
        return value * value;
    }
}

// Prompt the user to enter a value as either a string or a number
const userInput2 = prompt('Enter a value as either a string or a number');
/* TODO: If userInput is numeric, convert it to number else keep it as string */
let parsedValue;
if (!userInput2) {
    parsedValue = undefined;
} else if (!isNaN(parseFloat(userInput2))) {
    parsedValue = parseFloat(userInput2);
} else {
    parsedValue = userInput2;
}

// Call the lengthOrSquare function
const result2 = lengthOrSquare(parsedValue);
console.log(typeof parsedValue);
console.log(result2);
