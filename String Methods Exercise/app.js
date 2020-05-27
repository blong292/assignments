const cap = ("Hello") // => "HELLOhello"
   let cap1 = cap.toUpperCase();
   let cap2 = cap.toLowerCase();
   console.log(cap1 + cap2);

// Make a function that returns half the length rounded down. 

function findMiddleIndex(str) {
	return (split = Math.floor(str.length / 2));
}
console.log(findMiddleIndex("Hello") )
console.log(findMiddleIndex("Hello World"))
/*Make a function that uses slice() and the other functions you've written to return the first half of the string*/

function returnFirstHalf(str){
    const middle = findMiddleIndex(str);
    return (newStr = str.slice(0, middle));
}
function returnSecondHalf(str) {
    const middle = findMiddleIndex(str);
    return (newStr= str.slice(middle));
}

console.log(returnFirstHalf("Hello") )// => "He"
console.log(returnFirstHalf("Hello World") )// => "Hello"

/* Make a function that takes a string and returns that string where the first half is capitalized, and the second half is lower cased. */

function capilizeAndLowercase(str){
    const first =returnFirstHalf(str);
    const second = returnSecondHalf(str);
    return (newStr = first.toUpperCase() + second.toLowerCase());

}

console.log(capilizeAndLowercase("Hello"))// => "HEllo"
console.log(capilizeAndLowercase("Hello World"))// => "HELLO world"
