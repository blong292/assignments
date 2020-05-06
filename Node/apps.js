const readline = require('readline-sync')

// Function that adds two numbers and returns the result

const add = function (num1, num2) {
    const result = num1 + num2;
    console.log(result);
};
// Function that multiplies two numbers and returns the result

const multiplies = function (num1, num2) {
    const result = num1 * num2;
    console.log(result);
}
// Function that divides two numbers and returns the result

const divides = function (num1, num2){
    const result = num1 / num2;
    console.log(result);
}
// Function that subtracts two numbers and returns the result

const subtracts = function (num1, num2) {
    const result= num1 - num2;
    console.log(result);
}
// Please enter first/second number and store that number

const num1 = readlineSync.question('Please enter your first number');
    console.log(num1);

const num2 = readlineSync.question('Please enter your second number');
    console.log(num2);
    const num1 = Number(num1);
    const num2 = Number(num2);

    // Enter the operation to perform and then store operation
    
    if (operation === 'add') {
      console.log('The result is: ');
      const result = add(num1, num2);
    } else if (operation === 'sub') {
      console.log('The result is: ');
      const result = sub(num1, num2);
    } else if (operation === 'mul') {
      console.log('The result is: ');
      const result = mul(num1, num2);
    } else if (operation === 'div') {
      console.log('The result is: ');
      const result = div(num1, num2);
    } else {
      console.log(" This is not the result ");
    }
