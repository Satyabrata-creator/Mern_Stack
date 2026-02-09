// Create a module in Node.js that contains several functions for different arithmetic
// operations like addition, subtraction, multiplication, and division. Use ES6 export to
// export all the functions from the module and use them in a separate file.
export function add(a, b) {
    return a + b;
}

export function subtract(a, b) {
    return a - b;
}

export function multiply(a, b) {
    return a * b;
}

export function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero is not allowed");
    }
    return a / b;
}