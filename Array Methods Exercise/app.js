var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];
// Remove the last item from vegetable array
vegetables.pop()
// Remove the first item from the fruit array
fruit.shift()
// Find the index of "orange"
var orangeIndex = fruit.indexOf("orange")
// Add that 
fruit.push(1)
// Use the length property to find length of veggis
const va = vegetables.length
// Add that number to the veggies array
vegetables.push(3)

/* 7. Put the two arrays together into one array. Fruit first. Call the new Array "food".*/
const food = fruit.concat(vegetables)


/* 8. Remove 2 elements from your new array starting at index 4 with one method.*/
food.splice(4, 2)


//9. Reverse your array.
 food.reverse();
 

// 10. Turn the array into a string and return it.

const newFood = food.toString();
console.log(newFood)



 