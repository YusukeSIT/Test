let box_element = document.getElementById('moving');
let new_element = document.createElement('a-plane');
new_element.setAttribute('color', 'yellow');
new_element.setAttribute('opacity', '0.5');
box_element.after(new_element);

new_element.setAttribute('position', '0 0 -2');
new_element.setAttribute('scale', '0.5 1 1');


let count = 0;
let touchControls = false;

let center = document.querySelector('h1');
let stopButton = document.getElementById('b1');
let changeTCButton = document.getElementById('b2');
let camera = document.querySelector('[camera]');

function clicked() {
	if(count%2 == 0) {
		let box_pos = box_element.getAttribute('position');
		let dist = Math.abs(box_pos.x);
		box_element.setAttribute('animation', {'enabled': 'false'});
		
		if (dist < 0.2) {
			center.innerHTML = "NICE!";
		}
		else {
			center.innerHTML = "YOU ARE AN IDIOT XD";
			document.getElementById('b1').setAttribute("value", "retry?");
		}
	}
	else {
		box_element.setAttribute('animation', {'enabled': 'true'});
		document.getElementById('b1').setAttribute("value", "stop!");
		center.innerHTML = "";
	}
	count = count + 1;
}

function changeTouchControls() {
	if(!touchControls) {
		changeTCButton.setAttribute('value', 'Touch controls is enabled!');
		camera.setAttribute('look-controls', {'touchEnabled': 'true','mouseEnabled': 'true'});
		touchControls = true;
	}
	else {
		changeTCButton.setAttribute('value', 'Touch controls is disabled!');
		camera.setAttribute('look-controls', {'touchEnabled': 'false','mouseEnabled': 'false'});
		touchControls = false;
	}
}