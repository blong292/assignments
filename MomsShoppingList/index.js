//Grab the variables for the form and for the list
const form = document.addItem
const list = document.getElementById('list')
// Establish a variable to store all of the list items (Array)
const shoppingList = []

//const form = document.getElementById('add-todo')
const btn = form.addButton

form.addEventListener('submit', function(e){
	e.preventDefault()
	const newItem = form.title.value
	shoppingList.push(newItem)
	removeItems()
	for(let i = 0; i < shoppingList.length; i++){
		displayShoppingItem(shoppingList[i])
	}
})

//Create function that displays the shoopingList on the DOM
function displayShoppingItem (item) {
	//The Item is a string
	//Create Phase
	const deleteButton = document.createElement('button')
	const shoppingItem = document.createElement("li")
	//Create your inputs and save button

	//Edit Phase
	shoppingItem.textContent = item
	deleteButton.textContent = 'X'
	deleteButton.addEventListener('click', function (e){
		list.removeChild(shoppingItem)
	})
	//Add text content to your button
	//Add a click event to your button
			//remove items function
			//add a for loop
			//If the updated item matches the current item in the shopping list
			// Then call displaySItem on the new item
			// Otherwise pass in the original item into displaySItem function

	//Append Phase
	list.appendChild(shoppingItem)
	shoppingItem.appendChild(deleteButton)
}

function removeItems (){
	for(let i = 0; i < list.childNodes.length; i++){
		//Remove Child
		list.removeChild(list.childNodes[0])
	}
}

