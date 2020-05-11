const colors = [
	{ name: 'Maroon' , value: '#800000' },
	{ name: 'Blue', value: '#000ff4' },
	{ name: 'Green', value: '#008000' },
];

document.getElementById('add').addEventListener("click", function (e) {
	const subItem = createSubItem(e);
	document.getElementById('list').appendChild(subItem);
});

function createDropDown() {
	const dropDown = document.createElement('select');
	for (let i = 0; i < colors.length; i++) {
		const option = document.createElement('option');
		option.innerHTML = colors[i].name;
		option.value = colors[i].value;
		dropDown.append(option);
	}
	dropDown.addEventListener('change', function(e) {
		e.target.parentNode.style.backgroundColor = e.target.value;
	});
	return dropDown;
}

function createSubItem(e) {
	const subItem = document.createElement('div');
	let subItemValue = document.getElementById('input').value;
	subItem.textContent = subItemValue + ' ';
	const dropDown = createDropDown();
	subItem.appendChild(dropDown);
	subItem.setAttribute('class', 'subItem');
	return subItem;
}

