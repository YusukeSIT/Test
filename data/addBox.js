let count = 0;

let box_element = document.getElementById('moving');
let new_element = document.createElement('a-plane');
new_element.setAttribute('position', '0 0 -2');
new_element.setAttribute('scale', '0.5 1 1');
new_element.setAttribute('color', 'yellow');
new_element.setAttribute('opacity', '0.5');
box_element.after(new_element);

function clicked() {
	let center = document.querySelector('h1');
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