// Blue when the mouse hovers over the square
// Red when the mouse button is held down over the square
// Yellow when the mouse button is let go over the square
// Green when the mouse is double clicked in the square
// Orange when the mouse scroll is used somewhere in the window (not just over the square).
const beat = document.getElementById('beat2');
console.log(beat);

beat.addEventListener('mousedown', handleMouse);
beat.addEventListener('mouseover',handleMouse);
beat.addEventListener('mouseup', handleMouse);
document.addEventListener('wheel', handleEvent);
beat.addEventListener('dblclick', handleEvent);

function handleMouse(e) {
	if (e.type == 'mouseover') {
		beat.style.backgroundColor = 'blue';
	}

	if (e.type == 'mousedown') {
		beat.style.backgroundColor = 'red';
	}
	if (e.type == 'mouseup') {
		beat.style.backgroundColor = 'yellow';
	}
}

function handleEvent(e) {
	if (e.type == 'dblclick') {
		beat.style.backgroundColor = 'green';
	}
	if (e.type == 'wheel') {
		beat.style.backgroundColor = 'orange';
	}
}
