/*Write a for loop that prints to the console the numbers 0 through 9.*/

const arrNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

for(let i= 0; i < arrNumbers.length; i++){
    console.log(arrNumbers[i])
}
/*Write a for loop that prints to the console 9 through 0.*/

for(let j = arrNumbers.length -1; j >= 0; j--){
        console.log(arrNumbers[j])
    }


/*Write a for loop that prints these fruits to the console.*/
var fruit = ["banana", "orange", "apple", "kiwi"]

for(let k = 0; k < fruit.length; k++){
    console.log(fruit[k])
}

// BRONZE MEDAL//

const countArray = [];
for(let i = 0; i <= 9; i++){
    countArray.push(i);
} console.log(countArray)

for(let i = 0; i <=100; i+= 2){
    console.log(i)
}

const fruit1 = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
let otherFruit = [[],[]];
for(let i = 0; i < fruit1.length; i++)
    otherFruit[i % 2].push(fruit1[i]);
let [a,b] = otherFruit;
console.log(b)


