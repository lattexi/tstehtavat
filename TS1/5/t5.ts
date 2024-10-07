// TODO: Implement the lengthOrSquare function
// define the type(s) for 'value'
function lengthOrSquare(value: string | number): number {
    // TODO: Use a type guard to check the actual type of 'value'
    // if type is string, retrurn the length of the string
    if (typeof value === 'string') {
        return value.length;
    } else {
        return value * value;
    }
}

// Prompt the user to enter a value as either a string or a number
const userInput2 = prompt('Enter a value as either a string or a number') || '';
/* TODO: If userInput is numeric, convert it to number else keep it as string */
const parsedValue: number | string = !isNaN(Number(userInput2))
    ? Number(userInput2)
    : userInput2;

// Call the lengthOrSquare function
const result2 = lengthOrSquare(parsedValue);
console.log(typeof result2);
console.log(result2);
